import { CategoryDTO } from '../dto/category';

class CategoryService {
  private readonly mockedCategories: CategoryDTO[] = [
    {
      name: 'animal-a',
      image: '../images/animal-a/cover.jpg',
      title: 'Animal (set A)',
    },
    {
      name: 'animal-b',
      image: '../images/animal-b/cover.jpg',
      title: 'Animal (set B)',
    },
    {
      name: 'animal-c',
      image: '../images/animal-c/cover.jpg',
      title: 'Animal (set C)',
    },
    {
      name: 'food',
      image: '../images/food/cover.jpg',
      title: 'Food',
    },
    {
      name: 'action-a',
      image: '../images/action-a/cover.jpg',
      title: 'Action (set A)',
    },
    {
      name: 'action-b',
      image: '../images/action-b/cover.jpg',
      title: 'Action (set B)',
    },
    {
      name: 'clothes',
      image: '../images/clothes/cover.jpg',
      title: 'Clothes',
    },
    {
      name: 'emotions',
      image: '../images/emotions/cover.jpg',
      title: 'Emotions',
    },
  ];

  getCategories(): Promise<CategoryDTO[]> {
    return Promise.resolve(this.mockedCategories);
  }
}

export const categoryService = new CategoryService();
