import { WinnersState } from '../../models/winners-state';
import { winnersStateObservable } from '../../services/winners/winners-observable';
import { BaseComponent } from '../base-component';

export class WinnersOutletHeader extends BaseComponent {
  state = winnersStateObservable;

  winsEl = new BaseComponent('div', ['winners-outlet-header__wins']).element;

  timeEl = new BaseComponent('div', ['winners-outlet-header__time']).element;

  filters = [this.winsEl, this.timeEl];

  currentActive: 'wins' | 'time' | null = null;

  constructor() {
    super('div', ['winners-outlet-header']);

    const ind = new BaseComponent('div', ['winners-outlet-header__index'])
      .element;
    ind.innerText = 'Number';

    const img = new BaseComponent('div', ['winners-outlet-header__image'])
      .element;
    img.innerText = 'car';

    const name = new BaseComponent('div', ['winners-outlet-header__name'])
      .element;
    name.innerText = 'name';

    this.winsEl.innerText = 'wins';

    this.timeEl.innerText = 'best time (s)';

    this.element.append(ind, img, name, this.winsEl, this.timeEl);

    this.handleTimeEl();
    this.handleWinsEl();
  }

  private handleWinsEl(): void {
    this.winsEl.addEventListener('click', async () => {
      await this.sortBy('wins');
      this.winsEl.dispatchEvent(new Event('winnersUpdate', { bubbles: true }));
    });
  }

  private handleTimeEl(): void {
    this.timeEl.addEventListener('click', async () => {
      await this.sortBy('time');
      this.timeEl.dispatchEvent(new Event('winnersUpdate', { bubbles: true }));
    });
  }

  private async sortBy(attr: 'wins' | 'time'): Promise<void> {
    if (this.currentActive !== attr) {
      this.currentActive = attr;
      this.removeArrow();
      let order: 'ASC' | 'DESC' = 'DESC';
      if (attr === 'wins') {
        this.winsEl.style.setProperty('--arrow', 'var(--arrow-down)');
      } else {
        this.timeEl.style.setProperty('--arrow', 'var(--arrow-down)');
        order = 'ASC';
      }
      const currentState = this.state.getState();
      const winnersState: WinnersState = {
        total: currentState.total,
        limit: currentState.limit,
        page: currentState.page,
        sort: attr,
        order
      };
      this.state.updateState(winnersState);
    } else {
      this.state.toggleOrder();
      const { order } = this.state.getState();

      if (order === 'DESC') {
        if (attr === 'wins') {
          this.winsEl.style.setProperty('--arrow', 'var(--arrow-down)');
        } else {
          this.timeEl.style.setProperty('--arrow', 'var(--arrow-up)');
        }
      } else if (attr === 'wins') {
        this.winsEl.style.setProperty('--arrow', 'var(--arrow-up)');
      } else {
        this.timeEl.style.setProperty('--arrow', 'var(--arrow-down)');
      }
    }
  }

  private removeArrow(): void {
    this.filters.forEach((filter) => {
      filter.style.setProperty('--arrow', '');
    });
  }
}
