import { Car } from '../../models/car';
import { GarageState } from '../../models/garage-state';
import { generateQueryString } from '../../shared';
import { SERVER_ROUTES, SERVER_URL } from '../services-base';

const url = `${SERVER_URL}${SERVER_ROUTES.garage}`;

export const getTotal = async (): Promise<number> => {
  const response = await fetch(url);
  const data: Car[] = await response.json();
  return data.length;
};

export const getAll = async (garageState: GarageState): Promise<Car[]> => {
  const queryString = generateQueryString(garageState);
  const response = await fetch(`${url}${queryString}`);
  const data: Car[] = await response.json();
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
  return newCar;
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
  await fetch(`${url}/${carId}`, {
    method: 'DELETE'
  });
};
