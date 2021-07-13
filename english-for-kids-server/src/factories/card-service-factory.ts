import { CardRepository } from '../interfaces/card-repository';
import { MemoryCardRepository } from '../repositories/memory-card-repository';
import { CardService } from '../services/card-service';

export class CardServiceFactory {
  static create(): CardService {
    const cardRepository: CardRepository = new MemoryCardRepository();
    return new CardService(cardRepository);
  }
}
