const requiredField = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'E-mail',
};

export class RegisterInput {
  readonly element: HTMLInputElement;

  isValid = false;

  constructor(name: keyof typeof requiredField) {
    this.element = document.createElement('input');
    this.element.classList.add(...['register-input', `register-input_${name}`]);

    this.element.setAttribute('type', 'text');
    this.element.setAttribute(
      'title',
      `
      - Field couldn't be empty.
      - Field couldn't contain only numbers.
      - Field couldn't contain next symbols (~ ! @ # $ % * () _ — + = | : ; " ' \` < > , . ? / ^).
      `,
    );
    if (name === 'email') {
      this.element.setAttribute('type', 'email');
      this.element.setAttribute(
        'title',
        `
        - Field couldn't be empty.
        - Email should be valid by terms of RFC
        `,
      );
    }
    this.element.setAttribute('id', `register-input_${name}`);
    this.element.setAttribute('name', `${name}`);
    this.element.setAttribute('placeholder', `${requiredField[name]}`);
  }

  validation(bool: boolean): void {
    this.isValid = bool;
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
