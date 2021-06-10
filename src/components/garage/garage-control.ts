import { garageStateObservable } from '../../services/garage/garage-state-observable';
import { BaseComponent } from '../base-component';
import './styles/garage-controls.scss';
import * as garageService from '../../services/garage/garage-service';

const CARS_PER_GEN = 100;
export class GarageControl extends BaseComponent {
  state = garageStateObservable.getState();

  total = new BaseComponent('span', ['garage-control__total']).element;

  generateBtn = new BaseComponent('button', ['garage-control__button']).element;

  raceBtn = new BaseComponent('button', ['garage-control__button']).element;

  reloadBtn = new BaseComponent('button', ['garage-control__button']).element;

  constructor() {
    super('div', ['garage-control']);
    this.setTotal();
    const buttonsWrapper = new BaseComponent('div', ['garage-control__buttons'])
      .element;
    this.generateBtn.setAttribute('id', 'generate');
    this.raceBtn.setAttribute('id', 'race');
    this.reloadBtn.setAttribute('id', 'reload');
    this.generateBtn.innerText = 'generate';
    this.raceBtn.innerText = 'race';
    this.reloadBtn.innerText = 'reload';
    buttonsWrapper.append(this.generateBtn, this.raceBtn, this.reloadBtn);
    this.element.append(this.total, buttonsWrapper);

    garageStateObservable.subscribe((state) => {
      this.state = state;
      this.setTotal();
    });
    this.handleGen();
    this.handleRaceBtn();
    this.handleReloadBtn();
  }

  private setTotal(): void {
    this.total.innerText = `cars total: ${this.state.total}`;
  }

  private handleGen(): void {
    this.generateBtn.addEventListener('click', () => {
      garageService.genRandomCars(CARS_PER_GEN);
      this.element.dispatchEvent(new Event('garageUpdate', { bubbles: true }));
    });
  }

  private handleRaceBtn(): void {
    this.raceBtn.addEventListener('click', () => {
      this.element.dispatchEvent(new Event('raceStart', { bubbles: true }));
    });
  }

  private handleReloadBtn(): void {
    this.reloadBtn.addEventListener('click', () => {
      this.element.dispatchEvent(new Event('reloadCars', { bubbles: true }));
    });
  }
}
