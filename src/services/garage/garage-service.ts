import { Car } from '../../models/car';
import * as garageRepo from './garage-repo';
import * as winnersService from '../winners/winners-service';

export const getCars = async (): Promise<Car[]> => garageRepo.getAll();

export const getCar = async (carId: number): Promise<Car> => garageRepo.get(carId);

export const getCarsByIds = async (ids: number[]): Promise<Car[]> => Promise.all(ids.map(getCar));

export const createCar = async (car: Car): Promise<Car> => garageRepo.create(car);

export const genRandomCars = async (amount: number): Promise<void> => garageRepo.genRandom(amount);

export const updateCar = async (carId:number, updatedCar: Car): Promise<Car> => garageRepo.update(carId, updatedCar);

export const deleteCar = async (carId: number): Promise<void> => {
  winnersService.deleteWinner(carId);
  garageRepo.remove(carId);
};
