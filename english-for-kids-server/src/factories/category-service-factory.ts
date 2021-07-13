import { Category } from '../models/category';
import { MemoryCategoryRepository } from '../repositories/memory-category-repository';
import { Repository } from '../interfaces/repository';
import { CategoryService } from '../services/category-service';
import { CardService } from '../services/card-service';

export class CategoryServiceFactory {
  static create(cardService: CardService): CategoryService {
    const repository: Repository<Category> = new MemoryCategoryRepository();
    return new CategoryService(repository, cardService);
  }
}
