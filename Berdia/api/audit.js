const { sanityQuery, auth, requireEnv } = require("./_os");

module.exports = async function (req, res) {
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  try {
    var events = await sanityQuery('*[_type=="event"]|order(at desc)[0...200]{at,actor,type,detail}');
    res.status(200).json({ events: events || [] });
  } catch (e) { res.status(500).json({ error: "Failed to load activity log" }); }
};
