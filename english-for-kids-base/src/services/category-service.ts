import { CategoryDTO } from '../dto/category';
import { LOCALSTORAGE_TOKEN_NAME } from './auth-service';
import { CATEGORIES_URL } from './server-specs';

export const categoryService = {
  async getCategories(): Promise<CategoryDTO[]> {
    const response = await fetch(CATEGORIES_URL);
    const data: CategoryDTO[] = await response.json();
    return data;
  },

  async create(): Promise<CategoryDTO> {
    const response = await fetch(CATEGORIES_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}`,
        'Content-Type': 'application/json',
      },
    });
    const category: CategoryDTO = await response.json();
    return category;
  },

  async update(updatedCategory: CategoryDTO): Promise<CategoryDTO> {
    const response = await fetch(`${CATEGORIES_URL}/${updatedCategory.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCategory),
    });
    const category: CategoryDTO = await response.json();
    return category;
  },

  async remove(category: CategoryDTO): Promise<CategoryDTO> {
    const response = await fetch(`${CATEGORIES_URL}/${category.id}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}`,
      },
      method: 'DELETE',
    });
    const deletedCategory: CategoryDTO = await response.json();
    return deletedCategory;
  },
};
