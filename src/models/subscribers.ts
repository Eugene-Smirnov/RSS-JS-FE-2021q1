import { Car } from './car';
import { GarageState } from './garage-state';
import { WinnersState } from './winners-state';

export interface Subscriber {
  (state: string): void;
}

export interface GarageSubscriber {
  (state: GarageState): void;
}

export interface WinnersSubscriber {
  (state: WinnersState): void;
}

export interface CarSubscriber {
  (car: Car, isSelected: boolean): void;
}
