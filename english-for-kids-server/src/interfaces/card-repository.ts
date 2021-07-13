import { CreateCardDto } from '../dto/create-card';
import { Card } from '../models/card';
import { Repository } from './repository';

export interface CardRepository extends Omit<Repository<Card, CreateCardDto>, 'create'> {
  create(createCardDto: CreateCardDto, categoryId: string): Promise<Card>;
  getByCategory(id: string): Promise<Card[]>;
  removeByCategory(id: string): Promise<Card[]>;
}
