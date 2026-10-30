'use strict';
// Marks the current section in the single Berdia header. Visual only.
(() => { const norm = (p) => p.replace(/index\.html$/, '').replace(/\/$/, '');
  const here = norm(location.pathname), sect = here.startsWith('/berdia/plan') ? '/berdia/plan' : here;
  for (const a of document.querySelectorAll('.family-nav a:not(.brand)')) { const p = norm(a.pathname);
    if (p === here || (sect === '/berdia/plan' && p.startsWith('/berdia/plan')) || ((here.startsWith('/berdia/portal/ops')) && p === '/berdia/portal/trust.html') || (here === '/berdia/documents.html' && p === '/berdia/portal/documents.html')) a.setAttribute('aria-current', 'page'); } })();

// Progressive reveal (visual only): stage comes from the portal summary, cached for this tab.
(() => { let st = ''; try { st = sessionStorage.getItem('berdia-stage') || ''; } catch {}
  if (st && !document.body.dataset.stage) document.body.dataset.stage = st;
  for (const a of document.querySelectorAll('.family-nav a')) if (/\/berdia\/(portal\/trust\.html|portal\/documents\.html)$/.test(a.pathname)) a.classList.add('is-later'); })();
