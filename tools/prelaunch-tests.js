const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const STORE_PATH = path.join(ROOT, "data", "store.json");
const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:8787";
const ACCOUNT = process.env.TEST_ACCOUNT || "fucunzhao";
const PASSWORD = process.env.TEST_PASSWORD || "zzdh6886";

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function readStore() {
  if (!fs.existsSync(STORE_PATH)) {
    throw new Error(`数据库文件不存在：${STORE_PATH}`);
  }
  return JSON.parse(fs.readFileSync(STORE_PATH, "utf8"));
}

function validateDb() {
  const errors = [];
  const warnings = [];
  const store = readStore();
  const users = store.users || [];
  const assignments = store.assignments || [];
  const taskClaims = store.taskClaims || [];

  assert(Array.isArray(users), "users 必须是数组", errors);
  assert(users.some((user) => user.role === "owner"), "必须至少有一个企业负责人账号", errors);

  const usernames = new Map();
  const phones = new Map();
  users.forEach((user) => {
    assert(user.id, `用户缺少 id：${user.realName || user.username || "未知"}`, errors);
    assert(user.username, `用户缺少 username：${user.realName || user.id}`, errors);
    assert(user.realName, `用户缺少真实姓名：${user.username || user.id}`, errors);
    assert(user.phone, `用户缺少手机号：${user.realName || user.username}`, errors);
    assert(["owner", "manager", "trainer", "collector"].includes(user.role), `用户角色不正确：${user.realName || user.username}`, errors);
    if (user.username) usernames.set(user.username, (usernames.get(user.username) || 0) + 1);
    if (user.phone) phones.set(user.phone, (phones.get(user.phone) || 0) + 1);
  });
  usernames.forEach((count, username) => assert(count === 1, `账号重复：${username}`, errors));
  phones.forEach((count, phone) => assert(count === 1, `手机号重复：${phone}`, errors));

  const userIds = new Set(users.map((user) => user.id));
  users.filter((user) => user.role === "collector").forEach((user) => {
    assert(user.trainerId && userIds.has(user.trainerId), `采集员未绑定有效培训师：${user.realName}`, errors);
  });

  assignments.forEach((item) => {
    assert(item.id, "任务分配缺少 id", errors);
    assert(item.date, `任务分配缺少日期：${item.taskName || item.taskId}`, errors);
    assert(item.taskId, `任务分配缺少任务编号：${item.taskName || item.id}`, errors);
    assert(userIds.has(item.collectorId), `任务分配采集员不存在：${item.taskName || item.id}`, errors);
    assert(!item.trainerId || userIds.has(item.trainerId), `任务分配培训师不存在：${item.taskName || item.id}`, errors);
  });

  const claimKeys = new Map();
  taskClaims.filter((item) => item.status !== "cancelled").forEach((item) => {
    const key = `${item.date}|${item.taskId}`;
    claimKeys.set(key, (claimKeys.get(key) || 0) + 1);
    assert(userIds.has(item.trainerId), `任务领取锁培训师不存在：${key}`, errors);
  });
  claimKeys.forEach((count, key) => assert(count === 1, `同日同任务存在重复领取锁：${key}`, errors));

  if (!store.libraries) warnings.push("libraries 为空：未上传过基础库覆盖数据，使用的是代码内置基础库");

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    summary: {
      users: users.length,
      assignments: assignments.length,
      taskClaims: taskClaims.length,
      hasLibraries: Boolean(store.libraries),
    },
  };
}

async function request(pathname, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeoutMs || 8000);
  const started = Date.now();
  try {
    const res = await fetch(`${BASE_URL}${pathname}`, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    const text = await res.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { text };
    }
    return { status: res.status, ok: res.ok, ms: Date.now() - started, data };
  } finally {
    clearTimeout(timer);
  }
}

async function login() {
  const res = await request("/api/login", {
    method: "POST",
    body: JSON.stringify({ account: ACCOUNT, password: PASSWORD }),
  });
  if (!res.ok) throw new Error(`登录失败：HTTP ${res.status} ${JSON.stringify(res.data)}`);
  return res.data.token;
}

async function smoke() {
  const results = [];
  const home = await request("/");
  results.push(["GET /", home.ok, home.status, home.ms]);
  const token = await login();
  const headers = { Authorization: `Bearer ${token}` };
  for (const pathname of ["/api/me", "/api/users", "/api/assignments", "/api/task-claims", "/api/libraries"]) {
    const res = await request(pathname, { headers });
    results.push([`GET ${pathname}`, res.ok, res.status, res.ms]);
  }
  return results;
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];
}

async function stress({ concurrency = 20, durationSec = 30 } = {}) {
  const token = await login();
  const headers = { Authorization: `Bearer ${token}` };
  const targets = [
    { pathname: "/", weight: 40, headers: {} },
    { pathname: "/api/users", weight: 15, headers },
    { pathname: "/api/assignments", weight: 15, headers },
    { pathname: "/api/task-claims", weight: 5, headers },
    { pathname: "/api/libraries", weight: 5, headers },
    { pathname: "/api/me", weight: 20, headers },
  ];
  const pool = [];
  targets.forEach((target) => {
    for (let i = 0; i < target.weight; i += 1) pool.push(target);
  });
  const endAt = Date.now() + durationSec * 1000;
  const latencies = [];
  let total = 0;
  let failed = 0;

  async function worker() {
    while (Date.now() < endAt) {
      const target = pool[Math.floor(Math.random() * pool.length)];
      try {
        const res = await request(target.pathname, { headers: target.headers, timeoutMs: 10000 });
        total += 1;
        latencies.push(res.ms);
        if (!res.ok) failed += 1;
      } catch {
        total += 1;
        failed += 1;
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  return {
    total,
    failed,
    errorRate: total ? failed / total : 0,
    avgMs: latencies.length ? Math.round(latencies.reduce((sum, item) => sum + item, 0) / latencies.length) : 0,
    p95Ms: percentile(latencies, 0.95),
    maxMs: latencies.length ? Math.max(...latencies) : 0,
  };
}

function printJson(title, data) {
  console.log(`\n${title}`);
  console.log(JSON.stringify(data, null, 2));
}

async function main() {
  const mode = process.argv[2] || "all";
  if (mode === "db" || mode === "all") {
    const result = validateDb();
    printJson("数据库体检", result);
    if (!result.ok) process.exitCode = 1;
  }
  if (mode === "smoke" || mode === "all") {
    const result = await smoke();
    printJson("接口冒烟测试", result.map(([name, ok, status, ms]) => ({ name, ok, status, ms })));
    if (result.some(([, ok]) => !ok)) process.exitCode = 1;
  }
  if (mode === "stress") {
    const concurrency = Number(process.env.CONCURRENCY || 20);
    const durationSec = Number(process.env.DURATION_SEC || 30);
    const result = await stress({ concurrency, durationSec });
    printJson("压力测试", result);
    if (result.errorRate > 0.01) process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
