import './congrat-pop-up.scss';
import { router } from '../../router';
import { BaseComponent } from '../base-component';
import { PopUp } from '../pop-up/pop-up';
import { CongratButton } from './button';

export class CongratPopUp extends PopUp {
  button = new CongratButton();

  constructor() {
    super();
    this.popUp.element.classList.add('pop-up_congrat');

    const congratHeading = new BaseComponent('h2', ['congrat__heading']);
    congratHeading.element.innerText = 'Congratulations, you find all matches!';
    this.popUp.element.append(congratHeading.element);
    this.popUp.element.append(this.button.element);

    this.handleButton();
    this.handleHiding();
  }

  private popUpHide(): void {
    this.element.style.setProperty('--popup-opacity', '0');
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      this.element.remove();
    }, 300);
  }

  private handleButton(): void {
    this.button.element.addEventListener('click', () => {
      this.popUpHide();
      router.navigate('/score');
    });
  }

  private handleHiding(): void {
    this.element.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.closest('.pop-up') === null) {
        this.popUpHide();
        router.navigate('/score');
      }
    });
  }
}
