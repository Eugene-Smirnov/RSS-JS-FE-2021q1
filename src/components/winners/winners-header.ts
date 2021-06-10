import { winnersStateObservable } from '../../services/winners/winners-observable';
import { BaseComponent } from '../base-component';

export class WinnersHeader extends BaseComponent {
  total = new BaseComponent('h3', ['winners-header__heading']).element;

  page = new BaseComponent('p', ['winners-header__page-num']).element;

  prevBtn: HTMLButtonElement = document.createElement('button');

  nextBtn: HTMLButtonElement = document.createElement('button');

  constructor() {
    super('div', ['winners-header']);
    this.prevBtn.classList.add('winners__button');
    this.prevBtn.innerText = 'prev';
    this.nextBtn.classList.add('winners__button');
    this.nextBtn.innerText = 'next';
    winnersStateObservable.subscribe((state) => {
      this.setTotal(state.total);
      this.setPage(state.page);
    });
    const btnsWrapper = new BaseComponent('div', ['winners-header__buttons'])
      .element;
    btnsWrapper.append(this.prevBtn, this.page, this.nextBtn);
    this.element.append(this.total, btnsWrapper);
  }

  setTotal(n: number): void {
    this.total.innerText = `winners total: ${n}`;
  }

  setPage(n: number): void {
    this.page.innerText = `page #${n}`;
  }
}
