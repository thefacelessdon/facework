const { sanityMutate, auth, readBody, requireEnv, logEvent } = require("./_os");

module.exports = async function (req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  if (s.role === "viewer") { res.status(403).json({ error: "Viewers cannot change the checklist." }); return; }
  try {
    var b = await readBody(req);
    var key = String(b.key || "").replace(/[^a-zA-Z0-9_]/g, "");
    if (!key) { res.status(400).json({ error: "Checklist key required." }); return; }
    var doc = { _id: "check." + key, _type: "checklistState", key: key, done: !!b.done, by: s.u, at: new Date().toISOString() };
    await sanityMutate([{ createOrReplace: doc }]);
    await logEvent(s.u, "checklist", (doc.done ? "Completed task " : "Reopened task ") + key);
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: "Failed to update checklist." }); }
};
