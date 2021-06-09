import { BaseComponent } from '../base-component';
import './styles/car-form.scss';

export class CarForm extends BaseComponent {
  constructor(name: 'create' | 'update') {
    super('div', ['form', `form_${name}`]);
    const heading = document.createElement('h3');
    heading.innerText = name;
    heading.classList.add('form__heading');

    const inputs = new BaseComponent('div', ['form__inputs']).element;

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', `form_${name}__name-input`);
    nameInput.classList.add(`form_${name}__name-input`);

    const colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    colorInput.setAttribute('id', `form_${name}__color-input`);
    colorInput.classList.add(`form_${name}__color-input`);

    const button = new BaseComponent('button', ['form__button']).element;
    button.setAttribute('id', `form_${name}__button`);
    button.innerText = 'submit';

    if (name === 'update') {
      nameInput.setAttribute('disabled', '');
      colorInput.setAttribute('disabled', '');
      button.setAttribute('disabled', '');
    }

    inputs.append(nameInput, colorInput);
    this.element.append(heading, inputs, button);
  }
}
