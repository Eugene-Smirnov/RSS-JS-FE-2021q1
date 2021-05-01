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

/* ------------------- */
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

/* ------------------- */
/* First-scren slider (FS) */
const FSSlider = document.querySelector('.first-screen-slider');
const FSInput = document.getElementById('first-sсreen-slider__range-input');
const FSOutput = document.querySelector('.first-screen-slider__current-value');

const FSSliderState = new SliderStateObserver(2, 8);

//// First-screen Slider Subscribes
// FS Input value
FSSliderState.subscribe(({activeIndex}) => {
  FSInput.value = activeIndex;
});
// FS Output value
FSSliderState.subscribe(({activeIndex}) => {
  FSOutput.textContent = `0${activeIndex}/`;
});
// FS Active item
FSSliderState.subscribe(({activeIndex}) => {
  const currentActive = FSSlider.querySelector('.first-screen-slider-item_active');
  currentActive.classList.remove('first-screen-slider-item_active');
  const activeItem = FSSlider.querySelector(`.first-screen-slider-item_${activeIndex}`);
  activeItem.classList.add('first-screen-slider-item_active');
});
// FS Slider position
FSSliderState.subscribe(({activeIndex}) => {
  FSSlider.style.setProperty('--FSSliderItem-currentActive', `${4 - +activeIndex}`);
});

//// FS updaters
// FS Input
FSInput.addEventListener('input', () => {
  FSSliderState.update({activeIndex: FSInput.value});
});
// FS MouseClick
FSSlider.addEventListener('click', (event) => {
  if (!event.target.closest('.first-screen-slider-item')) return;
  const value = event.target.closest('.first-screen-slider-item').dataset.index;
  FSSliderState.update({activeIndex: value});
});

/* ------------------- */
/* How it works slider (HIW) */
const HIWInput = document.getElementById('how-it-works__range-input');
const HIWOutput = document.querySelector('.how-it-works__current-value');
const HIWItems = document.querySelectorAll('.how-it-works-slider__item');
function HIWInputHandler() {
  const value = HIWInput.value;
  HIWOutput.textContent = `0${value}/`;
  HIWItems.forEach(item => item.style.setProperty('--HIW-slide-number', `${value - 1}`));
}
HIWInput.addEventListener('input', HIWInputHandler);
function HIWAutoScroller() {
  if (HIWInput.value == 4) {
    HIWInput.value = 1;
  } else {
    HIWInput.value++;
  }
  HIWInputHandler();
}
setInterval(HIWAutoScroller, 5000);

/* ------------------- */
/* Gallery slider */
const gallerySlider = document.querySelector('.gallery-slider');
const galleryArrowLeft = document.querySelector('.gallery-slider__arrow_left');
const galleryArrowRight = document.querySelector('.gallery-slider__arrow_right');

const galleryInput = document.getElementById('gallery-slider__range-input');
const galleryOutput = document.querySelector('.gallery-slider__current-value');

const gallerySliderState = new SliderStateObserver(1, 8);

//// Gallery Subscribes
// Gallery Input value
gallerySliderState.subscribe(({activeIndex}) => {
  galleryInput.value = activeIndex;
});
// Gallery Output value
gallerySliderState.subscribe(({activeIndex}) => {
  galleryOutput.textContent = `0${activeIndex}/`;
});
// Gallery Active item
gallerySliderState.subscribe(({activeIndex}) => {
  const currentActive = gallerySlider.querySelector('.gallery-slider-item_active');
  currentActive.classList.remove('gallery-slider-item_active');
  const activeItem = gallerySlider.querySelector(`.gallery-slider-item_${activeIndex}`);
  activeItem.classList.add('gallery-slider-item_active');
});
// Gallery Show hidden
gallerySliderState.subscribe(({activeIndex}) => {
  const currentValue = +getComputedStyle(gallerySlider).getPropertyValue('--gallery-slider-hidden-count');
  const visibleCount = +getComputedStyle(gallerySlider).getPropertyValue('--gallery-slider-visible-count');
  let value;
  if (+activeIndex > currentValue + visibleCount) {
    value = +activeIndex - visibleCount;
  } else if (+activeIndex - currentValue <= 0) {
    value = +activeIndex - 1;
  } else {
    value = currentValue;
  }
  gallerySlider.style.setProperty('--gallery-slider-hidden-count', value);
});
//// Gallery updaters
// Gallery Input
galleryInput.addEventListener('input', () => {
  gallerySliderState.update({activeIndex: galleryInput.value});
});
// Gallery LeftArrowClick
galleryArrowLeft.addEventListener('click', () => {
  let value = +(gallerySliderState.getValue().activeIndex) - 1;
  value = gallerySliderState.validate(value);
  gallerySliderState.update({activeIndex: value});
})
// Gallery RightArrowClick
galleryArrowRight.addEventListener('click', () => {
  let value = +(gallerySliderState.getValue().activeIndex) + 1;
  value = gallerySliderState.validate(value);
  gallerySliderState.update({activeIndex: value});
})
// Gallery MouseClick
gallerySlider.addEventListener('click', (event) => {
  if (!event.target.closest('.gallery-slider-item')) return;
  const value = event.target.closest('.gallery-slider-item').dataset.index;
  gallerySliderState.update({activeIndex: value});
});

/* ------------------- */
/* Testimonials slider */
const testimonialsSlider = document.querySelector('.testimonials-slider');
const testimonialsInput = document.getElementById('testimonials-slider__range-input');
const testimonialsOutput = document.querySelector('.testimonials-slider__current-value');

const testimonialsLeft = document.querySelector('.testimonials-slider__arrow_left');
const testimonialsRight = document.querySelector('.testimonials-slider__arrow_right');

const testimonialsSliderState = new SliderStateObserver(1, 8);

//// Testimonails subscribers
// Testimonials Input value
testimonialsSliderState.subscribe(({activeIndex}) => {
  testimonialsInput.value = activeIndex;
});
// Testimonials Output value
testimonialsSliderState.subscribe(({activeIndex}) => {
  testimonialsOutput.textContent = `0${activeIndex}/`;
});
// Testimonials Current Slide index
testimonialsSliderState.subscribe(({activeIndex}) => {
  testimonialsSlider.style.setProperty('--testimonials-current-slide', activeIndex);
});
//// Testimonials updaters
// Testimonials Input
testimonialsInput.addEventListener('input', () => {
  testimonialsSliderState.update({activeIndex: testimonialsInput.value});
});
// Testimonials LeftArrowClick
testimonialsLeft.addEventListener('click', () => {
  let value = +(testimonialsSliderState.getValue().activeIndex) - 1;
  value = testimonialsSliderState.validate(value);
  testimonialsSliderState.update({activeIndex: value});
})
// Testimonials RightArrowClick
testimonialsRight.addEventListener('click', () => {
  let value = +(testimonialsSliderState.getValue().activeIndex) + 1;
  value = testimonialsSliderState.validate(value);
  testimonialsSliderState.update({activeIndex: value});
})
// Testimonials Autoscroll
function testimonialsAutoScroll() {
  let value = +(testimonialsSliderState.getValue().activeIndex) + 1;
  value = testimonialsSliderState.validate(value);
  testimonialsSliderState.update({activeIndex: value});
}
setInterval(testimonialsAutoScroll, 7500);