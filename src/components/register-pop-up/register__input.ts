import { BaseComponent } from '../base-component';

const requiredField = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'E-mail',
};

export class RegisterInput extends BaseComponent {
  constructor(name: keyof typeof requiredField) {
    super('input', ['register-input', `register-input_${name}`]);
    this.element.setAttribute('type', 'text');
    if (name === 'email') {
      this.element.setAttribute('type', 'email');
    }
    this.element.setAttribute('id', `register-input_${name}`);
    this.element.setAttribute('name', `${name}`);
    this.element.setAttribute('placeholder', `${requiredField[name]}`);
  }
}
