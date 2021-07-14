import { CreateCategoryDto } from '../dto/create-category';
import { Category } from '../models/category';
import { Repository } from '../interfaces/repository';

export class MemoryCategoryRepository implements Repository<Category, CreateCategoryDto> {
  private readonly categories: Category[] = [
    new Category('animal-a', 'Animal (set A)', '../images/animal-a/cover.jpg'),
    new Category('animal-b', 'Animal (set B)', '../images/animal-b/cover.jpg'),
    new Category('animal-c', 'Animal (set C)', '../images/animal-c/cover.jpg'),
    new Category('food', 'Food', '../images/food/cover.jpg'),
    new Category('action-a', 'Action (set A)', '../images/action-a/cover.jpg'),
    new Category('action-b', 'Action (set B)', '../images/action-b/cover.jpg'),
    new Category('clothes', 'Clothes', '../images/clothes/cover.jpg'),
    new Category('emotions', 'Emotions', '../images/emotions/cover.jpg'),
  ];

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
