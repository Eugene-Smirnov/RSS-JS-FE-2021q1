import { WinnersSubscriber } from '../../models/subscribers';
import { WinnersState } from '../../models/winners-state';
import { generateQueryString, indexCalc } from '../../shared';
import { ITEMS_PER_WINNERS_PAGE } from '../services-base';

class WinnersStateObservable {
  private subscribers: WinnersSubscriber[] = [];

  private state: WinnersState = {
    total: 0,
    limit: ITEMS_PER_WINNERS_PAGE,
    page: 1,
    sort: 'id',
    order: 'ASC'
  };

  subscribe(subscriber: WinnersSubscriber): void {
    this.subscribers.push(subscriber);
  }

  notify(): void {
    this.subscribers.forEach((s) => s(this.state));
  }

  updateState(state: WinnersState): void {
    this.state = state;
    this.notify();
  }

  getState(): WinnersState {
    return this.state;
  }

  getIndex(i: number): number {
    return indexCalc(this.state.page, this.state.limit, i);
  }

  getQueryString(): string {
    const queryParams = {
      _limit: this.state.limit,
      _page: this.state.page,
      _sort: this.state.sort,
      _order: this.state.order
    };
    return generateQueryString(queryParams);
  }

  updateTotal(total: number): void {
    this.updateState(Object.assign(this.state, { total }));
  }

  nextPage() {
    let page = this.state.page + 1;
    if (Math.ceil(this.state.total / this.state.limit) < page) page = 1;
    this.updateState(Object.assign(this.state, { page }));
  }

  prevPage() {
    let page = this.state.page - 1;
    if (page < 1) page = Math.ceil(this.state.total / this.state.limit);
    this.updateState(Object.assign(this.state, { page }));
  }

  toggleOrder() {
    const currentOrder = this.state.order;
    let order = 'ASC';
    if (currentOrder === order) {
      order = 'DESC';
    }
    this.updateState(Object.assign(this.state, { order }));
  }
}

export const winnersStateObservable = new WinnersStateObservable();
