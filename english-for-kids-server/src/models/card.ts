import { v4 as uuidv4 } from 'uuid';
import { config } from '../config';
import { CreateCardDto } from '../dto/create-card';

export class Card {
  constructor(
    public name: string = Date.now().toString(),
    public title: string = 'New Card',
    public image: string = `${config.host}/public/static/images/EFK-base-image.jpg`,
    public audio: string = '',
    public translation: string = 'Новая Карточка',
    public categoryId: string,
    public id: string = uuidv4(),
  ) {}

  update(card: Partial<CreateCardDto>): Card {
    const { name, title, image, audio, translation, categoryId } = { ...this, ...card };
    return new Card(name, title, image, audio, translation, categoryId, this.id);
  }
}
