const { sanityMutate, auth, readBody, requireEnv, logEvent } = require("./_os");

module.exports = async function (req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  if (s.role === "viewer") { res.status(403).json({ error: "Viewers cannot log entries." }); return; }
  try {
    var b = await readBody(req);
    var amount = Number(b.amount);
    if (!amount || amount <= 0 || !b.source) { res.status(400).json({ error: "Amount (> 0) and source are required." }); return; }
    var doc = {
      _type: "capitalEntry",
      amount: amount,
      source: String(b.source).slice(0, 200),
      toLLC: String(b.toLLC || "").slice(0, 200),
      note: String(b.note || "").slice(0, 1000),
      by: s.u,
      at: new Date().toISOString()
    };
    var r = await sanityMutate([{ create: doc }]);
    await logEvent(s.u, "capital", "Logged $" + amount.toLocaleString() + " · " + doc.source + (doc.toLLC ? " → " + doc.toLLC : ""));
    res.status(200).json({ ok: true, id: r.results && r.results[0] && r.results[0].id });
  } catch (e) { res.status(500).json({ error: "Failed to log capital entry." }); }
};
