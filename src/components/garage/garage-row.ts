import { Car } from '../../models/car';
import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';

export class GarageRow extends BaseComponent {
  car: Car;

  constructor(car: Car) {
    super('div', ['garage-row']);
    this.car = car;
    this.element.innerHTML = `
    <h4 class='car__name'>${car.name}</h4>
    <div class='garage-row__buttons'>
      <button class='garage-row__button_select'>select</button>
      <button class='garage-row__button_remove'>remove</button>
    </div>
    <div class='garage-row__track-wrapper'>
      <div class='car__buttons'>
        <span class='car__button car__button_start'>A</span>
        <span class='car__button car__button_stop car__button_active'>B</span>
      </div>
      <div class='garage-row__track'>
        <div class='car__image' style='background-color: ${car.color}'>

        </div>
        <span class='garage-row__finish-line'></span>
      </div>
    </div>
    `;
    this.handleRemoveBtn();
  }

  handleRemoveBtn(): void {
    const btn = this.element.querySelector('.garage-row__button_remove');
    if (btn) {
      btn.addEventListener('click', () => {
        console.log(this.car.id);
        if (this.car.id) garageService.deleteCar(this.car.id);
        this.element.dispatchEvent(new Event('garageUpdate'));
      });
    }
  }
}
