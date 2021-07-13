import { CreateCardDto } from '../dto/create-card';
import { CardRepository } from '../interfaces/card-repository';
import { Card } from '../models/card';

export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  async get(id: string): Promise<Card | null> {
    return this.cardRepository.get(id);
  }

  async getByCategory(id: string): Promise<Card[]> {
    return this.cardRepository.getByCategory(id);
  }

  async create(createCardDto: CreateCardDto, categoryId: string): Promise<Card> {
    return this.cardRepository.create(createCardDto, categoryId);
  }

  async update(id: string, card: Partial<CreateCardDto>): Promise<Card | null> {
    return this.cardRepository.update!(id, card);
  }

  async remove(id: string): Promise<Card | null> {
    return this.cardRepository.remove!(id);
  }

  async removeByCategory(id: string): Promise<Card[]> {
    return this.cardRepository.removeByCategory(id);
  }
}
