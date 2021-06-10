import { BaseComponent } from '../base-component';

export class WinnersOutletHeader extends BaseComponent {
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

    const wins = new BaseComponent('div', ['winners-outlet-header__wins'])
      .element;
    wins.innerText = 'wins';

    const time = new BaseComponent('div', ['winners-outlet-header__time'])
      .element;
    time.innerText = 'best time (s)';

    this.element.append(ind, img, name, wins, time);
  }
}
