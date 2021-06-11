import { winnersStateObservable } from '../../services/winners/winners-observable';
import { BaseComponent } from '../base-component';
import { WinnersHeader } from './winners-header';
import * as winnersService from '../../services/winners/winners-service';
import { WinnersRow } from './winner-row';
import { WinnersOutletHeader } from './winners-outlet-header';
import './winners.scss';

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

    this.updateOutlet();
    this.handleOutletChanging();
  }

  updateOutlet(): void {
    winnersService.getWinners().then((winners) => {
      this.outlet.innerHTML = '';
      winners.forEach((winner, index) => {
        const ind = this.state.getState().page * 10 - 9 + index;
        const row = new WinnersRow(winner, ind);
        this.outlet.append(row.element);
      });
      this.element.append(this.outlet);
    });
  }

  private handleOutletChanging(): void {
    document.body.addEventListener('winnersUpdate', () => {
      this.updateOutlet();
    });
  }
}
