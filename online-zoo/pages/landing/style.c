:root {
  --base-color: #fefefe;
  --contrast-base-color: #333;
  --additional-color: #f2f2f2;
  --contrast-additional-color: #4f4f4f;
  --dark-color: #1b1b1b;
  --grey-color: #bdbdbd;
  --grey-color-form: #e0e0e0;
  --popup-base-grey: #828282;
}

/* BASE */
html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #fefefe;
  font-family: "Roboto", sans-serif;
}

ul,
li,
a {
  color: inherit;
  text-decoration: none;
  list-style: none;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

.bold {
  font-weight: 500;
  color: #333;
}

.wrapper {
  margin: 0 auto;
  max-width: 1620px;
}

.heading {
  font-size: 48px;
  font-weight: 900;
  color: #333;
}

.main {
  box-sizing: border-box;
  overflow: hidden;
}

@media screen and (max-width: 1680px) {
  .wrapper {
    max-width: 1200px;
  }
}
@media screen and (max-width: 1400px) {
  .wrapper {
    max-width: 900px;
  }
}
@media screen and (max-width: 1024px) {
  .wrapper {
    max-width: 93.75%;
  }
}
@media screen and (max-width: 610px) {
  .heading {
    font-size: 36px;
  }
}
/* LOGO */
.logo {
  display: inline-block;
  height: 42px;
  width: 60px;
  background-color: #333;
  mask-image: url("../../assets/icons/logo.svg");
  -webkit-mask-image: url("../../assets/icons/logo.svg");
}

/* Burger-menu style */
.burger-menu {
  display: none;
  cursor: pointer;
}
.burger-menu__checkbox {
  visibility: hidden;
  position: absolute;
  top: -50px;
}
.burger-menu__icon {
  margin-top: 4px;
  display: inline-block;
  height: 21px;
  width: 40px;
  background-color: #333;
  mask-image: url("../../assets/icons/menu.svg");
  -webkit-mask-image: url("../../assets/icons/menu.svg");
  transition: background-color 0.2s ease-in-out;
}

.burger-menu__checkbox:checked ~ .burger-menu > .burger-menu__icon {
  background-color: #bdbdbd;
}

/* BUTTON */
.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 245px;
  height: 55px;
  box-sizing: border-box;
  border: 1px solid #4bd8b5;
  border-radius: 3px;
  background: linear-gradient(106.89deg, rgba(75, 216, 181, 0) -14.32%, #49d6df 100.68%), #4bd8b5;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: #fefefe;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, padding 0.3s ease-in-out;
}
.button:hover {
  background: rgba(75, 216, 181, 0.7);
  border: 1px solid #4bd8b5;
}
.button:active {
  background: rgba(73, 214, 223, 0.7);
}
.button:active, .button:focus {
  outline: none;
}

/* RANGE-INPUT */
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 30px;
  background: #fefefe;
  cursor: pointer;
  margin-top: -3px;
}
.range-input::-moz-range-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 30px;
  background: #fefefe;
  cursor: pointer;
  margin-top: -3px;
  border: none;
  border-radius: 0;
}
.range-input::-ms-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 30px;
  background: #fefefe;
  cursor: pointer;
  margin-top: -3px;
  border: none;
  border-radius: 0;
}
.range-input::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: rgba(189, 189, 189, 0.53);
}
.range-input:focus::-webkit-slider-runnable-track {
  background: rgba(189, 189, 189, 0.7);
}
.range-input::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: rgba(189, 189, 189, 0.53);
}
.range-input::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 0;
  color: transparent;
}
.range-input::-ms-fill-lower {
  background: rgba(189, 189, 189, 0.53);
}
.range-input:focus::-ms-fill-lower {
  background: rgba(189, 189, 189, 0.7);
}
.range-input::-ms-fill-upper {
  background: rgba(189, 189, 189, 0.53);
}
.range-input:focus::-ms-fill-upper {
  background: rgba(189, 189, 189, 0.7);
}

/* ARROW */
.arrow_left {
  width: 18px;
  height: 30px;
  background-color: #828282;
  transition: background-color 0.3s ease-in-out;
  border: none;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-image: url("../../assets/icons/arrow-left.svg");
  -webkit-mask-image: url("../../assets/icons/arrow-left.svg");
}
.arrow_left:active, .arrow_left:focus {
  outline: none;
}
.arrow_right {
  width: 18px;
  height: 30px;
  background-color: #828282;
  transition: background-color 0.3s ease-in-out;
  border: none;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transform: rotate(180deg);
  mask-image: url("../../assets/icons/arrow-left.svg");
  -webkit-mask-image: url("../../assets/icons/arrow-left.svg");
}
.arrow_right:active, .arrow_right:focus {
  outline: none;
}

/* HEADER */
/* SWITCHER */
.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 30px;
}
.switch__checkbox {
  display: none;
}
.switch__slider {
  display: block;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  background-color: #f2f2f2;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.switch__slider::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 6px;
  bottom: 5px;
  border-radius: 50%;
  background-color: #fefefe;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 2px 4px 15px 0px #060c4615;
}

.switch__checkbox:checked + .switch__slider:before {
  background-color: #1b1b1b;
}

.switch__checkbox:checked + .switch__slider {
  background-color: #4f4f4f;
}

.switch__checkbox:checked + .switch__slider:before {
  -webkit-transform: translateX(22px);
  -ms-transform: translateX(22px);
  transform: translateX(22px);
}

.header {
  background-color: var(--base-color);
  color: var(--contrast-base-color);
  box-shadow: 0px 4px 8px 0px #2c654d0c;
}
.header__h1 {
  position: absolute;
  top: -50px;
  width: 1px;
  height: 1px;
  visibility: hidden;
}
.header__wrapper {
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-nav__ul {
  display: flex;
}
.header-nav__li {
  padding: 8px 39px 0px 36px;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
}
.header-nav__link {
  padding: 0px 4px;
  border-bottom: 1px solid transparent;
  transition: border 0.2s ease-in-out;
  -webkit-transition: border 0.2s ease-in-out;
}
.header-nav__link:hover {
  border-bottom: 1px solid #333;
}
.header-nav__link_active {
  padding: 0px 4px;
  border-bottom: 1px solid;
  font-weight: 900;
  pointer-events: none;
}

/* HEADER MAX WIDTH 1024px */
@media screen and (max-width: 1024px) {
  .main {
    padding-top: 94px;
  }

  .switch {
    right: 12.5%;
  }

  .header {
    position: fixed;
    width: 100%;
    z-index: 3;
  }
  .header-nav {
    position: absolute;
    top: 94px;
    right: 0;
    box-shadow: 0px 15px 15px 0px rgba(6, 12, 70, 0.15);
    display: none;
    opacity: 0;
    animation: rotateMenu 400ms ease-in-out forwards;
    transform-origin: top center;
    transition: opacity 0.15s ease-in-out;
    z-index: 2;
  }
  @keyframes rotateMenu {
    0% {
      transform: rotateX(-90deg);
    }
    70% {
      transform: rotateX(20deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
  .burger-menu__checkbox:checked ~ .header-nav {
    display: flex;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  .header-nav__ul {
    flex-direction: column;
    background-color: #fefefe;
  }
  .header-nav__li {
    box-sizing: border-box;
    padding: 15px 60px;
    font-size: 21px;
    background-color: transparent;
    border-top: 1px solid #f2f2f2;
    transition: background-color 0.2s ease-in-out;
  }
  .header-nav__li:hover {
    background-color: #f2f2f2;
  }

  .burger-menu {
    display: block;
    position: relative;
    left: 46%;
  }
}
/* HEADER 610px*/
@media screen and (max-width: 610px) {
  .main {
    padding-top: 92px;
  }

  .header__wrapper {
    height: 92px;
  }
  .header-nav {
    width: 100%;
    top: 92px;
  }
  .header-nav__ul {
    width: 100%;
  }
  .header-nav__li {
    width: 100%;
    text-align: center;
  }

  .switch {
    right: 21.5%;
  }

  .burger-menu {
    left: 42%;
  }
}
/* MAIN */
/* MAIN__FIRST-SCREEN */
.first-screen {
  height: 940px;
  background-image: url(../../assets/images/first-screen__bg.png);
  background-size: cover;
  color: #fefefe;
  overflow: hidden;
}
.first-screen__wrapper {
  height: 940px;
}
.first-screen-aside {
  position: relative;
  top: 716px;
  left: 2px;
}
.first-screen-aside__icon {
  display: inline-block;
  background-color: #fefefe;
  height: auto;
  width: 20px;
  padding: 5.5px 0px;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transition: background-color 0.2s ease-in-out;
}
.first-screen-aside__icon_instagram {
  height: 20px;
  mask-image: url("../../assets/icons/instagram.svg");
  -webkit-mask-image: url("../../assets/icons/instagram.svg");
}
.first-screen-aside__icon_twitter {
  height: 16.25px;
  mask-image: url("../../assets/icons/twitter.svg");
  -webkit-mask-image: url("../../assets/icons/twitter.svg");
}
.first-screen-aside__icon_youtube {
  height: 13.75px;
  mask-image: url("../../assets/icons/youtube.svg");
  -webkit-mask-image: url("../../assets/icons/youtube.svg");
}
.first-screen-aside__icon_vk {
  height: 11.41px;
  mask-image: url("../../assets/icons/vk.svg");
  -webkit-mask-image: url("../../assets/icons/vk.svg");
}
.first-screen-aside__icon:hover {
  background-color: #4bd8b5;
}
.first-screen-aside__icon:active {
  background-color: #49d6df;
}
.first-screen__content {
  margin-top: 85px;
  margin-left: 210px;
  width: 800px;
}
.first-screen__heading {
  font-weight: 900;
  font-size: 89px;
  line-height: 104px;
}
.first-screen__button {
  margin-top: 37px;
  padding: 0px 38px;
}
.first-screen__button::before {
  content: url("../../assets/icons/button__play.svg");
  display: inline-block;
}
.first-screen__button:hover, .first-screen__button:active {
  padding: 0px 34px;
}
.first-screen-slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
}
.first-screen-slider__box {
  position: relative;
  left: 685px;
  top: -103px;
}
.first-screen-slider__background-line {
  position: relative;
  top: 191px;
  left: 9px;
  height: 1px;
  width: 100vw;
  background-color: #fefefe;
}
.first-screen-slider__background-dot {
  position: relative;
  top: -2px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #fefefe;
}
.first-screen-slider__background-dot::before {
  content: "";
  display: block;
  height: 13px;
  width: 13px;
  position: relative;
  top: -5px;
  left: -5px;
  border: 1px solid #fefefe;
  border-radius: 50%;
}
.first-screen-slider__wrapper {
  margin-left: 117px;
  overflow: hidden;
  width: max-content;
}
.first-screen-slider__ul {
  display: inline-flex;
  height: 385px;
  align-items: center;
  flex-shrink: 0;
}
.first-screen-slider-item {
  position: relative;
  width: 140px;
  height: 203px;
  margin: 0 23px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 8px;
  background-size: cover;
  cursor: pointer;
}
.first-screen-slider-item_active {
  top: -15px;
  width: 245px;
  height: 355px;
}
.first-screen-slider-item_active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(357.17deg, #000000 -56.45%, rgba(0, 0, 0, 0) 65.03%);
}
.first-screen-slider-item_1 {
  background-image: url("../../assets/images/first-screen-slider__item_1.png");
}
.first-screen-slider-item_2 {
  background-image: url("../../assets/images/first-screen-slider__item_2.png");
}
.first-screen-slider-item_3 {
  background-image: url("../../assets/images/first-screen-slider__item_3.png");
}
.first-screen-slider-item_4 {
  background-image: url("../../assets/images/first-screen-slider__item_4.png");
}
.first-screen-slider-item_5 {
  background-image: url("../../assets/images/first-screen-slider__item_5.png");
}
.first-screen-slider-item_6 {
  background-image: url("../../assets/images/first-screen-slider__item_6.png");
}
.first-screen-slider-item_7 {
  background-image: url("../../assets/images/first-screen-slider__item_7.png");
}
.first-screen-slider-item_8 {
  background-image: url("../../assets/images/first-screen-slider__item_8.png");
}
.first-screen-slider-item__content-wrapper {
  position: relative;
  top: 50px;
  background: linear-gradient(357.17deg, #000000 -56.45%, rgba(0, 0, 0, 0) 65.03%);
  opacity: 0;
  border-radius: 6px;
  transition: top 0.4s ease-in-out, opacity 0.4s ease-in-out;
}
.first-screen-slider-item_active > .first-screen-slider-item__content-wrapper {
  display: block;
  top: 0;
  opacity: 1;
}
.first-screen-slider-item__content {
  margin: 0 37px 14px 23px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
}
.first-screen-slider-item_active > .first-screen-slider-item__content {
  display: block;
}
.first-screen-slider-item__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 25px 38px;
}
.first-screen-slider-item__link {
  position: relative;
  top: 2px;
  left: 25px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  color: #fefefe;
}
.first-screen-slider-item__arrow {
  width: 0;
  height: 0;
  position: absolute;
  left: -16px;
  top: 1px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid #fefefe;
  transform: scaleX(1.5);
}
.first-screen-slider-item__arrow::before {
  content: "";
  display: block;
  height: 22px;
  width: 15px;
  position: relative;
  left: -11px;
  top: -12px;
  border-radius: 50%;
  border: 1px solid #fefefe;
}
.first-screen-slider-item__donate {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
}
.first-screen-slider-item__donate::before {
  content: "$";
  padding: 0px 6px;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  left: -3px;
  top: 1px;
  border-radius: 50%;
  border: 1px solid #fefefe;
}
.first-screen-slider-item__link, .first-screen-slider-item__link > *, .first-screen-slider-item__donate {
  transition: color 0.3s ease-in-out, border-left-color 0.3s ease-in-out;
}
.first-screen-slider-item__link::before, .first-screen-slider-item__link > *::before, .first-screen-slider-item__donate::before {
  transition: border-color 0.3s ease-in-out;
}
.first-screen-slider-item__link:hover, .first-screen-slider-item__link:hover > *, .first-screen-slider-item__donate:hover {
  color: #4bd8b5;
  border-left-color: #4bd8b5;
}
.first-screen-slider-item__link:hover::before, .first-screen-slider-item__link:hover > *::before, .first-screen-slider-item__donate:hover::before {
  border-color: #4bd8b5;
}
.first-screen-slider__range-input-wrapper {
  max-width: 245px;
  margin-left: 327px;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.first-screen-slider__range-input {
  margin-top: 14px;
}
.first-screen-slider__current-value {
  color: #fefefe;
  font-weight: 900;
  font-size: 24px;
}
.first-screen-slider__amount {
  color: #bdbdbd;
  font-weight: 900;
  font-size: 14px;
}

/* HOW IT WORKS BOX*/
.how-it-works {
  height: 783px;
}
.how-it-works__wrapper {
  width: 790px;
  margin-top: 100px;
  margin-right: auto;
  margin-bottom: 101px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.how-it-works__heading {
  display: flex;
  width: 100%;
}
.how-it-works__content {
  margin-top: 32px;
  font-size: 14px;
  font-weight: 400;
  color: #4f4f4f;
}
.how-it-works-slider {
  display: inline-flex;
  flex-wrap: nowrap;
  width: 790px;
  margin-top: 29px;
  overflow: hidden;
}
.how-it-works-slider__item {
  min-width: 100%;
  position: relative;
  margin: 0 5px;
  left: -5px;
  cursor: pointer;
}
.how-it-works-slider__image {
  box-sizing: border-box;
  width: 100%;
  height: 323px;
  border-radius: 5px;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
}
.how-it-works-slider__image_1 {
  background-image: url("../../assets/images/how-it-works__image_1.png");
}
.how-it-works-slider__image_2 {
  background-image: url("../../assets/images/how-it-works__image_2.png");
}
.how-it-works-slider__image_3 {
  background-image: url("../../assets/images/how-it-works__image_3.png");
}
.how-it-works-slider__image_4 {
  background-image: url("../../assets/images/how-it-works__image_4.png");
}
.how-it-works__range-input-wrapper {
  width: 245px;
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.how-it-works__range-input {
  margin-top: 17px;
}
.how-it-works__range-input::-webkit-slider-thumb {
  width: 62px;
  background: #333;
  cursor: pointer;
  margin-top: -3px;
}
.how-it-works__range-input::-moz-range-thumb {
  width: 62px;
  background: #333;
  cursor: pointer;
}
.how-it-works__current-value {
  color: #333;
  font-weight: 900;
  font-size: 24px;
}
.how-it-works__amount {
  color: #bdbdbd;
  font-weight: 900;
  font-size: 14px;
}
.how-it-works__button {
  margin-top: 31px;
  padding: 0px 38px;
}
.how-it-works__button::before {
  content: url("../../assets/icons/button__play.svg");
  display: inline-block;
}
.how-it-works__button:hover, .how-it-works__button:active {
  padding: 0px 34px;
}

/* ABOUT-BOX */
.about {
  height: 413px;
  background-color: #f2f2f2;
  overflow: hidden;
  text-shadow: 2px 4px 15px rgba(6, 12, 70, 0.15);
}
.about__wrapper {
  width: 1199px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.about-item {
  width: 380px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-item__image {
  height: 80px;
  width: 80px;
  filter: drop-shadow(2px 4px 15px rgba(6, 12, 70, 0.15));
}
.about-item__heading {
  margin-top: 15px;
  font-size: 20px;
  font-weight: 900;
  color: #333;
}
.about-item__content {
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #4f4f4f;
}

/* GALLERY */
.gallery {
  height: 854px;
  overflow: hidden;
}
.gallery__wrapper {
  width: 1199px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery__heading {
  margin-top: 100px;
  margin-bottom: 36px;
}
.gallery-slider {
  width: max-content;
  position: relative;
  left: -14px;
  display: inline-flex;
  justify-content: flex-start;
}
.gallery-slider__box {
  display: flex;
  align-items: center;
}
.gallery-slider__arrow_left {
  position: relative;
  left: -26px;
  cursor: pointer;
}
.gallery-slider__arrow_right {
  position: relative;
  left: 26px;
  cursor: pointer;
}
.gallery-slider__arrow_left:hover, .gallery-slider__arrow_right:hover {
  background-color: #333;
}
.gallery-slider__arrow_left:active, .gallery-slider__arrow_right:active {
  background-color: #4f4f4f;
}
.gallery-slider__wrapper {
  width: 1199px;
  overflow: hidden;
}
.gallery-slider-item {
  position: relative;
  width: 278px;
  height: 399px;
  margin: 0 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
  color: #fefefe;
  background-size: cover;
  cursor: pointer;
}
.gallery-slider-item_1 {
  background-image: url("../../assets/images/first-screen-slider__item_2.png");
}
.gallery-slider-item_2 {
  background-image: url("../../assets/images/first-screen-slider__item_1.png");
}
.gallery-slider-item_3 {
  background-image: url("../../assets/images/first-screen-slider__item_3.png");
}
.gallery-slider-item_4 {
  background-image: url("../../assets/images/first-screen-slider__item_4.png");
}
.gallery-slider-item_5 {
  background-image: url("../../assets/images/first-screen-slider__item_5.png");
}
.gallery-slider-item_6 {
  background-image: url("../../assets/images/first-screen-slider__item_6.png");
}
.gallery-slider-item_7 {
  background-image: url("../../assets/images/first-screen-slider__item_7.png");
}
.gallery-slider-item_8 {
  background-image: url("../../assets/images/first-screen-slider__item_8.png");
}
.gallery-slider-item__content-wrapper {
  height: 100%;
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(348.75deg, #000000 10.15%, rgba(0, 0, 0, 0) 59%);
  opacity: 0;
  border-radius: 6px;
  transition: top 0.4s ease-in-out, opacity 0.4s ease-in-out;
}
.gallery-slider-item:hover > .gallery-slider-item__content-wrapper {
  top: 0;
  opacity: 1;
}
.gallery-slider-item__content {
  margin: 0 72px 14px 22px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
}
.gallery-slider-item__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 61px 46px 23px;
}
.gallery-slider-item__link {
  position: relative;
  top: 2px;
  left: 25px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  color: #fefefe;
}
.gallery-slider-item__arrow {
  width: 0;
  height: 0;
  position: absolute;
  left: -16px;
  top: 1px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid #fefefe;
  transform: scaleX(1.5);
}
.gallery-slider-item__arrow::before {
  content: "";
  display: block;
  height: 22px;
  width: 15px;
  position: relative;
  left: -11px;
  top: -12px;
  border-radius: 50%;
  border: 1px solid #fefefe;
}
.gallery-slider-item__donate {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
}
.gallery-slider-item__donate::before {
  content: "$";
  padding: 0px 6px;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  left: -3px;
  top: 1px;
  border-radius: 50%;
  border: 1px solid #fefefe;
}
.gallery-slider-item__link, .gallery-slider-item__link > *, .gallery-slider-item__donate {
  transition: color 0.3s ease-in-out, border-left-color 0.3s ease-in-out;
}
.gallery-slider-item__link::before, .gallery-slider-item__link > *::before, .gallery-slider-item__donate::before {
  transition: border-color 0.3s ease-in-out;
}
.gallery-slider-item__link:hover, .gallery-slider-item__link:hover > *, .gallery-slider-item__donate:hover {
  color: #4bd8b5;
  border-left-color: #4bd8b5;
}
.gallery-slider-item__link:hover::before, .gallery-slider-item__link:hover > *::before, .gallery-slider-item__donate:hover::before {
  border-color: #4bd8b5;
}
.gallery-slider__range-input-wrapper {
  width: 245px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery-slider__range-input {
  margin-top: 14px;
}
.gallery-slider__range-input::-webkit-slider-thumb {
  background: #333;
}
.gallery-slider__range-input::-moz-range-thumb, .gallery-slider__range-input::-ms-thumb {
  background: #333;
}
.gallery-slider__current-value {
  color: #333;
  font-weight: 900;
  font-size: 24px;
}
.gallery-slider__amount {
  color: #bdbdbd;
  font-weight: 900;
  font-size: 14px;
}
.gallery__button {
  margin-top: 33px;
  padding: 17px;
}

/* DONATE-BOX */
.donate {
  background-color: #f2f2f2;
  overflow: hidden;
}
.donate__wrapper {
  width: 1199px;
  height: 754px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.donate__heading {
  margin-top: 100px;
  margin-bottom: 0px;
}
.donate__content {
  margin-top: 33px;
  font-size: 14px;
  font-weight: 400;
  color: #4f4f4f;
}
.donate-description {
  margin-top: 90px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.donate-description__arrow {
  width: 108px;
  height: 20px;
  background-image: url("../../assets/icons/description__arrow.svg");
}
.donate-description__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 239px;
  height: 239px;
  border: 3px solid #4bd8b5;
  border-radius: 50%;
}
.donate-description__image {
  margin-top: -8px;
  box-sizing: border-box;
  max-width: 100%;
}
.donate-description__image_1 {
  margin-top: 0;
}
.donate-description__text {
  position: relative;
  top: 15px;
  max-width: 135px;
  font-size: 20px;
  font-weight: 900;
  line-height: 23.44px;
  text-align: center;
  color: #4f4f4f;
}
.donate__button {
  margin-top: 60px;
  justify-content: center;
}

/* TESTIMONIALS */
.testimonials {
  height: 810px;
  overflow: hidden;
}
.testimonials__wrapper {
  width: 1229px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonials__heading {
  margin-top: 100px;
  margin-bottom: 0;
}
.testimonials-slider {
  width: max-content;
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
}
.testimonials-slider__box {
  margin-top: 48px;
  display: flex;
  align-items: center;
}
.testimonials-slider__arrow_left {
  position: relative;
  left: -11px;
  cursor: pointer;
}
.testimonials-slider__arrow_right {
  position: relative;
  left: 11px;
  cursor: pointer;
}
.testimonials-slider__arrow_left:hover, .testimonials-slider__arrow_right:hover {
  background-color: #333;
}
.testimonials-slider__arrow_left:active, .testimonials-slider__arrow_right:active {
  background-color: #4f4f4f;
}
.testimonials-slider__wrapper {
  width: 1229px;
  height: 340px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: initial;
}
.testimonials-slider-item {
  width: 585px;
  height: 310px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 4px 15px 0px rgba(6, 12, 70, 0.15);
  color: #4f4f4f;
}
.testimonials-slider-item__avatar {
  height: 66px;
  width: 66px;
  margin-top: 48px;
  border: 1px solid #bdbdbd;
  border-radius: 50%;
}
.testimonials-slider-item__heading {
  margin-top: 15px;
  font-size: 20px;
  font-weight: 900;
  color: #333;
}
.testimonials-slider-item__content {
  max-width: 440px;
  margin-top: 18px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  color: #4f4f4f;
}
.testimonials-slider__range-input-wrapper {
  width: 245px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonials-slider__range-input {
  margin-top: 14px;
}
.testimonials-slider__range-input::-webkit-slider-thumb {
  background: #333;
}
.testimonials-slider__range-input::-moz-range-thumb, .testimonials-slider__range-input::-ms-thumb {
  background: #333;
}
.testimonials-slider__current-value {
  color: #333;
  font-weight: 900;
  font-size: 24px;
}
.testimonials-slider__amount {
  color: #bdbdbd;
  font-weight: 900;
  font-size: 14px;
}
.testimonials__button {
  margin-top: 33px;
  justify-content: center;
}

/* MAP-BLOCK */
.map-block {
  height: 904px;
  background-color: #f2f2f2;
  overflow: hidden;
}
.map-block__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.map-block__heading {
  margin-top: 100px;
}
.map-block__button {
  margin-top: 36px;
  padding: 0px 38px;
}
.map-block__button::before {
  content: url("../../assets/icons/button__play.svg");
  display: inline-block;
}
.map-block__button:hover, .map-block__button:active {
  padding: 0px 34px;
}

.map {
  width: 1200px;
  height: 498px;
  background-image: url("../../assets/images/map.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.map__wrapper {
  width: 1199px;
  margin-top: 62px;
  display: flex;
  justify-content: center;
  position: relative;
}
.map__pointer {
  width: 67px;
  height: 95px;
  position: absolute;
  cursor: pointer;
}
.map__pointer_bg {
  width: 67px;
  height: 95px;
  position: absolute;
  background-color: #4bd8b5;
  mask-image: url("../../assets/images/pointer_bg.png");
  -webkit-mask-image: url("../../assets/images/pointer_bg.png");
  transition: background-color 0.3s ease-in-out;
}
.map__pointer:hover .map__pointer_bg {
  background-color: #eb5757;
}
.map__pointer:hover .map-tooltip {
  opacity: 1;
  pointer-events: initial;
}
.map__pointer_eagle {
  top: 73px;
  left: 121px;
}
.map__pointer_alligator {
  top: 101px;
  left: 244px;
}
.map__pointer_gorilla {
  top: 188px;
  left: 571px;
}
.map__pointer_panda {
  top: 89px;
  left: 893px;
}
.map__image {
  height: 39px;
  width: 39px;
  position: absolute;
  top: 16px;
  left: 14px;
}
.map-tooltip {
  height: 149px;
  width: 436px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 75px;
  left: -399px;
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 2px 4px 15px 0px rgba(6, 12, 70, 0.15);
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  pointer-events: none;
}
.map-tooltip__image {
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  margin: 0 21px 0 41px;
}
.map-tooltip__description {
  max-width: 260px;
  display: flex;
  flex-direction: column;
}
.map-tooltip__heading {
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 900;
  text-transform: capitalize;
  color: #333;
}
.map-tooltip__content {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #4f4f4f;
}

/* FOOTER */
.footer {
  background-color: #333;
  color: #fefefe;
  box-sizing: border-box;
  overflow: hidden;
}
.footer__wrapper {
  height: calc(751px - 100px - 72px);
  margin-top: 100px;
  margin-bottom: 72px;
}
.footer__logo {
  background-color: #fefefe;
}
.footer__logo-wrapper {
  display: flex;
  flex-basis: 50%;
}
.footer__top-bar {
  display: flex;
  align-items: center;
}
.footer-nav {
  display: flex;
  flex-basis: 50%;
}
.footer-nav__ul {
  display: flex;
}
.footer-nav__li {
  margin-top: 14px;
  margin-left: 11px;
  margin-right: 54px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
}
.footer-nav__link {
  padding: 0px 4px;
  border-bottom: 1px solid transparent;
  transition: border 0.2s ease-in-out;
  -webkit-transition: border 0.2s ease-in-out;
}
.footer-nav__link:hover {
  border-bottom: 1px solid #fefefe;
}
.footer__middle-box {
  margin-top: 64px;
  display: flex;
}
.footer-form, .footer__info-box {
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  box-sizing: border-box;
}
.footer-form__heading {
  margin-top: 6px;
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 900;
}
.footer-form__text-input, .footer-form__text-input::placeholder {
  width: 47.5%;
  padding: 10px 0;
  margin-top: 9px;
  font-size: 14px;
  font-weight: 400;
  color: #e0e0e0;
  outline: none;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid #bdbdbd;
}
.footer-form__fieldset {
  width: 44.25%;
  height: 103px;
  margin-top: 22px;
  border: 0.5px solid #bdbdbd;
  border-radius: 3px;
}
.footer-form__legend {
  padding: 0 5px;
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
}
.footer-form__textarea {
  font-size: 12px;
  font-weight: 400;
  color: #e0e0e0;
  width: 100%;
  height: 100%;
  outline: none;
  border: 0;
  background-color: transparent;
  resize: none;
}
.footer-form__checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.footer-form__checkbox-label {
  margin: 26px 1px 0;
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
  cursor: pointer;
}
.footer-form__checkbox-pseudo {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #bdbdbd;
  border-radius: 1px;
  margin-right: 3px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  text-align: center;
  color: #333;
  user-select: none;
  transition: background-color 0.2s ease-in-out;
}
.footer-form__checkbox:checked + .footer-form__checkbox-pseudo {
  background-color: #bdbdbd;
}
.footer-form__submit {
  width: 130px;
  height: 45px;
  margin-top: 5px;
  padding: 10px;
  position: relative;
  left: 250px;
  font-size: 14px;
  font-weight: 500;
  background: none;
  border: 1px solid transparent;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.footer-form__submit::after {
  content: url("../../assets/icons/footer__arrow.svg");
  display: inline-block;
}
.footer-form__submit:hover {
  border-color: #bdbdbd;
  background: none;
}
.footer-form__submit:active {
  background-color: #4f4f4f;
}
.footer-adress {
  margin: 35px 15px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #fefefe;
  font-style: normal;
}
.footer-adress__heading {
  margin-left: 15px;
  margin-top: 6px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}
.footer-socials {
  margin-left: 15px;
  display: flex;
}
.footer-socials__li {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.footer-socials__link {
  display: inline-block;
  background-color: #fefefe;
  height: auto;
  width: 20px;
  padding: 5.5px 0px;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transition: background-color 0.2s ease-in-out;
}
.footer-socials__link:hover {
  background-color: #4bd8b5;
}
.footer-socials__link:active {
  background-color: #49d6df;
}
.footer-socials__link_instagram {
  height: 20px;
  mask-image: url("../../assets/icons/instagram.svg");
  -webkit-mask-image: url("../../assets/icons/instagram.svg");
}
.footer-socials__link_twitter {
  height: 16.25px;
  mask-image: url("../../assets/icons/twitter.svg");
  -webkit-mask-image: url("../../assets/icons/twitter.svg");
}
.footer-socials__link_youtube {
  height: 13.75px;
  mask-image: url("../../assets/icons/youtube.svg");
  -webkit-mask-image: url("../../assets/icons/youtube.svg");
}
.footer-socials__link_vk {
  height: 11.41px;
  mask-image: url("../../assets/icons/vk.svg");
  -webkit-mask-image: url("../../assets/icons/vk.svg");
}
.footer__button {
  width: 275px;
  position: relative;
  top: -473px;
  left: 1345px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__hr {
  margin-top: -11px;
  margin-bottom: 25px;
  border-color: #fefefe;
  border-width: 0.5px;
  border-bottom: none;
  border-left: none;
  border-right: none;
}
.footer__copyrights {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #bdbdbd;
}

/* Adaptive footer */
/* MAX WIDTH 1680px */
@media screen and (max-width: 1680px) {
  .footer-nav {
    position: relative;
    left: 3px;
  }
  .footer-nav__li {
    margin-top: 17px;
    margin-left: 5px;
    margin-right: 60px;
  }
  .footer-form__heading {
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .footer-form__text-input, .footer-form__text-input::placeholder {
    width: 85%;
    padding: 8px 0;
    margin-top: 13px;
  }
  .footer-form__legend {
    padding: 1px 6px;
    margin: 0 -10px;
  }
  .footer-form__fieldset {
    width: 79.5%;
  }
  .footer-form__checkbox-label {
    margin: 21px 0 0;
  }
  .footer-form__submit {
    margin-top: 6px;
    left: 248px;
  }
  .footer-adress {
    margin: 33px 10px 14px;
    line-height: 19.5px;
  }
  .footer-adress__heading {
    margin-top: -7px;
    margin-left: 10px;
  }
  .footer-socials {
    margin-left: 10px;
  }
  .footer__button {
    top: -147px;
    left: 610px;
  }
  .footer__hr {
    margin-top: -6px;
    margin-bottom: 29px;
  }
}
/* MAX WIDTH 1400px */
@media screen and (max-width: 1400px) {
  .footer__button {
    left: 460px;
  }
}
/* MAX WIDTH 1024px */
@media screen and (max-width: 1024px) {
  .footer__wrapper {
    margin-top: 96px;
    height: 900px;
  }
  .footer__top-bar {
    flex-direction: column;
    align-items: baseline;
  }
  .footer-nav {
    left: -3px;
  }
  .footer-nav__ul {
    margin-top: 26px;
    flex-direction: column;
  }
  .footer-nav__li {
    margin: 6px 0 0 0;
  }
  .footer__middle-box {
    margin-top: 18px;
    flex-direction: column;
  }
  .footer-form__text-input, .footer-form__text-input::placeholder {
    width: 64%;
  }
  .footer-form__fieldset {
    width: 59.5%;
  }
  .footer-form__submit {
    margin-top: 7px;
  }
  .footer-adress {
    margin: 33px 0px 14px;
  }
  .footer-adress__heading {
    margin-top: 62px;
    margin-left: 0;
  }
  .footer-socials {
    margin-left: 0;
  }
  .footer__button {
    left: 54%;
    top: -798px;
  }
  .footer__hr {
    margin-top: 10px;
    margin-bottom: 24px;
  }
}
/* MAX WIDTH 610px */
@media screen and (max-width: 610px) {
  .footer__wrapper {
    margin-top: 49px;
    height: 980px;
  }
  .footer-nav__ul {
    margin-top: 38px;
  }
  .footer-form__text-input, .footer-form__text-input::placeholder {
    width: 100%;
  }
  .footer-form__fieldset {
    width: 91.25%;
  }
  .footer-form__submit {
    left: 180px;
  }
  .footer-adress {
    margin-bottom: 15px;
  }
  .footer-adress__heading {
    margin-top: 39px;
  }
  .footer__button {
    left: 4%;
    top: 0;
    margin: 40px 0;
  }
  .footer__hr {
    margin-top: 79px;
    margin-bottom: 25px;
  }
}
/* MAX WIDTH 1680px */
@media screen and (max-width: 1680px) {
  /* First-screen */
  .first-screen {
    height: 926px;
    background-position: right;
  }
  .first-screen-aside {
    top: 741px;
    left: 0px;
  }
  .first-screen__content {
    margin: 5px 0 0 0;
  }
  .first-screen-slider__box {
    left: 325px;
    top: 3px;
  }
  .first-screen-slider__wrapper {
    margin-left: 128px;
  }
  .first-screen-slider-item {
    top: -15px;
    width: 180px;
    height: 260px;
    margin: 0px 14px;
  }
  .first-screen-slider-item_active {
    top: -15px;
    width: 245px;
    height: 355px;
  }
  .first-screen-slider__range-input-wrapper {
    margin-left: 356px;
    margin-top: -5px;
  }

  /* How-it-works */
  .how-it-works__wrapper {
    width: 745px;
  }
  .how-it-works-slider {
    width: 745px;
    margin-top: 12px;
  }
  .how-it-works-slider__image {
    width: 745px;
  }
  .how-it-works__range-input-wrapper {
    margin-top: 30px;
  }
  .how-it-works__range-input::-webkit-slider-thumb {
    width: 80px;
  }
  .how-it-works__range-input::-moz-range-thumb {
    width: 80px;
  }

  /* About */
  .about-item {
    width: 286px;
  }

  /* Gallery */
  .gallery {
    height: auto;
  }
  .gallery__heading {
    margin-bottom: 33px;
  }
  .gallery__button {
    margin-bottom: 99px;
  }

  /* Donate */
  .donate__wrapper {
    height: 702px;
  }
  .donate-description {
    margin-top: 50px;
  }
  .donate-description__arrow {
    width: 50px;
    height: 15px;
    background-position: right;
  }
  .donate__button {
    margin-top: 50px;
  }

  /* Map */
  .map__pointer_eagle > .map-tooltip {
    left: 33px;
    z-index: 1;
  }
  .map__pointer_alligator > .map-tooltip {
    left: 30px;
    z-index: 1;
  }
}
/* MAX WIDTH 1400px */
@media screen and (max-width: 1400px) {
  /*Gallery*/
  .gallery-slider {
    left: -10px;
  }
  .gallery-slider__wrapper {
    width: 900px;
  }
  .gallery-slider-item {
    width: 210px;
    height: 301px;
    margin: 0 10px;
  }
  .gallery-slider-item__content {
    margin: 0 20px 13px 9px;
  }
  .gallery-slider-item__buttons {
    margin: 0 7px 35px 10px;
  }

  /* Testimonials */
  .testimonials-slider__wrapper {
    width: 920px;
  }
  .testimonials-slider-item {
    width: 440px;
    margin: 0 10px;
  }
  .testimonials-slider-item__content {
    margin-top: 20px;
    max-width: 330px;
  }

  /* Map */
  .map {
    width: 900px;
    height: 373px;
    background-size: contain;
    transform: scaleY(1.17);
  }
  .map__wrapper {
    width: 900px;
    margin-top: 92px;
  }
  .map__pointer_eagle {
    top: 22px;
    left: 84px;
  }
  .map__pointer_alligator {
    top: 35px;
    left: 175px;
  }
  .map__pointer_gorilla {
    top: 120px;
    left: 420px;
  }
  .map__pointer_panda {
    top: 36px;
    left: 656px;
  }
  .map-block {
    height: 842px;
  }
  .map-block__button {
    margin-top: 67px;
  }
}
/* MAX WIDTH 1024px */
@media screen and (max-width: 1024px) {
  /* First screen 1024*/
  .first-screen {
    height: 934px;
  }
  .first-screen-aside {
    top: 720px;
  }
  .first-screen__content {
    width: 100%;
    margin: 0;
  }
  .first-screen__heading {
    font-size: 64px;
    line-height: 75px;
  }
  .first-screen__button {
    margin-top: 31px;
  }
  .first-screen-slider__box {
    left: 27px;
    top: 48px;
  }
  .first-screen-slider__wrapper {
    margin-left: 63px;
  }
  .first-screen-slider__range-input-wrapper {
    margin-left: 292px;
  }

  /* How-it-works-box 1024px */
  .how-it-works-slider {
    width: 100%;
    margin-top: 30px;
  }
  .how-it-works-slider__image {
    width: 100%;
  }
  .how-it-works__range-input-wrapper {
    margin-top: 28px;
  }

  /* About 1024px */
  .about {
    height: 875px;
  }
  .about__wrapper {
    margin-top: 51px;
    flex-direction: column;
    align-items: center;
  }
  .about-item {
    margin-top: 49px;
  }

  /* Gallery 1024px */
  .gallery {
    height: 766px;
  }
  .gallery__heading {
    margin-bottom: 36px;
  }
  .gallery-slider__arrow_left, .gallery-slider__arrow_right {
    display: none;
  }
  .gallery-slider__wrapper {
    max-width: 94vw;
  }
  .gallery-slider__range-input-wrapper {
    margin-top: 36px;
  }
  .gallery__button {
    margin-top: 37px;
  }

  /* Donate 1024px */
  .donate__wrapper {
    height: auto;
  }
  .donate__heading {
    margin-top: 101px;
  }
  .donate__content {
    margin-top: 18px;
    width: 90%;
    text-align: center;
  }
  .donate-description {
    flex-direction: column;
    margin-top: 47px;
  }
  .donate-description__arrow {
    margin: 6.5% 0 7.7%;
    transform: rotate(90deg);
  }
  .donate__button {
    margin-bottom: 100px;
  }

  /* Testimonials 1024px*/
  .testimonials {
    height: 795px;
  }
  .testimonials-slider__arrow_left, .testimonials-slider__arrow_right {
    display: none;
  }
  .testimonials-slider__box {
    margin-top: 32px;
  }
  .testimonials-slider__wrapper {
    width: 609px;
  }
  .testimonials-slider-item {
    width: 585px;
  }
  .testimonials-slider-item__content {
    max-width: 440px;
  }

  /* MAP 1024px */
  .map {
    width: 94%;
    height: 250px;
  }
  .map__wrapper {
    margin-top: 71px;
    width: 640px;
  }
  .map__pointer_eagle {
    top: -14px;
    left: 73px;
  }
  .map__pointer_eagle > .map-tooltip {
    top: 70px;
    left: 30px;
  }
  .map__pointer_alligator {
    top: -4px;
    left: 124px;
  }
  .map__pointer_gorilla {
    top: 48px;
    left: 288px;
  }
  .map__pointer_gorilla > .map-tooltip {
    left: -190px;
  }
  .map__pointer_panda {
    top: -9px;
    left: 447px;
  }
  .map-block {
    height: 666px;
  }
  .map-block__button {
    margin-top: 55px;
  }
}
/* MAX WIDTH 610px */
@media screen and (max-width: 610px) {
  /* First screen 610*/
  .first-screen {
    height: 669px;
  }
  .first-screen-aside {
    display: none;
  }
  .first-screen__content {
    width: 100%;
    position: relative;
    margin-top: 0;
    top: 91px;
  }
  .first-screen__heading {
    font-size: 48px;
    line-height: 56.25px;
  }
  .first-screen__button {
    margin-top: 16px;
  }
  .first-screen-slider__box {
    left: 0;
    top: 118px;
  }
  .first-screen-slider__wrapper {
    margin-left: 8px;
  }
  .first-screen-slider-item {
    margin: 0 5px;
    top: 0;
    width: 113px;
    height: 164px;
  }
  .first-screen-slider-item_active {
    top: 0;
    width: 140px;
    height: 202px;
  }
  .first-screen-slider-item__content {
    margin: 0 8px;
    font-size: 12px;
    line-height: 14.06px;
  }
  .first-screen-slider-item__buttons {
    height: 45px;
    margin: 10px 10px 16px;
    flex-direction: column;
    align-items: baseline;
  }
  .first-screen-slider-item__link {
    font-size: 10px;
  }
  .first-screen-slider-item__donate {
    font-size: 10px;
  }
  .first-screen-slider__ul {
    height: 215px;
  }
  .first-screen-slider__background-line {
    top: 107px;
    left: -3px;
  }
  .first-screen-slider__range-input {
    margin-top: 3px;
  }
  .first-screen-slider__range-input-wrapper {
    width: 140px;
    margin-left: 136px;
    margin-top: 9px;
  }
  .first-screen-slider__range-input::-webkit-slider-thumb {
    width: 17px;
  }
  .first-screen-slider__range-input::-moz-range-thumb {
    width: 17px;
  }
  .first-screen-slider__range-input::-ms-thumb {
    width: 17px;
  }
  .first-screen-slider__current-value {
    position: relative;
    left: 3px;
  }

  /* How-it-works box 610 */
  .how-it-works {
    height: 833px;
  }
  .how-it-works__wrapper {
    margin-top: 50px;
  }
  .how-it-works__content {
    margin-top: 22px;
  }
  .how-it-works__range-input-wrapper {
    margin-top: 17px;
    /* PP - delete after cross-check */
    position: relative;
    left: 5px;
  }
  .how-it-works__button {
    margin-top: 22px;
    /* PP - delete after cross-check */
    position: relative;
    left: 5px;
  }

  /* About 610px */
  .about {
    height: 719px;
  }
  .about__wrapper {
    margin-top: 21px;
  }
  .about-item {
    width: 298px;
    margin-top: 29px;
  }

  /* Gallery 610px */
  .gallery {
    height: 683px;
  }
  .gallery__heading {
    margin-bottom: 31px;
  }
  .gallery-slider {
    left: -8px;
  }
  .gallery-slider-item {
    margin: 0 8px;
  }
  .gallery-slider__range-input-wrapper {
    margin-top: 32px;
  }
  .gallery__button {
    margin-top: 27px;
  }

  /* Donate 610px */
  .donate__wrapper {
    height: auto;
  }
  .donate__heading {
    margin-top: 50px;
  }
  .donate__content {
    display: none;
  }
  .donate-description {
    margin-top: 31px;
  }
  .donate-description__arrow {
    margin: 12.5% 0 15.7%;
  }
  .donate__button {
    margin-top: 41px;
    margin-bottom: 50px;
  }

  /* Testimonials 610px */
  .testimonials {
    height: 705px;
  }
  .testimonials__heading {
    margin-top: 50px;
  }
  .testimonials-slider__box {
    margin-top: 18px;
    width: 320px;
  }
  .testimonials-slider__wrapper {
    width: 320px;
    height: 400px;
  }
  .testimonials-slider-item {
    width: 300px;
    height: 363px;
  }
  .testimonials-slider-item__heading {
    margin-top: 50px;
    font-size: 16px;
  }
  .testimonials-slider-item__content {
    font-size: 14px;
    width: 272px;
  }
  .testimonials-slider__range-input-wrapper {
    margin-top: 23px;
  }
  .testimonials__button {
    margin-top: 22px;
  }

  /* MAP 610px */
  .map__image {
    width: 63%;
    height: 45%;
    top: 12%;
    left: 20%;
  }

  .map {
    background-position: top;
    width: 100%;
    height: 41vw;
  }
  .map-block {
    height: auto;
  }
  .map-block__heading {
    margin-top: 50px;
  }
  .map-block__button {
    margin-top: 5px;
    margin-bottom: 59px;
  }
  .map__wrapper {
    height: 50vw;
    width: 100%;
    margin-top: 42px;
  }
  .map__pointer {
    width: 11%;
    height: 30%;
  }
  .map__pointers-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .map__pointer_bg {
    mask-position: center;
    -webkit-mask-position: center;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .map__pointer_eagle {
    top: -6.5%;
    left: 8.5%;
  }
  .map__pointer_eagle > .map-tooltip {
    top: 72%;
    left: 14%;
  }
  .map__pointer_alligator {
    top: -1%;
    left: 17.5%;
  }
  .map__pointer_alligator > .map-tooltip {
    top: 53%;
    left: -69%;
  }
  .map__pointer_gorilla {
    top: 15%;
    left: 44.5%;
  }
  .map__pointer_gorilla > .map-tooltip {
    top: 0%;
    left: -315%;
  }
  .map__pointer_panda {
    top: -3%;
    left: 72%;
  }
  .map__pointer_panda > .map-tooltip {
    top: 60%;
    left: -563%;
  }
  .map-tooltip {
    width: 721%;
    height: auto;
    z-index: 1;
    align-items: initial;
  }
  .map-tooltip__description {
    width: 65%;
    margin-bottom: 19px;
  }
  .map-tooltip__heading {
    margin: 17px 0 -1px;
    font-size: 14px;
  }
  .map-tooltip__content {
    margin-top: 5px;
    font-size: 11px;
    line-height: 13px;
  }
  .map-tooltip__image {
    width: 40px;
    height: 40px;
    margin: 16px 8px 0px 15px;
  }
}

/*# sourceMappingURL=style.c.map */
