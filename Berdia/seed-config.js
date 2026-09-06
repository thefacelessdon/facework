#!/usr/bin/env node
/* Seed the familyConfig doc (narrative for the family view) into the private dataset.
   Run locally:  SANITY_PROJECT_ID=5kcg4252 SANITY_DATASET=trust SANITY_TOKEN=<token> node seed-config.js
   Narrative (assets, solar shares, committee, deadlines, capital stack, trust, decisions) is
   pulled from system-data.js. Gate/checklist keys are aligned to the console (gate.p0_1.., check.c1..). */
const fs = require("fs");
const path = require("path");
const PID = process.env.SANITY_PROJECT_ID, DS = process.env.SANITY_DATASET, TOKEN = process.env.SANITY_TOKEN;
if (!PID || !DS || !TOKEN) { console.error("Set SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN"); process.exit(1); }
const API = "https://" + PID + ".api.sanity.io/v2023-05-03";

var src = fs.readFileSync(path.join(__dirname, "system-data.js"), "utf8");
var OS = (new Function(src + "\n;return OS;"))();

var GATES = [
  { key: "p0_1", group: "Phase 0 → 1 — Foundation complete", text: "Trust legally formed, executed by Grandma, recorded" },
  { key: "p0_2", group: "Phase 0 → 1 — Foundation complete", text: "All assets transferred in (deed, lease assignment, restaurant LLC, insurance beneficiary)" },
  { key: "p0_3", group: "Phase 0 → 1 — Foundation complete", text: "Coin collection appraised and valued" },
  { key: "p0_4", group: "Phase 0 → 1 — Foundation complete", text: "Restaurant financials cleaned (2-yr P&L reconciled)" },
  { key: "p0_5", group: "Phase 0 → 1 — Foundation complete", text: "Solar lease assignment confirmed legal (Orion allows trust ownership)" },
  { key: "p0_6", group: "Phase 0 → 1 — Foundation complete", text: "Grandma's legal capacity confirmed (physician letter if advised)" },
  { key: "p0_7", group: "Phase 0 → 1 — Foundation complete", text: "All beneficiaries received and signed the trust document" },
  { key: "p0_8", group: "Phase 0 → 1 — Foundation complete", text: "CPA engaged; tax structure determined" },
  { key: "p0_9", group: "Phase 0 → 1 — Foundation complete", text: "Family info + SSNs collected" },
  { key: "p0_10", group: "Phase 0 → 1 — Foundation complete", text: "Advisory Committee finalized; first meeting scheduled" },
  { key: "p1_1", group: "Phase 1 → 2 — Capital deployed, performing", text: "All Phase 1 debt service current" },
  { key: "p1_2", group: "Phase 1 → 2 — Capital deployed, performing", text: "Restaurant EBITDA ≥ 1.0× debt service" },
  { key: "p1_3", group: "Phase 1 → 2 — Capital deployed, performing", text: "Ancillary Services winning contracts (≥ $15K revenue)" },
  { key: "p1_4", group: "Phase 1 → 2 — Capital deployed, performing", text: "Darius: 12 mo licensure, 5–10 closed deals, advances repaid" },
  { key: "p1_5", group: "Phase 1 → 2 — Capital deployed, performing", text: "Square Capital fully repaid" },
  { key: "p1_6", group: "Phase 1 → 2 — Capital deployed, performing", text: "Trust reserves ≥ $50K–$100K" },
  { key: "p1_7", group: "Phase 1 → 2 — Capital deployed, performing", text: "Solar COD confirmed, income flowing" }
];

var config = {
  _id: "familyConfig",
  _type: "familyConfig",
  meta: OS.meta,
  phase: OS.phase,
  alert: OS.alert,
  trust: OS.trust,
  assets: OS.assets,
  solarShares: OS.solarShares,
  committee: OS.committee,
  llcs: OS.llcs,
  capitalStack: OS.capitalStack,
  capitalNote: OS.capitalNote,
  deadlines: OS.deadlines,
  decisions: OS.decisions,
  gates: GATES,
  checklist: OS.checklist.map(function (c) { return { id: c.id, text: c.text, owner: c.owner }; })
};

(async function () {
  var r = await fetch(API + "/data/mutate/" + DS, {
    method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + TOKEN },
    body: JSON.stringify({ mutations: [{ createOrReplace: config }] })
  });
  if (!r.ok) { console.error("Seed-config failed:", r.status, await r.text()); process.exit(1); }
  console.log("familyConfig seeded: " + config.assets.length + " assets, " + config.gates.length + " gates, " + config.checklist.length + " checklist items.");
})();
