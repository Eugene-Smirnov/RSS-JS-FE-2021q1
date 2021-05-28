import { BaseComponent } from '../base-component';

const registerButtons = {
  addUser: 'add user',
  cancel: 'cancel',
};

export class RegisterButton extends BaseComponent {
  constructor(name: keyof typeof registerButtons) {
    super('button', ['register-button', `register-button_${name}`]);
    this.element.innerText = registerButtons[name];
  }
}
