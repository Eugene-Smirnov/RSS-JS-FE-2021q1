/* THEME SWITHCER */

const themeSwitcher = document.querySelector('.switch__checkbox');
const map = document.querySelector('.map_dark');
function setTheme() {
  if (localStorage.darkThemeState !== undefined) {
    if (localStorage.getItem('darkThemeState')) {
      // Set Dark
      document.documentElement.style.setProperty('--base-color', '#333');
      document.documentElement.style.setProperty('--contrast-base-color', '#fefefe');
      document.documentElement.style.setProperty('--additional-color', '#4f4f4f');
      document.documentElement.style.setProperty('--contrast-additional-color', '#f2f2f2');
      document.documentElement.style.setProperty('--map-bg-color', '#4f4f4f');
      map.style.setProperty('opacity', '1');
      themeSwitcher.checked = true;
    } else {
      // Set Light
      document.documentElement.style.setProperty('--base-color', '#fefefe');
      document.documentElement.style.setProperty('--contrast-base-color', '#333');
      document.documentElement.style.setProperty('--additional-color', '#f2f2f2');
      document.documentElement.style.setProperty('--contrast-additional-color', '#4f4f4f');
      document.documentElement.style.setProperty('--map-bg-color', '#fefefe');
      map.style.setProperty('opacity', '0');
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

/* ---------------------- */
class SliderStateObserver {

  constructor(activeIndex, maxLength) {
    this._value = {
      activeIndex: activeIndex,
      maxLength: maxLength,
    };
    this._subscribers = [];
  }

  subscribe(subscriber) {
    this._subscribers.push(subscriber);
  }

  update(value) {
    this._value = { ...this._value, ...value };
    this._subscribers.forEach(subscriber => subscriber(this._value));
  }

  getValue() {
    return this._value;
  }

  validate(value) {
    if (value < 1) return this._value.maxLength;
    if (value > this._value.maxLength) return 1;
    return value;
  }

}

/* Map slider */
const slider = document.querySelector('.main-slider');
const sliderButtonLeft = document.querySelector('.main-slider__arrow_left');
const sliderButtonRight = document.querySelector('.main-slider__arrow_right');

const sliderInput = document.getElementById('main-slider__range-input');
const sliderOutput = document.querySelector('.main-slider__current-value');

const pointers = document.querySelector('.map__pointers-wrapper');
const watchButton = document.querySelector('.main__button');

const sliderState = new SliderStateObserver(2, 8);

//// Slider subscribers 
// Slider input value
sliderState.subscribe(({activeIndex}) => {
  sliderInput.value = activeIndex;
});
// Slider output value
sliderState.subscribe(({activeIndex}) => {
  sliderOutput.textContent = `0${activeIndex}/`;
});
// Slider active item
sliderState.subscribe(({activeIndex}) => {
  const currentActive = slider.querySelector('.main-slider__item_active');
  currentActive.style.setProperty('--slider-active-before-opacity', '1');
  const newActive = slider.querySelector(`.main-slider__item_${activeIndex}`);
  currentActive.classList.remove('main-slider__item_active');
  currentActive.style.setProperty('--slider-active-before-opacity', '0');
  newActive.classList.add('main-slider__item_active');;
});
// Slider show hidden 
sliderState.subscribe(({activeIndex}) => {
  const currentValue = +getComputedStyle(slider).getPropertyValue('--slider-hidden-count');
  const visibleCount = +getComputedStyle(slider).getPropertyValue('--slider-visible-count');
  let value;
  if (+activeIndex > currentValue + visibleCount) {
    value = +activeIndex - visibleCount;
  } else if (+activeIndex - currentValue <= 0) {
    value = +activeIndex - 1;
  } else {
    value = currentValue;
  }
  slider.style.setProperty('--slider-hidden-count', value);
});
// Active pointer 
sliderState.subscribe(({activeIndex}) => {
  const newItem = slider.querySelector(`.main-slider__item_${activeIndex}`);
  const newAnimal = newItem.dataset.animal;
  const currentActivePointer = pointers.querySelector('.map__pointer_active');
  if (currentActivePointer != null) currentActivePointer.classList.remove('map__pointer_active');
  if (newAnimal == '#') return;
  const newActivePointer = pointers.querySelector(`.map__pointer_${newAnimal}`);
  newActivePointer.classList.add('map__pointer_active');
});
// watchButton link
sliderState.subscribe(({activeIndex}) => {
  const newItem = slider.querySelector(`.main-slider__item_${activeIndex}`);
  watchButton.setAttribute('href', newItem.dataset.url);
});
//// Slider Updaters
// Slider Input
sliderInput.addEventListener('input', () => {
  sliderState.update({activeIndex: sliderInput.value});
});
// Slider LeftArrowClick
sliderButtonLeft.addEventListener('click', () => {
  let value = +(sliderState.getValue().activeIndex) - 1;
  value = sliderState.validate(value);
  sliderState.update({activeIndex: value});
})
// Slider RightArrowClick
sliderButtonRight.addEventListener('click', () => {
  let value = +(sliderState.getValue().activeIndex) + 1;
  value = sliderState.validate(value);
  sliderState.update({activeIndex: value});
})
// Slider MouseClick
slider.addEventListener('click', (event) => {
  if (!event.target.closest('.main-slider__item')) return;
  const value = event.target.closest('.main-slider__item').dataset.index;
  sliderState.update({activeIndex: value});
});
// Pointers click
pointers.addEventListener('click', (event) => {
  if (!event.target.closest('.map__pointer')) return;
  const currentActive = pointers.querySelector('.map__pointer_active');
  currentActive.classList.remove('map__pointer_active');
  const newActive = event.target.closest('.map__pointer');
  newActive.classList.add('map__pointer_active');
  const value = newActive.dataset.index;
  sliderState.update({activeIndex: value});
})
