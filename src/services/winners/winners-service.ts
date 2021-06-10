import { Winner } from '../../models/winner';
import { winnersStateObservable } from './winners-observable';
import * as winnersRepo from './winners-repository';

export const getWinners = async (): Promise<Winner[]> => {
  const queryString = winnersStateObservable.getQueryString();
  console.log(queryString);
  return winnersRepo.getAll(queryString);
};

export const getWinner = async (winnerId: number): Promise<Winner> => winnersRepo.get(winnerId);

export const updateWinner = async (winner: Winner): Promise<Winner> => {
  const { id, time } = winner;

  const recordedWinner = await getWinner(id);
  const recordedTime = recordedWinner.time;
  const wins = recordedWinner.wins + 1;

  let updatedWinner;
  if (recordedTime < time) {
    updatedWinner = new Winner(wins, recordedTime, id);
  } else {
    updatedWinner = new Winner(wins, time, id);
  }
  return winnersRepo.update(updatedWinner);
};

export const createWinner = async (winner: Winner): Promise<Winner> => winnersRepo.create(winner);

export const deleteWinner = async (winnerId: number): Promise<void> => winnersRepo.remove(winnerId);
