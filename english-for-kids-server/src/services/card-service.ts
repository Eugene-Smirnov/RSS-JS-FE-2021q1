import { config } from '../config';
import { CreateCardDto } from '../dto/create-card';
import { CardRepository } from '../interfaces/card-repository';
import { Card } from '../models/card';
import { FilePathResolver } from './file-path-resolver';

export class CardService {
  constructor(private readonly cardRepository: CardRepository, private readonly filePathResolver: FilePathResolver) {}

  async get(id: string): Promise<Card | null> {
    return this.cardRepository.get(id);
  }

  async getByCategory(id: string): Promise<Card[]> {
    return this.cardRepository.getByCategory(id);
  }

  async create(createCardDto: CreateCardDto, categoryId: string, imageName: string, audioName: string): Promise<Card> {
    const image = imageName ? this.filePathResolver.resolve(imageName) : `${config.host}/public/static/images/EFK-base-image.jpg`;
    const audio = this.filePathResolver.resolve(audioName);
    return this.cardRepository.create({ ...createCardDto, image, audio }, categoryId);
  }

  async update(id: string, card: Partial<CreateCardDto>): Promise<Card | null> {
    return this.cardRepository.update!(id, card);
  }

  async remove(id: string): Promise<Card | null> {
    return this.cardRepository.remove!(id);
  }

  async removeByCategory(id: string): Promise<Card[]> {
    return this.cardRepository.removeByCategory(id);
  }
}
