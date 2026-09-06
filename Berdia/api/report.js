const { sanityQuery, sanityMutate, auth, readBody, requireEnv, logEvent } = require("./_os");

module.exports = async function (req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  if (s.role !== "trustee") { res.status(403).json({ error: "Only the trustee can generate reports." }); return; }
  try {
    var b = await readBody(req);
    var snap = await sanityQuery(
      "{" +
      '"capital": *[_type=="capitalEntry"]|order(at desc){amount,source,toLLC,note,by,at},' +
      '"gatesDone": *[_type=="gateState" && done==true]{key,by,at},' +
      '"checklistDone": *[_type=="checklistState" && done==true]{key,by,at}' +
      "}"
    );
    var totalDeployed = (snap.capital || []).reduce(function (a, c) { return a + (Number(c.amount) || 0); }, 0);
    var doc = {
      _type: "report",
      quarter: String(b.quarter || "").slice(0, 40),
      at: new Date().toISOString(),
      by: s.u,
      totalDeployed: totalDeployed,
      snapshot: snap
    };
    var r = await sanityMutate([{ create: doc }]);
    await logEvent(s.u, "report", "Generated report" + (doc.quarter ? " · " + doc.quarter : "") + " ($" + totalDeployed.toLocaleString() + " deployed)");
    res.status(200).json({ ok: true, id: r.results && r.results[0] && r.results[0].id, report: doc });
  } catch (e) { res.status(500).json({ error: "Failed to generate report." }); }
};
