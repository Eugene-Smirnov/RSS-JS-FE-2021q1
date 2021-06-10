import { Winner } from '../../models/winner';
import { SERVER_ROUTES, SERVER_URL } from '../services-base';
import { winnersStateObservable } from './winners-observable';

const url = `${SERVER_URL}${SERVER_ROUTES.garage}`;

export const getAll = async (queryString: string): Promise<Winner[]> => {
  const response = await fetch(`${url}${queryString}`);
  const data: Winner[] = await response.json();
  const total = await response.headers.get('X-Total-Count');
  if (total) winnersStateObservable.updateTotal(Number(total));
  return data;
};

export const get = async (winnerId: number): Promise<Winner> => {
  const response = await fetch(`${url}/${winnerId}`);
  const winner: Winner = await response.json();
  return winner;
};

export const create = async (winner: Winner): Promise<Winner> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(winner)
  });
  const newWinner: Winner = await response.json();
  const total = await response.headers.get('X-Total-Count');
  if (total) winnersStateObservable.updateTotal(Number(total));
  return newWinner;
};

export const update = async (
  winnerId: number,
  updatedWinner: Winner
): Promise<Winner> => {
  const response = await fetch(`${url}/${winnerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedWinner)
  });
  const winner: Winner = await response.json();
  return winner;
};

export const remove = async (winnerId: number): Promise<void> => {
  const response = await fetch(`${url}/${winnerId}`, {
    method: 'DELETE'
  });
  const total = response.headers.get('X-Total-Count');
  if (total) winnersStateObservable.updateTotal(Number(total));
};
