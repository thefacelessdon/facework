const { sanityMutate, auth, readBody, requireEnv, logEvent } = require("./_os");

module.exports = async function (req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  if (s.role === "viewer") { res.status(403).json({ error: "Viewers cannot change gates." }); return; }
  try {
    var b = await readBody(req);
    var key = String(b.key || "").replace(/[^a-zA-Z0-9_]/g, "");
    if (!key) { res.status(400).json({ error: "Gate key required." }); return; }
    var doc = { _id: "gate." + key, _type: "gateState", key: key, done: !!b.done, by: s.u, at: new Date().toISOString() };
    await sanityMutate([{ createOrReplace: doc }]);
    await logEvent(s.u, "gate", (doc.done ? "Cleared gate " : "Reopened gate ") + key);
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: "Failed to update gate." }); }
};
