import { CreateCategoryDto } from '../dto/create-category';
import { Category } from '../models/category';
import { Repository } from '../interfaces/repository';
import { CardService } from './card-service';
import { FilePathResolver } from './file-path-resolver';

export class CategoryService {
  constructor(
    private readonly categoryRepository: Repository<Category, CreateCategoryDto & { image: string }>,
    private readonly cardService: CardService,
    private readonly filePathResolver: FilePathResolver,
  ) {}

  async create(category: CreateCategoryDto, imageName: string): Promise<Category> {
    const image = this.filePathResolver.resolve(imageName);
    return this.categoryRepository.create({ ...category, image });
  }

  async getAll(): Promise<Category[]> {
    return this.categoryRepository.getAll!();
  }

  async get(id: string): Promise<Category | null> {
    const category = await this.categoryRepository.get!(id);

    if (!category) {
      return null;
    }

    return category;
  }

  async update(id: string, category: Partial<CreateCategoryDto>): Promise<Category | null> {
    return this.categoryRepository.update!(id, category);
  }

  async remove(id: string): Promise<Category | null> {
    const removedCategory: Category | null = await this.categoryRepository.remove!(id);

    if (!removedCategory) {
      return null;
    }

    this.cardService.removeByCategory(id);
    return removedCategory;
  }
}
