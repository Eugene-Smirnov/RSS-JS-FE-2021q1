import { Car } from '../../models/car';
import { CarSubscriber } from '../../models/subscribers';

const BLACK = '#000000';

class CarObservable {
  car: Car = new Car(' ', BLACK);

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
    this.car = new Car(' ', BLACK);
    this.selected = false;
    this.notify();
  }

  getId(): number | null {
    return this.car.id || null;
  }
}

export const currentCarObservable = new CarObservable();
