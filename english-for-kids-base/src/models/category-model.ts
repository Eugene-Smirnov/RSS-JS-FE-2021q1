import { CategoryDTO } from '../dto/category';

export interface CategoryModel extends CategoryDTO {
  isActive: boolean;
}
