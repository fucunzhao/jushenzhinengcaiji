const accountState = {
  token: localStorage.getItem("authToken") || "",
  user: null,
  users: [],
  assignments: [],
  taskClaims: [],
  libraries: {},
  events: [],
  pollTimer: null,
  selectedTaskId: "",
};

const ROLE_LABELS = {
  owner: "企业负责人",
  manager: "项目经理",
  trainer: "培训师",
  collector: "采集员",
};

const STATUS_LABELS = {
  assigned: "已分配",
  working: "作业中",
  completed: "已完成",
};

function formFieldSelector() {
  return 'input:not([type="file"]):not([type="password"]), select, textarea';
}

function draftKeyForField(field) {
  if (!field) return "";
  if (field.id) return `id:${field.id}`;
  const requestRow = field.closest(".formal-request-row");
  if (requestRow) {
    const rowIndex = Array.from(requestRow.parentElement?.children || []).indexOf(requestRow);
    const className = Array.from(field.classList).find((item) => item.startsWith("request-")) || field.tagName.toLowerCase();
    return `request:${rowIndex}:${className}`;
  }
  const completeGrid = field.closest(".complete-grid");
  if (completeGrid) {
    const fieldIndex = Array.from(completeGrid.querySelectorAll(formFieldSelector())).indexOf(field);
    return `complete:${fieldIndex}`;
  }
  return "";
}

function captureAccountFormDraft() {
  const panel = document.querySelector("#accountPanel");
  if (!panel || !accountState.user) return null;
  const active = document.activeElement;
  const activeKey = panel.contains(active) ? draftKeyForField(active) : "";
  const values = {};
  panel.querySelectorAll(formFieldSelector()).forEach((field) => {
    if (field.readOnly || field.disabled) return;
    const key = draftKeyForField(field);
    if (!key) return;
    values[key] = field.type === "checkbox" ? field.checked : field.value;
  });
  return {
    values,
    activeKey,
    selectionStart: typeof active?.selectionStart === "number" ? active.selectionStart : null,
    selectionEnd: typeof active?.selectionEnd === "number" ? active.selectionEnd : null,
  };
}

function restoreAccountFormDraft(draft) {
  if (!draft?.values) return;
  const panel = document.querySelector("#accountPanel");
  if (!panel) return;
  let activeTarget = null;
  panel.querySelectorAll(formFieldSelector()).forEach((field) => {
    if (field.readOnly || field.disabled) return;
    const key = draftKeyForField(field);
    if (!key || !Object.hasOwn(draft.values, key)) return;
    if (field.type === "checkbox") field.checked = Boolean(draft.values[key]);
    else field.value = draft.values[key];
    if (key === draft.activeKey) activeTarget = field;
  });
  if (activeTarget) {
    activeTarget.focus({ preventScroll: true });
    if (draft.selectionStart != null && typeof activeTarget.setSelectionRange === "function") {
      activeTarget.setSelectionRange(draft.selectionStart, draft.selectionEnd ?? draft.selectionStart);
    }
  }
}

function api(path, options = {}) {
  return fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(accountState.token ? { Authorization: `Bearer ${accountState.token}` } : {}),
      ...(options.headers || {}),
    },
  }).then(async (res) => {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "请求失败");
    return data;
  });
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function taskById(id) {
  return (window.TASK_LIBRARY?.tasks || []).find((task) => String(task.id) === String(id));
}

function taskStepById(id) {
  return (window.TASK_STEPS?.items || []).find((item) => String(item.id) === String(id));
}

function trainerUsers() {
  return accountState.users.filter((user) => user.role === "trainer");
}

function collectorUsers(trainerId = "") {
  return accountState.users.filter((user) => (
    user.role === "collector" && (!trainerId || user.trainerId === trainerId)
  ));
}

function allCollectorUsers() {
  return accountState.users.filter((user) => user.role === "collector");
}

function userName(id) {
  const user = accountState.users.find((item) => item.id === id);
  return user?.realName || user?.username || "";
}

function collectorOptionLabel(user) {
  const trainer = user.trainerId ? userName(user.trainerId) : "未绑定培训师";
  return `${user.realName || user.username} / ${user.phone || "无手机号"} / ${trainer}`;
}

function locationName(id) {
  return (window.LOCATION_LIBRARY?.locations || []).find((item) => item.id === id)?.name || "";
}

function roomOptions(locationId, selectedRoom = "") {
  const location = (window.LOCATION_LIBRARY?.locations || []).find((item) => item.id === locationId);
  return (location?.rooms || []).map((room) => (
    `<option value="${escapeHtml(room)}" ${room === selectedRoom ? "selected" : ""}>${escapeHtml(room)}</option>`
  )).join("");
}

function locationOptions(selectedId = "") {
  return (window.LOCATION_LIBRARY?.locations || []).map((location) => (
    `<option value="${escapeHtml(location.id)}" ${location.id === selectedId ? "selected" : ""}>${escapeHtml(location.name)}</option>`
  )).join("");
}

function firstLocationId() {
  return window.LOCATION_LIBRARY?.locations?.[0]?.id || "";
}

function normalizeStatus(status) {
  if (status === "已完成" || status === "宸插畬鎴?") return "completed";
  if (status === "作业中" || status === "浣滀笟涓?") return "working";
  return "assigned";
}

function statusText(status) {
  return STATUS_LABELS[normalizeStatus(status)] || status || "已分配";
}

function countByStatus(assignments) {
  return assignments.reduce((acc, item) => {
    acc[normalizeStatus(item.status)] += 1;
    return acc;
  }, { assigned: 0, working: 0, completed: 0 });
}

function selectedDate() {
  return document.querySelector("#boardDate")?.value || todayString();
}

function compactDate(dateText) {
  const date = String(dateText || todayString());
  const match = date.match(/^\d{4}-(\d{2})-(\d{2})$/);
  return match ? `${match[1]}${match[2]}` : date.replace(/\D/g, "").slice(-4);
}

function requestedTaskName(baseName, suffix) {
  const cleanName = String(baseName || "").trim();
  const cleanSuffix = String(suffix || "").trim();
  if (!cleanSuffix) return cleanName;
  if (cleanName.includes("自定义条件")) return cleanName.replace("自定义条件", `_${cleanSuffix}`);
  if (cleanName.includes("_free_G")) return cleanName.replace("_free_G", `_${cleanSuffix}_free_G`);
  return `${cleanName}_${cleanSuffix}`;
}

function formalCartStorageKey() {
  return `formalRequestCart:${accountState.user?.id || "guest"}`;
}

function formalCartRows() {
  try {
    const rows = JSON.parse(localStorage.getItem(formalCartStorageKey()) || "[]");
    return Array.isArray(rows) ? rows.filter((row) => row && typeof row === "object" && row.taskId && row.taskName) : [];
  } catch {
    return [];
  }
}

function saveFormalCartRows(rows) {
  localStorage.setItem(formalCartStorageKey(), JSON.stringify(rows));
}

function addRowsToFormalCart(rows) {
  const incoming = (rows || []).map((row) => ({
    ...row,
    uid: row.uid || `${row.taskId}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  }));
  if (!incoming.length) throw new Error("请先生成申请行");
  saveFormalCartRows([...formalCartRows(), ...incoming]);
  renderAccountPanel();
}

function selectTaskForFormalRequest(taskId, render = true) {
  const id = String(taskId || "");
  if (!id || !taskById(id)) return;
  accountState.selectedTaskId = id;
  window.__selectedTaskIdForAccount = id;
  if (render && accountState.user?.role === "trainer") renderAccountPanel();
}

function removeRowFromFormalCart(uid) {
  saveFormalCartRows(formalCartRows().filter((row) => row.uid !== String(uid)));
  renderAccountPanel();
}

function clearFormalCart() {
  saveFormalCartRows([]);
  renderAccountPanel();
}

function allRoomChoices() {
  return (window.LOCATION_LIBRARY?.locations || []).flatMap((location) => (
    location.rooms.map((room) => ({
      locationId: location.id,
      locationName: location.name,
      room,
      label: `${location.name} / ${room}`,
    }))
  ));
}

function roomMatchesTask(task, room) {
  const text = `${task?.scene || ""} ${task?.name || ""}`;
  if (!text.trim() || text.includes("通用")) return true;
  if (text.includes("厨房")) return room === "厨房";
  if (text.includes("餐厅")) return room === "餐厅";
  if (text.includes("客厅")) return room === "客厅";
  if (text.includes("卧室")) return room.startsWith("卧室");
  if (text.includes("厕所") || text.includes("卫生间")) return room.includes("卫生间") || room.includes("厕所");
  return true;
}

function suggestedRoomsForTask(task, count = 3) {
  const rooms = allRoomChoices();
  const matched = rooms.filter((item) => roomMatchesTask(task, item.room));
  const source = matched.length ? matched : rooms;
  return Array.from({ length: count }, (_, index) => source[index % Math.max(source.length, 1)]).filter(Boolean);
}

function assignmentsForDate(date = selectedDate()) {
  return accountState.assignments.filter((item) => item.date === date);
}

function claimForTask(taskId, date = selectedDate()) {
  return accountState.taskClaims.find((item) => (
    item.date === date
    && String(item.taskId) === String(taskId)
    && item.status !== "cancelled"
  ));
}

function taskLockedByOther(taskId, date = selectedDate()) {
  const claim = claimForTask(taskId, date);
  return Boolean(claim && claim.trainerId !== accountState.user?.id);
}

function publishClaimsForTaskPool() {
  window.TASK_CLAIMS_BY_DATE = accountState.taskClaims;
  window.ACCOUNT_CURRENT_USER = accountState.user;
  window.dispatchEvent(new CustomEvent("task-claims-updated"));
}

function applyLibraryOverrides(libraries = {}) {
  if (libraries.taskLibrary && window.TASK_LIBRARY) Object.assign(window.TASK_LIBRARY, libraries.taskLibrary);
  if (libraries.propInventory && window.PROP_INVENTORY) Object.assign(window.PROP_INVENTORY, libraries.propInventory);
  if (libraries.locationLibrary && window.LOCATION_LIBRARY) Object.assign(window.LOCATION_LIBRARY, libraries.locationLibrary);
  if (libraries.deviceLibrary && window.DEVICE_LIBRARY) {
    const devices = Array.isArray(libraries.deviceLibrary.devices) ? libraries.deviceLibrary.devices : [];
    if (devices.length) Object.assign(window.DEVICE_LIBRARY, libraries.deviceLibrary);
  }
  if (window.PROP_INVENTORY?.items) {
    localStorage.setItem("propInventory", JSON.stringify(window.PROP_INVENTORY.items));
  }
  window.dispatchEvent(new CustomEvent("libraries-updated"));
}

function parseProps(text) {
  return String(text || "")
    .split(/[\n、，,；;\/]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 40);
}

function propsForTask(task) {
  if (Array.isArray(task?.props)) return task.props.flatMap(parseProps);
  return parseProps(task?.props || task?.propText || task?.tools || "");
}

function propInventoryNames() {
  return new Set((window.PROP_INVENTORY?.items || []).map((item) => String(item.name || item).trim()));
}

function propChecklistHtml(task) {
  const props = propsForTask(task);
  if (!props.length) return `<p class="mini">任务库中未识别到明确道具，请培训师人工复核任务说明。</p>`;
  const owned = propInventoryNames();
  return `
    <div class="prop-check-list">
      ${props.map((name) => {
        const ok = owned.has(name);
        return `<span class="prop-pill ${ok ? "ok" : "miss"}">${escapeHtml(name)} · ${ok ? "已有" : "需添置"}</span>`;
      }).join("")}
    </div>
  `;
}

function stepsHtml(taskId) {
  const item = taskStepById(taskId);
  if (!item) return `<p class="mini">暂无拆解步骤，按任务原文和培训规则执行。</p>`;
  const groups = [
    ["必做", item.mandatorySteps || []],
    ["可选", item.optionalSteps || []],
    ["延时", item.extensionSteps || []],
  ].filter(([, steps]) => steps.length);
  if (!groups.length) return `<p class="mini">暂无拆解步骤，按任务原文和培训规则执行。</p>`;
  return `
    <ol class="step-list">
      ${groups.flatMap(([label, steps]) => steps.map((step) => (
        `<li><b>${escapeHtml(label)}</b>${escapeHtml(step.content || step.text || "")}</li>`
      ))).slice(0, 12).join("")}
    </ol>
    <p class="mini">预计单次时长：${escapeHtml(item.duration || item.estimatedDuration || "按规则控制")}</p>
  `;
}

function markSelectedTask(taskId) {
  accountState.selectedTaskId = String(taskId || "");
  window.__selectedTaskIdForAccount = accountState.selectedTaskId;
  renderAccountPanel();
}

function initAccountSystem() {
  const shell = document.createElement("section");
  shell.id = "accountPanel";
  shell.className = "account-panel";
  document.body.prepend(shell);

  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-task-id]");
    if (card?.dataset?.taskId) markSelectedTask(card.dataset.taskId);
  });
  window.addEventListener("formal-cart-add", (event) => {
    if (accountState.user?.role !== "trainer") return;
    selectTaskForFormalRequest(event.detail?.taskId);
  });

  renderAccountPanel();
  if (accountState.token) {
    loadAccountData().catch(() => logout(false));
  }
}

async function loadAccountData() {
  const [me, users, assignments, claims, libraries] = await Promise.all([
    api("/api/me"),
    api("/api/users"),
    api("/api/assignments"),
    api("/api/task-claims"),
    api("/api/libraries"),
  ]);
  accountState.user = me.user;
  accountState.users = users.users || [];
  accountState.assignments = assignments.assignments || [];
  accountState.taskClaims = claims.claims || [];
  accountState.libraries = libraries.libraries || {};
  applyLibraryOverrides(accountState.libraries);
  publishClaimsForTaskPool();
  renderAccountPanel();
  startPolling();
}

function startPolling() {
  if (accountState.pollTimer) return;
  accountState.pollTimer = setInterval(() => {
    if (!accountState.token) return;
    Promise.all([api("/api/users"), api("/api/assignments"), api("/api/task-claims"), api("/api/libraries")])
      .then(([users, assignments, claims, libraries]) => {
        accountState.users = users.users || [];
        accountState.assignments = assignments.assignments || [];
        accountState.taskClaims = claims.claims || [];
        accountState.libraries = libraries.libraries || {};
        applyLibraryOverrides(accountState.libraries);
        publishClaimsForTaskPool();
        if (!accountPanelHasActiveFormField()) renderAccountPanel();
      })
      .catch(() => {});
  }, 15000);
}

function accountPanelHasActiveFormField() {
  const panel = document.querySelector("#accountPanel");
  const active = document.activeElement;
  return Boolean(
    panel &&
    active &&
    panel.contains(active) &&
    active.matches?.("input, select, textarea, button")
  );
}

function logout(render = true) {
  accountState.token = "";
  accountState.user = null;
  accountState.users = [];
  accountState.assignments = [];
  accountState.taskClaims = [];
  publishClaimsForTaskPool();
  localStorage.removeItem("authToken");
  if (accountState.pollTimer) clearInterval(accountState.pollTimer);
  accountState.pollTimer = null;
  if (render) renderAccountPanel();
}

function renderAccountPanel() {
  const shell = document.querySelector("#accountPanel");
  if (!shell) return;
  const draft = captureAccountFormDraft();
  if (!accountState.user) {
    shell.innerHTML = loginHtml();
    bindAuthEvents();
    return;
  }

  const date = selectedDate();
  const title = ROLE_LABELS[accountState.user.role] || accountState.user.role;
  shell.innerHTML = `
    <div class="account-card">
      <div class="account-head">
        <div>
          <p class="eyebrow">${title}</p>
          <h2>${escapeHtml(accountState.user.realName || accountState.user.username)}</h2>
          <p class="mini">${escapeHtml(accountState.user.phone || "")}</p>
        </div>
        <div class="top-actions">
          <label class="inline-date">看板日期<input id="boardDate" type="date" value="${escapeHtml(date)}" /></label>
          <button class="text-button" id="refreshBoard">刷新</button>
          <button class="text-button" id="logoutBtn">退出</button>
        </div>
      </div>
      ${roleWorkspaceHtml(accountState.user.role, date)}
    </div>
  `;
  bindWorkspaceEvents();
  setupRoleSectionFolding();
  restoreAccountFormDraft(draft);
}

function loginHtml() {
  return `
    <div class="account-card">
      <div>
        <p class="eyebrow">账号系统</p>
        <h2>员工登录</h2>
        <p class="mini">账号由企业负责人统一开通并分发，员工不开放自助注册。</p>
      </div>
      <div class="account-grid">
        <input id="loginAccount" placeholder="账号或手机号" />
        <input id="loginPassword" type="password" placeholder="密码" />
        <button class="primary-button" id="loginBtn">登录</button>
      </div>
    </div>
  `;
}

function roleWorkspaceHtml(role, date) {
  if (role === "owner") return ownerWorkspaceHtml(date);
  if (role === "manager") return managerWorkspaceHtml(date);
  if (role === "trainer") return trainerWorkspaceHtml(date);
  return collectorWorkspaceHtml(date);
}

function ownerWorkspaceHtml(date) {
  const day = assignmentsForDate(date);
  const status = countByStatus(day);
  const usersByRole = ["owner", "manager", "trainer", "collector"].map((role) => (
    `${ROLE_LABELS[role]} ${accountState.users.filter((user) => user.role === role).length}`
  )).join(" / ");
  const tasks = window.TASK_LIBRARY?.tasks || [];
  const doneTasks = tasks.filter((task) => Number(task.doneCount || 0) > 0).length;
  const propCount = window.PROP_INVENTORY?.items?.length || 0;
  const deviceCount = window.DEVICE_LIBRARY?.devices?.length || 0;
  const roomCount = (window.LOCATION_LIBRARY?.locations || []).reduce((sum, item) => sum + item.rooms.length, 0);

  return `
    <div class="dashboard-grid">
      ${metricCard("今日全员作业", `已分配 ${status.assigned} / 作业中 ${status.working} / 完成 ${status.completed}`, "追踪所有设备、人员、任务状态")}
      ${metricCard("任务库", `${tasks.length} 个任务，${doneTasks} 个已做过`, "负责人关注任务库更新和重复采集风险")}
      ${metricCard("道具库", `${propCount} 项道具`, "用于自动比对任务所需道具")}
      ${metricCard("人员库与场地", `${accountState.users.length} 名员工，${roomCount} 个房间，${deviceCount} 台设备`, usersByRole)}
    </div>
    ${accountCreationHtml()}
    ${libraryMaintenanceHtml()}
    ${libraryStatusHtml()}
    ${assignmentTableHtml("全项目任务进度", day, { showActions: false })}
  `;
}

function managerWorkspaceHtml(date) {
  const day = assignmentsForDate(date);
  return `
    <div class="dashboard-grid">
      ${metricCard("日报填写", "汇总今日设备、人员、有效时长、完成条数", "项目经理负责对外日报和内部日报口径")}
      ${metricCard("培训师截止检查", trainerDeadlineSummary(day), "检查培训师是否按规定时间完成领取、分配、跟进")}
      ${metricCard("异常任务", `${day.filter((item) => normalizeStatus(item.status) !== "completed").length} 条待处理`, "重点盯未开始、作业中、未全部完成")}
    </div>
    ${dailyReportHtml(day, date)}
    ${trainerDeadlineHtml(day)}
    ${libraryMaintenanceHtml()}
    ${accountCreationHtml()}
    ${assignmentTableHtml("今日任务进度表", day, { showActions: false })}
  `;
}

function trainerWorkspaceHtml(date) {
  const myCollectors = collectorUsers(accountState.user.id);
  const allCollectors = allCollectorUsers();
  const mine = accountState.assignments.filter((item) => item.trainerId === accountState.user.id && item.date === date);
  return `
    <div class="dashboard-grid">
      ${metricCard("我的采集员", `${myCollectors.length} 人`, "只显示自己负责管理的采集员")}
      ${metricCard("可下发采集员", `${allCollectors.length} 人`, "下发任务时可选择所有已注册采集员")}
      ${metricCard("今日分配", `${mine.length} 条`, "培训师负责查找任务并分配到人")}
      ${metricCard("今日进度", progressText(mine), "实时追踪采集员开始、完成、未完成情况")}
    </div>
    ${assignmentFormHtml(allCollectors)}
    ${formalRequestHtml(allCollectors, date)}
    ${trainerPropsBoardHtml(mine)}
    ${assignmentTableHtml("我的采集员进度", mine, { showActions: false })}
  `;
}

function collectorWorkspaceHtml(date) {
  const mine = accountState.assignments.filter((item) => item.collectorId === accountState.user.id && item.date === date);
  return `
    <div class="dashboard-grid">
      ${metricCard("今日任务", `${mine.length} 条`, "按日期接收培训师分配任务")}
      ${metricCard("今日作业", progressText(mine), "到岗后选择设备并开始作业")}
      ${metricCard("道具准备", missingPropsText(mine), "提前准备任务所需道具")}
    </div>
    ${collectorTaskCardsHtml(mine)}
  `;
}

function metricCard(title, value, note) {
  return `
    <div class="dash-card">
      <p class="eyebrow">${escapeHtml(title)}</p>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(note || "")}</span>
    </div>
  `;
}

function sectionDefaultState(role, title, index) {
  const highUse = {
    owner: ["全项目任务进度", "账号开通模板"],
    manager: ["日报填写", "培训师截止检查", "今日任务进度表"],
    trainer: ["查找并分配任务", "正式任务登记", "今日道具准备清单", "我的采集员进度"],
    collector: ["我的任务"],
  };
  const supportUse = {
    owner: ["库更新状态", "基础库维护中心"],
    manager: ["账号开通模板", "基础库维护中心"],
    trainer: [],
    collector: [],
  };
  const high = highUse[role] || [];
  const support = supportUse[role] || [];
  if (high.some((name) => title.includes(name))) {
    return { open: true, level: "常用", order: index };
  }
  if (support.some((name) => title.includes(name))) {
    return { open: false, level: "管理", order: index + 20 };
  }
  return { open: index < 1, level: "更多", order: index + 40 };
}

function setupRoleSectionFolding() {
  const panel = document.querySelector("#accountPanel");
  if (!panel || !accountState.user) return;
  const sections = Array.from(panel.querySelectorAll(".board-section:not(.section-collapsible)"));
  if (!sections.length) return;

  const nav = document.createElement("div");
  nav.className = "role-module-nav";
  nav.innerHTML = `<span>快速切换</span>`;
  panel.querySelector(".dashboard-grid")?.after(nav);

  const addNavButton = (title, onClick, active = false) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = active ? "active" : "";
    button.textContent = title;
    button.addEventListener("click", () => {
      onClick();
      nav.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
    nav.appendChild(button);
    return button;
  };

  addNavButton("顶部", () => {
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }, true);

  const taskEntry = document.querySelector(".task-entry-card");
  if (taskEntry) {
    addNavButton("任务库", () => {
      taskEntry.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  sections.forEach((section, index) => {
    const head = section.querySelector(".section-head");
    const title = head?.querySelector("h3")?.textContent?.trim() || `模块 ${index + 1}`;
    const note = head?.querySelector("span")?.textContent?.trim() || "";
    const config = sectionDefaultState(accountState.user.role, title, index);
    const saved = localStorage.getItem(`sectionOpen:${accountState.user.role}:${title}`);

    const details = document.createElement("details");
    details.className = `board-section section-collapsible level-${config.level}`;
    details.dataset.title = title;
    details.open = saved == null ? config.open : saved === "1";

    const summary = document.createElement("summary");
    summary.className = "section-summary";
    summary.innerHTML = `
      <span class="section-left"><b>${escapeHtml(title)}</b><em>${escapeHtml(config.level)}</em></span>
      <span class="section-note">${escapeHtml(note)}</span>
    `;

    const body = document.createElement("div");
    body.className = "section-body";
    Array.from(section.children).forEach((child) => {
      if (child !== head) body.appendChild(child);
    });
    details.append(summary, body);
    section.replaceWith(details);

    details.addEventListener("toggle", () => {
      localStorage.setItem(`sectionOpen:${accountState.user.role}:${title}`, details.open ? "1" : "0");
    });

    addNavButton(title, () => {
      details.open = true;
      details.scrollIntoView({ behavior: "smooth", block: "start" });
    }, false);
  });
}

function progressText(assignments) {
  const count = countByStatus(assignments);
  return `已分配 ${count.assigned} / 作业中 ${count.working} / 完成 ${count.completed}`;
}

function trainerDeadlineSummary(assignments) {
  const trainerCount = trainerUsers().length;
  const active = new Set(assignments.map((item) => item.trainerId).filter(Boolean)).size;
  return `${active}/${trainerCount} 名培训师已有分配`;
}

function missingPropsText(assignments) {
  const owned = propInventoryNames();
  const missing = new Set();
  assignments.forEach((assignment) => {
    propsForTask(taskById(assignment.taskId)).forEach((name) => {
      if (!owned.has(name)) missing.add(name);
    });
  });
  return missing.size ? `${missing.size} 项需添置/复核` : "无明显缺口";
}

function libraryStatusHtml() {
  const locations = window.LOCATION_LIBRARY?.locations || [];
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>库更新状态</h3>
        <span>负责人用于检查任务库、道具库、人员库、场地库是否齐全</span>
      </div>
      <div class="status-list">
        <div><b>任务库</b><span>来源：柳州任务表；已做过任务已在任务卡片标注并支持筛选。</span></div>
        <div><b>道具库</b><span>来源：现有道具清单；选任务后自动比对已有/需添置。</span></div>
        <div><b>人员库</b><span>由负责人或项目经理统一开通账号，采集员必须绑定培训师。</span></div>
        <div><b>场地库</b><span>${locations.map((item) => `${item.name}：${item.rooms.join("、")}`).join("；")}</span></div>
      </div>
    </div>
  `;
}

function libraryMaintenanceHtml() {
  if (!["owner", "manager"].includes(accountState.user.role)) return "";
  const tasks = window.TASK_LIBRARY?.tasks?.length || 0;
  const props = window.PROP_INVENTORY?.items?.length || 0;
  const locations = window.LOCATION_LIBRARY?.locations?.length || 0;
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>基础库维护中心</h3>
        <span>下载当前人员库、任务库、道具库、场地库，修改后上传更新后台数据库</span>
      </div>
      <div class="library-maintenance">
        <div class="status-list">
          <div><b>人员库</b><span>${accountState.users.length} 人。新增人员需填写账号、姓名、手机号、角色；新账号默认密码可填在 initialPassword。</span></div>
          <div><b>任务库</b><span>${tasks} 条。任务编号 id 不变则更新，新增 id 则追加。</span></div>
          <div><b>道具库</b><span>${props} 项。按 category 分类，name 为道具名。</span></div>
          <div><b>场地库</b><span>${locations} 个场地。rooms 可用顿号或逗号分隔多个房间。</span></div>
        </div>
        <div class="library-actions">
          <button class="primary-button" id="downloadLibraries">下载当前库 Excel</button>
          <label class="upload-button">上传修改后的 Excel<input id="uploadLibraries" type="file" accept=".xls,.html,.htm,.csv,.txt" /></label>
          <span class="mini">建议用下载的模板修改后直接上传；如 Excel 提示格式不匹配，选择“是”继续打开即可。</span>
        </div>
        <div class="request-warning">
          <b>上传前检查</b>
          <span>不要删除表头；采集员行必须填写负责培训师姓名或手机号；任务库里的 id、name、scene、propText 建议保留。</span>
        </div>
      </div>
    </div>
  `;
}

function accountCreationHtml() {
  if (!["owner", "manager"].includes(accountState.user.role)) return "";
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>账号开通模板</h3>
        <span>账号统一通过模板下载、填写、上传开通；员工不允许自行注册</span>
      </div>
      <div class="library-actions">
        <button class="primary-button" id="downloadAccountTemplate">下载账号开通模板</button>
        <label class="upload-button">上传账号开通模板<input id="uploadAccountTemplate" type="file" accept=".xls,.xlsx,.html,.htm" /></label>
        <span class="mini">支持 .xlsx / .xls。模板字段：username、realName、phone、role、trainerName、trainerPhone、status、initialPassword。</span>
      </div>
      <div class="request-warning">
        <b>开通规则</b>
        <span>role 只能填 owner、manager、trainer、collector；采集员必须填写负责培训师姓名或手机号；手机号或账号已存在时会更新原账号。</span>
      </div>
      <div class="user-list">
        ${accountState.users.map((user) => (
          `<span>${escapeHtml(user.realName)} · ${escapeHtml(ROLE_LABELS[user.role] || user.role)} · ${escapeHtml(user.phone)}${user.trainerId ? ` · 培训师：${escapeHtml(userName(user.trainerId))}` : ""}</span>`
        )).join("")}
      </div>
    </div>
  `;
}

function dailyReportHtml(assignments, date) {
  const status = countByStatus(assignments);
  const hours = assignments.reduce((sum, item) => sum + Number(item.effectiveHours || 0), 0);
  const deviceIds = new Set(assignments.map((item) => item.deviceId).filter(Boolean));
  const collectorIds = new Set(assignments.map((item) => item.collectorId).filter(Boolean));
  const draftKey = `dailyReport:${date}`;
  const draft = localStorage.getItem(draftKey) || "";
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>日报填写</h3>
        <span>可直接复制到在线表格或飞书日报</span>
      </div>
      <div class="report-grid">
        <label>日报日期<input id="reportDate" type="date" value="${escapeHtml(date)}" /></label>
        <label>设备数<input readonly value="${deviceIds.size}" /></label>
        <label>采集员数<input readonly value="${collectorIds.size}" /></label>
        <label>有效时长<input readonly value="${hours.toFixed(2)} 小时" /></label>
        <label>完成情况<input readonly value="已分配 ${status.assigned} / 作业中 ${status.working} / 完成 ${status.completed}" /></label>
      </div>
      <textarea id="dailyDraft" rows="4" placeholder="补充异常、未完成原因、明日需求">${escapeHtml(draft)}</textarea>
      <div class="top-actions">
        <button class="primary-button" id="saveDailyDraft">保存日报草稿</button>
        <button class="text-button" id="copyDailyReport">复制日报摘要</button>
      </div>
    </div>
  `;
}

function trainerDeadlineHtml(assignments) {
  const rows = trainerUsers().map((trainer) => {
    const mine = assignments.filter((item) => item.trainerId === trainer.id);
    const status = countByStatus(mine);
    const hasAssigned = mine.length > 0;
    const hasUnfinished = status.assigned + status.working > 0;
    return `
      <div class="deadline-row ${hasAssigned && !hasUnfinished ? "ok" : "warn"}">
        <strong>${escapeHtml(trainer.realName)}</strong>
        <span>分配 ${mine.length} 条；${progressText(mine)}</span>
        <b>${hasAssigned ? (hasUnfinished ? "需继续跟进" : "今日已闭环") : "未见分配记录"}</b>
      </div>
    `;
  }).join("");
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>培训师截止检查</h3>
        <span>建议每日16:00前完成次日任务领取与分配，日报前完成进度复核</span>
      </div>
      <div class="deadline-list">${rows || `<p class="mini">暂无培训师账号，请先在人员库开通。</p>`}</div>
    </div>
  `;
}

function assignmentFormHtml(collectors) {
  const task = taskById(accountState.selectedTaskId || window.__selectedTaskIdForAccount);
  const locations = window.LOCATION_LIBRARY?.locations || [];
  const devices = window.DEVICE_LIBRARY?.devices || [];
  const firstLocation = firstLocationId();
  const claim = task ? claimForTask(task.id) : null;
  const lockedByOther = task ? taskLockedByOther(task.id) : false;
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>查找并分配任务</h3>
        <span>先在任务库点击任务卡片，再在这里分配给采集员</span>
      </div>
      <div class="selected-task-box">
        <b>${task ? escapeHtml(task.name) : "尚未选择任务"}</b>
        <span>${task ? `场景：${escapeHtml(task.scene || "")}；预计：${escapeHtml(task.estimatedDuration || task.duration || "按规则控制")}` : "请从下方任务库选择一条任务"}</span>
        ${claim ? `<strong class="claim-alert ${lockedByOther ? "blocked" : "mine"}">今日领取锁：${escapeHtml(claim.trainerName || userName(claim.trainerId) || "培训师")}${lockedByOther ? "已领取，本账号不可分配" : "已领取，可继续分配"}</strong>` : ""}
        ${task ? propChecklistHtml(task) : ""}
      </div>
      <div class="register-grid">
        <input id="assignDate" type="date" value="${todayString()}" />
        <select id="assignCollector">
          <option value="">选择采集员</option>
          ${collectors.map((user) => `<option value="${escapeHtml(user.id)}">${escapeHtml(collectorOptionLabel(user))}</option>`).join("")}
        </select>
        <select id="assignDevice">
          <option value="">设备可稍后由采集员到岗选择</option>
          ${devices.map((device) => `<option value="${escapeHtml(device.id)}">${escapeHtml(device.id)}</option>`).join("")}
        </select>
        <select id="assignLocation">
          ${locations.map((location) => `<option value="${escapeHtml(location.id)}">${escapeHtml(location.name)}</option>`).join("")}
        </select>
        <select id="assignRoom">${roomOptions(firstLocation)}</select>
        <input id="assignHours" type="number" min="0.1" step="0.1" value="1" placeholder="计划小时" />
        <button class="primary-button" id="assignTaskBtn" ${lockedByOther ? "disabled" : ""}>分配任务</button>
      </div>
    </div>
  `;
}

function formalRequestHtml(collectors, date) {
  const task = taskById(accountState.selectedTaskId || window.__selectedTaskIdForAccount);
  const cartRows = formalCartRows();
  const count = Number(localStorage.getItem("requestCount") || 3);
  const requestDate = localStorage.getItem("requestDate") || date || todayString();
  const suffixPrefix = localStorage.getItem("requestSuffixPrefix") || `柳州${compactDate(requestDate)}`;
  const lockedRows = cartRows.filter((row) => taskLockedByOther(row.taskId, row.date || requestDate));
  const collectorOptions = collectors.map((user) => (
    `<option value="${escapeHtml(user.id)}">${escapeHtml(collectorOptionLabel(user))}</option>`
  )).join("");

  return `
    <div class="board-section">
      <div class="section-head">
        <h3>正式任务登记 / 批量申请</h3>
        <span>培训师用于把选中的基础任务快速生成正式登记表行，并按后缀提醒采集员别领错</span>
      </div>
      <div class="selected-task-box">
        <b>${task ? escapeHtml(task.name) : "尚未选择基础任务"}</b>
        <span>${task ? "先生成申请行，确认采集员、场地、房间后，再加入申请车。" : "请先在任务库选择一条要申请的基础任务"}</span>
      </div>
      <div class="request-controls">
        <label>申请日期<input id="requestDate" type="date" value="${escapeHtml(requestDate)}" /></label>
        <label>命名标识<input id="requestSuffixPrefix" value="${escapeHtml(suffixPrefix)}" placeholder="柳州0720" /></label>
        <label>申请条数<input id="requestCount" type="number" min="1" max="12" step="1" value="${count}" /></label>
        <button class="primary-button" id="refreshRequestRows">生成申请行</button>
        <button class="text-button" id="addPreviewRowsToFormalCart">加入申请车</button>
        <button class="text-button" id="copyFormalRows" ${lockedRows.length || !cartRows.length ? "disabled" : ""}>复制正式登记表行</button>
        <button class="text-button" id="copyClaimNotice">复制领取提醒</button>
        <button class="text-button" id="clearFormalCart">清空购物车</button>
        <button class="primary-button" id="batchAssignRequests" ${lockedRows.length || !cartRows.length ? "disabled" : ""}>按申请车发布给采集员</button>
      </div>
      <div class="request-warning">
        <b>防领错规则</b>
        <span>申请车保存的是具体申请行。复制正式登记表、复制领取提醒、批量发布都以申请车为准。</span>
      </div>
      <h4>待加入申请行</h4>
      <div class="formal-request-table" id="formalRequestRows">
        ${requestRowsHtml(task ? [task] : [], count, suffixPrefix, requestDate, collectorOptions, 0)}
      </div>
      <h4>申请车：${cartRows.length} 行</h4>
      ${formalCartHtml(cartRows, requestDate)}
      ${lockedRows.length ? `<strong class="claim-alert blocked">申请车中存在今日已被其他培训师领取的任务，请移除后再复制或发布。</strong>` : ""}
    </div>
  `;
}

function formalCartHtml(rows, requestDate) {
  if (!rows.length) return `<p class="mini">申请车为空。请先生成申请行，再点击“加入申请车”。</p>`;
  return `
    <div class="formal-cart-list">
      ${rows.map((row, index) => {
        const claim = claimForTask(row.taskId, row.date || requestDate);
        const locked = taskLockedByOther(row.taskId, row.date || requestDate);
        return `
          <div class="formal-cart-item ${locked ? "locked" : ""}">
            <span><b>${index + 1}. ${escapeHtml(row.taskName)}</b><em>${escapeHtml(row.collectorName || "待分配")} · ${escapeHtml(row.locationName || "待定")} / ${escapeHtml(row.room || "待定")}${claim ? ` · ${locked ? "他人已领取" : "今日已领取"}` : ""}</em></span>
            <button class="mini-button" data-remove-formal-cart="${escapeHtml(row.uid)}">移除</button>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function requestRowsHtml(tasks, count, suffixPrefix, requestDate, collectorOptions, startIndex = 0) {
  const list = Array.isArray(tasks) ? tasks : (tasks ? [tasks] : []);
  if (!list.length) return `<p class="mini">请先把要申请的任务加入购物车。</p>`;
  let globalIndex = 0;
  return list.map((task) => {
    const rooms = suggestedRoomsForTask(task, count);
    return Array.from({ length: count }, (_, index) => {
      globalIndex += 1;
      const displayIndex = startIndex + globalIndex;
      const suffix = `${suffixPrefix}_${displayIndex}`;
      const room = rooms[index] || allRoomChoices()[(displayIndex - 1) % Math.max(allRoomChoices().length, 1)] || {};
    return `
      <div class="formal-request-row" data-request-index="${displayIndex - 1}" data-task-id="${escapeHtml(task.id)}">
        <div>
          <b>${escapeHtml(requestedTaskName(task.name, suffix))}</b>
          <span>正式表：日期 / 任务编号 / 任务名称 / 下发状态，其余字段先留空</span>
        </div>
        <input class="request-suffix" value="${escapeHtml(suffix)}" />
        <select class="request-collector">
          <option value="">选择采集员</option>
          ${collectorOptions}
        </select>
        <select class="request-location">
          ${locationOptions(room.locationId || firstLocationId())}
        </select>
        <select class="request-room">
          ${roomOptions(room.locationId || firstLocationId(), room.room || "")}
        </select>
      </div>
    `;
    }).join("");
  }).join("");
}

function trainerPropsBoardHtml(assignments) {
  if (!assignments.length) return "";
  const map = new Map();
  assignments.forEach((assignment) => {
    const task = taskById(assignment.taskId);
    propsForTask(task).forEach((name) => {
      map.set(name, (map.get(name) || 0) + 1);
    });
  });
  const owned = propInventoryNames();
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>今日道具准备清单</h3>
        <span>培训师可按采集员任务提前核对</span>
      </div>
      <div class="prop-check-list">
        ${Array.from(map.entries()).map(([name, count]) => (
          `<span class="prop-pill ${owned.has(name) ? "ok" : "miss"}">${escapeHtml(name)} x${count} · ${owned.has(name) ? "已有" : "需添置"}</span>`
        )).join("")}
      </div>
    </div>
  `;
}

function assignmentTableHtml(title, assignments, options = {}) {
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>${escapeHtml(title)}</h3>
        <span>${assignments.length} 条记录</span>
      </div>
      <div class="assignment-list">
        ${assignments.map((item) => assignmentRowHtml(item, options)).join("") || `<p class="mini">当前日期暂无任务记录。</p>`}
      </div>
    </div>
  `;
}

function assignmentRowHtml(item) {
  const task = taskById(item.taskId);
  return `
    <div class="assignment-row">
      <strong>${escapeHtml(item.taskName || task?.name || item.taskId)}</strong>
      <span>${escapeHtml(item.collectorName || userName(item.collectorId))}</span>
      <span>${escapeHtml(locationName(item.locationId))}${item.room ? ` / ${escapeHtml(item.room)}` : ""}</span>
      <b class="status-badge ${normalizeStatus(item.status)}">${escapeHtml(statusText(item.status))}</b>
      <span>培训师：${escapeHtml(item.trainerName || userName(item.trainerId))}</span>
      <span>设备：${escapeHtml(item.deviceId || "到岗选择")}</span>
      <span>有效时长：${escapeHtml(item.effectiveHours || "-")}</span>
      <span>完成：${escapeHtml(item.allCompleted || "-")}</span>
    </div>
  `;
}

function collectorTaskCardsHtml(assignments) {
  return `
    <div class="board-section">
      <div class="section-head">
        <h3>我的任务</h3>
        <span>到岗后选择设备号，开始作业；完成后填报有效时长和完成数量</span>
      </div>
      <div class="collector-task-list">
        ${assignments.map(collectorTaskCardHtml).join("") || `<p class="mini">当前日期暂无分配任务。</p>`}
      </div>
    </div>
  `;
}

function collectorTaskCardHtml(assignment) {
  const task = taskById(assignment.taskId);
  const status = normalizeStatus(assignment.status);
  const devices = window.DEVICE_LIBRARY?.devices || [];
  const deviceOptions = devices.length
    ? devices.map((device) => `<option value="${escapeHtml(device.id)}" ${assignment.deviceId === device.id ? "selected" : ""}>${escapeHtml(device.id)}</option>`).join("")
    : `<option value="" disabled>设备库暂无设备，请联系负责人更新设备库</option>`;
  return `
    <div class="collector-task-card">
      <div class="section-head">
        <h3>${escapeHtml(assignment.taskName || task?.name || assignment.taskId)}</h3>
        <b class="status-badge ${status}">${escapeHtml(statusText(assignment.status))}</b>
      </div>
      <p class="mini">场地：${escapeHtml(locationName(assignment.locationId))}${assignment.room ? ` / ${escapeHtml(assignment.room)}` : ""}；培训师：${escapeHtml(assignment.trainerName || userName(assignment.trainerId))}</p>
      <h4>道具准备</h4>
      ${propChecklistHtml(task)}
      <h4>采集步骤</h4>
      ${stepsHtml(assignment.taskId)}
      ${status === "assigned" ? `
        <div class="account-grid">
          <select id="device-${escapeHtml(assignment.id)}">
            <option value="">选择今日使用设备号</option>
            ${deviceOptions}
          </select>
          <button class="primary-button" data-start-assignment="${escapeHtml(assignment.id)}">开始作业</button>
        </div>
      ` : ""}
      ${status !== "completed" ? completeFormHtml(assignment.id) : ""}
    </div>
  `;
}

function completeFormHtml(id) {
  return `
    <div class="complete-grid">
      <input id="hours-${escapeHtml(id)}" type="number" min="0" step="0.1" placeholder="有效时长" />
      <select id="all-${escapeHtml(id)}">
        <option value="全部完成">全部完成</option>
        <option value="未全部完成">未全部完成</option>
      </select>
      <input id="done-${escapeHtml(id)}" type="number" min="0" step="1" placeholder="完成条数" />
      <input id="left-${escapeHtml(id)}" type="number" min="0" step="1" placeholder="剩余条数" />
      <button class="primary-button" data-complete-assignment="${escapeHtml(id)}">完成任务</button>
    </div>
  `;
}

function bindAuthEvents() {
  document.querySelector("#loginBtn")?.addEventListener("click", async () => {
    try {
      const account = document.querySelector("#loginAccount").value.trim();
      const password = document.querySelector("#loginPassword").value;
      const data = await api("/api/login", {
        method: "POST",
        body: JSON.stringify({ account, password }),
      });
      accountState.token = data.token;
      accountState.user = data.user;
      localStorage.setItem("authToken", data.token);
      await loadAccountData();
    } catch (error) {
      alert(error.message);
    }
  });
}

function bindWorkspaceEvents() {
  document.querySelector("#logoutBtn")?.addEventListener("click", () => logout());
  document.querySelector("#refreshBoard")?.addEventListener("click", () => loadAccountData());
  document.querySelector("#boardDate")?.addEventListener("change", () => loadAccountData());
  document.querySelector("#downloadAccountTemplate")?.addEventListener("click", downloadAccountTemplate);
  document.querySelector("#uploadAccountTemplate")?.addEventListener("change", uploadAccountTemplate);
  document.querySelector("#downloadLibraries")?.addEventListener("click", downloadLibrariesExcel);
  document.querySelector("#uploadLibraries")?.addEventListener("change", uploadLibrariesExcel);
  document.querySelector("#assignLocation")?.addEventListener("change", (event) => {
    const room = document.querySelector("#assignRoom");
    if (room) room.innerHTML = roomOptions(event.target.value);
  });
  document.querySelector("#assignTaskBtn")?.addEventListener("click", assignTask);
  document.querySelector("#addPreviewRowsToFormalCart")?.addEventListener("click", addPreviewRowsToFormalCart);
  document.querySelector("#clearFormalCart")?.addEventListener("click", clearFormalCart);
  document.querySelectorAll("[data-remove-formal-cart]").forEach((button) => {
    button.addEventListener("click", () => removeRowFromFormalCart(button.dataset.removeFormalCart));
  });
  document.querySelector("#refreshRequestRows")?.addEventListener("click", refreshFormalRows);
  document.querySelector("#copyFormalRows")?.addEventListener("click", copyFormalRows);
  document.querySelector("#copyClaimNotice")?.addEventListener("click", copyClaimNotice);
  document.querySelector("#batchAssignRequests")?.addEventListener("click", batchAssignRequests);
  bindRequestRowEvents();
  document.querySelector("#saveDailyDraft")?.addEventListener("click", saveDailyDraft);
  document.querySelector("#copyDailyReport")?.addEventListener("click", copyDailyReport);
  document.querySelectorAll("[data-start-assignment]").forEach((button) => {
    button.addEventListener("click", () => startAssignment(button.dataset.startAssignment));
  });
  document.querySelectorAll("[data-complete-assignment]").forEach((button) => {
    button.addEventListener("click", () => completeAssignment(button.dataset.completeAssignment));
  });
}

function bindRequestRowEvents() {
  document.querySelectorAll(".request-location").forEach((select) => {
    if (select.dataset.bound === "1") return;
    select.dataset.bound = "1";
    select.addEventListener("change", () => {
      const row = select.closest(".formal-request-row");
      const room = row?.querySelector(".request-room");
      if (room) room.innerHTML = roomOptions(select.value);
    });
  });
}

async function createUser() {
  try {
    const role = document.querySelector("#newRole").value;
    const payload = {
      username: document.querySelector("#newUsername").value.trim(),
      realName: document.querySelector("#newRealName").value.trim(),
      phone: document.querySelector("#newPhone").value.trim(),
      password: document.querySelector("#newPassword").value,
      role,
      trainerId: role === "collector" ? document.querySelector("#newTrainerId").value : "",
    };
    await api("/api/users", { method: "POST", body: JSON.stringify(payload) });
    await loadAccountData();
    alert("账号已开通");
  } catch (error) {
    alert(error.message);
  }
}

function excelCell(value) {
  return `<td>${escapeHtml(value ?? "")}</td>`;
}

function tableHtml(sheetName, headers, rows) {
  return `
    <table data-sheet="${escapeHtml(sheetName)}">
      <caption>${escapeHtml(sheetName)}</caption>
      <thead><tr>${headers.map((item) => `<th>${escapeHtml(item)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${headers.map((key) => excelCell(row[key])).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function currentLibraryRows() {
  const trainerById = new Map(accountState.users.map((user) => [user.id, user]));
  const users = accountState.users.map((user) => {
    const trainer = trainerById.get(user.trainerId);
    return {
      username: user.username || "",
      realName: user.realName || "",
      phone: user.phone || "",
      role: user.role || "",
      trainerName: trainer?.realName || "",
      trainerPhone: trainer?.phone || "",
      status: user.status || "active",
      initialPassword: "",
    };
  });
  const tasks = (window.TASK_LIBRARY?.tasks || []).map((task) => ({
    id: task.id || "",
    scene: task.scene || "",
    name: task.name || "",
    description: task.description || "",
    actionText: task.actionText || (task.actions || []).join("、"),
    propText: task.propText || (task.props || []).join("、"),
    windowStart: task.windowStart || "",
    windowEnd: task.windowEnd || "",
    doneCount: task.doneCount || "",
    doneHours: task.doneHours || "",
    lastDone: task.lastDone || "",
  }));
  const props = [];
  const categories = window.PROP_INVENTORY?.categories || {};
  Object.entries(categories).forEach(([category, names]) => {
    (names || []).forEach((name) => props.push({ category, name }));
  });
  if (!props.length) (window.PROP_INVENTORY?.items || []).forEach((name) => props.push({ category: "通用", name }));
  const locations = (window.LOCATION_LIBRARY?.locations || []).map((location) => ({
    id: location.id || "",
    name: location.name || "",
    type: location.type || "",
    rooms: (location.rooms || []).join("、"),
  }));
  const devices = (window.DEVICE_LIBRARY?.devices || []).map((device) => ({
    id: device.id || "",
    label: device.label || device.id || "",
    city: device.city || "",
    status: device.status || "",
  }));
  return { users, tasks, props, locations, devices };
}

function downloadLibrariesExcel() {
  const rows = currentLibraryRows();
  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>table{border-collapse:collapse;margin-bottom:24px}caption{font-weight:bold;text-align:left;padding:8px 0}td,th{border:1px solid #999;padding:4px 8px;mso-number-format:"\\@";}</style>
      </head>
      <body>
        ${tableHtml("人员库", ["username", "realName", "phone", "role", "trainerName", "trainerPhone", "status", "initialPassword"], rows.users)}
        ${tableHtml("任务库", ["id", "scene", "name", "description", "actionText", "propText", "windowStart", "windowEnd", "doneCount", "doneHours", "lastDone"], rows.tasks)}
        ${tableHtml("道具库", ["category", "name"], rows.props)}
        ${tableHtml("场地库", ["id", "name", "type", "rooms"], rows.locations)}
        ${tableHtml("设备库", ["id", "label", "city", "status"], rows.devices)}
      </body>
    </html>
  `;
  const blob = new Blob(["\ufeff", html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `基础库维护_${todayString()}.xls`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadHtmlExcel(filename, html) {
  const blob = new Blob(["\ufeff", html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadAccountTemplate() {
  const rows = currentLibraryRows().users;
  rows.push({
    username: "",
    realName: "",
    phone: "",
    role: "collector",
    trainerName: "填写负责培训师姓名",
    trainerPhone: "或填写负责培训师手机号",
    status: "active",
    initialPassword: "123456",
  });
  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>table{border-collapse:collapse;margin-bottom:24px}caption{font-weight:bold;text-align:left;padding:8px 0}td,th{border:1px solid #999;padding:4px 8px;mso-number-format:"\\@";}.tip{color:#666}</style>
      </head>
      <body>
        <p class="tip">账号开通规则：role 只能填 owner、manager、trainer、collector；采集员必须填写 trainerName 或 trainerPhone；账号或手机号已存在则更新。</p>
        ${tableHtml("人员库", ["username", "realName", "phone", "role", "trainerName", "trainerPhone", "status", "initialPassword"], rows)}
      </body>
    </html>
  `;
  downloadHtmlExcel(`账号开通模板_${todayString()}.xls`, html);
}

function tableToRows(table) {
  const allRows = Array.from(table.querySelectorAll("tr"));
  let headers = Array.from(table.querySelectorAll("thead th")).map((cell) => cell.textContent.trim());
  let bodyRows = Array.from(table.querySelectorAll("tbody tr"));
  if (!headers.length && allRows.length) {
    headers = Array.from(allRows[0].children).map((cell) => cell.textContent.trim());
    bodyRows = allRows.slice(1);
  }
  headers = headers.map((item) => item.replace(/\s+/g, ""));
  return bodyRows.map((tr) => {
    const cells = Array.from(tr.children).map((cell) => cell.textContent.trim());
    return headers.reduce((row, key, index) => {
      row[key] = cells[index] || "";
      return row;
    }, {});
  }).filter((row) => Object.values(row).some(Boolean));
}

function parseLibraryWorkbook(text) {
  const doc = new DOMParser().parseFromString(text, "text/html");
  const tables = Array.from(doc.querySelectorAll("table"));
  const byName = {};
  const payload = {};
  tables.forEach((table) => {
    let name = table.dataset.sheet || table.querySelector("caption")?.textContent?.trim();
    const rows = tableToRows(table);
    const keys = Object.keys(rows[0] || {});
    if (!name && ["username", "realName", "phone", "role"].every((key) => keys.includes(key))) name = "人员库";
    if (!name && ["id", "scene", "name", "description"].every((key) => keys.includes(key))) name = "任务库";
    if (!name && ["category", "name"].every((key) => keys.includes(key))) name = "道具库";
    if (!name && ["id", "name", "type", "rooms"].every((key) => keys.includes(key))) name = "场地库";
    if (!name && ["id", "label", "city", "status"].every((key) => keys.includes(key))) name = "设备库";
    if (name) byName[name] = rows;
  });
  if (Object.hasOwn(byName, "人员库")) payload.users = byName["人员库"];
  if (Object.hasOwn(byName, "任务库")) payload.tasks = (byName["任务库"] || []).map((row) => ({
      id: row.id,
      scene: row.scene,
      name: row.name,
      description: row.description,
      actionText: row.actionText,
      actions: row.actionText ? row.actionText.split(/[、,，;；]+/).filter(Boolean) : [],
      propText: row.propText,
      props: row.propText ? row.propText.split(/[、,，;；]+/).filter(Boolean) : [],
      windowStart: row.windowStart,
      windowEnd: row.windowEnd,
      doneCount: Number(row.doneCount || 0),
      doneHours: Number(row.doneHours || 0),
      lastDone: row.lastDone,
      ready: Boolean(row.actionText && row.propText),
    })).filter((row) => row.id && row.name);
  if (Object.hasOwn(byName, "道具库")) payload.props = byName["道具库"];
  if (Object.hasOwn(byName, "场地库")) payload.locations = byName["场地库"];
  if (Object.hasOwn(byName, "设备库")) payload.devices = byName["设备库"];
  return payload;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",").pop() : result);
    };
    reader.onerror = () => reject(new Error("文件读取失败"));
    reader.readAsDataURL(file);
  });
}

async function uploadLibrariesExcel(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    if (!text.includes("<table")) throw new Error("请上传从系统下载的基础库 Excel 模板；暂不支持直接解析普通 xlsx 文件");
    const payload = parseLibraryWorkbook(text);
    const result = await api("/api/libraries", { method: "PUT", body: JSON.stringify(payload) });
    accountState.users = result.users || accountState.users;
    accountState.libraries = result.libraries || {};
    applyLibraryOverrides(accountState.libraries);
    renderAccountPanel();
    const imported = [
      Object.hasOwn(payload, "tasks") ? `任务 ${payload.tasks.length} 条` : "",
      Object.hasOwn(payload, "props") ? `道具 ${payload.props.length} 条` : "",
      Object.hasOwn(payload, "locations") ? `场地 ${payload.locations.length} 个` : "",
      Object.hasOwn(payload, "devices") ? `设备 ${payload.devices.length} 台` : "",
      `人员新增 ${result.userResult?.created || 0} 人，更新 ${result.userResult?.updated || 0} 人，跳过 ${result.userResult?.skipped || 0} 行`,
    ].filter(Boolean).join("；");
    alert(`基础库已更新：${imported}`);
  } catch (error) {
    alert(error.message);
  } finally {
    event.target.value = "";
  }
}

async function uploadAccountTemplate(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const fileBase64 = await fileToBase64(file);
    const result = await api("/api/account-template/upload", {
      method: "POST",
      body: JSON.stringify({ fileName: file.name, fileBase64 }),
    });
    accountState.users = result.users || accountState.users;
    renderAccountPanel();
    alert(`账号模板已处理：解析 ${result.parsedRows || 0} 行；新增 ${result.userResult?.created || 0} 人，更新 ${result.userResult?.updated || 0} 人，跳过 ${result.userResult?.skipped || 0} 行`);
  } catch (error) {
    alert(error.message);
  } finally {
    event.target.value = "";
  }
}

async function assignTask() {
  try {
    const task = taskById(accountState.selectedTaskId || window.__selectedTaskIdForAccount);
    if (!task) throw new Error("请先在任务库点击选择任务");
    if (taskLockedByOther(task.id, document.querySelector("#assignDate").value)) throw new Error("该任务今日已被其他培训师领取，不能重复分配");
    const collectorId = document.querySelector("#assignCollector").value;
    if (!collectorId) throw new Error("请选择采集员");
    const collector = accountState.users.find((user) => user.id === collectorId);
    const payload = {
      date: document.querySelector("#assignDate").value,
      taskId: task.id,
      taskName: task.name,
      scene: task.scene || "",
      collectorId,
      trainerId: collector?.trainerId || accountState.user.id,
      deviceId: document.querySelector("#assignDevice").value,
      locationId: document.querySelector("#assignLocation").value,
      room: document.querySelector("#assignRoom").value,
      plannedHours: document.querySelector("#assignHours").value,
    };
    await ensureTaskClaim([{
      date: payload.date,
      taskId: task.id,
      baseName: task.name,
      taskName: task.name,
      suffix: "",
    }], { silent: true });
    await api("/api/assignments", { method: "POST", body: JSON.stringify(payload) });
    await loadAccountData();
    alert("任务已分配");
  } catch (error) {
    alert(error.message);
  }
}

function formalRequestConfig() {
  return {
    date: document.querySelector("#requestDate")?.value || selectedDate(),
    suffixPrefix: document.querySelector("#requestSuffixPrefix")?.value.trim() || `柳州${compactDate(selectedDate())}`,
    count: Math.max(1, Math.min(12, Number(document.querySelector("#requestCount")?.value || 3))),
  };
}

function formalRequestRows() {
  const config = formalRequestConfig();
  return Array.from(document.querySelectorAll(".formal-request-row")).map((row, index) => {
    const task = taskById(row.dataset.taskId || accountState.selectedTaskId || window.__selectedTaskIdForAccount);
    if (!task) return null;
    const suffix = row.querySelector(".request-suffix")?.value.trim() || `${config.suffixPrefix}_${index + 1}`;
    const collectorId = row.querySelector(".request-collector")?.value || "";
    const locationId = row.querySelector(".request-location")?.value || "";
    const room = row.querySelector(".request-room")?.value || "";
    return {
      index: index + 1,
      date: config.date,
      taskId: task.id,
      taskNo: task.id,
      baseName: task.name,
      taskName: requestedTaskName(task.name, suffix),
      suffix,
      collectorId,
      collectorName: userName(collectorId) || "待分配",
      locationId,
      locationName: locationName(locationId),
      room,
    };
  }).filter(Boolean);
}

function cartRequestRows() {
  return formalCartRows().map((row, index) => ({
    ...row,
    index: index + 1,
    collectorName: row.collectorName || userName(row.collectorId) || "待分配",
    locationName: row.locationName || locationName(row.locationId),
  }));
}

function addPreviewRowsToFormalCart() {
  const rows = formalRequestRows();
  if (!rows.length) {
    alert("请先选择基础任务并生成申请行");
    return;
  }
  addRowsToFormalCart(rows);
}

function refreshFormalRows() {
  const config = formalRequestConfig();
  localStorage.setItem("requestDate", config.date);
  localStorage.setItem("requestSuffixPrefix", config.suffixPrefix);
  localStorage.setItem("requestCount", String(config.count));
  const container = document.querySelector("#formalRequestRows");
  if (!container) return;
  const collectorOptions = allCollectorUsers().map((user) => (
    `<option value="${escapeHtml(user.id)}">${escapeHtml(collectorOptionLabel(user))}</option>`
  )).join("");
  const selectedTask = taskById(accountState.selectedTaskId || window.__selectedTaskIdForAccount);
  container.innerHTML = requestRowsHtml(selectedTask ? [selectedTask] : [], config.count, config.suffixPrefix, config.date, collectorOptions, formalCartRows().length);
  bindRequestRowEvents();
}

function formalRowsTsv() {
  const rows = cartRequestRows();
  const header = ["日期", "任务编号", "任务名称", "下发状态", "领取人", "完成时间", "任务状态", "采集时长", "采集时长截图", "质检日期", "质检反馈", "合格条数"];
  const body = rows.map((row) => [
    row.date,
    row.taskNo,
    row.taskName,
    "待下发",
    row.collectorName === "待分配" ? "" : row.collectorName,
    "",
    "待领取",
    "",
    "",
    "",
    "",
    "",
  ]);
  return [header, ...body].map((line) => line.join("\t")).join("\n");
}

function claimNoticeText() {
  const rows = cartRequestRows();
  if (!rows.length) return "";
  return [
    "任务领取提醒：请只领取分配给自己的完整任务名，重点核对“柳州日期_序号”任务标识，领错会导致任务场景和登记表不匹配。",
    ...rows.map((row) => `${row.index}. ${row.collectorName}：领取【${row.taskName}】；采集地点【${row.locationName || "待定"} / ${row.room || "待定"}】；任务标识【${row.suffix}】。`),
  ].join("\n");
}

function copyText(text, successMessage) {
  if (!text) {
    alert("暂无可复制内容");
    return;
  }
  navigator.clipboard?.writeText(text);
  alert(successMessage);
}

function copyFormalRows() {
  copyFormalRowsWithClaim();
}

async function ensureTaskClaim(rows, options = {}) {
  if (!rows.length) throw new Error("请先把要申请的任务加入购物车并生成申请行");
  const config = formalRequestConfig();
  const groups = new Map();
  rows.forEach((row) => {
    if (!groups.has(row.taskId)) groups.set(row.taskId, []);
    groups.get(row.taskId).push(row);
  });
  for (const [taskId, groupRows] of groups.entries()) {
    const task = taskById(taskId);
    if (!task) throw new Error(`任务 ${taskId} 不存在`);
    const payload = {
      date: groupRows[0].date || config.date,
      taskId: task.id,
      baseTaskName: task.name,
      suffixPrefix: config.suffixPrefix,
      requestCount: groupRows.length,
      requestedNames: groupRows.map((row) => row.taskName),
      trainerId: accountState.user?.id,
    };
    const data = await api("/api/task-claims", { method: "POST", body: JSON.stringify(payload) });
    const existingIndex = accountState.taskClaims.findIndex((item) => item.id === data.claim.id);
    if (existingIndex >= 0) accountState.taskClaims.splice(existingIndex, 1, data.claim);
    else accountState.taskClaims.push(data.claim);
  }
  publishClaimsForTaskPool();
  if (!options.silent) renderAccountPanel();
  return true;
}

async function copyFormalRowsWithClaim() {
  try {
    const rows = cartRequestRows();
    const text = formalRowsTsv();
    await ensureTaskClaim(rows, { silent: true });
    copyText(text, "已锁定该任务并复制，可直接粘贴到柳州自变量工作表的正式任务登记与反馈表");
    renderAccountPanel();
  } catch (error) {
    alert(error.message);
  }
}

function copyClaimNotice() {
  copyText(claimNoticeText(), "已复制采集员领取提醒");
}

async function batchAssignRequests() {
  try {
    const rows = cartRequestRows();
    if (!rows.length) throw new Error("请先把申请行加入申请车");
    const missingCollector = rows.find((row) => !row.collectorId);
    if (missingCollector) throw new Error(`第 ${missingCollector.index} 行未选择采集员`);
    const notice = claimNoticeText();
    await ensureTaskClaim(rows, { silent: true });
    for (const row of rows) {
      await api("/api/assignments", {
        method: "POST",
        body: JSON.stringify({
          date: row.date,
          taskId: row.taskId,
          taskName: row.taskName,
          scene: taskById(row.taskId)?.scene || "",
          collectorId: row.collectorId,
          trainerId: accountState.user.id,
          locationId: row.locationId,
          room: row.room,
          plannedHours: "1",
        }),
      });
    }
    await loadAccountData();
    copyText(notice, "已批量发布给采集员，并复制领取提醒");
  } catch (error) {
    alert(error.message);
  }
}

async function startAssignment(id) {
  try {
    const deviceId = document.querySelector(`#device-${CSS.escape(id)}`).value;
    if (!deviceId) throw new Error("请选择设备号");
    await api(`/api/assignments/${id}/start`, { method: "POST", body: JSON.stringify({ deviceId }) });
    await loadAccountData();
  } catch (error) {
    alert(error.message);
  }
}

async function completeAssignment(id) {
  try {
    const payload = {
      effectiveHours: document.querySelector(`#hours-${CSS.escape(id)}`).value,
      allCompleted: document.querySelector(`#all-${CSS.escape(id)}`).value,
      completedCount: document.querySelector(`#done-${CSS.escape(id)}`).value,
      remainingCount: document.querySelector(`#left-${CSS.escape(id)}`).value,
    };
    if (!payload.effectiveHours) throw new Error("请填写有效时长");
    await api(`/api/assignments/${id}/complete`, { method: "POST", body: JSON.stringify(payload) });
    await loadAccountData();
  } catch (error) {
    alert(error.message);
  }
}

function saveDailyDraft() {
  const date = document.querySelector("#reportDate")?.value || selectedDate();
  const text = document.querySelector("#dailyDraft")?.value || "";
  localStorage.setItem(`dailyReport:${date}`, text);
  alert("日报草稿已保存");
}

function copyDailyReport() {
  const date = document.querySelector("#reportDate")?.value || selectedDate();
  const assignments = assignmentsForDate(date);
  const status = countByStatus(assignments);
  const hours = assignments.reduce((sum, item) => sum + Number(item.effectiveHours || 0), 0);
  const lines = [
    `日期：${date}`,
    `任务：已分配 ${status.assigned}，作业中 ${status.working}，已完成 ${status.completed}`,
    `有效时长：${hours.toFixed(2)} 小时`,
    `设备：${Array.from(new Set(assignments.map((item) => item.deviceId).filter(Boolean))).join("、") || "暂无"}`,
    `补充：${document.querySelector("#dailyDraft")?.value || ""}`,
  ];
  navigator.clipboard?.writeText(lines.join("\n"));
  alert("日报摘要已复制");
}

document.addEventListener("DOMContentLoaded", initAccountSystem);
