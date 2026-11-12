'use strict';
// Tasks rules with no DOM (portal plan T1/T2): which group each checklist item is in, the words on each row, and
// what a Send uploads. intake.js renders from these; berdia-trust's node tests load this same file.
(function (root) {
  const NEEDS_YOU = ['requested', 'returned'];
  const plural = (n, one, many) => n === 1 ? one : many.replace('{n}', n);
  const firstName = (name) => String(name || '').trim().split(/\s+/)[0] || '';

  // Needs you: requested and returned (returned first). With the reviewer: received. Done: accepted or waived.
  // Items not asked for yet (needed), the profile included, are not shown to anyone on Tasks.
  function groups(items) {
    const list = Array.isArray(items) ? items : [];
    const needsYou = (i) => typeof i.needsYou === 'boolean' ? i.needsYou : NEEDS_YOU.includes(i.status);
    const open = list.filter(needsYou);
    return {
      needsYou: [...open.filter(i => i.status === 'returned'), ...open.filter(i => i.status !== 'returned')],
      withReviewer: list.filter(i => i.status === 'received'),
      done: list.filter(i => i.status === 'accepted' || i.status === 'waived'),
    };
  }
  // DR-9: thank the person only when nothing is left AND they actually sent something for an item.
  function finished(g) { return g.needsYou.length === 0 && [...g.withReviewer, ...g.done].some(i => (i.files || 0) > 0 || i.id === 'profile'); }

  function heading(name, g) {
    const first = firstName(name), n = g.needsYou.length;
    if (n === 0 && finished(g)) return 'Thank you' + (first ? ', ' + first : '') + '. That’s everything for now.';
    if (n === 0) return 'Nothing to send right now.';
    return (first ? 'Hi ' + first + '. ' : '') + plural(n, '1 thing to send.', '{n} things to send.');
  }
  // The lines under the thank-you heading depend on whether reminder emails are on (DR-9).
  function finishLines(reviewerName, paused) {
    const who = reviewerName || 'Stedmon';
    return paused ? [who + ' will look through it. If anything else is needed, it will show here.']
      : [who + ' will look through it. If anything else is needed, you’ll get an email. Reminders have stopped.'];
  }
  // Group names. A reviewer looking at their own list sees "Waiting for your review" (DR-16).
  function labels(reviewerName, self) {
    const who = reviewerName || 'Stedmon';
    return { needsYou: 'Needs you', withReviewer: self ? 'Waiting for your review' : 'With ' + who, done: 'Done' };
  }
  const fmtDate = (at) => { try { return new Date(at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); } catch { return ''; } };
  // The status line on a row: [text, tone]. Tone maps to a text colour tier (attention, exposure, settled, meta).
  function statusLine(item, reviewerName, self) {
    const who = reviewerName || 'Stedmon';
    if (item.status === 'returned') return [(self ? 'Returned' : who + ' sent this back') + (item.reason ? ': ' + item.reason : '.'), 'exposure'];
    if (item.status === 'requested') return ['Requested', 'attention'];
    if (item.status === 'received') return [(item.lastFileAt ? 'Sent ' + fmtDate(item.lastFileAt) + ', ' : '') + 'waiting for a look' + (item.files > 1 ? ' · ' + plural(item.files, '1 file', '{n} files') : ''), 'attention'];
    if (item.status === 'accepted') return ['Accepted' + (item.at ? ' ' + fmtDate(item.at) : ''), 'settled'];
    if (item.status === 'waived') return ['Not needed', 'meta'];
    return ['', 'meta'];
  }
  // A send from a row: one upload per chosen file, each tagged to the row's item with its single category.
  function uploads(item, files) {
    const category = (item.categories || [])[0];
    if (!category) throw new Error('This item can’t take a file.');
    return Array.from(files || []).map(file => ({ file, item: item.id, category }));
  }
  // Row-level words for an upload that didn't go, keyed on the server's error code (T14), never its message.
  const LIMIT_MB = 25;
  const SEND_TEXT = {
    failed: 'That didn’t send. Check your signal and try again.',
    file_too_large: 'That file is too large (max ' + LIMIT_MB + ' MB).',
    file_type: 'Send a photo or PDF.',
    invalid_upload: 'Send a photo or PDF.',
    heic: 'This photo format can’t be sent yet. Tap Choose a file and pick the photo, or send a PDF.',
    empty: 'Your phone couldn’t open this file. If it’s in Google Drive, download it to the phone first, or take a photo of it.',
    session_expired: 'You’ve been signed out. Sign in again, then send this one again. Your file wasn’t sent.',
    invite_inactive: 'You’ve been signed out. Sign in again, then send this one again. Your file wasn’t sent.',
    upload_limit: 'You’ve sent a lot of files. Call or text Stedmon to send more.',
  };
  const sendText = (code) => SEND_TEXT[code] || SEND_TEXT.failed;
  // Checks that need no server: a HEIC photo, an empty file, one over the limit.
  function precheck(file) {
    if (!file || file.size === 0) return 'empty';
    if (/heic|heif/i.test(file.type || '') || /\.(heic|heif)$/i.test(file.name || '')) return 'heic';
    if (file.size > LIMIT_MB * 1000000) return 'file_too_large';
    if (file.type && !/^(image\/(jpeg|png)|application\/pdf)$/.test(file.type)) return 'file_type';
    return '';
  }
  const telHref = (phone, scheme = 'tel') => { const p = String(phone || '').replace(/[^+0-9]/g, ''); return p ? scheme + ':' + p : ''; };

  const api = { groups, finished, heading, finishLines, labels, statusLine, uploads, sendText, precheck, telHref, plural, firstName };
  if (typeof module === 'object' && module.exports) module.exports = api; else root.BerdiaTasks = api;
})(typeof window !== 'undefined' ? window : globalThis);
