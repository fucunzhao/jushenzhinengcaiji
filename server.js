const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = Number(process.env.PORT || 8787);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(ROOT, "data");
const STORE_PATH = path.join(DATA_DIR, "store.json");

const ROLE_LEVEL = {
  owner: 4,
  manager: 3,
  trainer: 2,
  collector: 1,
};

const ROLE_LABEL = {
  owner: "企业负责人",
  manager: "项目经理",
  trainer: "培训师",
  collector: "采集员",
};

const PUBLIC_FILES = new Set([
  "index.html",
  "styles.css",
  "app.js",
  "tasks-data.js",
  "task-steps-data.js",
  "prop-inventory.js",
  "location-data.js",
  "device-data.js",
  "account-system.js",
]);

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(STORE_PATH)) {
    const ownerId = crypto.randomUUID();
    writeStore({
      users: [
        {
          id: ownerId,
          role: "owner",
          username: "fucunzhao",
          realName: "傅存诏",
          phone: "18276783993",
          passwordHash: hashPassword("zzdh6886"),
          trainerId: "",
          managerId: "",
          status: "active",
          createdAt: now(),
        },
      ],
      sessions: [],
      assignments: [],
      taskClaims: [],
      libraries: {},
      workLogs: [],
      events: [],
    });
  }
}

function readStore() {
  ensureStore();
  const store = JSON.parse(fs.readFileSync(STORE_PATH, "utf8"));
  if (!Array.isArray(store.taskClaims)) store.taskClaims = [];
  if (!Array.isArray(store.assignments)) store.assignments = [];
  if (!Array.isArray(store.events)) store.events = [];
  if (!store.libraries || typeof store.libraries !== "object") store.libraries = {};
  return store;
}

function writeStore(store) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

function now() {
  return new Date().toISOString();
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(String(password)).digest("hex");
}

function publicUser(user) {
  if (!user) return null;
  const { passwordHash, ...safe } = user;
  return {
    ...safe,
    roleLabel: ROLE_LABEL[user.role] || user.role,
  };
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers,
  });
  res.end(JSON.stringify(body));
}

function sendError(res, status, message) {
  send(res, status, { error: message });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 20 * 1024 * 1024) reject(new Error("请求体过大"));
    });
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error("JSON 格式错误"));
      }
    });
  });
}

function tokenFrom(req) {
  const auth = req.headers.authorization || "";
  if (auth.startsWith("Bearer ")) return auth.slice(7);
  return "";
}

function currentUser(req, store) {
  const token = tokenFrom(req);
  const session = store.sessions.find((item) => item.token === token);
  if (!session) return null;
  return store.users.find((item) => item.id === session.userId && item.status === "active");
}

function canManageUser(actor, target) {
  if (!actor || !target) return false;
  if (actor.role === "owner") return true;
  if (actor.role === "manager") return ["trainer", "collector"].includes(target.role);
  if (actor.role === "trainer") return target.role === "collector" && target.trainerId === actor.id;
  return actor.id === target.id;
}

function visibleAssignments(store, user) {
  if (["owner", "manager"].includes(user.role)) return store.assignments;
  if (user.role === "trainer") {
    const collectorIds = new Set(store.users.filter((item) => item.trainerId === user.id).map((item) => item.id));
    return store.assignments.filter((item) => item.trainerId === user.id || collectorIds.has(item.collectorId));
  }
  return store.assignments.filter((item) => item.collectorId === user.id);
}

function addEvent(store, event) {
  store.events.push({
    id: crypto.randomUUID(),
    at: now(),
    ...event,
  });
  if (store.events.length > 1000) store.events = store.events.slice(-1000);
}

function assignmentWithNames(store, assignment) {
  const collector = store.users.find((item) => item.id === assignment.collectorId);
  const trainer = store.users.find((item) => item.id === assignment.trainerId);
  return {
    ...assignment,
    collectorName: collector?.realName || "",
    trainerName: trainer?.realName || "",
  };
}

function claimWithNames(store, claim) {
  const trainer = store.users.find((item) => item.id === claim.trainerId);
  return {
    ...claim,
    trainerName: trainer?.realName || "",
  };
}

function taskClaimConflict(store, date, taskId, trainerId) {
  return store.taskClaims.find((item) => (
    item.date === date
    && String(item.taskId) === String(taskId)
    && item.status !== "cancelled"
    && item.trainerId !== trainerId
  ));
}

function normalizeLibraryPayload(payload) {
  const libraries = {};
  if (payload.tasks) {
    libraries.taskLibrary = {
      updatedAt: now().slice(0, 10),
      source: "后台上传",
      tasks: Array.isArray(payload.tasks) ? payload.tasks : [],
    };
  }
  if (payload.props) {
    const items = Array.isArray(payload.props) ? payload.props : [];
    const categories = {};
    items.forEach((item) => {
      const category = item.category || "通用";
      const name = item.name || item.item || "";
      if (!name) return;
      if (!categories[category]) categories[category] = [];
      if (!categories[category].includes(name)) categories[category].push(name);
    });
    libraries.propInventory = {
      updatedAt: now().slice(0, 10),
      categories,
      items: Array.from(new Set(items.map((item) => item.name || item.item).filter(Boolean))),
    };
  }
  if (payload.locations) {
    const grouped = new Map();
    (Array.isArray(payload.locations) ? payload.locations : []).forEach((item) => {
      const id = item.id || item.locationId || crypto.createHash("md5").update(String(item.name || "")).digest("hex").slice(0, 10);
      if (!grouped.has(id)) grouped.set(id, { id, name: item.name || item.locationName || id, type: item.type || "采集场地", rooms: [] });
      const target = grouped.get(id);
      String(item.rooms || item.room || "").split(/[、,，;；\n]+/).map((room) => room.trim()).filter(Boolean).forEach((room) => {
        if (!target.rooms.includes(room)) target.rooms.push(room);
      });
    });
    libraries.locationLibrary = {
      updatedAt: now().slice(0, 10),
      locations: Array.from(grouped.values()),
    };
  }
  if (payload.devices) {
    libraries.deviceLibrary = {
      updatedAt: now().slice(0, 10),
      devices: (Array.isArray(payload.devices) ? payload.devices : []).filter((item) => item.id || item.label),
    };
  }
  return libraries;
}

function upsertUsersFromLibrary(store, rows, actor) {
  if (!Array.isArray(rows)) return { created: 0, updated: 0, skipped: 0 };
  let created = 0;
  let updated = 0;
  let skipped = 0;
  const orderedRows = [
    ...rows.filter((row) => String(row.role || "collector").trim() !== "collector"),
    ...rows.filter((row) => String(row.role || "collector").trim() === "collector"),
  ];
  orderedRows.forEach((row) => {
    const realName = String(row.realName || row.name || "").trim();
    const phone = String(row.phone || "").trim();
    const username = String(row.username || phone || "").trim();
    const role = String(row.role || "collector").trim();
    if (!realName || !phone || !username || !ROLE_LEVEL[role]) {
      skipped += 1;
      return;
    }
    const trainerName = String(row.trainerName || "").trim();
    const trainerPhone = String(row.trainerPhone || "").trim();
    const trainer = store.users.find((item) => item.role === "trainer" && (item.phone === trainerPhone || item.realName === trainerName));
    if (role === "collector" && !trainer) {
      skipped += 1;
      return;
    }
    let user = store.users.find((item) => item.phone === phone || item.username === username);
    if (user) {
      user.username = username;
      user.realName = realName;
      user.phone = phone;
      user.role = role;
      user.trainerId = role === "collector" ? trainer.id : "";
      user.status = row.status || user.status || "active";
      user.updatedAt = now();
      updated += 1;
    } else {
      user = {
        id: crypto.randomUUID(),
        role,
        username,
        realName,
        phone,
        passwordHash: hashPassword(row.initialPassword || "123456"),
        trainerId: role === "collector" ? trainer.id : "",
        managerId: "",
        status: row.status || "active",
        createdBy: actor.id,
        createdAt: now(),
      };
      store.users.push(user);
      created += 1;
    }
  });
  return { created, updated, skipped };
}

function normalizeHeader(text) {
  return String(text || "").replace(/\s+/g, "").trim();
}

function mapUserRow(row) {
  const aliases = {
    username: ["username", "账号", "登录账号", "账户", "工号"],
    realName: ["realName", "name", "姓名", "真实姓名", "员工姓名"],
    phone: ["phone", "手机号", "手机号码", "电话", "联系电话"],
    role: ["role", "权限", "角色", "账号权限", "岗位"],
    trainerName: ["trainerName", "负责培训师", "培训师", "培训师姓名", "管理培训师"],
    trainerPhone: ["trainerPhone", "培训师手机号", "负责培训师手机号"],
    status: ["status", "状态", "账号状态"],
    initialPassword: ["initialPassword", "password", "初始密码", "密码"],
  };
  const normalized = {};
  Object.entries(row).forEach(([key, value]) => {
    normalized[normalizeHeader(key)] = value == null ? "" : String(value).trim();
  });
  const mapped = {};
  Object.entries(aliases).forEach(([field, names]) => {
    const match = names.map(normalizeHeader).find((name) => normalized[name] !== undefined);
    mapped[field] = match ? normalized[match] : "";
  });
  if (!mapped.username && mapped.phone) mapped.username = mapped.phone;
  if (!mapped.status) mapped.status = "active";
  if (!mapped.role) mapped.role = "collector";
  return mapped;
}

function normalizeRole(role) {
  const text = String(role || "").trim();
  const roleMap = {
    企业负责人: "owner",
    负责人: "owner",
    项目经理: "manager",
    经理: "manager",
    培训师: "trainer",
    采集员: "collector",
  };
  return roleMap[text] || text;
}

function parseAccountWorkbook(base64) {
  const XLSX = require("xlsx");
  const buffer = Buffer.from(String(base64 || ""), "base64");
  const workbook = XLSX.read(buffer, { type: "buffer", cellDates: false });
  const sheetName = workbook.SheetNames.find((name) => name.includes("人员") || name.includes("账号")) || workbook.SheetNames[0];
  if (!sheetName) return [];
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "", raw: false });
  return rows
    .map(mapUserRow)
    .map((row) => ({ ...row, role: normalizeRole(row.role) }))
    .filter((row) => row.realName || row.phone || row.username);
}

async function handleApi(req, res, pathname) {
  const store = readStore();
  const body = ["POST", "PUT", "PATCH"].includes(req.method) ? await parseBody(req) : {};

  if (pathname === "/api/bootstrap" && req.method === "GET") {
    return send(res, 200, {
      roles: ROLE_LABEL,
      hasUsers: store.users.length > 0,
      defaultOwner: { username: "fucunzhao", phone: "18276783993", password: "zzdh6886" },
    });
  }

  if (pathname === "/api/login" && req.method === "POST") {
    const { account, phone, username, password } = body;
    const login = account || phone || username;
    const user = store.users.find((item) => (item.phone === login || item.username === login) && item.passwordHash === hashPassword(password));
    if (!user) return sendError(res, 401, "账号/手机号或密码错误");
    const token = crypto.randomUUID();
    store.sessions.push({ token, userId: user.id, createdAt: now() });
    writeStore(store);
    return send(res, 200, { token, user: publicUser(user) });
  }

  const user = currentUser(req, store);
  if (!user) return sendError(res, 401, "请先登录");

  if (pathname === "/api/users" && req.method === "POST") {
    if (!["owner", "manager"].includes(user.role)) return sendError(res, 403, "只有企业负责人和项目经理可以开通账号");
    const { username, realName, phone, password, role, trainerId, managerId } = body;
    if (!username || !realName || !phone || !password || !role) return sendError(res, 400, "账号、姓名、手机号、密码和角色必填");
    if (!ROLE_LEVEL[role]) return sendError(res, 400, "角色不正确");
    if (store.users.some((item) => item.phone === phone)) return sendError(res, 409, "手机号已注册");
    if (store.users.some((item) => item.username === username)) return sendError(res, 409, "账号已存在");
    if (role === "collector" && !trainerId) return sendError(res, 400, "采集员必须选择负责培训师");
    const user = {
      id: crypto.randomUUID(),
      role,
      username,
      realName,
      phone,
      passwordHash: hashPassword(password),
      trainerId: role === "collector" ? trainerId : "",
      managerId: managerId || "",
      status: "active",
      createdAt: now(),
    };
    store.users.push(user);
    addEvent(store, { type: "user.registered", userId: user.id, role });
    writeStore(store);
    return send(res, 201, { user: publicUser(user) });
  }

  if (pathname === "/api/me" && req.method === "GET") {
    return send(res, 200, { user: publicUser(user) });
  }

  if (pathname === "/api/users" && req.method === "GET") {
    let users = store.users;
    if (user.role === "trainer") users = users.filter((item) => item.id === user.id || item.trainerId === user.id);
    if (user.role === "collector") users = users.filter((item) => item.id === user.id || item.id === user.trainerId);
    return send(res, 200, { users: users.map(publicUser) });
  }

  if (pathname === "/api/libraries" && req.method === "GET") {
    return send(res, 200, {
      libraries: store.libraries || {},
      users: store.users.map(publicUser),
    });
  }

  if (pathname === "/api/libraries" && req.method === "PUT") {
    if (!["owner", "manager"].includes(user.role)) return sendError(res, 403, "只有企业负责人和项目经理可以维护基础库");
    const libraries = normalizeLibraryPayload(body);
    store.libraries = {
      ...(store.libraries || {}),
      ...libraries,
      updatedAt: now(),
      updatedBy: user.id,
    };
    const userResult = upsertUsersFromLibrary(store, body.users, user);
    addEvent(store, { type: "libraries.updated", updatedBy: user.id, libraries: Object.keys(libraries), userResult });
    writeStore(store);
    return send(res, 200, {
      libraries: store.libraries,
      users: store.users.map(publicUser),
      userResult,
    });
  }

  if (pathname === "/api/account-template/upload" && req.method === "POST") {
    if (!["owner", "manager"].includes(user.role)) return sendError(res, 403, "只有企业负责人和项目经理可以通过模板开通账号");
    if (!body.fileBase64) return sendError(res, 400, "请上传账号模板文件");
    let rows;
    try {
      rows = parseAccountWorkbook(body.fileBase64);
    } catch (error) {
      return sendError(res, 400, `Excel 解析失败：${error.message}`);
    }
    if (!rows.length) return sendError(res, 400, "模板中没有可导入的人员记录，请检查表头和内容");
    const userResult = upsertUsersFromLibrary(store, rows, user);
    addEvent(store, { type: "account-template.uploaded", updatedBy: user.id, userResult, fileName: body.fileName || "" });
    writeStore(store);
    return send(res, 200, {
      users: store.users.map(publicUser),
      userResult,
      parsedRows: rows.length,
    });
  }

  if (pathname === "/api/assignments" && req.method === "GET") {
    return send(res, 200, {
      assignments: visibleAssignments(store, user).map((item) => assignmentWithNames(store, item)),
    });
  }

  if (pathname === "/api/task-claims" && req.method === "GET") {
    const date = new URL(req.url, `http://${req.headers.host}`).searchParams.get("date") || "";
    const claims = store.taskClaims
      .filter((item) => item.status !== "cancelled" && (!date || item.date === date))
      .map((item) => claimWithNames(store, item));
    return send(res, 200, { claims });
  }

  if (pathname === "/api/task-claims" && req.method === "POST") {
    if (!["owner", "manager", "trainer"].includes(user.role)) return sendError(res, 403, "没有领取任务权限");
    const date = body.date;
    const taskId = String(body.taskId || "");
    const trainerId = user.role === "trainer" ? user.id : (body.trainerId || user.id);
    if (!date || !taskId) return sendError(res, 400, "日期和任务编号必填");
    const trainer = store.users.find((item) => item.id === trainerId && item.role === "trainer");
    if (!trainer && user.role !== "trainer") return sendError(res, 400, "培训师不存在");

    const conflict = taskClaimConflict(store, date, taskId, trainerId);
    if (conflict) {
      const name = store.users.find((item) => item.id === conflict.trainerId)?.realName || "其他培训师";
      return sendError(res, 409, `该任务今日已由${name}领取，不能重复领取`);
    }

    let claim = store.taskClaims.find((item) => item.date === date && String(item.taskId) === taskId && item.trainerId === trainerId && item.status !== "cancelled");
    if (claim) {
      claim.baseTaskName = body.baseTaskName || claim.baseTaskName;
      claim.suffixPrefix = body.suffixPrefix || claim.suffixPrefix;
      claim.requestCount = body.requestCount || claim.requestCount;
      claim.requestedNames = body.requestedNames || claim.requestedNames || [];
      claim.updatedAt = now();
    } else {
      claim = {
        id: crypto.randomUUID(),
        date,
        taskId,
        baseTaskName: body.baseTaskName || "",
        suffixPrefix: body.suffixPrefix || "",
        requestCount: body.requestCount || "",
        requestedNames: body.requestedNames || [],
        trainerId,
        status: "claimed",
        createdBy: user.id,
        createdAt: now(),
        updatedAt: now(),
      };
      store.taskClaims.push(claim);
    }
    addEvent(store, { type: "task.claimed", claimId: claim.id, taskId, trainerId, date });
    writeStore(store);
    return send(res, 201, { claim: claimWithNames(store, claim) });
  }

  if (pathname === "/api/assignments" && req.method === "POST") {
    if (!["owner", "manager", "trainer"].includes(user.role)) return sendError(res, 403, "没有分配任务权限");
    const collector = store.users.find((item) => item.id === body.collectorId && item.role === "collector");
    if (!collector) return sendError(res, 400, "采集员不存在");
    if (user.role === "trainer" && collector.trainerId !== user.id) return sendError(res, 403, "只能分配给自己管理的采集员");
    const trainerId = user.role === "trainer" ? user.id : (body.trainerId || collector.trainerId || "");
    const conflict = taskClaimConflict(store, body.date, body.taskId, trainerId);
    if (conflict) {
      const name = store.users.find((item) => item.id === conflict.trainerId)?.realName || "其他培训师";
      return sendError(res, 409, `该任务今日已由${name}领取，不能重复分配`);
    }
    let claim = store.taskClaims.find((item) => item.date === body.date && String(item.taskId) === String(body.taskId) && item.trainerId === trainerId && item.status !== "cancelled");
    if (!claim) {
      claim = {
        id: crypto.randomUUID(),
        date: body.date,
        taskId: String(body.taskId || ""),
        baseTaskName: body.baseTaskName || body.taskName || "",
        suffixPrefix: body.suffixPrefix || "",
        requestCount: "",
        requestedNames: body.taskName ? [body.taskName] : [],
        trainerId,
        status: "claimed",
        createdBy: user.id,
        createdAt: now(),
        updatedAt: now(),
      };
      store.taskClaims.push(claim);
      addEvent(store, { type: "task.claimed", claimId: claim.id, taskId: claim.taskId, trainerId, date: body.date });
    }
    const assignment = {
      id: crypto.randomUUID(),
      date: body.date,
      taskId: body.taskId,
      taskName: body.taskName,
      scene: body.scene || "",
      collectorId: collector.id,
      trainerId,
      deviceId: body.deviceId || "",
      locationId: body.locationId || "",
      room: body.room || "",
      status: "已分配",
      plannedHours: body.plannedHours || "",
      effectiveHours: "",
      allCompleted: "",
      completedCount: "",
      remainingCount: "",
      startedAt: "",
      completedAt: "",
      createdBy: user.id,
      createdAt: now(),
      updatedAt: now(),
    };
    store.assignments.push(assignment);
    addEvent(store, { type: "assignment.created", assignmentId: assignment.id, collectorId: collector.id, trainerId: assignment.trainerId });
    writeStore(store);
    return send(res, 201, { assignment: assignmentWithNames(store, assignment) });
  }

  const assignmentMatch = pathname.match(/^\/api\/assignments\/([^/]+)\/(start|complete)$/);
  if (assignmentMatch && req.method === "POST") {
    const assignment = store.assignments.find((item) => item.id === assignmentMatch[1]);
    if (!assignment) return sendError(res, 404, "任务不存在");
    const collector = store.users.find((item) => item.id === assignment.collectorId);
    const trainer = store.users.find((item) => item.id === assignment.trainerId);
    const allowed = user.id === assignment.collectorId || user.id === assignment.trainerId || canManageUser(user, collector) || canManageUser(user, trainer);
    if (!allowed) return sendError(res, 403, "没有操作权限");
    if (assignmentMatch[2] === "start") {
      assignment.deviceId = body.deviceId || assignment.deviceId;
      assignment.status = "作业中";
      assignment.startedAt = now();
      assignment.updatedAt = now();
      addEvent(store, { type: "assignment.started", assignmentId: assignment.id, collectorId: assignment.collectorId, trainerId: assignment.trainerId });
    } else {
      assignment.effectiveHours = body.effectiveHours || "";
      assignment.allCompleted = body.allCompleted || "";
      assignment.completedCount = body.completedCount || "";
      assignment.remainingCount = body.remainingCount || "";
      assignment.status = "已完成";
      assignment.completedAt = now();
      assignment.updatedAt = now();
      addEvent(store, { type: "assignment.completed", assignmentId: assignment.id, collectorId: assignment.collectorId, trainerId: assignment.trainerId });
    }
    writeStore(store);
    return send(res, 200, { assignment: assignmentWithNames(store, assignment) });
  }

  if (pathname === "/api/events" && req.method === "GET") {
    const since = new URL(req.url, `http://${req.headers.host}`).searchParams.get("since") || "";
    const events = store.events.filter((event) => !since || event.at > since);
    return send(res, 200, { events, serverTime: now() });
  }

  return sendError(res, 404, "接口不存在");
}

function serveStatic(req, res, pathname) {
  let file = pathname === "/" ? "index.html" : decodeURIComponent(pathname.slice(1));
  if (!PUBLIC_FILES.has(file)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  const ext = path.extname(file);
  const type = ext === ".html" ? "text/html; charset=utf-8"
    : ext === ".css" ? "text/css; charset=utf-8"
    : "application/javascript; charset=utf-8";
  res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
  fs.createReadStream(fullPath).pipe(res);
}

ensureStore();

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  if (pathname.startsWith("/api/")) {
    handleApi(req, res, pathname).catch((error) => sendError(res, 500, error.message));
    return;
  }
  serveStatic(req, res, pathname);
});

server.listen(PORT, HOST, () => {
  console.log(`Task platform running at http://${HOST}:${PORT}`);
});
