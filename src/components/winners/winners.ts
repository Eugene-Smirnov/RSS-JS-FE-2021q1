import { winnersStateObservable } from '../../services/winners/winners-observable';
import { BaseComponent } from '../base-component';
import { WinnersHeader } from './winners-header';
import * as winnersService from '../../services/winners/winners-service';
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
    this.updateOutlet();
    this.handleOutletChanging();
  }

  updateOutlet(): void {
    winnersService.getWinners().then((winners) => {
      const rows: WinnersRow[] = [];
      Promise.all(
        winners.map(async (winner, index) => {
          const ind = this.state.getIndex(index);
          const row = await new WinnersRow(winner, ind);
          rows.push(row);
        })
      ).then(() => {
        this.outlet.innerHTML = '';
        rows.forEach((row) => {
          this.outlet.append(row.element);
        });
      });
    });
  }

  private handleOutletChanging(): void {
    document.body.addEventListener('winnersUpdate', () => {
      this.updateOutlet();
    });
  }
}
