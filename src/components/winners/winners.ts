import { winnersStateObservable } from '../../services/winners/winners-observable';
import { BaseComponent } from '../base-component';
import { WinnersHeader } from './winners-header';
import * as winnersService from '../../services/winners/winners-service';
import * as garageService from '../../services/garage/garage-service';
import { WinnersRow } from './winner-row';
import { WinnersOutletHeader } from './winners-outlet-header';
import './winners.scss';
import { PopUp } from '../pop-up/pop-up';

export class Winners extends BaseComponent {
  state = winnersStateObservable;

  header = new WinnersHeader();

  outletHeader = new WinnersOutletHeader();

  outlet = new BaseComponent('div', ['winners-outlet']).element;

  constructor() {
    super('div', ['winners__wrapper']);
    this.element.append(
      this.header.element,
      this.outletHeader.element,
      this.outlet
    );
    this.updateWinners();
    this.handleOutletChanging();
  }

  async updateWinners(): Promise<void> {
    const winners = await winnersService.getWinners();
    const cars = await garageService.getCarsByIds(winners.map(({ id }) => id));

    const components = winners.map((winner, index) => {
      const ind = this.state.getIndex(index);
      return new WinnersRow(winner, ind, cars[index]).element;
    });

    this.outlet.innerHTML = '';
    this.outlet.append(...components);
  }

  private handleOutletChanging(): void {
    document.body.addEventListener('winnersUpdate', () => {
      this.updateWinners();
    });
  }
}
