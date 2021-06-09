import { Car } from './car';
import { GarageState } from './garage-state';

export interface Subscriber {
  (state: string): void;
}

export interface GarageSubscriber {
  (state: GarageState): void;
}

export interface CarSubscriber {
  (car: Car, isSelected: boolean): void;
}
