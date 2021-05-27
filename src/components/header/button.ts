import './styles/button.scss';
import { BaseComponent } from '../base-component';

export class HeaderButton extends BaseComponent {
  constructor() {
    super('button', ['header__button']);
    this.element.innerText = 'register new player';
  }
}
