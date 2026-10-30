'use strict';
// Marks the current section in the one Berdia masthead. Visual only.
(() => {
  const norm = (p) => p.replace(/index\.html$/, '').replace(/\/$/, '');
  const here = norm(location.pathname);
  const section = here.startsWith('/berdia/plan') ? '/berdia/plan'
    : here.startsWith('/berdia/portal/ops') ? '/berdia/portal/trust.html'
    : here === '/berdia/documents.html' ? '/berdia/portal/documents.html' : here;
  for (const a of document.querySelectorAll('.bm-nav a')) {
    const p = norm(a.pathname);
    if (p === section || (section === '/berdia/plan' && p.startsWith('/berdia/plan'))) a.setAttribute('aria-current', 'page');
  }
})();

// Old one-scroll plan links (index.html#part3) land on the matching chapter.
(() => {
  const m = location.pathname.match(/\/berdia\/plan\/(index\.html)?$/) && location.hash.match(/^#part([1-7])$/);
  if (m) location.replace('/berdia/plan/chapter-' + m[1] + '.html');
})();

// Progressive reveal (visual only): stage comes from the portal summary, cached for this tab.
(() => {
  let st = ''; try { st = sessionStorage.getItem('berdia-stage') || ''; } catch {}
  if (st && !document.body.dataset.stage) document.body.dataset.stage = st;
})();
