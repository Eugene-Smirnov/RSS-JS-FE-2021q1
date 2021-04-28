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