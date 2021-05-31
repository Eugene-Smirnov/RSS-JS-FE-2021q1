import { BaseComponent } from '../base-component';

export class CongratButton extends BaseComponent {
  constructor() {
    super('button', ['congrat-button']);
    this.element.innerText = 'ok';
  }
}
