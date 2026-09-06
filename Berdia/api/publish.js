const { sanityQuery, sanityMutate, auth, readBody, requireEnv, logEvent } = require("./_os");

module.exports = async function (req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  if (s.role !== "trustee") { res.status(403).json({ error: "Only the trustee can publish to the family view." }); return; }
  try {
    var live = await sanityQuery(
      "{" +
      '"gatesDone": *[_type=="gateState" && done==true].key,' +
      '"checklistDone": *[_type=="checklistState" && done==true].key,' +
      '"capital": *[_type=="capitalEntry"]|order(at desc){amount,source,toLLC,note,at}' +
      "}"
    );
    var totalDeployed = (live.capital || []).reduce(function (a, c) { return a + (Number(c.amount) || 0); }, 0);
    var snap = {
      _id: "familySnapshot",
      _type: "familySnapshot",
      publishedAt: new Date().toISOString(),
      publishedBy: s.u,
      gatesDone: live.gatesDone || [],
      checklistDone: live.checklistDone || [],
      capital: live.capital || [],
      totalDeployed: totalDeployed
    };
    await sanityMutate([{ createOrReplace: snap }]);
    await logEvent(s.u, "publish", "Published to family view (" + (snap.gatesDone.length) + " gates, " + (snap.checklistDone.length) + " tasks, $" + totalDeployed.toLocaleString() + " deployed)");
    res.status(200).json({ ok: true, publishedAt: snap.publishedAt });
  } catch (e) { res.status(500).json({ error: "Failed to publish." }); }
};
