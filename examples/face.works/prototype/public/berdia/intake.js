'use strict';
// Tasks (portal plan T1): one checklist grouped by what's owed, with Send on each row. Rules live in tasks-core.js.
const $ = id => document.getElementById(id), T = window.BerdiaTasks;
let sessionTimer, session = null, state = { items: [], reviewer: null, paused: false }, openRow = null, seq = 0;
const sent = new Set(); // items sent on this page load: they show "Got it" and "Add another page" until the page reloads
const retry = new Map(); // item id -> { uploads: files that didn't go, tries, sentOk, total, code } (T2, DX-4)
function notice(message, error = false) { $('notice').textContent = message; $('notice').className = error ? 'error' : ''; if (error) $('notice').focus(); }
const announce = (text) => { $('announce').textContent = ''; setTimeout(() => { $('announce').textContent = text; }, 50); };
// Every API error carries a stable code (T14); the page keys on it, never on the message.
async function call(url, action, data = {}, binary = false) {
  const r = await fetch(url, { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, ...data }) });
  if (!r.ok) { const v = await r.json().catch(() => ({})); throw Object.assign(new Error(v.error || 'Could not complete the request. Your original files are unchanged.'), { status: r.status, code: v.code || (r.status === 401 ? 'session_expired' : 'unavailable') }); }
  return binary ? r.blob() : r.json();
}
const api = (action, data, binary) => call('/berdia/api/intake', action, data, binary);
const portal = (action, data) => call('/berdia/api/portal', action, data);
function lock() { session = null; $('signed-in').hidden = true; $('locked').hidden = false; $('tasks').hidden = true; ['list-needs', 'list-with', 'list-done'].forEach(id => $(id).replaceChildren()); clearTimeout(sessionTimer); }

async function enter() {
  session = await api('session');
  $('greeting').textContent = 'Tasks · ' + session.name;
  $('locked').hidden = true; $('signed-in').hidden = false;
  // Google sign-in lasts longer than a link sign-in; the server says when this session ends.
  const left = session.sessionExpiresAt ? Date.parse(session.sessionExpiresAt) - Date.now() : 30 * 60000;
  clearTimeout(sessionTimer); sessionTimer = setTimeout(() => { lock(); $('profile-form').reset(); notice('Your session ended. Sign in again to continue.'); }, Math.max(left, 0));
  await load();
}
// Reads the checklist. Each request is numbered; an older answer arriving late is ignored.
// Returns true when the list was read and drawn. After 10 s a first load says so and offers Retry (DR-6).
async function load() {
  const mine = ++seq, first = $('tasks').hidden;
  const slow = first ? setTimeout(() => loadingProblem('Still loading. Check your signal.'), 10000) : null;
  try {
    const r = await portal('checklist');
    if (mine !== seq) return false;
    state = { items: r.checklist.items, reviewer: r.reviewer || null, paused: !!r.paused };
    try { render(); } catch (err) { console.error(err); loadingProblem('Your list didn’t load. Refresh the page to try again.'); return false; }
    return true;
  } catch (e) {
    if (mine !== seq) return false;
    if (e.status === 401) { lock(); notice('Please sign in again.', true); return false; }
    if (first) loadingProblem('Your list didn’t load. Check your signal.');
    return false;
  } finally { clearTimeout(slow); }
}
function loadingProblem(text) {
  const l = $('loading'); if (!$('tasks').hidden) return;
  const b = Object.assign(document.createElement('button'), { type: 'button', className: 'link', textContent: 'Retry' });
  b.addEventListener('click', () => { l.textContent = 'Loading your record…'; load(); });
  l.replaceChildren(text + ' ', b);
}
const reviewerName = () => state.reviewer?.name || 'Stedmon';
const self = () => session?.role === 'reviewer';

function render() {
  openRow = null; // rows are rebuilt; any open panel closes
  const g = T.groups(state.items), L = T.labels(reviewerName(), self());
  $('heading').textContent = T.heading(session.name, g);
  const lede = $('lede'); lede.hidden = false;
  lede.textContent = g.needsYou.length ? 'Send what you have, when you get a chance.' : T.finished(g) ? T.finishLines(reviewerName(), state.paused).join(' ') : 'If anything is needed, it will show here.';
  $('g-needs').textContent = L.needsYou + ' (' + g.needsYou.length + ')';
  $('g-with').textContent = L.withReviewer + ' (' + g.withReviewer.length + ')';
  $('g-done').textContent = L.done + ' (' + g.done.length + ')';
  $('needs').hidden = !g.needsYou.length; $('with').hidden = !g.withReviewer.length; $('done').hidden = !g.done.length;
  $('list-needs').replaceChildren(...g.needsYou.map(i => row(i, true)));
  $('list-with').replaceChildren(...g.withReviewer.map(i => row(i, false)));
  $('list-done').replaceChildren(...g.done.map(i => row(i, false)));
  $('remind').checked = !state.paused;
  help();
  $('loading').hidden = true; $('tasks').hidden = false;
  clampCheck();
}
// More only where the reason is actually cut off at this width.
function clampCheck() { for (const b of document.querySelectorAll('.task-more')) { const st = $(b.getAttribute('aria-controls')); if (st && !st.classList.contains('open') && st.scrollHeight <= st.clientHeight + 1) b.remove(); } }
// "Need a hand?" with the reviewer's phone as call and text links, signed in only (d7).
function help() {
  const p = $('help'), tel = T.telHref(state.reviewer?.phone), sms = T.telHref(state.reviewer?.phone, 'sms'), who = reviewerName();
  p.replaceChildren('Need a hand? ');
  if (!tel) { p.append('Call or text ' + who + '.'); return; }
  const a = (href, text) => Object.assign(document.createElement('a'), { href, textContent: text });
  p.append(a(tel, 'Call'), ' or ', a(sms, 'text'), ' ' + who + '.');
}

// One checklist row. Needs-you rows get Send (Send again when returned), which opens in place.
function row(item, actionable) {
  const li = document.createElement('li'), main = document.createElement('div'), t = document.createElement('h3'), d = document.createElement('p'), st = document.createElement('p');
  li.className = 'task'; li.dataset.item = item.id;
  t.className = 't'; t.textContent = item.title;
  d.className = 'd'; d.textContent = item.why;
  const [text, tone] = T.statusLine(item, reviewerName(), self());
  st.className = 'task-status ' + tone; st.textContent = text; st.id = 'status-' + item.id;
  main.append(t, d, st);
  // Long return reasons show three lines, with More to read the rest (DR-15).
  if (item.status === 'returned' && text.length > 60) { // kept only if it really overflows three lines (see clampCheck)
    const more = Object.assign(document.createElement('button'), { type: 'button', className: 'link task-more', textContent: 'More' });
    more.setAttribute('aria-expanded', 'false'); more.setAttribute('aria-controls', st.id);
    more.addEventListener('click', () => { const open = st.classList.toggle('open'); more.setAttribute('aria-expanded', String(open)); more.textContent = open ? 'Less' : 'More'; });
    main.append(more);
  }
  if (sent.has(item.id) && item.status === 'received') { const got = document.createElement('p'); got.className = 'task-got'; got.setAttribute('role', 'status'); got.textContent = T.rowText('sent', { reviewer: reviewerName() }); main.append(got); }
  li.append(main);
  if (actionable || (item.status === 'received' && item.id !== 'profile')) {
    const side = document.createElement('div'), b = document.createElement('button'), panelId = 'panel-' + item.id;
    side.className = 's'; b.type = 'button';
    b.className = actionable ? (item.status === 'returned' ? 'quiet' : 'cta') : 'link';
    b.textContent = actionable ? (item.status === 'returned' ? 'Send again' : 'Send') : (sent.has(item.id) ? 'Add another page' : 'Add more');
    b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', panelId);
    b.addEventListener('click', () => toggle(li, item, b));
    side.append(b); li.append(side);
    const panel = document.createElement('div'); panel.className = 'task-panel'; panel.id = panelId; panel.hidden = true; li.append(panel);
  }
  return li;
}
// One row open at a time (DR-13). Sends already running keep going on their own row.
function toggle(li, item, button) {
  const panel = li.querySelector('.task-panel');
  if (!panel.hidden) return close(li);
  if (openRow && openRow !== li) close(openRow);
  openRow = li; panel.hidden = false; button.setAttribute('aria-expanded', 'true');
  panel.replaceChildren(...(item.id === 'profile' ? profilePanel(li) : sendPanel(li, item)));
  (panel.querySelector('.cta, input, button') || button).focus();
}
function close(li) {
  const panel = li.querySelector('.task-panel'), b = li.querySelector('[aria-controls]');
  if (!panel || panel.hidden || li.dataset.busy) return;
  if (panel.contains($('profile-form'))) $('profile-home').append($('profile-form'));
  panel.hidden = true; panel.replaceChildren(); b.setAttribute('aria-expanded', 'false'); if (openRow === li) openRow = null; b.focus();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape' && openRow) close(openRow); });

function sendPanel(li, item) {
  const mk = (tag, props) => Object.assign(document.createElement(tag), props);
  const photo = mk('input', { type: 'file', accept: 'image/*', hidden: true }), file = mk('input', { type: 'file', accept: 'image/*,application/pdf', multiple: true, hidden: true });
  photo.setAttribute('capture', 'environment');
  const take = mk('button', { type: 'button', className: 'cta', textContent: 'Take a photo' }), choose = mk('button', { type: 'button', className: 'quiet', textContent: 'Choose a file' });
  const cancel = mk('button', { type: 'button', className: 'link', textContent: 'Cancel' }), actions = mk('p', { className: 'task-actions' });
  const msg = mk('p', { className: 'task-msg' }), consent = mk('p', { className: 'hint', textContent: 'Sending confirms you’re allowed to share it, and that it will be used to prepare the family trust.' });
  take.addEventListener('click', () => photo.click()); choose.addEventListener('click', () => file.click()); cancel.addEventListener('click', () => close(li));
  for (const input of [photo, file]) input.addEventListener('change', () => { const files = [...input.files]; input.value = ''; if (files.length) send(li, item, files, msg, [take, choose, cancel]); });
  actions.append(take, choose, cancel);
  const r = retry.get(item.id); if (r) showRetry(li, item, msg, [take, choose, cancel]);
  return [actions, consent, msg, photo, file];
}
function profilePanel(li) {
  const form = $('profile-form'); form.querySelector('[data-cancel]').onclick = () => close(li);
  return [form];
}
$('profile-form').addEventListener('submit', async e => {
  e.preventDefault(); const form = e.currentTarget, b = form.querySelector('button[type=submit]'); b.disabled = true;
  try { const p = Object.fromEntries(new FormData(form)); p.consent = p.consent === 'on'; await api('profile', p); sent.add('profile');
    const li = form.closest('li'); if (li) { delete li.dataset.busy; close(li); } announce('Your information was received.'); await load(); }
  catch (err) { notice(err.code === 'session_expired' ? T.sendText('session_expired') : err.message, true); } finally { b.disabled = false; }
});

// Send each chosen file as its own upload, tagged to the item, one after another (DR-3). Files that don't go
// stay with the row; Try again sends only those (DX-4).
async function send(li, item, files, msg, buttons, again = null) {
  li.dataset.busy = '1'; buttons.forEach(b => { b.disabled = true; });
  const todo = again ? again.uploads : T.uploads(item, files), total = again ? again.total : todo.length;
  let ok = again ? again.sentOk : 0, failed = [], code = '';
  const bar = Object.assign(document.createElement('progress'), { className: 'task-progress' });
  for (const [n, u] of todo.entries()) {
    const pre = T.precheck(u.file); if (pre) { failed.push(u); code = code || pre; continue; }
    msg.className = 'task-msg'; msg.textContent = T.rowText('sending', { name: u.file.name, k: n + 1 + (total - todo.length), n: total });
    bar.removeAttribute('value'); msg.append(bar); // indeterminate under 2.5 MB; filled in part by part on the parts path (DR-7)
    announce('Sending ' + item.title + '…');
    try { await upload(u, (part, parts) => { bar.max = parts; bar.value = part - 1; }); ok++; }
    catch (e) { failed.push(u); code = code || e.code || 'failed'; if (e.code === 'session_expired' || e.code === 'invite_inactive') { failed.push(...todo.slice(n + 1)); break; } }
  }
  delete li.dataset.busy; buttons.forEach(b => { b.disabled = false; });
  if (ok > (again ? again.sentOk : 0)) { sent.add(item.id); api('upload-done').catch(() => {}); }
  if (!failed.length) {
    retry.delete(item.id); announce(item.title + ' sent. ' + reviewerName() + ' will take a look.'); openRow = null;
    if (await load()) return focusNext();
    msg.className = 'task-msg'; msg.textContent = T.rowText('sentStale'); return; // sent, but the list didn't refresh
  }
  const tries = (again ? again.tries : 0) + 1;
  retry.set(item.id, { uploads: failed, tries, sentOk: ok, total, code });
  showRetry(li, item, msg, buttons);
  announce(item.title + ' didn’t send. Try again.');
}
// The failure line for a row, with Try again when trying again can help.
function showRetry(li, item, msg, buttons) {
  const r = retry.get(item.id), ctx = { k: r.sentOk, n: r.total, m: r.uploads.length, code: r.code, tries: r.tries, reviewer: reviewerName() };
  msg.className = 'task-msg error';
  msg.textContent = r.sentOk && r.total > 1 ? T.rowText('partial', ctx) : T.rowText('failed', ctx);
  if (r.code === 'session_expired' || r.code === 'invite_inactive') { msg.append(' ', Object.assign(document.createElement('a'), { href: '/berdia/intake.html', textContent: 'Sign in' })); return; }
  if (!T.retryable(r.code)) { retry.delete(item.id); return; } // nothing to resend: pick another file instead
  const again = Object.assign(document.createElement('button'), { type: 'button', className: 'quiet task-retry', textContent: 'Try again' });
  again.addEventListener('click', async () => {
    // It may have arrived after all: re-read the list first. If nothing from this batch had gone up and the item
    // no longer needs the person, the "failed" send actually landed. After a partial send, always resend the rest.
    again.disabled = true; const r0 = retry.get(item.id);
    if (await load() && r0 && r0.sentOk === 0) { const now = state.items.find(i => i.id === item.id); if (now && !now.needsYou) { retry.delete(item.id); sent.add(item.id); announce(item.title + ' is with ' + reviewerName() + '.'); return focusNext(); } }
    const row = document.querySelector('[data-item="' + item.id + '"]') || li, panel = row.querySelector('.task-panel');
    if (panel && panel.hidden) row.querySelector('[aria-controls]').click();
    const m = row.querySelector('.task-msg') || msg, bs = [...row.querySelectorAll('.task-actions button')];
    send(row, item, [], m, bs, retry.get(item.id));
  });
  msg.append(' ', again);
}
// After a send moves a row out of Needs you, focus the next Send, or the heading when nothing is left.
function focusNext() { const next = $('list-needs').querySelector('button[aria-controls]'); if (next) next.focus(); else { $('heading').tabIndex = -1; $('heading').focus(); } }

// Photos over 2.5 MB are resized in the browser (long side 2400 px keeps text sharp); larger files go in parts.
const LIMIT = 2500000, TARGET = 2300000, PART = 1500000, isPhoto = f => /^image\/(jpeg|png)$/.test(f.type);
async function fit(f) {
  if (f.size <= LIMIT || !isPhoto(f)) return f;
  const img = await createImageBitmap(f, { imageOrientation: 'from-image' });
  try {
    for (const [max, q] of [[2400, .85], [2400, .75], [2000, .75], [1600, .7]]) {
      const k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement('canvas');
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
      const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', q));
      if (blob && blob.size <= TARGET) return new File([blob], f.name.replace(/\.(png|jpe?g)$/i, '') + '.jpg', { type: 'image/jpeg' });
    }
  } finally { img.close(); }
  return f;
}
function base64(file) { return new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result.split(',')[1]); r.onerror = () => reject(Object.assign(new Error('unreadable'), { code: 'empty' })); r.readAsDataURL(file); }); }
async function upload({ file, item, category }, progress) {
  const f = await fit(file);
  if (f.size <= LIMIT) return api('upload', { name: f.name, category, item: item || undefined, bytes: await base64(f), consent: true });
  const total = Math.ceil(f.size / PART), uploadId = Array.from(crypto.getRandomValues(new Uint8Array(16)), x => x.toString(16).padStart(2, '0')).join('');
  for (let index = 0; index < total; index++) {
    progress(index + 1, total);
    const bytes = await base64(f.slice(index * PART, (index + 1) * PART));
    try { await api('upload-part', { uploadId, index, total, bytes, consent: true }); } catch (e) { if (e.status === 401) throw e; await api('upload-part', { uploadId, index, total, bytes, consent: true }); }
  }
  return api('upload-finish', { uploadId, total, name: f.name, category, item: item || undefined, consent: true });
}

// "Something else to send?": an upload with no checklist item. The trustee sees it on the desk.
$('other-open').addEventListener('click', () => { const open = $('other-panel').hidden; $('other-panel').hidden = !open; $('other-open').setAttribute('aria-expanded', String(open)); if (open) $('other-category').focus(); });
$('other-cancel').addEventListener('click', () => { $('other-panel').hidden = true; $('other-open').setAttribute('aria-expanded', 'false'); $('other-open').focus(); });
$('other-choose').addEventListener('click', () => { if (!$('other-category').value) { $('other-msg').className = 'task-msg error'; $('other-msg').textContent = 'Choose what kind of record it is first.'; $('other-category').focus(); return; } $('other-file').click(); });
$('other-file').addEventListener('change', async () => {
  const files = [...$('other-file').files], category = $('other-category').value, msg = $('other-msg'); $('other-file').value = '';
  let ok = 0, code = '';
  for (const file of files) { const pre = T.precheck(file); if (pre) { code = code || pre; continue; }
    msg.className = 'task-msg'; msg.textContent = 'Sending ' + file.name + '…';
    try { await upload({ file, item: null, category }, (p, t) => { msg.textContent = 'Sending ' + file.name + ' · part ' + p + ' of ' + t + '…'; }); ok++; } catch (e) { code = code || e.code || 'failed'; } }
  if (ok) api('upload-done').catch(() => {});
  msg.className = 'task-msg' + (code ? ' error' : '');
  msg.textContent = (ok ? T.plural(ok, '1 document sent. ', '{n} documents sent. ') + reviewerName() + ' will take a look. ' : '') + (code ? T.sendText(code) : '');
  announce(msg.textContent);
});

// Reminder emails: checked means on. The server logs the change; nobody else is told.
$('remind').addEventListener('change', async () => { const box = $('remind'), paused = !box.checked; box.disabled = true;
  try { await portal('pause-reminders', { paused }); state.paused = paused; announce(paused ? 'Reminder emails are off.' : 'Reminder emails are on.'); render(); }
  catch (e) { box.checked = !box.checked; notice(e.message, true); } finally { box.disabled = false; } });

// Return to the page that sent you here: ?next=/berdia/plan/... (family pages on this site only).
// Kept for this tab for 15 minutes so it survives the round trip through Google sign-in;
// nav.js finishes the trip when Google lands on Home. Used once, then cleared.
const NEXT_KEY = 'berdia-next', safeNext = p => typeof p === 'string' && /^\/berdia\/(plan|portal)\/[A-Za-z0-9._/-]*$/.test(p) && !p.includes('..') && !p.includes('//') ? p : '';
const askedNext = safeNext(new URLSearchParams(location.search).get('next'));
if (askedNext) { try { sessionStorage.setItem(NEXT_KEY, JSON.stringify({ p: askedNext, t: Date.now() })); } catch {} }
function takeNext() { try { const v = JSON.parse(sessionStorage.getItem(NEXT_KEY) || 'null'); sessionStorage.removeItem(NEXT_KEY); return v && Date.now() - v.t < 900000 ? safeNext(v.p) : ''; } catch { return ''; } }
// Accepts the code, or the whole invitation link pasted in; spaces and case don't matter.
$('login-form').addEventListener('submit', async e => { e.preventDefault(); const b = e.currentTarget.querySelector('button[type=submit]'); b.disabled = true;
  try { const code = ($('invite').value.replace(/\s+/g, '').toLowerCase().match(/[a-f0-9]{64}/) || [''])[0]; if (!code) throw new Error('That doesn’t look like your invitation code. Paste the whole link from your email, or ask Stedmon for a new one.');
    await api('login', { token: code }); $('invite').value = ''; location.replace(takeNext() || '/berdia/portal/'); }
  catch (err) { notice(err.message, true); } finally { b.disabled = false; } });
window.addEventListener('pagehide', () => { $('profile-form').reset(); });
// Invitation link: face.works/berdia/k/<code> (survives email link wrappers) or the older #<code>.
// The code leaves the address bar before anything else runs; a link sign-in lands on Home.
// Sign in with Google returns here with ?google=<reason> only when it did not sign the person in.
const GOOGLE = { cancelled: 'Google sign-in was cancelled. Try again, or use the link in your invitation email.',
  unknown: 'That Google account isn’t on an invitation. Choose the account your invitation was sent to, or use the link in your invitation email.',
  mismatch: 'That Google account doesn’t match the one already linked to your invitation. Ask Stedmon for help.',
  expired: 'That sign-in took too long. Try Sign in with Google again.',
  failed: 'Google sign-in didn’t work this time. Try again, or use the link in your invitation email.' };
const googleResult = () => { const r = new URLSearchParams(location.search).get('google'); if (r !== null) history.replaceState(null, '', '/berdia/intake.html'); return r === null ? '' : (GOOGLE[r] || GOOGLE.failed); };
const linkCode = () => { const m = location.pathname.match(/^\/berdia\/k\/([^/]+)\/?$/); return ((m ? m[1] : '') || location.hash.slice(1)).toLowerCase(); };
(async () => { const google = googleResult(), token = linkCode(); if (token) history.replaceState(null, '', '/berdia/intake.html');
  try { if (token) { await api('login', { token }); location.replace(takeNext() || '/berdia/portal/'); return; } await enter(); if (askedNext) { const n = takeNext(); if (n) location.replace(n); } }
  catch (e) { lock(); if (token) notice(e.code === 'link_google_only' ? 'You now sign in with Google, so this link no longer works. Use the Sign in with Google button.' : e.code === 'invite_inactive' ? 'That link has expired or was replaced. Ask Stedmon for a new one.' : 'We couldn’t sign you in with that link. Tap it again, or ask Stedmon for a new one.', true); else if (google) notice(google, true); } })();
