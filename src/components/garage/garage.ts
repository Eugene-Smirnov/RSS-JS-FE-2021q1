import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';
import { garageStateObservable } from '../../services/garage/garage-state-observable';
import { Car } from '../../models/car';
import { GarageRow } from './garage-row';

import './styles/garage.scss';
import { CarForm } from './car-form';
import { GarageControl } from './garage-control';
import { GarageNav } from './garage-nav';
import { currentCarObservable } from '../../services/garage/current-car-observable';

export class Garage extends BaseComponent {
  service = garageService;

  state = garageStateObservable;

  currentCar = currentCarObservable;

  carsOutlet = new BaseComponent('div', ['cars-outlet']).element;

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

    this.updateCarsOutlet();
    this.handleOutletChanging();
  }

  updateCarsOutlet(): void {
    this.carsOutlet.innerHTML = '';
    garageService.getCars(this.state.getState()).then((cars) => {
      cars.forEach((car) => {
        const row = new GarageRow(car).element;
        this.carsOutlet.append(row);
      });
      this.element.append(this.carsOutlet, this.lowerGarageNav.element);
    });
  }

  handleOutletChanging(): void {
    this.carsOutlet.addEventListener('garageUpdate', () => {
      this.updateCarsOutlet();
    });

    this.createForm.element.addEventListener('garageUpdate', () => {
      this.updateCarsOutlet();
    });

    this.updateForm.element.addEventListener('garageUpdate', () => {
      this.updateCarsOutlet();
    });
  }
}
