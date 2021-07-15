import { CardRepository } from '../interfaces/card-repository';
import { MemoryCardRepository } from '../repositories/memory-card-repository';
import { CardService } from '../services/card-service';
import { FilePathResolver } from '../services/file-path-resolver';

export class CardServiceFactory {
  static create(filePathResolver: FilePathResolver): CardService {
    const cardRepository: CardRepository = new MemoryCardRepository();
    return new CardService(cardRepository, filePathResolver);
  }
}
