'use strict';
const $ = id => document.getElementById(id);
let sessionTimer;
function notice(message, error = false) { $('notice').textContent = message; $('notice').className = error ? 'error' : ''; if (error) $('notice').focus(); }
async function api(action, data = {}, binary = false) {
  const r = await fetch('/berdia/api/intake', { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, ...data }) });
  if (!r.ok) { const value = await r.json().catch(() => ({})); if (r.status === 401) lock(); throw new Error(value.error || 'Could not complete the request. Your original files are unchanged.'); }
  return binary ? r.blob() : r.json();
}
function lock() { $('signed-in').hidden = true; $('locked').hidden = false; $('logout').hidden = true; $('details').replaceChildren(); $('records').replaceChildren(); clearTimeout(sessionTimer); }
function view(id) { document.querySelectorAll('.view').forEach(n => n.hidden = n.id !== id); document.querySelectorAll('[data-view]').forEach(n => n.setAttribute('aria-pressed', String(n.dataset.view === id))); if (id === 'receipts') loadRecords(); }
async function enter() {
  const s = await api('session'); $('greeting').textContent = 'Welcome, ' + s.name;
  $('locked').hidden = true; $('signed-in').hidden = false; $('logout').hidden = false;
  if (s.role === 'reviewer') { $('inbox-title').textContent = 'Family intake inbox.'; $('inbox-description').textContent = 'Private submissions for your review. Receipt does not establish legal completion or professional approval.'; }
  // Google sign-in lasts longer than a link sign-in; the server says when this session ends.
  const left = s.sessionExpiresAt ? Date.parse(s.sessionExpiresAt) - Date.now() : 30 * 60000;
  clearTimeout(sessionTimer); sessionTimer = setTimeout(() => { lock(); $('profile-form').reset(); notice('Your session ended. Sign in again to continue.'); }, Math.max(left, 0));
  notice('You’re signed in. Send what you have; you can come back for the rest.');
}
async function busy(form, fn) { const b = form.querySelector('button[type=submit]'); b.disabled = true; try { await fn(); } catch (e) { notice(e.message, true); } finally { b.disabled = false; } }
// Accepts the code, or the whole invitation link pasted in; spaces and case don't matter.
$('login-form').addEventListener('submit', e => { e.preventDefault(); busy(e.currentTarget, async () => { const code = ($('invite').value.replace(/\s+/g, '').toLowerCase().match(/[a-f0-9]{64}/) || [''])[0]; if (!code) throw new Error('That doesn’t look like your invitation code. Paste the whole link from your email, or ask Stedmon for a new one.'); await api('login', { token: code }); $('invite').value = ''; location.replace('/berdia/portal/'); }); });
$('logout').addEventListener('click', async () => { try { await api('logout'); lock(); $('profile-form').reset(); $('upload-form').reset(); $('file-list').replaceChildren(); notice('You’re signed out.'); } catch (e) { notice(e.message, true); } });
document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => view(b.dataset.view)));
$('profile-form').addEventListener('submit', e => { e.preventDefault(); busy(e.currentTarget, async () => { const p = Object.fromEntries(new FormData(e.currentTarget)); p.consent = p.consent === 'on'; const r = await api('profile', p); notice('Your information was received on ' + new Date(r.at).toLocaleString() + '. Thank you.'); }); });
$('files').addEventListener('change', () => { $('file-list').replaceChildren(); for (const f of $('files').files) { const li = document.createElement('li'); li.textContent = f.name + ' · ' + (f.size / 1000000).toFixed(2) + ' MB' + (f.size > 2500000 ? ' — too large' : ''); $('file-list').append(li); } });
function base64(file) { return new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result.split(',')[1]); r.onerror = () => reject(new Error('Could not read ' + file.name)); r.readAsDataURL(file); }); }
$('upload-form').addEventListener('submit', e => { e.preventDefault(); busy(e.currentTarget, async () => {
  const files = Array.from($('files').files); if (files.length > 10) throw new Error('Choose up to 10 files at a time.');
  if (files.some(f => f.size > 2500000 || f.size === 0)) throw new Error('Each file must contain data and be no larger than 2.5 MB.');
  let received = 0; const failures = [];
  for (const [index, f] of files.entries()) { const row = $('file-list').children[index]; row.textContent = f.name + ' — sending…';
    try { await api('upload', { name: f.name, category: $('category').value, bytes: await base64(f), consent: $('upload-consent').checked }); received++; row.textContent = f.name + ' — received'; }
    catch (error) { failures.push(f.name); row.textContent = f.name + ' — not received: ' + error.message; }
  }
  notice(received + ' of ' + files.length + ' documents received.' + (failures.length ? ' Re-select the failed files to retry. Successful uploads are saved.' : ' Thank you. Keep your originals.'), failures.length > 0);
  if (!failures.length) $('files').value = '';
}); });
async function loadRecords() { try { const { rows } = await api('list'); $('records').replaceChildren(); if (!rows.length) { $('records').textContent = 'No submissions yet. Your receipts will appear here.'; return; }
  for (const row of rows) { const item = document.createElement('article'); item.className = 'record'; const text = document.createElement('div'), p = document.createElement('p'), small = document.createElement('small'), b = document.createElement('button'); p.textContent = row.name; small.textContent = (row.kind === 'profile' ? 'Personal information' : row.category) + ' · ' + new Date(row.at).toLocaleString(); b.className = 'quiet'; b.textContent = row.kind === 'profile' ? 'View details' : 'Download'; b.addEventListener('click', async () => { b.disabled = true; try {
      if (row.kind === 'profile') { const { profile } = await api('read', { id: row.id }); showDetails(profile); }
      else { const blob = await api('download', { id: row.id }, true), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = row.name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
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
(async () => { const google = googleResult(), token = linkCode(); if (token) history.replaceState(null, '', '/berdia/intake.html'); try { if (token) { await api('login', { token }); location.replace('/berdia/portal/'); return; } await enter(); } catch (e) { lock(); if (token) notice(/invalid|expired/i.test(e.message) ? 'That link has expired or was replaced. Ask Stedmon for a new one.' : 'We couldn’t sign you in with that link. Tap it again, or ask Stedmon for a new one.', true); else if (google) notice(google, true); } })();
