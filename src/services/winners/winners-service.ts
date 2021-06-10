import { Winner } from '../../models/winner';
import { winnersStateObservable } from './winners-observable';
import * as winnersRepo from './winners-repository';

export const getWinners = async (): Promise<Winner[]> => {
  const queryString = winnersStateObservable.getQueryString();
  return winnersRepo.getAll(queryString);
};

export const getWinner = async (winnerId: number): Promise<Winner> => winnersRepo.get(winnerId);

export const createWinner = async (winner: Winner): Promise<Winner> => winnersRepo.create(winner);

export const updateWinner = async (
  winnerId: number,
  updatedWinner: Winner
): Promise<Winner> => winnersRepo.update(winnerId, updatedWinner);

export const deleteWinner = async (winnerId: number): Promise<void> => winnersRepo.remove(winnerId);
