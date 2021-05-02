/* THEME SWITHCER */

const themeSwitcher = document.querySelector('.switch__checkbox');
function setTheme() {
  if (localStorage.darkThemeState !== undefined) {
    if (localStorage.getItem('darkThemeState')) {
      // Set Dark
      document.documentElement.style.setProperty('--base-color', '#333');
      document.documentElement.style.setProperty('--contrast-base-color', '#fefefe');
      document.documentElement.style.setProperty('--additional-color', '#4f4f4f');
      document.documentElement.style.setProperty('--contrast-additional-color', '#f2f2f2');
      document.documentElement.style.setProperty('--map-bg-color', '#4f4f4f');
      themeSwitcher.checked = true;
    } else {
      // Set Light
      document.documentElement.style.setProperty('--base-color', '#fefefe');
      document.documentElement.style.setProperty('--contrast-base-color', '#333');
      document.documentElement.style.setProperty('--additional-color', '#f2f2f2');
      document.documentElement.style.setProperty('--contrast-additional-color', '#4f4f4f');
      document.documentElement.style.setProperty('--map-bg-color', '#fefefe');
      themeSwitcher.checked = false;
    }
  }
}
setTheme();

function themeSwith() {
  if (localStorage.darkThemeState === undefined) {
    localStorage.setItem('darkThemeState', '');
  }
  if (localStorage.getItem('darkThemeState')) {
    localStorage.setItem('darkThemeState', '');
    setTheme();
  } else {
    localStorage.setItem('darkThemeState', '1');
    setTheme();
  }
}
themeSwitcher.addEventListener('click', themeSwith);

/* Video preview switcher */
const video = document.querySelector('.video');
const videoSelectors = document.querySelector('.video-selection__wrapper');
function videoSlider(event) {
  if (event.target.closest('.video-selection__button').classList.contains('video-selection__button_active')) return;
  const currentActive = videoSelectors.querySelector('.video-selection__button_active');
  currentActive.classList.remove('video-selection__button_active');
  const value = event.target.closest('.video-selection__button').dataset.index;
  const newActive = videoSelectors.querySelectorAll('.video-selection__button')[value - 1];
  newActive.classList.add('video-selection__button_active');
  video.style.setProperty('--active-dot-number', value);
}
videoSelectors.addEventListener('click', videoSlider);
/* Stream switcher */
function streamSwithcer(event) {
  const stream = video.querySelector('.video__stream');
  const chosenWrapper = event.target.closest('.video__preview_w');
  let chosen = chosenWrapper.querySelector('.video__preview');
  const newUrl = chosen.src;
  chosen.src = stream.src;
  stream.src = newUrl;
}
video.addEventListener('click', streamSwithcer);

/* --------------- */
// DONATE FEED MODAL POP UP
const donateButtons = document.querySelectorAll('.donate-btn');
donateButtons.forEach(item => item.addEventListener('click', (event) => {
  const popup = document.querySelector('.popup__wrapper');
  popup.style.setProperty('display', 'flex');
  setTimeout(() => {
    document.body.style.setProperty('--popup-bg-blur', '3px');
    popup.style.setProperty('--popup-opacity', '1');
  }, 0);
}));

const popupCloseBtn = document.querySelector('.popup__close');
function popupClose(event) {
  document.body.style.setProperty('--popup-bg-blur', '0px');
  const popup = document.querySelector('.popup__wrapper');
  popup.style.setProperty('--popup-opacity', '0');
  setTimeout(() => {popup.style.setProperty('display', 'none')}, 300);
}

popupCloseBtn.addEventListener('click', popupClose);

const popupWrapper = document.querySelector('.popup__wrapper');
popupWrapper.addEventListener('click', (event) => {
  if (event.target.closest('.popup') != null) return;
  popupClose(event);
});

const popupSubmitBtn = document.getElementById('popup-form__submit');
popupSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  popupClose(event);
});
