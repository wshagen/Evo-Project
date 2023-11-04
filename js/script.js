

  
const header = document.querySelector('header');
const body = document.querySelector('body');
const para = document.querySelectorAll('P');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');



function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark' 
    : "Light"
  body.classList.toggle('gradient');
  
  for(const i of para) {
    i.classList.toggle('paradark');
  }
  header.classList.toggle('header');
  header.classList.toggle('darkheader');
  modeStatus.innerText = "Current Mode: " + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);