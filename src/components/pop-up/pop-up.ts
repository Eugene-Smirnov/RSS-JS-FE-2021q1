import './pop-up.scss';
import { BaseComponent } from '../base-component';

export class PopUp extends BaseComponent {
  popUp: BaseComponent;

  constructor() {
    super('div', ['pop-up__wrapper']);
    this.popUp = new BaseComponent('div', ['pop-up']);
    this.element.append(this.popUp.element);
  }
}
