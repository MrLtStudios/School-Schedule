const currentDayEl = document.getElementById('currentDayOfWeek');
const currentDateEl = document.getElementById('currentdate');
const currentTimeEl = document.getElementById('currenttime');

const lunchButtons = {
  A: document.getElementById('lunchA'),
  B: document.getElementById('lunchB'),
  C: document.getElementById('lunchC')
};

const mainContent = document.getElementById('mainContent');
const lunchSelector = document.getElementById('lunchSelector');
const scheduleDisplayName = document.getElementById('scheduleDisplayName');

let selectedLunch = null;
let currentSchedule = '';

const schedules = {
  '8PRD-A': [['1', '07:50'], ['PassingTime','08:37'], ['2','08:42'], ['EndOfSchool','15:10']],
  '8PRD-B': [['1', '07:50'], ['PassingTime','08:37'], ['2','08:42'], ['EndOfSchool','15:10']],
  '8PRD-C': [['1', '07:50'], ['PassingTime','08:37'], ['2','08:42'], ['EndOfSchool','15:10']]
};

function updateClock() {
  const now = new Date();
  currentDateEl.textContent = now.toLocaleDateString();
  currentTimeEl.textContent = now.toLocaleTimeString();
  currentDayEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}
setInterval(updateClock, 1000);
updateClock();

function selectLunch(lunch) {
  selectedLunch = lunch;
  currentSchedule = '8PRD-' + lunch;
  scheduleDisplayName.textContent = currentSchedule;
  lunchSelector.style.display = 'none';
  mainContent.style.display = 'block';
}

lunchButtons.A.addEventListener('click', () => selectLunch('A'));
lunchButtons.B.addEventListener('click', () => selectLunch('B'));
lunchButtons.C.addEventListener('click', () => selectLunch('C'));
