import { GarageState } from '../../models/garage-state';
import { GarageSubscriber } from '../../models/subscribers';
import { generateQueryString } from '../../shared';
import { CARS_PER_GARAGE_PAGE } from '../services-base';

class GarageStateObservable {
  private subscribers: GarageSubscriber[] = [];

  private state: GarageState = {
    total: 0,
    limit: CARS_PER_GARAGE_PAGE,
    page: 1
  };

  subscribe(subscriber: GarageSubscriber): void {
    this.subscribers.push(subscriber);
  }

  notify(): void {
    this.subscribers.forEach((s) => s(this.state));
  }

  updateState(state: GarageState): void {
    this.state = state;
    this.notify();
  }

  getState(): GarageState {
    return this.state;
  }

  getQueryString(): string {
    const queryParams = {
      limit: this.state.limit,
      page: this.state.page
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
}

export const garageStateObservable = new GarageStateObservable();
