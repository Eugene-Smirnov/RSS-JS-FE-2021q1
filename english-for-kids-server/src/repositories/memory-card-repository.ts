import { CreateCardDto } from '../dto/create-card';
import { CardRepository } from '../interfaces/card-repository';
import { Card } from '../models/card';

export class MemoryCardRepository implements CardRepository {
  private cards: Card[] = [];

  async create(createCardDto: CreateCardDto, categoryId: string): Promise<Card> {
    const { name, title, image, audio, translation } = createCardDto;
    const card = new Card(name, title, image, audio, translation, categoryId);
    this.cards.push(card);
    return card;
  }

  async get(id: string): Promise<Card | null> {
    return this.cards.find(card => card.id === id) ?? null;
  }

  async getByCategory(id: string): Promise<Card[]> {
    return this.cards.filter(card => card.categoryId === id);
  }

  async update(id: string, card: Partial<CreateCardDto>): Promise<Card | null> {
    const index = this.cards.findIndex(card => card.id === id);

    if (index === -1) {
      return null;
    }

    const updatedCard = this.cards[index].update(card);
    this.cards[index] = updatedCard;
    return updatedCard;
  }

  async remove(id: string): Promise<Card | null> {
    const index = this.cards.findIndex(card => card.id === id);

    if (index === -1) {
      return null;
    }

    const cardToRemove = this.cards[index];
    this.cards.splice(index, 1);
    return cardToRemove;
  }

  async removeByCategory(id: string): Promise<Card[]> {
    const removedCards: Card[] = this.cards.filter(card => card.id === id);
    this.cards = this.cards.filter(card => card.id !== id);
    return removedCards;
  }
}
