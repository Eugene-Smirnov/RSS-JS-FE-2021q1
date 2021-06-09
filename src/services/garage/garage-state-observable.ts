import { GarageState } from '../../models/garage-state';
import { GarageSubscriber } from '../../models/subscribers';
import { CARS_PER_GARAGE_PAGE } from '../services-base';

import * as garageService from './garage-service';

class GarageStateObservable {
  private subscribers: GarageSubscriber[] = [];

  private state: GarageState = {
    total: 0,
    _limit: CARS_PER_GARAGE_PAGE,
    _page: 1
  };

  constructor() {
    garageService.getTotal().then((total) => {
      this.state.total = total;
    });
  }

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
}

export const garageStateObservable = new GarageStateObservable();
