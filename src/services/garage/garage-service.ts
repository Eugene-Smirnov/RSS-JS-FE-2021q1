import { Car } from '../../models/car';
import { GarageState } from '../../models/garage-state';

import * as garageRepo from './garage-repo';

export const getTotal = async (): Promise<number> => garageRepo.getTotal();

export const getCars = async (garageState: GarageState): Promise<Car[]> => garageRepo.getAll(garageState);

export const getCar = async (carId: number): Promise<Car> => garageRepo.get(carId);

export const createCar = async (car: Car): Promise<Car> => garageRepo.create(car);

export const updateCar = async (carId:number, updatedCar: Car): Promise<Car> => garageRepo.update(carId, updatedCar);

export const deleteCar = async (carId: number): Promise<void> => garageRepo.remove(carId);
