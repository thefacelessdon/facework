const { sanityQuery, auth, requireEnv } = require("./_os");

module.exports = async function (req, res) {
  if (!requireEnv(res)) return;
  var s = auth(req);
  if (!s) { res.status(401).json({ error: "Not authenticated" }); return; }
  try {
    var data = await sanityQuery(
      "{" +
      '"users": *[_type=="user"]{username,name,role,active},' +
      '"capital": *[_type=="capitalEntry"]|order(at desc){_id,amount,source,toLLC,note,by,at},' +
      '"gates": *[_type=="gateState"]{key,done,by,at},' +
      '"checklist": *[_type=="checklistState"]{key,done,by,at},' +
      '"reports": *[_type=="report"]|order(at desc){_id,quarter,at,by,totalDeployed},' +
      '"published": *[_type=="familySnapshot"][0].publishedAt,' +
      '"me": *[_type=="user" && username==$u][0]{mustChange}' +
      "}",
      { u: s.u }
    );
    var mustChange = !!(data.me && data.me.mustChange);
    delete data.me;
    res.status(200).json({ session: { username: s.u, role: s.role, mustChange: mustChange }, data: data });
  } catch (e) { res.status(500).json({ error: "Failed to load state" }); }
};
