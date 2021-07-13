import { CreateCategoryDto } from '../dto/create-category';
import { Category } from '../models/category';
import { Repository } from '../interfaces/repository';

export class MemoryCategoryRepository implements Repository<Category, CreateCategoryDto> {
  private readonly categories: Category[] = [];

  async create({ name, title, image }: CreateCategoryDto): Promise<Category> {
    const category = new Category(name, title, image);
    this.categories.push(category);
    return category;
  }

  async getAll(): Promise<Category[]> {
    return this.categories;
  }

  async get(id: string): Promise<Category | null> {
    return this.categories.find(category => category.id === id) ?? null;
  }

  async update(id: string, category: Partial<CreateCategoryDto>): Promise<Category | null> {
    const index = this.categories.findIndex(category => category.id === id);

    if (index === -1) {
      return null;
    }

    const updatedCategory = this.categories[index].update(category);
    this.categories[index] = updatedCategory;
    return updatedCategory;
  }

  async remove(id: string): Promise<Category | null> {
    const index = this.categories.findIndex(category => category.id === id);

    if (index === -1) {
      return null;
    }

    const categoryToRemove = this.categories[index];
    this.categories.splice(index, 1);
    return categoryToRemove;
  }
}
