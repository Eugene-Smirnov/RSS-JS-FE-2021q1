import { CongratPopUp } from './congrat-pop-up';

export function appendCongratPopUp(): void {
  const congratPopUp = new CongratPopUp();

  const rootElement = document.getElementById('app');
  if (rootElement) rootElement.append(congratPopUp.element);

  document.body.classList.add('no-scroll');
  congratPopUp.element.style.setProperty('display', 'flex');
  setTimeout(() => {
    congratPopUp.element.style.setProperty('--popup-opacity', '1');
  }, 0);
}
