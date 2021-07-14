import { CategoryDTO } from '../dto/category';
import { CATEGORIES_URL } from './server-specs';

export const categoryService = {
  async getCategories(): Promise<CategoryDTO[]> {
    const response = await fetch(CATEGORIES_URL);
    const data: CategoryDTO[] = await response.json();
    return data;
  },

  async update(updatedCategory: CategoryDTO): Promise<CategoryDTO> {
    const response = await fetch(`${CATEGORIES_URL}/${updatedCategory.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCategory),
    });
    const category: CategoryDTO = await response.json();
    return category;
  },

  async remove(category: CategoryDTO): Promise<CategoryDTO> {
    const response = await fetch(`${CATEGORIES_URL}/${category.id}`, {
      method: 'DELETE',
    });
    const deletedCategory: CategoryDTO = await response.json();
    return deletedCategory;
  },
};
