const { sanityQuery, verifyPass, sign, setSessionCookie, readBody, requireEnv, sessionHours } = require("./_os");

module.exports = async function (req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!requireEnv(res)) return;
  try {
    var body = await readBody(req);
    var username = String(body.username || "").toLowerCase().trim();
    var passphrase = String(body.passphrase || "");
    if (!username || !passphrase) { res.status(400).json({ error: "Enter your username and passphrase." }); return; }
    var user = await sanityQuery('*[_type=="user" && username==$u && active==true][0]{username,name,role,pass}', { u: username });
    if (!user || !verifyPass(passphrase, user.pass)) { res.status(401).json({ error: "Incorrect username or passphrase." }); return; }
    var token = sign({ u: user.username, role: user.role, exp: Date.now() + sessionHours() * 3600 * 1000 });
    setSessionCookie(res, token);
    res.status(200).json({ username: user.username, name: user.name, role: user.role });
  } catch (e) { res.status(500).json({ error: "Login failed. Try again." }); }
};
