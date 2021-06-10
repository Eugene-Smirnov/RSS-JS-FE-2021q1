import { garageStateObservable } from '../../services/garage/garage-state-observable';
import { BaseComponent } from '../base-component';
import './styles/garage-controls.scss';
import * as garageService from '../../services/garage/garage-service';

const CARS_PER_GEN = 100;
export class GarageControl extends BaseComponent {
  state = garageStateObservable.getState();

  total = new BaseComponent('span', ['garage-control__total']).element;

  generate = new BaseComponent('button', ['garage-control__button']).element;

  race = new BaseComponent('button', ['garage-control__button']).element;

  reload = new BaseComponent('button', ['garage-control__button']).element;

  constructor() {
    super('div', ['garage-control']);
    this.setTotal();
    const buttonsWrapper = new BaseComponent('div', ['garage-control__buttons'])
      .element;
    this.generate.setAttribute('id', 'generate');
    this.race.setAttribute('id', 'race');
    this.reload.setAttribute('id', 'reload');
    this.generate.innerText = 'generate';
    this.race.innerText = 'race';
    this.reload.innerText = 'reload';
    buttonsWrapper.append(this.generate, this.race, this.reload);
    this.element.append(this.total, buttonsWrapper);

    garageStateObservable.subscribe((state) => {
      this.state = state;
      this.setTotal();
    });
    this.handleGen();
  }

  private setTotal() {
    this.total.innerText = `cars total: ${this.state.total}`;
  }

  private handleGen() {
    this.generate.addEventListener('click', () => {
      garageService.genRandomCars(CARS_PER_GEN);
      this.element.dispatchEvent(new Event('garageUpdate', { bubbles: true }));
    });
  }
}
