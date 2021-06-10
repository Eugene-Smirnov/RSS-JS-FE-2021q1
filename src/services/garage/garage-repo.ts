import { Car } from '../../models/car';
import { RandomCar } from '../../models/random-car';
import { SERVER_ROUTES, SERVER_URL } from '../services-base';
import { garageStateObservable } from './garage-state-observable';

const url = `${SERVER_URL}${SERVER_ROUTES.garage}`;

export const getAll = async (): Promise<Car[]> => {
  const queryString = garageStateObservable.getQueryString();
  const response = await fetch(`${url}${queryString}`);
  const data: Car[] = await response.json();
  const total = await response.headers.get('X-Total-Count');
  if (total) garageStateObservable.updateTotal(Number(total));
  return data;
};

export const get = async (carId: number): Promise<Car> => {
  const response = await fetch(`${url}/${carId}`);
  const car: Car = await response.json();
  return car;
};

export const create = async (car: Car): Promise<Car> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  });
  const newCar: Car = await response.json();
  const total = response.headers.get('X-Total-Count');
  if (total) garageStateObservable.updateTotal(Number(total));
  return newCar;
};

export const genRandom = async (amount: number): Promise<void> => {
  const cars = [];
  for (let i = 0; i < amount; i++) {
    cars.push(new RandomCar());
  }

  cars.forEach((car) => create(car));
};

export const update = async (carId: number, updatedCar: Car): Promise<Car> => {
  const response = await fetch(`${url}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedCar)
  });
  const car: Car = await response.json();
  return car;
};

export const remove = async (carId: number): Promise<void> => {
  const response = await fetch(`${url}/${carId}`, {
    method: 'DELETE'
  });
  const total = response.headers.get('X-Total-Count');
  if (total) garageStateObservable.updateTotal(Number(total));
};
