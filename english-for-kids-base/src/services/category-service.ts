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
      },
    });
    const category: CategoryDTO = await response.json();
    return category;
  },

  async update(updatedCategory: CategoryDTO, imageFile: File | null): Promise<CategoryDTO> {
    const formData = new FormData();
    formData.append('name', updatedCategory.name);
    formData.append('title', updatedCategory.title);
    formData.append('id', updatedCategory.id);
    formData.append('image', imageFile ?? '');

    const response = await fetch(`${CATEGORIES_URL}/${updatedCategory.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)}`,
      },
      body: formData,
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
