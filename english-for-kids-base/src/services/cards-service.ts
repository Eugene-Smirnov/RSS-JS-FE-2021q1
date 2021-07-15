import { CardModel } from '../models/card-model';
import { LOCALSTORAGE_TOKEN_NAME } from './auth-service';
import { createCardUrl } from './server-specs';

export const cardsService = {
  async getCards(categoryId: string): Promise<CardModel[]> {
    const response = await fetch(createCardUrl(categoryId));
    const data: CardModel[] = await response.json();
    return data;
  },

  async create(categoryId: string): Promise<CardModel> {
    const response = await fetch(createCardUrl(categoryId), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: Date.now().toString(),
        title: 'New Card',
        image: '../images/EFK-base-image.jpg',
        audio: '',
        translation: 'Новая карта',
      }),
    });
    const newCard: CardModel = await response.json();
    return newCard;
  },

  async update(updatedCard: CardModel): Promise<CardModel> {
    const response = await fetch(`${createCardUrl(updatedCard.categoryId)}/${updatedCard.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    });
    const card: CardModel = await response.json();
    return card;
  },

  async remove(card: CardModel): Promise<CardModel> {
    const response = await fetch(`${createCardUrl(card.categoryId)}/${card.id}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}`,
      },
      method: 'DELETE',
    });
    const deletedCard: CardModel = await response.json();
    return deletedCard;
  },
};
