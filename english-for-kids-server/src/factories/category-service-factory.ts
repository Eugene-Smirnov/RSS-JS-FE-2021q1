import { Category } from '../models/category';
import { MemoryCategoryRepository } from '../repositories/memory-category-repository';
import { Repository } from '../interfaces/repository';
import { CategoryService } from '../services/category-service';
import { CardService } from '../services/card-service';
import { FilePathResolver } from '../services/file-path-resolver';

export class CategoryServiceFactory {
  static create(cardService: CardService, filePathResolver: FilePathResolver): CategoryService {
    const repository: Repository<Category> = new MemoryCategoryRepository();
    return new CategoryService(repository, cardService, filePathResolver);
  }
}
