const canvas = document.querySelector('#field');
const ctx = canvas.getContext('2d', { alpha: false });
const screens = [...document.querySelectorAll('[data-screen]')];
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
const storageKey = 'facework-field-traces-v1';

const state = {
  screen: 'start',
  presence: 50,
  expression: 'reserved',
  stability: 50,
  mode: 'ambient',
  points: [],
  started: performance.now(),
  clearArmed: false,
  lastFrame: 0,
};

let collectiveTraces = [];

const hues = {
  reserved: '#9c9890',
  instrumental: '#8fafff',
  expressive: '#ffd089',
  porous: '#b69ae8',
};

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(innerWidth * dpr);
  canvas.height = Math.round(innerHeight * dpr);
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  render(performance.now());
}

function parameters() {
  const expressionOffset = { reserved: -0.8, instrumental: -0.25, expressive: 0.35, porous: 0.8 }[state.expression];
  return {
    sigma: 10,
    rho: 24 + state.presence * 0.08,
    beta: 2.2 + state.stability * 0.01,
    initial: [0.1 + (state.presence - 50) / 160, expressionOffset, 1.05 + weeklySeed() * 0.14],
  };
}

function weeklySeed() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const week = Math.floor((now - start) / 604800000);
  return ((week * 9301 + state.presence * 49297 + state.stability * 233) % 997) / 997;
}

function lorenz(params, count = 5200) {
  let [x, y, z] = params.initial;
  const points = [];
  const dt = 0.0065;
  for (let i = 0; i < count + 420; i += 1) {
    const dx = params.sigma * (y - x);
    const dy = x * (params.rho - z) - y;
    const dz = x * y - params.beta * z;
    x += dx * dt;
    y += dy * dt;
    z += dz * dt;
    if (i > 420) points.push([x, z]);
  }
  return points;
}

function fit(points) {
  let minX = Infinity; let maxX = -Infinity; let minY = Infinity; let maxY = -Infinity;
  points.forEach(([x, y]) => { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); });
  return { minX, maxX, minY, maxY };
}

function drawTrace(points, options = {}) {
  if (!points.length) return;
  const bounds = fit(points);
  const width = options.width || innerWidth * (innerWidth < 700 ? .9 : .58);
  const height = options.height || innerHeight * .62;
  const left = options.left ?? innerWidth * (innerWidth < 880 ? .05 : .38);
  const top = options.top ?? innerHeight * .17;
  const scale = Math.min(width / (bounds.maxX - bounds.minX), height / (bounds.maxY - bounds.minY));
  const offsetX = left + (width - (bounds.maxX - bounds.minX) * scale) / 2;
  const offsetY = top + (height - (bounds.maxY - bounds.minY) * scale) / 2;
  const limit = options.limit ?? points.length;
  ctx.beginPath();
  for (let i = 0; i < limit; i += 1) {
    const [x, y] = points[i];
    const px = offsetX + (x - bounds.minX) * scale;
    const py = offsetY + (bounds.maxY - y) * scale;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = options.color || hues[state.expression];
  ctx.globalAlpha = options.alpha ?? .62;
  ctx.lineWidth = options.lineWidth || 1;
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function syntheticParameters(index) {
  const n = (Math.sin(index * 91.73) + 1) / 2;
  return {
    sigma: 10,
    rho: 24 + n * 8,
    beta: 2.2 + ((index * 37) % 100) / 100,
    initial: [.1 + n * .5, -.7 + ((index * 17) % 100) / 70, 1 + n * .2],
  };
}

function drawCollective(time) {
  const columns = innerWidth < 600 ? 3 : 6;
  const rows = innerWidth < 600 ? 6 : 4;
  const cellW = innerWidth / columns;
  const cellH = innerHeight / rows;
  const drift = motionQuery.matches ? 0 : Math.sin(time / 2400) * 4;
  if (collectiveTraces.length !== columns * rows) {
    collectiveTraces = Array.from({ length: columns * rows }, (_, index) => lorenz(syntheticParameters(index), 850));
  }
  for (let i = 0; i < columns * rows; i += 1) {
    drawTrace(collectiveTraces[i], {
      left: (i % columns) * cellW + 12,
      top: Math.floor(i / columns) * cellH + 12 + drift * ((i % 3) - 1),
      width: cellW - 24,
      height: cellH - 24,
      color: ['#8fafff', '#9c9890', '#ffd089', '#b69ae8'][i % 4],
      alpha: .13,
      lineWidth: .65,
    });
  }
}

function render(time) {
  if (!motionQuery.matches && time - state.lastFrame < 32) {
    requestAnimationFrame(render);
    return;
  }
  state.lastFrame = time;
  ctx.fillStyle = '#11110f';
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  if (state.mode === 'collective') {
    drawCollective(time);
  } else {
    if (!state.points.length) state.points = lorenz(parameters());
    const elapsed = time - state.started;
    const reveal = state.mode === 'result' && !motionQuery.matches ? Math.min(1, elapsed / 900) : 1;
    const pulse = motionQuery.matches ? 0 : Math.sin(time / 1800) * .025;
    drawTrace(state.points, { limit: Math.floor(state.points.length * reveal), alpha: .36 + pulse, lineWidth: state.mode === 'result' ? 1.2 : .85 });
  }
  if (!motionQuery.matches) requestAnimationFrame(render);
}

function showScreen(name) {
  state.screen = name;
  screens.forEach((screen) => { screen.hidden = screen.dataset.screen !== name; });
  document.querySelector(`[data-screen="${name}"]`)?.querySelector('[data-screen-title], button, input')?.focus({ preventScroll: true });
}

function localDateKey(date = new Date()) {
  const part = (value) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${part(date.getMonth() + 1)}-${part(date.getDate())}`;
}

function refreshTrace(mode = state.mode) {
  state.mode = mode;
  state.points = lorenz(parameters());
  state.started = performance.now();
  state.lastFrame = 0;
  if (motionQuery.matches) render(state.started);
}

function reflection() {
  const presence = state.presence < 34 ? 'Presence stayed close' : state.presence > 66 ? 'Presence opened outward' : 'Presence held the middle';
  const stability = state.stability < 34 ? 'while the supporting field carried strain.' : state.stability > 66 ? 'and the supporting field held firmly.' : 'while the supporting field remained in motion.';
  return `${presence}, ${stability}`;
}

function updateResult() {
  const params = parameters();
  document.querySelector('#result-date').textContent = new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());
  document.querySelector('#reflection').textContent = reflection();
  document.querySelector('#presence-value').textContent = state.presence;
  document.querySelector('#expression-value').textContent = state.expression[0].toUpperCase() + state.expression.slice(1);
  document.querySelector('#stability-value').textContent = state.stability;
  const codes = document.querySelectorAll('#math code');
  codes[0].textContent = `σ ${params.sigma.toFixed(2)}`;
  codes[1].textContent = `ρ ${params.rho.toFixed(2)}`;
  codes[2].textContent = `β ${params.beta.toFixed(2)}`;
  codes[3].textContent = `seed ${weeklySeed().toFixed(3)}`;
}

function traces() {
  try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { return []; }
}

function renderArchive() {
  const items = traces();
  const list = document.querySelector('#archive-list');
  list.textContent = '';
  if (!items.length) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'Nothing saved yet. Your first trace will begin the record.';
    list.append(empty);
  } else {
    items.slice().reverse().forEach((item, reverseIndex) => {
      const article = document.createElement('article');
      article.className = 'archive-item';
      const date = document.createElement('small'); date.textContent = item.date;
      const line = document.createElement('p'); line.textContent = item.reflection;
      const meta = document.createElement('small'); meta.textContent = `${item.presence} presence / ${item.expression} / ${item.stability} stability`;
      article.append(date, line, meta);
      if (item.note) { const note = document.createElement('p'); note.textContent = `“${item.note}”`; article.append(note); }
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'archive-delete';
      remove.dataset.archiveIndex = String(items.length - 1 - reverseIndex);
      remove.textContent = 'Delete this trace';
      article.append(remove);
      list.append(article);
    });
  }
  document.querySelector('#archive-count').textContent = items.length;
  document.querySelector('.clear').hidden = !items.length;
}

document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => {
  const action = button.dataset.action;
  if (action === 'begin') { state.mode = 'private'; showScreen('presence'); refreshTrace('private'); }
  if (action === 'collective') { showScreen('collective'); state.mode = 'collective'; state.started = performance.now(); if (motionQuery.matches) render(state.started); }
  if (action === 'start') { showScreen('start'); refreshTrace('ambient'); }
  if (action === 'generate') { updateResult(); showScreen('result'); refreshTrace('result'); }
  if (action === 'restart') { showScreen('presence'); refreshTrace('private'); }
  if (action === 'archive') document.body.classList.toggle('archive-open');
}));

document.querySelectorAll('[data-next]').forEach((button) => button.addEventListener('click', () => showScreen(button.dataset.next)));

document.querySelectorAll('input[type="range"]').forEach((input) => input.addEventListener('input', () => {
  state[input.id] = Number(input.value);
  document.querySelector(`output[for="${input.id}"]`).textContent = input.value;
  refreshTrace('private');
}));

document.querySelectorAll('input[name="expression"]').forEach((input) => input.addEventListener('change', () => { state.expression = input.value; refreshTrace('private'); }));

document.querySelector('.mapping-toggle').addEventListener('click', (event) => {
  const panel = document.querySelector('#math');
  const open = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!open));
  event.currentTarget.textContent = open ? 'Show the mapping' : 'Hide the mapping';
  panel.hidden = open;
});

document.querySelector('.privacy-toggle').addEventListener('click', (event) => {
  const panel = document.querySelector('#privacy');
  const open = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!open));
  panel.hidden = open;
});
document.querySelector('.privacy-close').addEventListener('click', () => {
  document.querySelector('#privacy').hidden = true;
  document.querySelector('.privacy-toggle').setAttribute('aria-expanded', 'false');
  document.querySelector('.privacy-toggle').focus();
});

document.querySelector('.note-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.querySelector('#face-note').value.trim();
  const items = traces();
  const entry = { date: localDateKey(), presence: state.presence, expression: state.expression, stability: state.stability, reflection: reflection(), note };
  const current = items.findIndex((item) => item.date === entry.date);
  if (current >= 0) items[current] = entry; else items.push(entry);
  localStorage.setItem(storageKey, JSON.stringify(items.slice(-52)));
  document.querySelector('.save-status').textContent = 'Saved to this browser. Nothing was uploaded.';
  renderArchive();
});

document.querySelector('.clear').addEventListener('click', (event) => {
  if (!state.clearArmed) {
    state.clearArmed = true;
    event.currentTarget.textContent = 'Confirm clear';
    return;
  }
  localStorage.removeItem(storageKey);
  state.clearArmed = false;
  event.currentTarget.textContent = 'Clear archive';
  renderArchive();
});

document.querySelector('#archive-list').addEventListener('click', (event) => {
  const remove = event.target.closest('[data-archive-index]');
  if (!remove) return;
  const items = traces();
  items.splice(Number(remove.dataset.archiveIndex), 1);
  localStorage.setItem(storageKey, JSON.stringify(items));
  renderArchive();
});

motionQuery.addEventListener('change', () => { state.started = performance.now(); render(state.started); });
addEventListener('resize', resize);
renderArchive();
resize();
requestAnimationFrame(render);
