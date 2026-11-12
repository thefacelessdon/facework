'use strict';
const $ = (id) => document.getElementById(id), el = (t, txt) => { const e = document.createElement(t); if (txt != null) e.textContent = txt; return e; };
const when = (s) => s ? new Date(s).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : '—';
const STATUS = { complete: 'Complete', 'profile-only': 'Profile done, no files', 'files-only': 'Files, no profile', 'not-started': 'Not started' };
async function call(path, action, data = {}, blob = false) {
  const r = await fetch(path, { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, ...data }) });
  if (r.status === 401 || r.status === 403) { const s = $('signin'); if (s) s.hidden = false; throw Object.assign(new Error('signin'), { silent: true }); }
  if (!r.ok) { let m = 'We couldn’t load your records just now. Please try again in a minute.'; try { m = (await r.json()).error || m; } catch {} throw new Error(m); }
  return blob ? r.blob() : r.json();
}
const err = (e) => { if (e.silent) return; const x = $('err'); if (x) { x.textContent = e.message; x.hidden = false; } };
const set = (root, k, v) => { const n = root.querySelector(`[data-k="${k}"]`); if (n) n.textContent = v; };

// Access column (reviewer view). Reviewers can open every family member's uploads, so changing it asks first
// and the server logs it. Your own row is plain text: you can't change your own access.
const ROLE = { participant: 'Family member', reviewer: 'Reviewer' };
function access(m, self) {
  const td = el('td');
  if (self) { td.textContent = ROLE[m.role] + ' (you)'; return td; }
  // Stored as reviewer but not on the server's full-reviewer list: acts as a family member (WP-B2).
  if (m.storedRole === 'reviewer' && m.role !== 'reviewer') td.title = 'Stored as reviewer, but not on the server list, so they see only their own uploads.';
  const sel = el('select'); sel.setAttribute('aria-label', 'Access for ' + m.name);
  for (const [v, t] of Object.entries(ROLE)) { const o = el('option', t); o.value = v; o.selected = v === m.role; sel.append(o); }
  sel.addEventListener('change', async () => {
    const to = sel.value, warn = to === 'reviewer' ? ' Reviewers can see and download every family member’s uploads.' : ' They will see only their own uploads.';
    if (!confirm('Change ' + m.name + ' to ' + ROLE[to] + '?' + warn)) { sel.value = m.role; return; }
    sel.disabled = true;
    try { await call('/berdia/api/portal', 'set-role', { subject: m.subject, role: to }); m.role = to; const n = $('rolenote'); if (n) { n.textContent = m.name + ' is now a ' + ROLE[to].toLowerCase() + '.'; n.hidden = false; } }
    catch (e) { sel.value = m.role; err(e); } finally { sel.disabled = false; }
  });
  td.append(sel); return td;
}
async function dashboard() {
  const t = $('today'); if (t) t.textContent = new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const d = await call('/berdia/api/portal', 'summary');
  if (d.name) $('greet').textContent = 'Welcome, ' + d.name.split(' ')[0] + '.';
  const rl = $('roleline'); if (rl) { rl.textContent = d.role === 'reviewer' ? 'Viewing as trustee / reviewer' : 'Viewing as family participant'; rl.hidden = false; }
  if (d.role === 'reviewer' && $('desk')) $('desk').hidden = false;
  const me = d.me || { profile: false, files: 0 }, stage = d.role === 'reviewer' || (me.profile && me.files) ? 'open' : (me.profile || me.files ? 'started' : 'new');
  try { sessionStorage.setItem('berdia-stage', stage); } catch {} document.body.dataset.stage = stage;
  // The next-step button always shows; a new member needs it most.
  if ($('cta')) $('cta').hidden = false;
  const fr = $('firstrun'); if (fr) { if (stage === 'open') fr.hidden = true; else { fr.hidden = false; const st = (k, t, c) => { const n = fr.querySelector('[data-k="' + k + '"]'); n.textContent = t; n.className = 'chip ' + c; };
    if (stage === 'started') { st('s1', 'Done', 'settled'); st('s2', 'Open', 'attention'); } } }
  if (d.me) { const m = $('me'); m.hidden = false; set(m, 'profile', d.me.profile ? 'Done' : 'Not yet'); set(m, 'files', String(d.me.files)); set(m, 'lastAt', when(d.me.lastAt));
    set(m, 'next', d.me.profile ? 'Your intake is in. Add more documents any time in Tasks.' : 'Next: complete your profile in Tasks.'); }
  if (d.role === 'reviewer') { $('family').hidden = false; const tb = $('rows');
    const mine = d.me && d.me.subject;
    for (const m of d.members) { const tr = el('tr'); const st = el('span', STATUS[m.status]); st.className = 'pill ' + m.status;
      tr.append(el('td', m.name), access(m, m.subject === mine));
      for (const v of [m.profile ? '✓' : '—', String(m.files)]) tr.append(el('td', v)); const td = el('td'); td.append(st); tr.append(td, el('td', when(m.lastAt))); tb.append(tr); }
    const done = d.members.filter(m => m.status === 'complete').length; set($('family'), 'tally', `${done} of ${d.members.length} members complete.`); }
  if (d.role === 'reviewer' && d.desk) desk(d);
}
// WP-B6 trustee desk: one row per person (duties, % complete, items to check), and a detail panel to assign
// duties and accept / return / waive items. The server re-checks reviewer access and audits every change.
const CL = { needed: 'To send', requested: 'Requested', received: 'To check', accepted: 'Accepted', returned: 'Returned', waived: 'Waived' };
const CL_SET = ['requested', 'accepted', 'returned', 'waived', 'needed'];
// WP-B8: last seen (any sign-in, page view or upload), flagged when quiet 14+ days.
function seenCell(ag) { const td = el('td', ag.lastSeen ? when(ag.lastSeen) : 'Not yet'); if (ag.quiet) { const q = el('span', 'Quiet 14+ days'); q.className = 'chip attention'; td.append(' ', q); } return td; }
const CT = (s) => s ? new Date(s).toLocaleString('en-US', { timeZone: 'America/Chicago', dateStyle: 'medium', timeStyle: 'short' }) : '—';
function accessLog() { const sec = $('accesslog'), btn = $('alshow'); if (!sec || !btn) return; if (btn.dataset.wired) { sec.hidden = false; return; } sec.hidden = false; btn.dataset.wired = '1';
  btn.addEventListener('click', async () => { btn.disabled = true; try { const { rows } = await call('/berdia/api/portal', 'access-log'), tb = $('alrows'); tb.replaceChildren();
    for (const r of rows) { const tr = el('tr'); for (const v of [CT(r.at), r.who, ROLE[r.role] || 'System', r.action, r.kind]) tr.append(el('td', v)); tb.append(tr); }
    if (!rows.length) tb.append(Object.assign(el('tr'), { textContent: 'No events yet.' })); $('alwrap').hidden = false; btn.textContent = 'Refresh access log'; }
    catch (e) { err(e); } finally { btn.disabled = false; } }); }
function desk(d) {
  accessLog();
  const dr = $('dryrun'); if (dr && !dr.dataset.wired) { dr.dataset.wired = '1'; dr.addEventListener('click', async () => { dr.disabled = true;
    try { const r = await call('/berdia/api/portal', 'reminders-dry-run'), n = Object.values(r.wouldEmail).reduce((a, b) => a + b, 0), o = $('dryout');
      o.textContent = (r.enabled ? 'Reminders are on. ' : 'Reminders are off (nothing is sent). ') + 'Today: ' + n + ' would get a reminder, ' + r.wouldEscalate + ' would come to you for a call. Skipped: ' + r.skipped.paused + ' paused, ' + r.skipped.noEmail + ' without an email, ' + r.skipped.recent + ' emailed in the last week, ' + r.skipped.quiet + ' outside 9 AM–6 PM.'; o.hidden = false; }
    catch (e) { err(e); } finally { dr.disabled = false; } }); }
  const sec = $('checklists'), tb = $('clrows'), panel = $('cldetail'), note = (t) => { const n = $('clnote'); n.textContent = t; n.hidden = false; };
  sec.hidden = false; tb.replaceChildren(); const lists = d.desk.checklists, duties = d.desk.duties;
  const toCheck = Object.values(lists).reduce((n, c) => n + c.toReview, 0);
  set(sec, 'cltally', toCheck ? toCheck + (toCheck === 1 ? ' item has arrived and needs checking.' : ' items have arrived and need checking.') : 'Nothing waiting to be checked.');
  for (const m of d.members) { const c = lists[m.subject]; if (!c) continue;
    const tr = el('tr'), name = el('button', m.name); name.className = 'link'; name.setAttribute('aria-controls', 'cldetail');
    name.addEventListener('click', () => open(m, c)); const td = el('td'); td.append(name);
    const paused = (d.desk.paused || []).includes(m.subject); const ag = (d.desk.aging || {})[m.subject] || {};
    tr.append(td, el('td', (c.duties.length ? c.duties.map(x => duties[x]).join(', ') : '—') + (paused ? ' · reminders paused' : '')), el('td', c.done + ' of ' + c.total + ' (' + c.pct + '%)'),
      el('td', String(c.toReview)), el('td', String(c.items.filter(i => i.status === 'returned').length)), el('td', ag.oldestRequestDays == null ? '—' : ag.oldestRequestDays + (ag.oldestRequestDays === 1 ? ' day' : ' days')), seenCell(ag));
    tb.append(tr); }
  async function refresh(subject) { const n = await call('/berdia/api/portal', 'summary'); Object.assign(lists, n.desk.checklists); desk(n); const m = n.members.find(x => x.subject === subject); if (m) open(m, n.desk.checklists[subject]); }
  function open(m, c) {
    panel.replaceChildren(); const h = el('h3', m.name); h.tabIndex = -1; panel.append(h);
    // Duties: which registry items this person owes. Everyone owes the profile.
    const fs = el('fieldset'); fs.append(el('legend', 'Duties (everyone also owes their profile)'));
    for (const [k, label] of Object.entries(duties)) { if (k === 'everyone') continue; const l = el('label'), cb = el('input'); cb.type = 'checkbox'; cb.value = k; cb.checked = c.duties.includes(k); l.append(cb, ' ' + label); fs.append(l); }
    const save = el('button', 'Save duties'); save.type = 'button';
    save.addEventListener('click', async () => { save.disabled = true; try { await call('/berdia/api/portal', 'set-duties', { subject: m.subject, duties: [...fs.querySelectorAll('input:checked')].map(x => x.value) }); note('Duties saved for ' + m.name + '.'); await refresh(m.subject); } catch (e) { err(e); } finally { save.disabled = false; } });
    fs.append(save); panel.append(fs);
    // WP-B7: the trustee can pause reminders for someone (for example, a person who shouldn't get email).
    const isPaused = (d.desk.paused || []).includes(m.subject), pl = el('label'), pb = el('input'); pb.type = 'checkbox'; pb.checked = isPaused; pl.append(pb, ' Reminder emails paused');
    pb.addEventListener('change', async () => { pb.disabled = true; try { await call('/berdia/api/portal', 'pause-reminders', { subject: m.subject, paused: pb.checked }); note('Reminders ' + (pb.checked ? 'paused' : 'resumed') + ' for ' + m.name + '.'); await refresh(m.subject); } catch (e) { pb.checked = !pb.checked; err(e); } finally { pb.disabled = false; } });
    panel.append(pl);
    const ol = el('ol'); ol.className = 'ledger ledger--plain';
    for (const i of c.items) { const li = el('li'), div = el('div'), t = el('p', i.title); t.className = 't'; div.append(t);
      const meta = el('p', duties[i.duty] + ' · ' + CL[i.status] + (i.at ? ' · reviewed ' + when(i.at) : '') + (i.reason ? ' · reason: ' + i.reason : '')); meta.className = 'd'; div.append(meta);
      const sel = el('select'); sel.setAttribute('aria-label', 'Status for ' + i.title);
      for (const v of CL_SET) { const o = el('option', CL[v]); o.value = v; o.selected = v === i.status; sel.append(o); }
      if (!CL_SET.includes(i.status)) { const o = el('option', CL[i.status]); o.value = ''; o.selected = true; o.disabled = true; sel.prepend(o); }
      const reason = el('input'); reason.type = 'text'; reason.maxLength = 500; reason.placeholder = 'What’s needed instead (shown to them only)'; reason.hidden = i.status !== 'returned'; reason.value = i.reason || ''; reason.setAttribute('aria-label', 'Reason for returning ' + i.title);
      const go = el('button', 'Save'); go.type = 'button'; sel.addEventListener('change', () => { reason.hidden = sel.value !== 'returned'; });
      go.addEventListener('click', async () => { if (!sel.value) return; go.disabled = true;
        try { await call('/berdia/api/portal', 'review', { subject: m.subject, item: i.id, status: sel.value, reason: reason.value }); note(i.title + ': ' + CL[sel.value].toLowerCase() + ' for ' + m.name + '.'); await refresh(m.subject); } catch (e) { err(e); } finally { go.disabled = false; } });
      const act = el('div'); act.className = 's'; act.append(sel, reason, go); li.append(div, act); ol.append(li); }
    panel.append(ol); h.focus();
  }
}
// Names who else can see a participant's uploads, from the server's effective reviewer list (never hard-coded).
const whoSees = (names) => { const n = [...new Set((names || []).map(x => String(x).split(' ')[0]).filter(Boolean))];
  return n.length ? 'Only you and ' + (n.length > 1 ? n.slice(0, -1).join(', ') + ' and ' + n[n.length - 1] : n[0]) + ' can see these. Each open is logged.' : 'Only you can see these in the portal.'; };
async function documents() {
  let names = {}, role = 'participant', reviewers = [];
  try { const s = await call('/berdia/api/portal', 'summary'); role = s.role; reviewers = s.reviewers || []; for (const m of s.members) names[m.subject] = m.name; } catch (e) { if (e.silent) return; }
  const { rows } = await call('/berdia/api/intake', 'list'); const box = $('uploads'); box.hidden = false;
  set(box, 'uphead', role === 'reviewer' ? 'Family uploads (reviewer)' : 'Your uploads');
  set(box, 'upnote', role === 'reviewer' ? 'Visible to reviewers only. Each open/download is logged.' : whoSees(reviewers));
  const groups = new Map(); for (const r of rows) { if (!groups.has(r.owner)) groups.set(r.owner, []); groups.get(r.owner).push(r); }
  if (!rows.length) $('groups').textContent = 'No uploads yet.';
  for (const [owner, list] of groups) { if (role === 'reviewer') $('groups').append(Object.assign(el('p', names[owner] || 'Family member'), { className: 'group-label' })); const ul = el('ul');
    for (const r of list) { const li = el('li'); const b = el('button', r.kind === 'profile' ? 'Profile' : r.name); b.className = 'link';
      b.addEventListener('click', async () => { try { if (r.kind === 'profile') { location.href = '/berdia/intake.html'; return; } const { parts } = await call('/berdia/api/intake', 'download-info', { id: r.id }), bits = []; for (let part = 0; part < parts; part++) bits.push(await call('/berdia/api/intake', 'download', { id: r.id, part }, true)); const blob = new Blob(bits, { type: bits[0].type }), u = URL.createObjectURL(blob), a = document.createElement('a'); a.href = u; a.download = r.name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 1000); } catch (e) { err(e); } });
      li.append(b, el('span', ' · ' + (r.category || r.kind) + ' · ' + when(r.at))); ul.append(li); }
    $('groups').append(ul); }
}
async function trust() {
  const out = $('extract'); out.textContent = '';
  const want = { '/berdia/plan/grandma.html': ['What You Own Today', 'What Is a Trust?', 'What Happens Next'] };
  for (const [url, heads] of Object.entries(want)) { try { const doc = new DOMParser().parseFromString(await (await fetch(url, { credentials: 'same-origin' })).text(), 'text/html');
    for (const h of doc.querySelectorAll('h2')) { const t = h.textContent.trim(); if (!heads.some(x => t.startsWith(x))) continue; const sec = el('div'); sec.className = 'extract-row'; sec.append(Object.assign(el('p', t), { className: 'extract-label' })); const bodyEl = el('div'); sec.append(bodyEl);
      let n = h.nextElementSibling; while (n && !/^H[12]$/.test(n.tagName)) { if (/^(P|UL|OL|TABLE)$/.test(n.tagName)) { const c = document.importNode(n, true); c.querySelectorAll('script,style,iframe').forEach(x => x.remove()); for (const x of c.querySelectorAll('*')) for (const at of [...x.attributes]) if (!['href', 'class', 'colspan'].includes(at.name)) x.removeAttribute(at.name); bodyEl.append(c); } n = n.nextElementSibling; }
      out.append(sec); } } catch {} }
  out.className = ''; if (!out.children.length) out.textContent = 'Open the Family Plan for details.';
}
({ dashboard, documents, trust })[document.body.dataset.page]?.().catch(err);
