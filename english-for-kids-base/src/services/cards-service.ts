import { CardModel } from '../models/card-model';
import { CATEGORIES_URL } from './server-specs';

export const cardsService = {
  async getCards(categoryId: string): Promise<CardModel[]> {
    const response = await fetch(`${CATEGORIES_URL}/${categoryId}/card`);
    const data: CardModel[] = await response.json();
    return data;
  },
};
