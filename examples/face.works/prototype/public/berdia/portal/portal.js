'use strict';
const $ = (id) => document.getElementById(id), el = (t, txt) => { const e = document.createElement(t); if (txt != null) e.textContent = txt; return e; };
const when = (s) => s ? new Date(s).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : '—';
const STATUS = { complete: 'Complete', 'profile-only': 'Profile done, no files', 'files-only': 'Files, no profile', 'not-started': 'Not started' };
async function call(path, action, data = {}, blob = false) {
  const r = await fetch(path, { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, ...data }) });
  if (r.status === 401) { const s = $('signin'); if (s) s.hidden = false; throw Object.assign(new Error('signin'), { silent: true }); }
  if (!r.ok) { let m = 'Something went wrong.'; try { m = (await r.json()).error || m; } catch {} throw new Error(m); }
  return blob ? r.blob() : r.json();
}
const err = (e) => { if (e.silent) return; const x = $('err'); if (x) { x.textContent = e.message; x.hidden = false; } };
const set = (root, k, v) => { const n = root.querySelector(`[data-k="${k}"]`); if (n) n.textContent = v; };

async function dashboard() {
  const t = $('today'); if (t) t.textContent = new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const d = await call('/berdia/api/portal', 'summary');
  if (d.name) $('greet').textContent = 'Welcome, ' + d.name.split(' ')[0] + '.';
  const rl = $('roleline'); if (rl) { rl.textContent = d.role === 'reviewer' ? 'Viewing as trustee / reviewer' : 'Viewing as family participant'; rl.hidden = false; }
  if (d.role === 'reviewer' && $('desk')) $('desk').hidden = false;
  const me = d.me || { profile: false, files: 0 }, stage = d.role === 'reviewer' || (me.profile && me.files) ? 'open' : (me.profile || me.files ? 'started' : 'new');
  try { sessionStorage.setItem('berdia-stage', stage); } catch {} document.body.dataset.stage = stage;
  if ($('cta')) $('cta').hidden = stage === 'new';
  const fr = $('firstrun'); if (fr) { if (stage === 'open') fr.hidden = true; else { const st = (k, t, c) => { const n = fr.querySelector('[data-k="' + k + '"]'); n.textContent = t; n.className = 'chip ' + c; };
    if (stage === 'started') { st('s1', 'Done', 'settled'); st('s2', 'Open', 'attention'); } } }
  if (d.me) { const m = $('me'); m.hidden = false; set(m, 'profile', d.me.profile ? 'Done' : 'Not yet'); set(m, 'files', String(d.me.files)); set(m, 'lastAt', when(d.me.lastAt));
    set(m, 'next', d.me.profile ? 'Your intake is in. Add more documents any time in Tasks.' : 'Next: complete your profile in Tasks.'); }
  if (d.role === 'reviewer') { $('family').hidden = false; const tb = $('rows');
    for (const m of d.members) { const tr = el('tr'); const st = el('span', STATUS[m.status]); st.className = 'pill ' + m.status;
      for (const v of [m.name, m.role, m.profile ? '✓' : '—', String(m.files)]) tr.append(el('td', v)); const td = el('td'); td.append(st); tr.append(td, el('td', when(m.lastAt))); tb.append(tr); }
    const done = d.members.filter(m => m.status === 'complete').length; set($('family'), 'tally', `${done} of ${d.members.length} members complete.`); }
}
async function documents() {
  let names = {}, role = 'participant';
  try { const s = await call('/berdia/api/portal', 'summary'); role = s.role; for (const m of s.members) names[m.subject] = m.name; } catch (e) { if (e.silent) return; }
  const { rows } = await call('/berdia/api/intake', 'list'); const box = $('uploads'); box.hidden = false;
  set(box, 'uphead', role === 'reviewer' ? 'Family uploads (reviewer)' : 'Your uploads');
  set(box, 'upnote', role === 'reviewer' ? 'Visible to reviewers only. Each open/download is logged.' : 'Only you and family reviewers can see these.');
  const groups = new Map(); for (const r of rows) { if (!groups.has(r.owner)) groups.set(r.owner, []); groups.get(r.owner).push(r); }
  if (!rows.length) $('groups').textContent = 'No uploads yet.';
  for (const [owner, list] of groups) { if (role === 'reviewer') $('groups').append(Object.assign(el('p', names[owner] || 'Family member'), { className: 'group-label' })); const ul = el('ul');
    for (const r of list) { const li = el('li'); const b = el('button', r.kind === 'profile' ? 'Profile' : r.name); b.className = 'link';
      b.addEventListener('click', async () => { try { if (r.kind === 'profile') { location.href = '/berdia/intake.html'; return; } const blob = await call('/berdia/api/intake', 'download', { id: r.id }, true), u = URL.createObjectURL(blob), a = document.createElement('a'); a.href = u; a.download = r.name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 1000); } catch (e) { err(e); } });
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
