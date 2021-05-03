/* THEME SWITHCER */
import {themeSwitcher, themeSwitch} from '../../scripts/themeSwitcher.js';
themeSwitcher.addEventListener('click', themeSwitch);
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
