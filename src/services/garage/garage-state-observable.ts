import { GarageState } from '../../models/garage-state';
import { GarageSubscriber } from '../../models/subscribers';
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

  updateTotal(total: number): void {
    this.updateState(Object.assign(this.state, { total }));
  }
}

export const garageStateObservable = new GarageStateObservable();
