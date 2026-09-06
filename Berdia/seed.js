#!/usr/bin/env node
/* Seed family users into the private Sanity dataset as PUBLISHED docs.
   Run locally (never deployed):
     SANITY_PROJECT_ID=5kcg4252 SANITY_DATASET=trust SANITY_TOKEN=<write-token> node seed.js
   Prints temporary passphrases to distribute securely. Re-running updates users in place. */
const crypto = require("crypto");
const PID = process.env.SANITY_PROJECT_ID, DS = process.env.SANITY_DATASET, TOKEN = process.env.SANITY_TOKEN;
if (!PID || !DS || !TOKEN) { console.error("Set SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN"); process.exit(1); }
const API = "https://" + PID + ".api.sanity.io/v2023-05-03";

function hashPass(p) { var s = crypto.randomBytes(16); return s.toString("hex") + ":" + crypto.scryptSync(p, s, 64).toString("hex"); }
function tempPass() { return crypto.randomBytes(9).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 10); }

const USERS = [
  { username: "stedmon", name: "Stedmon Harper", role: "trustee" },
  { username: "stanley", name: "Stanley Harper", role: "operator" },
  { username: "darius", name: "Darius Harper", role: "operator" },
  { username: "kim", name: "Kim Fox", role: "operator" },
  { username: "chuck", name: "Charles Toliver", role: "operator" },
  { username: "reneta", name: "Reneta Harper", role: "operator" },
  { username: "grandma", name: "Berdia Monson", role: "viewer" }
];

(async function () {
  var creds = [];
  var mutations = USERS.map(function (u) {
    var pw = tempPass(); creds.push({ username: u.username, role: u.role, pass: pw });
    return { createOrReplace: { _id: "user." + u.username, _type: "user", username: u.username, name: u.name, role: u.role, active: true, mustChange: true, pass: hashPass(pw) } };
  });
  var r = await fetch(API + "/data/mutate/" + DS + "?returnIds=true", {
    method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + TOKEN }, body: JSON.stringify({ mutations: mutations })
  });
  if (!r.ok) { console.error("Seed failed:", r.status, await r.text()); process.exit(1); }
  var fs = require("fs"), path = require("path");
  var lines = creds.map(function (c) { return c.username.padEnd(9) + " [" + c.role + "]  " + c.pass; }).join("\n");
  fs.writeFileSync(path.join(__dirname, "passphrases.local.txt"),
    "TEMPORARY PASSPHRASES — distribute securely, then DELETE this file.\nEach user is required to change theirs on first login.\n\n" + lines + "\n");
  console.log("Seeded " + USERS.length + " users into " + PID + "/" + DS + ".");
  console.log("Temporary passphrases written to passphrases.local.txt (deploy-ignored). Distribute securely, then delete that file.");
})();
