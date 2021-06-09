import { garageStateObservable } from '../../services/garage/garage-state-observable';
import { BaseComponent } from '../base-component';

import './styles/garage-nav.scss';

export class GarageNav extends BaseComponent {
  next = new BaseComponent('button', ['garage-control__button']).element;

  prev = new BaseComponent('button', ['garage-control__button']).element;

  page = new BaseComponent('p', ['garage__page-num']).element;

  constructor(name: 'upper' | 'lower') {
    super('nav', ['garage__nav', `garage__nav_${name}`]);
    const pageNum = garageStateObservable.getState().page;
    this.setPageNum(pageNum);
    this.next.innerText = 'next';
    this.prev.innerText = 'prev';
    this.element.append(this.next, this.prev, this.page);
    garageStateObservable.subscribe((state) => {
      this.setPageNum(state.page);
    });
  }

  private setPageNum(number: number): void {
    this.page.innerText = `Page #${number}`;
  }
}
