import { Car } from '../../models/car';
import { CarSubscriber } from '../../models/subscribers';

const clearCar = new Car('', 'black');

class CarObservable {
  car: Car = clearCar;

  subscribers: CarSubscriber[] = [];

  selected = false;

  subscribe(subscriber: CarSubscriber): void {
    this.subscribers.push(subscriber);
  }

  notify(): void {
    this.subscribers.forEach((s) => s(this.car, this.selected));
  }

  update(car: Car): void {
    this.car = car;
    this.selected = true;
    this.notify();
  }

  clear(): void {
    this.car = clearCar;
    this.selected = false;
    this.notify();
  }
}

export const currentCarObservable = new CarObservable();
