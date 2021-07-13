import { v4 as uuidv4 } from 'uuid';
import { CreateCategoryDto } from '../dto/create-category';

export class Category {
  constructor(public name: string, public title: string, public image: string, public id: string = uuidv4()) {}

  update(category: Partial<CreateCategoryDto>): Category {
    const { name, title, image } = { ...this, ...category };
    return new Category(name, title, image, this.id);
  }
}
