import { v4 as uuidv4 } from 'uuid';
import { config } from '../config';
import { CreateCategoryDto } from '../dto/create-category';

export class Category {
  constructor(
    public name: string = Date.now().toString(),
    public title: string = 'New Category',
    public image: string = `${config.host}/public/static/images/EFK-base-image.jpg`,
    public id: string = uuidv4(),
  ) {}

  update(category: Partial<CreateCategoryDto>): Category {
    const { name, title, image } = { ...this, ...category };
    return new Category(name, title, image, this.id);
  }
}
