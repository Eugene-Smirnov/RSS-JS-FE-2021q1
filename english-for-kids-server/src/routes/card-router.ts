import { Router } from 'express';

import { auth } from '../auth/guard';
import { context } from '../context';
import { CreateCardDto } from '../dto/create-card';
import { NotFoundError } from '../errors/not-found-error';
import { Card } from '../models/card';
import { uploadCard } from '../upload';

type CardRoutesParams = { categoryId: string };

export const cardRouter = Router({ mergeParams: true });

cardRouter.get('/', async (req, res) => {
  const { categoryId } = req.params as CardRoutesParams;
  const cards: Card[] = await context.cardService.getByCategory(categoryId);
  res.json(cards);
});

cardRouter.get('/:id', async (req, res, next) => {
  const id: string = req.params.id;
  const card: Card | null = await context.cardService.get(id);

  if (!card) {
    return next(new NotFoundError(`Card ${id} Not Found`));
  }

  res.json(card);
});

cardRouter.post('/', auth, uploadCard, async (req, res) => {
  const { categoryId } = req.params as CardRoutesParams;
  const createCardDto: CreateCardDto = req.body;
  const { imageName, audioName } = mapToFilenames(req.files);
  const card: Card = await context.cardService.create(createCardDto, categoryId, imageName, audioName);
  res.json(card);
});

cardRouter.put('/:id', auth, uploadCard, async (req, res, next) => {
  const id: string = req.params.id;
  const updateCardDto: Partial<CreateCardDto> = req.body;
  const { imageName, audioName } = mapToFilenames(req.files);
  const updatedCard: Card | null = await context.cardService.update(id, updateCardDto, imageName, audioName);

  if (!updatedCard) {
    return next(new NotFoundError(`Card ${id} Not Found`));
  }

  res.json(updatedCard);
});

cardRouter.delete('/:id', auth, async (req, res, next) => {
  const id: string = req.params.id;
  const removedCard: Card | null = await context.cardService.remove(id);

  if (!removedCard) {
    return next(new NotFoundError(`Card ${id} Not Found`));
  }

  res.json(removedCard);
});

const mapToFilenames = (files: any): { imageName: string; audioName: string } => {
  if (!files) return { imageName: '', audioName: '' };
  const image = files.image;
  const imageName = image ? image[0].filename : '';
  const audio = files.audio;
  const audioName = audio ? audio[0].filename : '';
  return { imageName, audioName };
};
