import { BaseComponent } from '../base-component';
import * as garageService from '../../services/garage/garage-service';
import { garageStateObservable } from '../../services/garage/garage-state-observable';
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

  carRows: GarageRow[] = [];

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
    this.handleRaceStarting();
    this.handleCarsReloading();
  }

  updateCarsOutlet(): void {
    garageService.getCars().then((cars) => {
      this.carsOutlet.innerHTML = '';
      this.carRows = [];
      cars.forEach((car) => {
        const row = new GarageRow(car);
        this.carRows.push(row);
        this.carsOutlet.append(row.element);
      });
      this.element.append(this.carsOutlet, this.lowerGarageNav.element);
    });
  }

  private handleOutletChanging(): void {
    this.element.addEventListener('garageUpdate', () => {
      this.updateCarsOutlet();
    });
  }

  private handleRaceStarting(): void {
    this.element.addEventListener('raceStart', () => this.race());
  }

  private handleCarsReloading(): void {
    this.element.addEventListener('reloadCars', () => this.reload());
  }

  private async race(): Promise<void> {
    const startTime = Date.now();

    this.element.addEventListener('raceWinner', async (e: CustomEventInit) => {
      const id = e.detail.winner;
      const time = Date.now() - startTime;
      const car = await garageService.getCar(id);
      console.log(`${car.name} won in ${time / 1000}s`);
    }, { once: true });

    await this.reload();

    await Promise.all(this.carRows.map((garageRow) => garageRow.startEngine()))
      .then(() => {
        this.carRows.forEach((garageRow) => garageRow.drive());
      });
  }

  private async reload(): Promise<void> {
    await Promise.all(this.carRows.map((garageRow) => garageRow.stopBtn?.click()));
  }
}
