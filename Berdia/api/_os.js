/* Shared server-side helpers for the Monson Family trustee console (Vercel functions).
   Env required: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN, SESSION_SECRET
   Never bundled to the browser — server-only. */
const crypto = require("crypto");

const PID = process.env.SANITY_PROJECT_ID;
const DS = process.env.SANITY_DATASET;
const TOKEN = process.env.SANITY_TOKEN;
const SECRET = process.env.SESSION_SECRET;
const API = "https://" + PID + ".api.sanity.io/v2023-05-03";
const SESSION_HOURS = 12;

async function sanityQuery(query, params) {
  var url = API + "/data/query/" + DS + "?query=" + encodeURIComponent(query);
  if (params) { for (var k in params) url += "&$" + k + "=" + encodeURIComponent(JSON.stringify(params[k])); }
  var r = await fetch(url, { headers: { Authorization: "Bearer " + TOKEN } });
  if (!r.ok) throw new Error("sanity query " + r.status);
  return (await r.json()).result;
}
async function sanityMutate(mutations) {
  var r = await fetch(API + "/data/mutate/" + DS + "?returnIds=true", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + TOKEN },
    body: JSON.stringify({ mutations: mutations })
  });
  if (!r.ok) throw new Error("sanity mutate " + r.status + " " + (await r.text()));
  return r.json();
}

function b64url(buf) { return Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function unb64url(s) { return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64"); }

function sign(payload) {
  var p = b64url(JSON.stringify(payload));
  var sig = b64url(crypto.createHmac("sha256", SECRET).update(p).digest());
  return p + "." + sig;
}
function verifyToken(tok) {
  if (!tok || tok.indexOf(".") < 0) return null;
  var parts = tok.split("."), p = parts[0], sig = parts[1];
  var expected = b64url(crypto.createHmac("sha256", SECRET).update(p).digest());
  var a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  var payload; try { payload = JSON.parse(unb64url(p).toString("utf8")); } catch (e) { return null; }
  if (!payload.exp || Date.now() > payload.exp) return null;
  return payload; // { u, role, exp }
}
function hashPass(passphrase) {
  var salt = crypto.randomBytes(16);
  return salt.toString("hex") + ":" + crypto.scryptSync(passphrase, salt, 64).toString("hex");
}
function verifyPass(passphrase, stored) {
  if (!stored || stored.indexOf(":") < 0) return false;
  var parts = stored.split(":"), salt = Buffer.from(parts[0], "hex"), hash = Buffer.from(parts[1], "hex");
  var test = crypto.scryptSync(passphrase, salt, hash.length);
  return hash.length === test.length && crypto.timingSafeEqual(hash, test);
}
function parseCookies(req) {
  var out = {}, h = req.headers.cookie; if (!h) return out;
  h.split(";").forEach(function (c) { var i = c.indexOf("="); if (i > 0) out[c.slice(0, i).trim()] = decodeURIComponent(c.slice(i + 1).trim()); });
  return out;
}
function auth(req) { return verifyToken(parseCookies(req)["mft_session"]); }
function setSessionCookie(res, token) {
  res.setHeader("Set-Cookie", "mft_session=" + encodeURIComponent(token) + "; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=" + (SESSION_HOURS * 3600));
}
function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", "mft_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0");
}
function readBody(req) {
  return new Promise(function (resolve) {
    if (req.body) { resolve(typeof req.body === "string" ? safeJSON(req.body) : req.body); return; }
    var data = ""; req.on("data", function (c) { data += c; }); req.on("end", function () { resolve(safeJSON(data)); });
  });
}
function safeJSON(s) { try { return s ? JSON.parse(s) : {}; } catch (e) { return {}; } }
function requireEnv(res) {
  if (!PID || !DS || !TOKEN || !SECRET) { res.status(500).json({ error: "Server not configured — missing environment variables." }); return false; }
  return true;
}
function sessionHours() { return SESSION_HOURS; }

// Append-only audit log. Best-effort: never blocks or breaks the main action.
async function logEvent(actor, type, detail) {
  try {
    await sanityMutate([{ create: { _type: "event", at: new Date().toISOString(), actor: String(actor || "unknown"), type: String(type || "action"), detail: String(detail || "").slice(0, 300) } }]);
  } catch (e) { /* audit logging is best-effort */ }
}

module.exports = { sanityQuery, sanityMutate, sign, verifyToken, hashPass, verifyPass, auth, setSessionCookie, clearSessionCookie, readBody, requireEnv, sessionHours, logEvent };
