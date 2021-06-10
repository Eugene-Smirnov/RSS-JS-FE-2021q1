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

  outlet: HTMLElement = new BaseComponent('div', ['winners-outlet']).element;

  winnersRows: WinnersRow[] = [];

  constructor() {
    super('div', ['winners__wrapper']);
    this.element.append(
      this.header.element,
      this.outletHeader.element,
      this.outlet
    );
    this.updateOutlet();
    document.body.addEventListener('winnersUpdate', () => {
      this.updateOutlet();
    });
  }

  updateOutlet(): void {
    winnersService.getWinners().then((winners) => {
      this.outlet.innerHTML = '';
      this.winnersRows = [];
      winners.forEach((winner, index) => {
        const ind = this.state.getState().page * 10 - 9 + index;
        const row = new WinnersRow(winner, ind);
        this.winnersRows.push(row);
        this.outlet.append(row.element);
      });
    });
  }
}
