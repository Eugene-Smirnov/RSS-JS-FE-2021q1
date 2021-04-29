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
      document.documentElement.style.setProperty('--testimonials-item-bg-color', '#3c3c3c');
      map.style.setProperty('opacity', '1');
      themeSwitcher.checked = true;
    } else {
      // Set Light
      document.documentElement.style.setProperty('--base-color', '#fefefe');
      document.documentElement.style.setProperty('--contrast-base-color', '#333');
      document.documentElement.style.setProperty('--additional-color', '#f2f2f2');
      document.documentElement.style.setProperty('--contrast-additional-color', '#4f4f4f');
      document.documentElement.style.setProperty('--testimonials-item-bg-color', '#fefefe');
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

/* How it works slider (HIW)*/
const HIWInput = document.getElementById('how-it-works__range-input');
const HIWOutput = document.querySelector('.how-it-works__current-value');
const HIWItems = document.querySelectorAll('.how-it-works-slider__item');
function HIWInputHandler() {
  const value = HIWInput.value;
  HIWOutput.textContent = `0${value}/`;
  HIWItems.forEach(item => item.style.setProperty('--HIW-slide-number', `${value - 1}`));
}
HIWInput.addEventListener('input', HIWInputHandler);

/* Gallery slider */
const gallerySlider = document.querySelector('.gallery-slider');
const galleryArrowLeft = document.querySelector('.gallery-slider__arrow_left');
const galleryArrowRight = document.querySelector('.gallery-slider__arrow_right');

const galleryInput = document.getElementById('gallery-slider__range-input');
const galleryOutput = document.querySelector('.gallery-slider__current-value');

const gallerySliderState = {
  _value: {
    activeIndex: 1,
  },

  _subscribers: [],

  subscribe(subscriber) {
    this._subscribers.push(subscriber);
  },

  update(value) {
    this._value = { ...this._value, ...value };
    this._subscribers.forEach(subscriber => subscriber(this._value));
  },

  getValue() {
    return this._value;
  },

  validate(value) {
    if (value < 1) return 8;
    if (value > 8) return 1;
    return value;
  },

}
//// Gallery Subscribes
// Input value
gallerySliderState.subscribe(({activeIndex}) => {
  galleryInput.value = activeIndex;
});
// Output value
gallerySliderState.subscribe(({activeIndex}) => {
  galleryOutput.textContent = `0${activeIndex}/`;
});
// Active item
gallerySliderState.subscribe(({activeIndex}) => {
  const currentActive = gallerySlider.querySelector('.gallery-slider-item_active');
  currentActive.classList.remove('gallery-slider-item_active');
  const activeItem = gallerySlider.querySelector(`.gallery-slider-item_${activeIndex}`);
  activeItem.classList.add('gallery-slider-item_active');
});
// Show hidden
gallerySliderState.subscribe(({activeIndex}) => {
  const currentValue = getComputedStyle(gallerySlider).getPropertyValue('--gallery-slider-hidden-count');

  let value;
  if (+activeIndex > +currentValue + 4) {
    value = +activeIndex - 4;
  } else if (+activeIndex - +currentValue <= 0) {
    value = +activeIndex - 1;
  } else {
    value = currentValue;
  }
  gallerySlider.style.setProperty('--gallery-slider-hidden-count', value);

});
//// Gallery updaters
// Input
galleryInput.addEventListener('input', () => {
  gallerySliderState.update({activeIndex: galleryInput.value});
});
// LeftArrowClick
galleryArrowLeft.addEventListener('click', () => {
  let value = +(gallerySliderState.getValue().activeIndex) - 1;
  value = gallerySliderState.validate(value);
  gallerySliderState.update({activeIndex: value});
})
// RightArrowClick
galleryArrowRight.addEventListener('click', () => {
  let value = +(gallerySliderState.getValue().activeIndex) + 1;
  value = gallerySliderState.validate(value);
  gallerySliderState.update({activeIndex: value});
})
// MouseClick
gallerySlider.addEventListener('click', (event) => {
  if (!event.target.closest('.gallery-slider-item')) return;
  const value = event.target.closest('.gallery-slider-item').dataset.index;
  gallerySliderState.update({activeIndex: value});
});








// gallerySliderState.subscribe(({activeIndex}) => {});







