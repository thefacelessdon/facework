'use strict';
const $ = id => document.getElementById(id);
let sessionTimer;
function notice(message, error = false) { $('notice').textContent = message; $('notice').className = error ? 'error' : ''; if (error) $('notice').focus(); }
async function api(action, data = {}, binary = false) {
  const r = await fetch('/berdia/api/intake', { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, ...data }) });
  if (!r.ok) { const value = await r.json().catch(() => ({})); if (r.status === 401) lock(); throw new Error(value.error || 'Could not complete the request. Your original files are unchanged.'); }
  return binary ? r.blob() : r.json();
}
function lock() { $('checklist').hidden = true; $('cl-items').replaceChildren(); checklistItems = []; $('signed-in').hidden = true; $('locked').hidden = false; $('logout').hidden = true; $('details').replaceChildren(); $('records').replaceChildren(); clearTimeout(sessionTimer); }
function view(id) { document.querySelectorAll('.view').forEach(n => n.hidden = n.id !== id); document.querySelectorAll('[data-view]').forEach(n => n.setAttribute('aria-pressed', String(n.dataset.view === id))); if (id === 'receipts') loadRecords(); }
async function enter() {
  const s = await api('session'); $('greeting').textContent = 'Welcome, ' + s.name;
  $('locked').hidden = true; $('signed-in').hidden = false; $('logout').hidden = false;
  if (s.role === 'reviewer') { $('inbox-title').textContent = 'Family intake inbox.'; $('inbox-description').textContent = 'Private submissions for your review. Receipt does not establish legal completion or professional approval.'; }
  // Google sign-in lasts longer than a link sign-in; the server says when this session ends.
  const left = s.sessionExpiresAt ? Date.parse(s.sessionExpiresAt) - Date.now() : 30 * 60000;
  clearTimeout(sessionTimer); sessionTimer = setTimeout(() => { lock(); $('profile-form').reset(); notice('Your session ended. Sign in again to continue.'); }, Math.max(left, 0));
  notice('You’re signed in. Send what you have; you can come back for the rest.');
  loadChecklist();
}
// WP-B6 "Your checklist": your own items only, from the registry and the trustee's reviews.
const CL_LABEL = { needed: 'To send', requested: 'Requested', received: 'Received, being checked', accepted: 'Accepted', returned: 'Needs another copy', waived: 'Not needed' };
const CL_CHIP = { needed: 'open', requested: 'attention', received: 'open', accepted: 'settled', returned: 'attention', waived: 'settled' };
let checklistItems = [];
async function loadChecklist() {
  try {
    const r = await fetch('/berdia/api/portal', { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'checklist' }) });
    if (!r.ok) return; // the checklist is a guide; Tasks still work without it
    const { checklist, duties } = await r.json(); checklistItems = checklist.items;
    $('cl-duty').textContent = (duties.length ? 'Asked of you as: ' + duties.join(', ') + '. ' : '') + checklist.done + ' of ' + checklist.total + ' done.';
    const ol = $('cl-items'); ol.replaceChildren();
    for (const i of checklist.items) {
      const li = document.createElement('li'), div = document.createElement('div'), t = document.createElement('p'), d = document.createElement('p'), s = document.createElement('span'), chip = document.createElement('span');
      t.className = 't'; t.textContent = i.title; d.className = 'd'; d.textContent = i.why; div.append(t, d);
      if (i.reason) { const why = document.createElement('p'); why.className = 'd'; why.textContent = 'From the trustee: ' + i.reason; div.append(why); }
      s.className = 's'; chip.className = 'chip ' + CL_CHIP[i.status]; chip.textContent = CL_LABEL[i.status] || i.status; s.append(chip); li.append(div, s); ol.append(li);
    }
    $('checklist').hidden = false; itemOptions();
  } catch {}
}
// Upload form: offer only your open items that take this kind of record.
function itemOptions() {
  const cat = $('category').value, sel = $('item'), keep = sel.value;
  const open = checklistItems.filter(i => i.categories.includes(cat) && !['accepted', 'waived'].includes(i.status));
  sel.replaceChildren(Object.assign(document.createElement('option'), { value: '', textContent: 'Not sure, or none' }));
  for (const i of open) sel.append(Object.assign(document.createElement('option'), { value: i.id, textContent: i.title, selected: i.id === keep }));
  $('item-wrap').hidden = !open.length;
}
$('category').addEventListener('change', itemOptions);
// Return to the page that sent you here: ?next=/berdia/plan/... (family pages on this site only).
// Kept for this tab for 15 minutes so it survives the round trip through Google sign-in;
// nav.js finishes the trip when Google lands on Home. Used once, then cleared.
const NEXT_KEY = 'berdia-next', safeNext = p => typeof p === 'string' && /^\/berdia\/(plan|portal)\/[A-Za-z0-9._/-]*$/.test(p) && !p.includes('..') && !p.includes('//') ? p : '';
const askedNext = safeNext(new URLSearchParams(location.search).get('next'));
if (askedNext) { try { sessionStorage.setItem(NEXT_KEY, JSON.stringify({ p: askedNext, t: Date.now() })); } catch {} }
function takeNext() { try { const v = JSON.parse(sessionStorage.getItem(NEXT_KEY) || 'null'); sessionStorage.removeItem(NEXT_KEY); return v && Date.now() - v.t < 900000 ? safeNext(v.p) : ''; } catch { return ''; } }
async function busy(form, fn) { const b = form.querySelector('button[type=submit]'); b.disabled = true; try { await fn(); } catch (e) { notice(e.message, true); } finally { b.disabled = false; } }
// Accepts the code, or the whole invitation link pasted in; spaces and case don't matter.
$('login-form').addEventListener('submit', e => { e.preventDefault(); busy(e.currentTarget, async () => { const code = ($('invite').value.replace(/\s+/g, '').toLowerCase().match(/[a-f0-9]{64}/) || [''])[0]; if (!code) throw new Error('That doesn’t look like your invitation code. Paste the whole link from your email, or ask Stedmon for a new one.'); await api('login', { token: code }); $('invite').value = ''; location.replace(takeNext() || '/berdia/portal/'); }); });
$('logout').addEventListener('click', async () => { try { await api('logout'); lock(); $('profile-form').reset(); $('upload-form').reset(); queue = []; render(); notice('You’re signed out.'); } catch (e) { notice(e.message, true); } });
document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => view(b.dataset.view)));
$('profile-form').addEventListener('submit', e => { e.preventDefault(); busy(e.currentTarget, async () => { const p = Object.fromEntries(new FormData(e.currentTarget)); p.consent = p.consent === 'on'; const r = await api('profile', p); notice('Your information was received on ' + new Date(r.at).toLocaleString() + '. Thank you.'); }); });
// Phone photos of documents are often 3–5 MB. Photos over the limit are resized in the browser
// (long side 2400 px keeps text sharp, then lower JPEG quality only if needed); PDFs can't be shrunk here.
const LIMIT = 2500000, TARGET = 2300000, isPhoto = f => /^image\/(jpeg|png)$/.test(f.type);
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
// Picked files collect in a list: on Android each pick replaces the input's selection, so the
// input is only a way to add files, and it is cleared after every pick. Problems that can be
// known before sending (a PDF over the limit, an empty or unreadable file) show on the row
// right away, in plain words, instead of after a failed send.
const MAX_FILES = 10, PART = 1500000, MAX_TOTAL = 25000000, mb = n => (n / 1000000).toFixed(1) + ' MB';
const STATUS = { pending: 'ready to send', sending: 'sending…', received: 'received', already: 'already received earlier, no duplicate saved', blocked: '', failed: '' };
let queue = [];
const tooBig = f => f.size > MAX_TOTAL;
function blockReason(f) {
  if (f.size === 0) return 'Your phone couldn’t open this file. If it’s in Google Drive, download it to the phone first, or take a photo of it.';
  if (tooBig(f)) return 'This file is ' + mb(f.size) + ', over the 25 MB limit. Text or email it to Stedmon instead, or split it into smaller PDFs.';
  return '';
}
function reasonFor(error) {
  if (error instanceof TypeError || /network|fetch/i.test(error.message)) return 'The connection dropped. Tap Send documents again.';
  return error.message;
}
function render() {
  const list = $('file-list'); list.replaceChildren();
  for (const item of queue) {
    const li = document.createElement('li'), name = document.createElement('span'), state = document.createElement('small');
    li.className = 'file-row ' + item.status; name.className = 'file-name'; name.textContent = item.file.name + ' · ' + mb(item.file.size);
    state.className = 'file-state'; state.textContent = item.reason ? 'Not sent: ' + item.reason : STATUS[item.status] + (item.status === 'pending' && item.file.size > LIMIT ? (isPhoto(item.file) ? ' (will be resized to fit)' : ' (large file, sent in parts)') : '');
    li.append(name, state);
    if (['pending', 'blocked', 'failed'].includes(item.status)) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'quiet remove'; b.textContent = 'Remove';
      b.setAttribute('aria-label', 'Remove ' + item.file.name); b.addEventListener('click', () => { queue = queue.filter(q => q !== item); render(); });
      li.append(b);
    }
    list.append(li);
  }
  const waiting = queue.filter(q => q.status === 'pending' || q.status === 'failed').length;
  $('add-label').textContent = queue.length ? 'Add another document' : 'Choose documents';
  $('send').textContent = waiting > 1 ? 'Send ' + waiting + ' documents' : 'Send documents';
}
$('files').addEventListener('change', () => {
  // A new pick after a finished send starts a fresh list.
  if (queue.length && queue.every(q => q.status === 'received' || q.status === 'already')) queue = [];
  for (const file of $('files').files) {
    if (queue.some(q => q.file.name === file.name && q.file.size === file.size && q.file.lastModified === file.lastModified)) continue;
    if (queue.filter(q => q.status !== 'received' && q.status !== 'already').length >= MAX_FILES) { notice('You can send up to ' + MAX_FILES + ' documents at a time. Send these first, then add more.', true); break; }
    const reason = blockReason(file); queue.push({ file, status: reason ? 'blocked' : 'pending', reason });
  }
  $('files').value = ''; render();
});
function base64(file) { return new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result.split(',')[1]); r.onerror = () => reject(new Error('Your phone couldn’t open this file. If it’s in Google Drive, download it to the phone first, or take a photo of it.')); r.readAsDataURL(file); }); }
// Files over 2.5 MB go in 1.5 MB parts, then the server checks the whole file and files it.
async function sendInParts(f, category, item, tag = '') {
  const total = Math.ceil(f.size / PART), uploadId = Array.from(crypto.getRandomValues(new Uint8Array(16)), x => x.toString(16).padStart(2, '0')).join('');
  for (let index = 0; index < total; index++) {
    $('send').textContent = 'Sending part ' + (index + 1) + ' of ' + total + '…';
    const bytes = await base64(f.slice(index * PART, (index + 1) * PART));
    try { await api('upload-part', { uploadId, index, total, bytes, consent: true }); } catch { await api('upload-part', { uploadId, index, total, bytes, consent: true }); }
  }
  return api('upload-finish', { uploadId, total, name: f.name, category, item: tag || undefined, consent: true });
}
$('upload-form').addEventListener('submit', e => { e.preventDefault(); busy(e.currentTarget, async () => {
  const todo = queue.filter(q => q.status === 'pending' || q.status === 'failed');
  if (!todo.length) throw new Error(queue.some(q => q.status === 'blocked') ? 'None of these can be sent here. See the note under each file.' : 'Choose at least one document first.');
  if (!$('category').value) throw new Error('Choose what kind of record it is first.');
  if (!$('upload-consent').checked) throw new Error('Please check the box to confirm before sending.');
  for (const item of todo) {
    item.status = 'sending'; item.reason = ''; render();
    try { const u = await fit(item.file), category = $('category').value, tag = $('item-wrap').hidden ? '' : $('item').value;
      const r = u.size <= LIMIT ? await api('upload', { name: u.name, category, item: tag || undefined, bytes: await base64(u), consent: true }) : await sendInParts(u, category, item, tag);
      item.status = r.already ? 'already' : 'received'; }
    catch (error) { item.status = 'failed'; item.reason = reasonFor(error); }
    render();
  }
  if (todo.some(q => q.status === 'received')) { api('upload-done').catch(() => {}); loadChecklist(); } // one alert to the trustee per batch
  const sent = todo.filter(q => q.status === 'received' || q.status === 'already'), notSent = queue.filter(q => q.status === 'failed' || q.status === 'blocked');
  const msg = (sent.length ? sent.length + (sent.length === 1 ? ' document' : ' documents') + ' received. ' : '') +
    (notSent.length ? 'Not sent: ' + notSent.map(q => q.file.name + ' (' + q.reason + ')').join(' ') + ' Everything marked received is saved.' : 'Thank you. Keep your originals.');
  notice(msg, notSent.length > 0);
}); });
// A large file downloads part by part (each response stays under the 4.5 MB cap); the parts join here.
async function downloadFile(call, id) { const { parts } = await call('download-info', { id }), out = []; for (let part = 0; part < parts; part++) out.push(await call('download', { id, part }, true)); return new Blob(out, { type: out[0].type }); }
async function loadRecords() { try { const { rows } = await api('list'); $('records').replaceChildren(); if (!rows.length) { $('records').textContent = 'No submissions yet. Your receipts will appear here.'; return; }
  for (const row of rows) { const item = document.createElement('article'); item.className = 'record'; const text = document.createElement('div'), p = document.createElement('p'), small = document.createElement('small'), b = document.createElement('button'); p.textContent = row.name; small.textContent = (row.kind === 'profile' ? 'Personal information' : row.category) + ' · ' + new Date(row.at).toLocaleString(); b.className = 'quiet'; b.textContent = row.kind === 'profile' ? 'View details' : 'Download'; b.addEventListener('click', async () => { b.disabled = true; try {
      if (row.kind === 'profile') { const { profile } = await api('read', { id: row.id }); showDetails(profile); }
      else { const blob = await downloadFile(api, row.id), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = row.name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
    } catch (e) { notice(e.message, true); } finally { b.disabled = false; } }); text.append(p,small); item.append(text,b); $('records').append(item); }
} catch (e) { notice(e.message, true); } }
function showDetails(p) { $('details').replaceChildren(); const labels = { fullName: 'Legal name', preferredName: 'Preferred name', address: 'Mailing address', email: 'Email', phone: 'Phone', missing: 'Help finding records', notes: 'Notes' }; for (const [key,label] of Object.entries(labels)) { const dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = label; dd.textContent = p[key] || 'Not supplied'; $('details').append(dt,dd); } $('record-detail').hidden = false; $('close-detail').focus(); }
$('refresh').addEventListener('click', loadRecords); $('close-detail').addEventListener('click', () => { $('record-detail').hidden = true; $('details').replaceChildren(); });
window.addEventListener('pagehide', () => { $('profile-form').reset(); $('details').replaceChildren(); });
// Invitation link: face.works/berdia/k/<code> (survives email link wrappers) or the older #<code>.
// The code leaves the address bar before anything else runs; a link sign-in lands on Home.
// Case-insensitive; any /berdia/k/<something> counts as a link attempt, so a mangled link
// still gets a plain message instead of a blank sign-in screen.
// Sign in with Google returns here with ?google=<reason> only when it did not sign the person in.
const GOOGLE = { cancelled: 'Google sign-in was cancelled. Try again, or use the link in your invitation email.',
  unknown: 'That Google account isn’t on an invitation. Choose the account your invitation was sent to, or use the link in your invitation email.',
  mismatch: 'That Google account doesn’t match the one already linked to your invitation. Ask Stedmon for help.',
  expired: 'That sign-in took too long. Try Sign in with Google again.',
  failed: 'Google sign-in didn’t work this time. Try again, or use the link in your invitation email.' };
const googleResult = () => { const r = new URLSearchParams(location.search).get('google'); if (r !== null) history.replaceState(null, '', '/berdia/intake.html'); return r === null ? '' : (GOOGLE[r] || GOOGLE.failed); };
const linkCode = () => { const m = location.pathname.match(/^\/berdia\/k\/([^/]+)\/?$/); return ((m ? m[1] : '') || location.hash.slice(1)).toLowerCase(); };
(async () => { const google = googleResult(), token = linkCode(); if (token) history.replaceState(null, '', '/berdia/intake.html'); try { if (token) { await api('login', { token }); location.replace(takeNext() || '/berdia/portal/'); return; } await enter(); if (askedNext) { const n = takeNext(); if (n) location.replace(n); } } catch (e) { lock(); if (token) notice(/Sign in with Google/.test(e.message) ? 'You now sign in with Google, so this link no longer works. Use the Sign in with Google button.' : /invalid|expired/i.test(e.message) ? 'That link has expired or was replaced. Ask Stedmon for a new one.' : 'We couldn’t sign you in with that link. Tap it again, or ask Stedmon for a new one.', true); else if (google) notice(google, true); } })();
