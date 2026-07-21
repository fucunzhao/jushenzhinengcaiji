const library = window.TASK_LIBRARY || { tasks: [], scenes: [], commonActions: [] };
const stepLibrary = window.TASK_STEPS || { items: [] };
const inventorySeed = window.PROP_INVENTORY || { items: [] };
const locationLibrary = window.LOCATION_LIBRARY || { locations: [] };
const deviceLibrary = window.DEVICE_LIBRARY || { devices: [] };
const stepsById = new Map(stepLibrary.items.map((item) => [item.id, item]));

const today = new Date().toISOString().slice(0, 10);
const state = {
  query: "",
  scene: "全部",
  action: "",
  view: "recommended",
  selectedTaskId: "",
  sort: "recommend",
  doneOnly: false,
  readyOnly: false,
  unusedOnly: false,
  hasWindow: false,
  plan: JSON.parse(localStorage.getItem("taskPlan") || "[]"),
  inventory: loadInventory(),
  collector: localStorage.getItem("collectorName") || "",
  device: localStorage.getItem("deviceNo") || (deviceLibrary.devices[0]?.id || ""),
  trainer: localStorage.getItem("trainerName") || "",
  workDate: localStorage.getItem("workDate") || today,
  defaultHours: localStorage.getItem("defaultHours") || "2",
  defaultStatus: localStorage.getItem("defaultStatus") || "已下发",
  defaultLocation: localStorage.getItem("defaultLocation") || (locationLibrary.locations[0]?.id || ""),
  defaultRoom: localStorage.getItem("defaultRoom") || "客厅",
};

const el = {
  search: document.querySelector("#searchInput"),
  scenes: document.querySelector("#sceneFilters"),
  actions: document.querySelector("#actionFilters"),
  doneOnly: document.querySelector("#doneOnly"),
  readyOnly: document.querySelector("#readyOnly"),
  unusedOnly: document.querySelector("#unusedOnly"),
  hasWindow: document.querySelector("#hasWindow"),
  summary: document.querySelector("#summary"),
  taskFold: document.querySelector("#taskLibraryFold"),
  taskFoldSummary: document.querySelector("#taskFoldSummary"),
  openTaskLibrary: document.querySelector("#openTaskLibrary"),
  taskLibraryModal: document.querySelector("#taskLibraryModal"),
  closeTaskLibrary: document.querySelector("#closeTaskLibrary"),
  closeTaskLibraryBackdrop: document.querySelector("#closeTaskLibraryBackdrop"),
  taskDetailDrawer: document.querySelector("#taskDetailDrawer"),
  closeTaskDetail: document.querySelector("#closeTaskDetail"),
  taskList: document.querySelector("#taskList"),
  tabs: document.querySelectorAll(".tab"),
  sort: document.querySelector("#sortSelect"),
  detail: document.querySelector("#detailPanel"),
  plan: document.querySelector("#planList"),
  deviceSummary: document.querySelector("#deviceSummary"),
  propsSummary: document.querySelector("#propsSummary"),
  inventoryInput: document.querySelector("#inventoryInput"),
  saveInventory: document.querySelector("#saveInventory"),
  copyProps: document.querySelector("#copyProps"),
  collector: document.querySelector("#collectorName"),
  device: document.querySelector("#deviceNo"),
  trainer: document.querySelector("#trainerName"),
  defaultLocation: document.querySelector("#defaultLocation"),
  defaultRoom: document.querySelector("#defaultRoom"),
  workDate: document.querySelector("#workDate"),
  defaultHours: document.querySelector("#defaultHours"),
  defaultStatus: document.querySelector("#defaultStatus"),
  clearPlan: document.querySelector("#clearPlan"),
  exportPlan: document.querySelector("#exportPlan"),
  reset: document.querySelector("#resetFilters"),
};

function loadInventory() {
  const saved = localStorage.getItem("propInventory");
  if (saved) return JSON.parse(saved);
  return inventorySeed.items || [];
}

function normalize(text) {
  return String(text || "").toLowerCase().trim();
}

function normalizeSearch(text) {
  return normalize(text)
    .replace(/[_*×x\-—–|/\\()[\]{}【】「」『』:：,，.。;；、\s]+/g, "");
}

function searchTerms(query) {
  return normalize(query)
    .split(/[\s,，;；、/\\]+/)
    .map((item) => normalizeSearch(item))
    .filter(Boolean);
}

function isSubsequence(term, text) {
  let cursor = 0;
  for (const char of text) {
    if (char === term[cursor]) cursor += 1;
    if (cursor === term.length) return true;
  }
  return false;
}

function fuzzyIncludes(text, term) {
  if (!term) return true;
  if (text.includes(term)) return true;
  return term.length > 1 && isSubsequence(term, text);
}

function taskSearchText(task) {
  return normalizeSearch([
    task.id,
    task.scene,
    task.name,
    task.description,
    task.actionText,
    task.propText,
    (task.actions || []).join(" "),
    (task.props || []).join(" "),
  ].join(" "));
}

function searchScore(task, query) {
  const terms = searchTerms(query);
  if (!terms.length) return 0;
  const name = normalizeSearch(task.name);
  const scene = normalizeSearch(task.scene);
  const props = normalizeSearch(task.propText);
  const actions = normalizeSearch(task.actionText);
  const desc = normalizeSearch(task.description);
  const id = normalizeSearch(task.id);
  const all = taskSearchText(task);
  return terms.reduce((score, term) => {
    if (name.includes(term)) return score + 120;
    if (props.includes(term)) return score + 95;
    if (actions.includes(term)) return score + 85;
    if (scene.includes(term) || id.includes(term)) return score + 75;
    if (desc.includes(term)) return score + 65;
    if (fuzzyIncludes(name, term)) return score + 45;
    if (fuzzyIncludes(all, term)) return score + 20;
    return score;
  }, 0);
}

function taskMatchesQuery(task, query) {
  const terms = searchTerms(query);
  if (!terms.length) return true;
  const text = taskSearchText(task);
  return terms.every((term) => fuzzyIncludes(text, term));
}

function normalizeProp(text) {
  return String(text || "")
    .replace(/[（）()]/g, "")
    .replace(/等|左右|适量|若干|少量/g, "")
    .trim();
}

function tokens(text) {
  return String(text || "")
    .split(/[\u3001\uff0c,\uff1b;\/\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function propTokens(text) {
  const blocked = new Set(["是", "否", "可", "无", "拿", "放", "拿起", "打开", "关闭", "摆放", "归位", "擦拭", "按压", "检查"]);
  return tokens(text)
    .map(normalizeProp)
    .filter((item) => item && item.length <= 18 && !blocked.has(item));
}

function allRoomOptions() {
  return locationLibrary.locations.flatMap((location) => (
    location.rooms.map((room) => ({
      locationId: location.id,
      locationName: location.name,
      room,
      key: `${location.id}|${room}`,
      label: `${location.name} / ${room}`,
    }))
  ));
}

function locationName(id) {
  return locationLibrary.locations.find((location) => location.id === id)?.name || id || "未填场地";
}

function roomsForLocation(id) {
  return locationLibrary.locations.find((location) => location.id === id)?.rooms || [];
}

function sceneMatchesRoom(scene, room) {
  if (!scene || scene === "通用") return true;
  if (scene.includes("客厅")) return room === "客厅";
  if (scene.includes("厨房")) return room === "厨房";
  if (scene.includes("餐厅")) return room === "餐厅";
  if (scene.includes("卧室")) return room.startsWith("卧室");
  return true;
}

function suitableRooms(task) {
  return allRoomOptions().filter((option) => sceneMatchesRoom(task.scene, option.room));
}

function completedLocationKeys(task) {
  const keys = new Set();
  (task.doneLocations || []).forEach((item) => {
    if (item.locationId && item.room) keys.add(`${item.locationId}|${item.room}`);
  });
  state.plan
    .filter((item) => item.id === task.id && item.locationId && item.room && item.status === "已完成")
    .forEach((item) => keys.add(`${item.locationId}|${item.room}`));
  return keys;
}

function taskLocationInfo(task) {
  const suitable = suitableRooms(task);
  const doneKeys = completedLocationKeys(task);
  return {
    suitable,
    done: suitable.filter((option) => doneKeys.has(option.key)),
    notDone: suitable.filter((option) => !doneKeys.has(option.key)),
  };
}

function taskIsReady(task) {
  return Boolean(task.actionText && task.propText);
}

function claimForTask(task) {
  const claims = window.TASK_CLAIMS_BY_DATE || [];
  const date = state.workDate || today;
  return claims.find((item) => (
    item.date === date
    && String(item.taskId) === String(task.id)
    && item.status !== "cancelled"
  ));
}

function taskLockedByOther(task) {
  const claim = claimForTask(task);
  const currentUser = window.ACCOUNT_CURRENT_USER;
  return Boolean(claim && currentUser?.role === "trainer" && claim.trainerId !== currentUser.id);
}

function isTrainingFriendly(task) {
  const easyActions = ["拿", "放", "打开", "放入", "摆放", "归位", "擦拭", "折叠", "按压"];
  const actionHits = tokens(task.actionText).filter((item) => easyActions.includes(item)).length;
  return taskIsReady(task) && actionHits >= 2 && propTokens(task.propText).length <= 6;
}

function scoreTask(task) {
  let score = 0;
  if (taskIsReady(task)) score += 30;
  if (isTrainingFriendly(task)) score += 18;
  if (taskLocationInfo(task).notDone.length > 0) score += 14;
  if (task.windowStart || task.windowEnd) score += 12;
  if (!task.doneCount) score += 10;
  if (task.doneCount > 0) score += Math.min(task.doneCount, 8);
  if (task.scene === state.scene) score += 5;
  return score;
}

function filteredTasks() {
  let tasks = [...library.tasks];
  const queryTerms = searchTerms(state.query);
  if (queryTerms.length) tasks = tasks.filter((task) => taskMatchesQuery(task, state.query));
  if (state.scene !== "全部") tasks = tasks.filter((task) => task.scene === state.scene);
  if (state.action) tasks = tasks.filter((task) => task.actionText.includes(state.action));
  if (state.doneOnly) tasks = tasks.filter((task) => task.doneCount > 0);
  if (state.readyOnly) tasks = tasks.filter(taskIsReady);
  if (state.unusedOnly) tasks = tasks.filter((task) => !task.doneCount);
  if (state.hasWindow) tasks = tasks.filter((task) => task.windowStart || task.windowEnd);
  if (state.view === "recommended") tasks = tasks.filter(taskIsReady);
  if (state.view === "done") tasks = tasks.filter((task) => task.doneCount > 0);
  if (state.view === "pending") tasks = tasks.filter((task) => !taskIsReady(task));
  if (state.view === "training") tasks = tasks.filter(isTrainingFriendly);

  tasks.sort((a, b) => {
    if (queryTerms.length) {
      const queryDiff = searchScore(b, state.query) - searchScore(a, state.query);
      if (queryDiff) return queryDiff;
    }
    if (state.sort === "scene") return `${a.scene}${a.id}`.localeCompare(`${b.scene}${b.id}`, "zh-CN");
    if (state.sort === "hours") return b.doneHours - a.doneHours;
    if (state.sort === "unused") return Number(a.doneCount > 0) - Number(b.doneCount > 0);
    return scoreTask(b) - scoreTask(a);
  });
  return tasks;
}

function renderLocationDefaults() {
  el.defaultLocation.innerHTML = locationLibrary.locations.map((location) => (
    `<option value="${location.id}" ${state.defaultLocation === location.id ? "selected" : ""}>${location.name}</option>`
  )).join("");
  const rooms = roomsForLocation(state.defaultLocation);
  if (!rooms.includes(state.defaultRoom)) state.defaultRoom = rooms[0] || "";
  el.defaultRoom.innerHTML = rooms.map((room) => (
    `<option value="${room}" ${state.defaultRoom === room ? "selected" : ""}>${room}</option>`
  )).join("");
}

function renderDeviceOptions(selected) {
  const current = selected || "";
  return [
    `<option value="">未选择设备</option>`,
    ...deviceLibrary.devices.map((device) => (
      `<option value="${device.id}" ${current === device.id ? "selected" : ""}>${device.label || device.id}</option>`
    )),
  ].join("");
}

function renderDefaultDevice() {
  el.device.innerHTML = renderDeviceOptions(state.device);
}

function renderChips() {
  const sceneList = ["全部", ...library.scenes];
  el.scenes.innerHTML = sceneList.map((scene) => (
    `<button class="chip ${scene === state.scene ? "active" : ""}" data-scene="${scene}">${scene}</button>`
  )).join("");

  const actionList = Array.from(new Set(library.tasks.flatMap((task) => tokens(task.actionText)))).slice(0, 32);
  el.actions.innerHTML = actionList.map((action) => (
    `<button class="chip ${action === state.action ? "active" : ""}" data-action="${action}">${action}</button>`
  )).join("");
}

function renderSummary() {
  const total = library.tasks.length;
  const done = library.tasks.filter((task) => task.doneCount > 0).length;
  const locationGaps = library.tasks.filter((task) => taskLocationInfo(task).notDone.length > 0).length;
  const planHours = state.plan.reduce((sum, item) => sum + Number(item.hours || state.defaultHours || 0), 0);
  const matched = filteredTasks().length;
  if (el.taskFoldSummary) {
    el.taskFoldSummary.textContent = `当前筛选 ${matched} / ${total} 条 · 已做过 ${done} · 未做地点 ${locationGaps}`;
  }
  el.summary.innerHTML = [
    ["任务总量", total],
    ["已做过任务", done],
    ["仍有未做地点", locationGaps],
    ["今日待采预估", `${planHours.toFixed(1)}h`],
  ].map(([label, value]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join("");
}

function renderTasks() {
  const tasks = filteredTasks();
  renderSummary();
  el.taskList.innerHTML = tasks.map((task) => {
    const selected = task.id === state.selectedTaskId ? "selected" : "";
    const locInfo = taskLocationInfo(task);
    const claim = claimForTask(task);
    const lockedByOther = taskLockedByOther(task);
    const readyBadge = taskIsReady(task)
      ? `<span class="badge ok">道具明确</span>`
      : `<span class="badge warn">待补道具</span>`;
    const doneBadge = task.doneCount
      ? `<span class="badge done">已做过 ${task.doneCount}次</span>`
      : `<span class="badge warn">近期未做</span>`;
    return `
      <article class="task-card ${selected} ${task.doneCount ? "done-card" : ""} ${claim ? "claimed-card" : ""} ${lockedByOther ? "locked-card" : ""}" data-id="${task.id}" data-task-id="${task.id}">
        ${task.doneCount ? `<div class="done-ribbon">已做过</div>` : ""}
        ${claim ? `<div class="claim-ribbon">${lockedByOther ? "今日已被他人领取" : "今日已领取"}</div>` : ""}
        <div class="card-head">
          <div>
            <div class="mini">#${task.id} · ${task.scene || "未标场景"}</div>
            <h3 class="task-title">${task.name}</h3>
          </div>
          ${readyBadge}
        </div>
        <p class="desc">${task.description || "暂无任务描述"}</p>
        <div class="meta-row">
          ${doneBadge}
          ${task.doneCount ? `<span class="badge">最近 ${task.lastDone || "有记录"}</span>` : ""}
          ${task.doneHours ? `<span class="badge">${task.doneHours}h</span>` : ""}
          <span class="badge ${locInfo.notDone.length ? "warn" : "done"}">未做地点 ${locInfo.notDone.length}</span>
          ${claim ? `<span class="badge claimed">今日领取：${claim.trainerName || "培训师"}</span>` : ""}
          ${isTrainingFriendly(task) ? `<span class="badge ok">培训友好</span>` : ""}
        </div>
        <div class="meta-row">${tokens(task.actionText).slice(0, 5).map((item) => `<span class="badge">${item}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="mini-button" data-detail="${task.id}">查看</button>
          <button class="mini-button add" data-add="${task.id}" ${lockedByOther ? "disabled" : ""}>${lockedByOther ? "已被领取" : "预选任务"}</button>
        </div>
      </article>
    `;
  }).join("") || `<p class="empty">没有匹配任务，换个筛选条件试试。</p>`;
}

function setupTaskLibraryFold() {
  if (!el.taskFold) return;
  const saved = localStorage.getItem("taskLibraryOpen");
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  el.taskFold.open = saved == null ? !isMobile : saved === "1";
  el.taskFold.addEventListener("toggle", () => {
    localStorage.setItem("taskLibraryOpen", el.taskFold.open ? "1" : "0");
  });
}

function openTaskLibrary() {
  if (!el.taskLibraryModal) return;
  el.taskLibraryModal.classList.add("open");
  el.taskLibraryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeTaskLibrary() {
  if (!el.taskLibraryModal) return;
  el.taskLibraryModal.classList.remove("open", "detail-open");
  el.taskLibraryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openTaskDetailDrawer() {
  el.taskLibraryModal?.classList.add("detail-open");
}

function closeTaskDetailDrawer() {
  el.taskLibraryModal?.classList.remove("detail-open");
}

function renderDetail(task) {
  if (!task) {
    el.detail.innerHTML = `<p class="empty">选择左侧任务，查看任务说明、动作、道具和步骤。</p>`;
    return;
  }
  const stepPlan = stepsById.get(task.id);
  const locInfo = taskLocationInfo(task);
  const claim = claimForTask(task);
  const lockedByOther = taskLockedByOther(task);
  el.detail.innerHTML = `
    <h3>${task.name}</h3>
    <div class="meta-row">
      <span class="badge">#${task.id}</span>
      <span class="badge">${task.scene || "未标场景"}</span>
      ${task.doneCount ? `<span class="badge done">已做过 ${task.doneCount}次</span>` : ""}
      ${claim ? `<span class="badge claimed">今日领取：${claim.trainerName || "培训师"}</span>` : ""}
      ${taskIsReady(task) ? `<span class="badge ok">可优先安排</span>` : `<span class="badge warn">需确认道具</span>`}
    </div>
    ${lockedByOther ? `<div class="detail-block claim-block"><b>领取锁定</b><p class="empty">该任务今日已由 ${claim.trainerName || "其他培训师"} 领取，不能重复接取。请选择其他任务。</p></div>` : ""}
    <div class="detail-block"><b>任务说明</b><p class="empty">${task.description || "暂无"}</p></div>
    <div class="detail-block"><b>动作</b><div class="meta-row">${tokens(task.actionText).map((item) => `<span class="badge">${item}</span>`).join("") || `<span class="mini">暂无</span>`}</div></div>
    <div class="detail-block"><b>道具</b><div class="meta-row">${propTokens(task.propText).map((item) => `<span class="badge ok">${item}</span>`).join("") || `<span class="mini">暂无</span>`}</div></div>
    <div class="detail-block"><b>适合且未做地点</b><div class="meta-row">${locInfo.notDone.map((item) => `<span class="badge warn">${item.label}</span>`).join("") || `<span class="badge done">所有适合地点都已做过</span>`}</div></div>
    <div class="detail-block"><b>已做地点</b><div class="meta-row">${locInfo.done.map((item) => `<span class="badge done">${item.label}</span>`).join("") || `<span class="mini">暂无精确地点记录</span>`}</div></div>
    ${stepPlan ? renderStepPlan(stepPlan) : ""}
    <button class="primary-button" data-add="${task.id}" ${lockedByOther ? "disabled" : ""}>${lockedByOther ? "今日已被其他培训师领取" : "预选任务"}</button>
  `;
  openTaskDetailDrawer();
}

function renderStepPlan(plan) {
  const renderList = (items) => items.map((item, index) => `<li>${item.step || index + 1}. ${item.content} <span class="mini">${item.seconds || ""}秒</span></li>`).join("");
  return `
    <div class="detail-block step-plan">
      <b>规则化步骤</b>
      <p class="empty">推荐单次 ${plan.duration.recommendedSeconds} 秒，可延长至 ${plan.duration.maxWithExtensionSeconds} 秒内。</p>
      <div class="step-group"><strong>必做</strong><ol>${renderList(plan.mandatorySteps)}</ol></div>
      <div class="step-group"><strong>可选</strong><ol>${renderList(plan.optionalSteps)}</ol></div>
      <div class="step-group"><strong>延时</strong><ol>${renderList(plan.extensionSteps)}</ol></div>
      ${plan.riskFlags.length ? `<p class="risk">${plan.riskFlags.join("；")}</p>` : ""}
    </div>
  `;
}

function savePlan() {
  localStorage.setItem("taskPlan", JSON.stringify(state.plan));
}

function renderDeviceSummary() {
  const grouped = new Map();
  state.plan.forEach((item) => {
    const device = item.device || state.device || "未填设备";
    const hours = Number(item.hours || state.defaultHours || 0);
    grouped.set(device, (grouped.get(device) || 0) + hours);
  });
  el.deviceSummary.innerHTML = Array.from(grouped.entries()).map(([device, hours]) => `
    <div class="device-pill ${hours >= 4 ? "ok" : ""}">
      <b>${device}</b>
      <span class="mini">${hours.toFixed(1)}h / 4h</span>
    </div>
  `).join("");
}

function planTasks() {
  return state.plan.map((item) => library.tasks.find((task) => task.id === item.id)).filter(Boolean);
}

function propInventorySet() {
  return new Set(state.inventory.map(normalizeProp).filter(Boolean));
}

function hasProp(prop, inventory) {
  const target = normalizeProp(prop);
  if (inventory.has(target)) return true;
  return Array.from(inventory).some((item) => target.includes(item) || item.includes(target));
}

function summarizeProps() {
  const grouped = new Map();
  planTasks().forEach((task) => {
    propTokens(task.propText).forEach((prop) => {
      if (!grouped.has(prop)) grouped.set(prop, { count: 0, tasks: [] });
      grouped.get(prop).count += 1;
      grouped.get(prop).tasks.push(task.id);
    });
  });
  return Array.from(grouped.entries()).map(([name, info]) => ({ name, ...info }));
}

function renderPropsSummary() {
  const props = summarizeProps();
  const inventory = propInventorySet();
  const owned = props.filter((prop) => hasProp(prop.name, inventory));
  const missing = props.filter((prop) => !hasProp(prop.name, inventory));
  el.inventoryInput.value = state.inventory.join("\n");
  el.propsSummary.innerHTML = `
    <div class="prop-stats">
      <div><strong>${props.length}</strong><span>所需道具</span></div>
      <div><strong>${owned.length}</strong><span>已有</span></div>
      <div><strong>${missing.length}</strong><span>需添置</span></div>
    </div>
    ${renderPropGroup("需添置", missing, "missing")}
    ${renderPropGroup("已有", owned, "owned")}
  `;
}

function renderPropGroup(title, props, type) {
  if (!props.length) return `<p class="empty">${title}：暂无</p>`;
  return `
    <div class="prop-group">
      <b>${title}</b>
      ${props.map((prop) => `
        <div class="prop-row ${type}">
          <span>${prop.name}</span>
          <em>${prop.count} 个任务：#${Array.from(new Set(prop.tasks)).join(" #")}</em>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPlan() {
  renderLocationDefaults();
  renderDefaultDevice();
  el.collector.value = state.collector;
  el.trainer.value = state.trainer;
  el.workDate.value = state.workDate;
  el.defaultHours.value = state.defaultHours;
  el.defaultStatus.value = state.defaultStatus;
  renderDeviceSummary();
  renderPropsSummary();
  el.plan.innerHTML = state.plan.map((item, index) => {
    const rooms = roomsForLocation(item.locationId || state.defaultLocation);
    return `
      <div class="plan-item" data-plan-index="${index}">
        <div class="plan-item-head">
          <strong>${index + 1}. ${item.name}</strong>
          <button class="remove-button" data-remove-plan="${index}" title="删除这条待采任务" aria-label="删除这条待采任务">×</button>
        </div>
        <div class="mini">#${item.id} · ${item.scene}</div>
        <div class="plan-edit-grid">
          <input data-plan-field="collector" value="${item.collector || ""}" placeholder="采集员" />
          <select data-plan-field="device">${renderDeviceOptions(item.device || state.device)}</select>
          <input data-plan-field="trainer" value="${item.trainer || ""}" placeholder="培训师" />
          <input data-plan-field="hours" type="number" min="0" step="0.1" value="${item.hours || state.defaultHours || 2}" placeholder="小时" />
          <select data-plan-field="locationId">
            ${locationLibrary.locations.map((location) => `<option value="${location.id}" ${(item.locationId || state.defaultLocation) === location.id ? "selected" : ""}>${location.name}</option>`).join("")}
          </select>
          <select data-plan-field="room">
            ${rooms.map((room) => `<option value="${room}" ${(item.room || state.defaultRoom) === room ? "selected" : ""}>${room}</option>`).join("")}
          </select>
          <select data-plan-field="status">
            ${["已下发", "进行中", "已完成", ""].map((status) => `<option value="${status}" ${(item.status || state.defaultStatus) === status ? "selected" : ""}>${status || "空状态"}</option>`).join("")}
          </select>
        </div>
      </div>
    `;
  }).join("") || `<p class="empty">从任务卡片加入今日待采，自动汇总道具、地点和填报清单。</p>`;
}

function addToPlan(id) {
  const task = library.tasks.find((item) => item.id === id);
  if (!task) return;
  if (taskLockedByOther(task)) {
    alert("该任务今日已被其他培训师领取，不能重复接取");
    return;
  }
  const preferred = taskLocationInfo(task).notDone[0] || suitableRooms(task)[0];
  state.plan.push({
    uid: `${task.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: state.workDate,
    id: task.id,
    name: task.name,
    scene: task.scene,
    collector: state.collector,
    device: state.device,
    trainer: state.trainer,
    locationId: preferred?.locationId || state.defaultLocation,
    room: preferred?.room || state.defaultRoom,
    hours: state.defaultHours || "2",
    status: state.defaultStatus || "已下发",
    itemCount: "",
    remainCount: "",
    remark: "",
    qc: "",
  });
  savePlan();
  window.dispatchEvent(new CustomEvent("formal-cart-add", { detail: { taskId: task.id } }));
  renderPlan();
  renderTasks();
}

function exportCsv() {
  const rows = [[
    "日期", "任务编号", "任务名称", "下发状态", "使用设备编号", "领取人", "跟踪培训师",
    "场地", "房间", "完成时间", "任务状态", "采集时长", "采集条数", "剩余条数", "备注", "质检准确率",
  ]];
  state.plan.forEach((task) => rows.push([
    task.date || state.workDate,
    task.id,
    task.name,
    "已下发",
    task.device || state.device,
    task.collector || state.collector,
    task.trainer || state.trainer,
    locationName(task.locationId || state.defaultLocation),
    task.room || state.defaultRoom,
    "",
    task.status || state.defaultStatus,
    task.hours || state.defaultHours,
    task.itemCount || "",
    task.remainCount || "",
    task.remark || "",
    task.qc || "",
  ]));
  downloadCsv("每日任务填报清单.csv", rows);
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function copyPropsText() {
  const props = summarizeProps();
  const inventory = propInventorySet();
  const lines = props.map((prop) => {
    const status = hasProp(prop.name, inventory) ? "已有" : "需添置";
    return `${status}\t${prop.name}\t${prop.count}个任务\t#${Array.from(new Set(prop.tasks)).join(" #")}`;
  });
  navigator.clipboard?.writeText(lines.join("\n"));
}

function bindEvents() {
  el.openTaskLibrary?.addEventListener("click", openTaskLibrary);
  el.closeTaskLibrary?.addEventListener("click", closeTaskLibrary);
  el.closeTaskLibraryBackdrop?.addEventListener("click", closeTaskLibrary);
  el.closeTaskDetail?.addEventListener("click", closeTaskDetailDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTaskLibrary();
  });
  el.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderTasks();
  });
  el.scenes.addEventListener("click", (event) => {
    const button = event.target.closest("[data-scene]");
    if (!button) return;
    state.scene = button.dataset.scene;
    renderChips();
    renderTasks();
  });
  el.actions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    state.action = state.action === button.dataset.action ? "" : button.dataset.action;
    renderChips();
    renderTasks();
  });
  [el.doneOnly, el.readyOnly, el.unusedOnly, el.hasWindow].forEach((input) => {
    input.addEventListener("change", () => {
      state[input.id] = input.checked;
      renderTasks();
    });
  });
  el.tabs.forEach((tab) => tab.addEventListener("click", () => {
    el.tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    state.view = tab.dataset.view;
    renderTasks();
  }));
  el.sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderTasks();
  });
  document.body.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-plan]");
    if (removeButton) {
      state.plan.splice(Number(removeButton.dataset.removePlan), 1);
      savePlan();
      renderPlan();
      renderTasks();
      return;
    }
    const detailButton = event.target.closest("[data-detail]");
    const addButton = event.target.closest("[data-add]");
    const card = event.target.closest(".task-card");
    if (detailButton) {
      event.preventDefault();
      event.stopPropagation();
      openTaskLibrary();
      const id = detailButton.dataset.detail;
      state.selectedTaskId = id;
      renderDetail(library.tasks.find((task) => task.id === id));
      renderTasks();
      el.detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    if (addButton) {
      event.preventDefault();
      event.stopPropagation();
      openTaskLibrary();
      addToPlan(addButton.dataset.add);
      return;
    }
    if (card) {
      openTaskLibrary();
      const id = card.dataset.id;
      state.selectedTaskId = id;
      renderDetail(library.tasks.find((task) => task.id === id));
      renderTasks();
    }
  });
  el.plan.addEventListener("input", updatePlanItem);
  el.plan.addEventListener("change", updatePlanItem);
  [["collector", "collectorName"], ["device", "deviceNo"], ["trainer", "trainerName"], ["workDate", "workDate"], ["defaultHours", "defaultHours"], ["defaultStatus", "defaultStatus"]].forEach(([key, storageKey]) => {
    ["input", "change"].forEach((eventName) => {
      el[key].addEventListener(eventName, (event) => {
        state[key] = event.target.value;
        localStorage.setItem(storageKey, state[key]);
        renderPlan();
        renderTasks();
      });
    });
  });
  el.defaultLocation.addEventListener("change", (event) => {
    state.defaultLocation = event.target.value;
    state.defaultRoom = roomsForLocation(state.defaultLocation)[0] || "";
    localStorage.setItem("defaultLocation", state.defaultLocation);
    localStorage.setItem("defaultRoom", state.defaultRoom);
    renderPlan();
    renderTasks();
  });
  el.defaultRoom.addEventListener("change", (event) => {
    state.defaultRoom = event.target.value;
    localStorage.setItem("defaultRoom", state.defaultRoom);
    renderPlan();
  });
  window.addEventListener("task-claims-updated", () => {
    renderTasks();
    const task = library.tasks.find((item) => item.id === state.selectedTaskId);
    if (task) renderDetail(task);
  });
  window.addEventListener("libraries-updated", () => {
    state.inventory = loadInventory();
    renderLocationDefaults();
    renderDefaultDevice();
    renderChips();
    renderPropsSummary();
    renderPlan();
    renderTasks();
    const task = library.tasks.find((item) => item.id === state.selectedTaskId);
    if (task) renderDetail(task);
  });
  el.saveInventory.addEventListener("click", () => {
    state.inventory = tokens(el.inventoryInput.value.replace(/\n/g, "，"));
    localStorage.setItem("propInventory", JSON.stringify(state.inventory));
    renderPropsSummary();
  });
  el.copyProps.addEventListener("click", copyPropsText);
  el.clearPlan.addEventListener("click", () => {
    state.plan = [];
    savePlan();
    renderPlan();
    renderTasks();
  });
  el.exportPlan.addEventListener("click", exportCsv);
  el.reset.addEventListener("click", () => {
    Object.assign(state, { query: "", scene: "全部", action: "", doneOnly: false, readyOnly: false, unusedOnly: false, hasWindow: false, sort: "recommend" });
    el.search.value = "";
    el.doneOnly.checked = false;
    el.readyOnly.checked = false;
    el.unusedOnly.checked = false;
    el.hasWindow.checked = false;
    el.sort.value = "recommend";
    renderChips();
    renderTasks();
  });
}

function updatePlanItem(event) {
  const field = event.target.dataset.planField;
  const row = event.target.closest("[data-plan-index]");
  if (!field || !row) return;
  const index = Number(row.dataset.planIndex);
  if (!state.plan[index]) return;
  state.plan[index][field] = event.target.value;
  if (field === "locationId") {
    state.plan[index].room = roomsForLocation(event.target.value)[0] || "";
    renderPlan();
  }
  savePlan();
  renderDeviceSummary();
  renderPropsSummary();
  renderSummary();
  renderTasks();
}

renderLocationDefaults();
renderDefaultDevice();
renderChips();
setupTaskLibraryFold();
renderTasks();
renderPlan();
bindEvents();
