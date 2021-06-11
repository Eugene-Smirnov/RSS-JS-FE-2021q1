import { BaseComponent } from '../base-component';
import './pop-up.scss';

export class PopUp extends BaseComponent {
  button: HTMLButtonElement = document.createElement('button');

  constructor(heading: string, message: string) {
    super('div', ['pop-up__wrapper']);
    const popUp = new BaseComponent('div', ['pop-up']).element;
    const head = new BaseComponent('h3', ['pop-up__heading']).element;
    head.innerText = heading;
    const content = new BaseComponent('p', ['pop-up__message']).element;
    content.innerText = message;
    this.button.classList.add('pop-up__button');
    this.button.innerText = 'OK';
    popUp.append(head, content, this.button);
    this.element.append(popUp);

    document.body.style.setProperty('overflow-y', 'hidden');

    this.handleButton();
    this.handleClosing();
  }

  handleButton(): void {
    this.button.addEventListener('click', () => {
      this.close();
    });
  }

  handleClosing(): void {
    this.element.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('.pop-up')) return;
      this.close();
    });
  }

  private close(): void {
    document.body.style.setProperty('overflow-y', 'auto');
    this.element.remove();
  }
}
