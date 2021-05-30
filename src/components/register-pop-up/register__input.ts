const requiredField = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'E-mail',
};

export class RegisterInput {
  readonly element: HTMLInputElement;

  constructor(name: keyof typeof requiredField) {
    this.element = document.createElement('input');
    this.element.classList.add(...['register-input', `register-input_${name}`]);

    this.element.setAttribute('type', 'text');
    if (name === 'email') {
      this.element.setAttribute('type', 'email');
    }
    this.element.setAttribute('id', `register-input_${name}`);
    this.element.setAttribute('name', `${name}`);
    this.element.setAttribute('placeholder', `${requiredField[name]}`);
  }

  validation(bool: boolean): void {
    if (bool) {
      this.showValid();
    } else {
      this.showUnvalid();
    }
  }

  showValid(): void {
    this.element.style.setProperty(
      '--validation-color',
      'var(--validation-color-accept)',
    );
  }

  showUnvalid(): void {
    this.element.style.setProperty(
      '--validation-color',
      'var(--validation-color-reject)',
    );
  }
}
