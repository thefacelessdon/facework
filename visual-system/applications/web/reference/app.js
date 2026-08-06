const menu = document.querySelector('.menu');
const nav = document.querySelector('#site-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  menu.querySelector('span').textContent = open ? '+' : '−';
  nav.classList.toggle('open', !open);
});
nav?.addEventListener('click', (event) => {
  if (event.target.matches('a') && window.innerWidth <= 860) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.querySelector('span').textContent = '+';
  }
});

const traceToggle = document.querySelector('.trace-toggle');
const tracePanel = document.querySelector('#trace-panel');
traceToggle?.addEventListener('click', () => {
  const open = traceToggle.getAttribute('aria-expanded') === 'true';
  traceToggle.setAttribute('aria-expanded', String(!open));
  traceToggle.querySelector('span').textContent = open ? '+' : '−';
  tracePanel.hidden = open;
});

const buttons = [...document.querySelectorAll('[data-filter]')];
const artifacts = [...document.querySelectorAll('[data-state]')];
const count = document.querySelector('#result-count');
const message = document.querySelector('.status-message');
buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  const filter = button.dataset.filter;
  let visible = 0;
  artifacts.forEach((artifact) => {
    const show = filter === 'all' || artifact.dataset.state === filter;
    artifact.hidden = !show;
    if (show) visible += 1;
  });
  count.textContent = visible;
  message.textContent = `${visible} artifacts shown: ${button.textContent}.`;
}));
