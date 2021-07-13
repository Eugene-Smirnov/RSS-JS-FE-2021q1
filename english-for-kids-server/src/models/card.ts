import { v4 as uuidv4 } from 'uuid';
import { CreateCardDto } from '../dto/create-card';

export class Card {
  constructor(
    public name: string,
    public title: string,
    public image: string,
    public audio: string,
    public translation: string,
    public categoryId: string,
    public id: string = uuidv4(),
  ) {}

  update(card: Partial<CreateCardDto>): Card {
    const { name, title, image, audio, translation, categoryId } = { ...this, ...card };
    return new Card(name, title, image, audio, translation, categoryId, this.id);
  }
}
