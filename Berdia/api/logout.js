const { clearSessionCookie } = require("./_os");
module.exports = async function (req, res) {
  clearSessionCookie(res);
  res.status(200).json({ ok: true });
};
