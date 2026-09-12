const $ = (selector) => document.querySelector(selector);
const launcherPanel = $('#launcher-panel');

function openWindow(id) {
  document.querySelectorAll('[data-window]').forEach((window) => window.classList.add('hidden'));
  $(`#${id}`).classList.remove('hidden');
  launcherPanel.classList.add('hidden');
}

document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => openWindow(button.dataset.open)));
document.querySelectorAll('.close').forEach((button) => button.addEventListener('click', () => button.closest('[data-window]').classList.add('hidden')));
$('#launcher').addEventListener('click', () => launcherPanel.classList.toggle('hidden'));
$('#dock-launcher').addEventListener('click', () => launcherPanel.classList.toggle('hidden'));
$('#dismiss').addEventListener('click', () => $('#welcome-card').classList.add('hidden'));
$('#focus-button').addEventListener('click', (event) => {
  const paused = event.currentTarget.textContent === 'Resume focus';
  event.currentTarget.textContent = paused ? 'Pause focus' : 'Resume focus';
  $('.focus-content p').textContent = paused ? '47 min remaining' : 'Focus paused';
});

function updateClock() {
  $('#clock').textContent = new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
}
updateClock();
setInterval(updateClock, 1000);
