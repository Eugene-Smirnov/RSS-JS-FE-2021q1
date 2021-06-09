import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';
import { garageStateObservable } from '../../services/garage/garage-state-observable';
import { Car } from '../../models/car';
import { GarageRow } from './garage-row';

import './garage.scss';

export class Garage extends BaseComponent {
  service = garageService;

  state = garageStateObservable;

  cars?: Car[];

  constructor() {
    super('div', ['garage__wrapper']);
    garageService.getCars(this.state.getState()).then((cars) => {
      this.cars = cars;
      this.cars.forEach((car) => {
        this.element.append(new GarageRow(car).element);
      });
    });
  }
}
