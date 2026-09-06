const { sanityQuery, sanityMutate, verifyPass, hashPass, auth, readBody, requireEnv, logEvent } = require("./_os");

module.exports = async function (req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  try {
    var b = await readBody(req);
    var current = String(b.current || "");
    var next = String(b.next || "");
    if (next.length < 8) { res.status(400).json({ error: "New passphrase must be at least 8 characters." }); return; }
    if (next === current) { res.status(400).json({ error: "New passphrase must be different." }); return; }
    var user = await sanityQuery('*[_type=="user" && username==$u][0]{pass}', { u: s.u });
    if (!user || !verifyPass(current, user.pass)) { res.status(401).json({ error: "Current passphrase is incorrect." }); return; }
    await sanityMutate([{ patch: { id: "user." + s.u, set: { pass: hashPass(next), mustChange: false } } }]);
    await logEvent(s.u, "passphrase", "Changed their passphrase");
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: "Failed to change passphrase." }); }
};
