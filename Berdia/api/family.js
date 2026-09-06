const { sanityQuery, auth, requireEnv } = require("./_os");

module.exports = async function (req, res) {
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  try {
    var data = await sanityQuery(
      "{" +
      '"config": *[_type=="familyConfig"][0],' +
      '"snapshot": *[_type=="familySnapshot"][0]' +
      "}"
    );
    res.status(200).json({ session: { username: s.u, role: s.role }, config: data.config, snapshot: data.snapshot });
  } catch (e) { res.status(500).json({ error: "Failed to load the family view." }); }
};
