import { genRandomCarName, genRandomColor } from '../shared';
import { Car } from './car';

export class RandomCar extends Car {
  constructor() {
    super(genRandomCarName(), genRandomColor());
  }
}
