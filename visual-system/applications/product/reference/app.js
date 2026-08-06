const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.setAttribute('aria-selected', 'false'));
  panels.forEach((panel) => { panel.hidden = true; });
  tab.setAttribute('aria-selected', 'true');
  document.getElementById(tab.getAttribute('aria-controls')).hidden = false;
}));

const viewButtons = [...document.querySelectorAll('[data-view]')];
viewButtons.forEach((button) => button.addEventListener('click', () => {
  viewButtons.forEach((item) => { item.classList.remove('selected'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('selected');
  button.setAttribute('aria-pressed', 'true');
  document.querySelectorAll('[data-mode]').forEach((view) => { view.hidden = view.dataset.mode !== button.dataset.view; });
}));

const detail = document.querySelector('.detail');
document.querySelectorAll('[data-detail]').forEach((button) => button.addEventListener('click', () => {
  const [id, title, description] = button.dataset.detail.split('|');
  detail.innerHTML = `<p class="label">Selected relation / ${id}</p><h3>${title}</h3><p>${description}</p>`;
}));
