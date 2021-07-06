import { mockedCards } from '../assets/cards';
import { CardModel } from '../models/card-model';

class CardsService {
  private readonly cards = mockedCards;

  getCards(_category: string): Promise<CardModel[]> {
    const categoryCards: CardModel[] | undefined = this.cards.get(_category);
    return categoryCards ? Promise.resolve(categoryCards) : Promise.reject(categoryCards);
  }
}

export const cardsService = new CardsService();
