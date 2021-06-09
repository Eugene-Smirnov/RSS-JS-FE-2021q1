import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';
import { garageStateObservable } from '../../services/garage/garage-state-observable';
import { Car } from '../../models/car';
import { GarageRow } from './garage-row';

import './styles/garage.scss';
import { CarForm } from './car-form';
import { GarageControl } from './garage-control';
import { GarageNav } from './garage-nav';

export class Garage extends BaseComponent {
  service = garageService;

  state = garageStateObservable;

  cars?: Car[];

  createForm = new CarForm('create');

  updateForm = new CarForm('update');

  controlPanel = new GarageControl();

  upperGarageNav = new GarageNav('upper');

  lowerGarageNav = new GarageNav('lower');

  constructor() {
    super('div', ['garage__wrapper']);

    const formsWrapper = new BaseComponent('div', ['forms-wrapper']).element;
    formsWrapper.append(this.createForm.element, this.updateForm.element);
    this.element.append(
      this.controlPanel.element,
      formsWrapper,
      this.upperGarageNav.element
    );

    garageService.getCars(this.state.getState()).then((cars) => {
      this.cars = cars;
      this.cars.forEach((car) => {
        this.element.append(new GarageRow(car).element);
      });
      this.element.append(this.lowerGarageNav.element);
    });
  }
}
