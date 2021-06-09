import { GarageState } from './garage-state';

export interface Subscriber {
  (state: string): void;
}

export interface GarageSubscriber {
  (state: GarageState): void;
}
