import { BaseComponent } from '../base-component';
import './styles/car-form.scss';
import * as garageService from '../../services/garage/garage-service';
import { Car } from '../../models/car';
import { currentCarObservable } from '../../services/garage/current-car-observable';

export class CarForm {
  nameInput: HTMLInputElement;

  colorInput: HTMLInputElement;

  button: HTMLElement;

  element: HTMLFormElement;

  constructor(name: 'create' | 'update') {
    this.element = document.createElement('form');
    this.element.classList.add('form', `form_${name}`);

    const heading = document.createElement('h3');
    heading.innerText = name;
    heading.classList.add('form__heading');

    const inputs = new BaseComponent('div', ['form__inputs']).element;

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', `form_${name}__name-input`);
    nameInput.classList.add(`form_${name}__name-input`);
    this.nameInput = nameInput;

    const colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    colorInput.setAttribute('id', `form_${name}__color-input`);
    colorInput.classList.add(`form_${name}__color-input`);
    this.colorInput = colorInput;

    const button = new BaseComponent('button', ['form__button']).element;
    button.setAttribute('id', `form_${name}__button`);
    button.innerText = 'submit';
    this.button = button;

    if (name === 'create') {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.create();
        this.nameInput.value = '';
        this.element.dispatchEvent(
          new Event('garageUpdate', { bubbles: true })
        );
      });
    }

    if (name === 'update') {
      this.nameInput.setAttribute('disabled', '');
      this.colorInput.setAttribute('disabled', '');
      this.button.setAttribute('disabled', '');
      this.handleActivation();
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.update();
        this.element.reset();
        currentCarObservable.clear();
        this.element.dispatchEvent(
          new Event('garageUpdate', { bubbles: true })
        );
      });
    }

    inputs.append(nameInput, colorInput);
    this.element.append(heading, inputs, button);
  }

  create(): void {
    const name = this.nameInput.value;
    const color = this.colorInput.value;
    const car = new Car(name, color);
    garageService.createCar(car);
  }

  update(): void {
    const name = this.nameInput.value;
    const color = this.colorInput.value;
    const id = currentCarObservable.getId();
    if (id) {
      const car = new Car(name, color, id);
      garageService.updateCar(id, car);
    }
  }

  handleActivation(): void {
    currentCarObservable.subscribe((car, isSelected) => {
      this.nameInput.setAttribute('value', car.name);
      this.colorInput.setAttribute('value', car.color);
      if (isSelected) {
        this.nameInput.removeAttribute('disabled');
        this.colorInput.removeAttribute('disabled');
        this.button.removeAttribute('disabled');
      } else {
        this.nameInput.setAttribute('disabled', '');
        this.colorInput.setAttribute('disabled', '');
        this.button.setAttribute('disabled', '');
      }
    });
  }
}
