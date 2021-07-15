import { Router } from 'express';

import { auth } from '../auth/guard';
import { config } from '../config';
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
  const { image, audio } = mapToFilenames(req.files);
  const card: Card = await context.cardService.create(createCardDto, categoryId, image, audio);
  res.json(card);
});

cardRouter.put('/:id', auth, async (req, res, next) => {
  const id: string = req.params.id;
  const updateCardDto: Partial<CreateCardDto> = req.body;
  const updatedCard: Card | null = await context.cardService.update(id, updateCardDto);

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

const mapToFilenames = (files: any): { image: string; audio: string } => {
  const image: string = files.image[0].filename ?? `${config.host}/public/static/images/EFK-base-image.jpg`;
  const audio: string = files.audio[0].filename ?? '';
  return { image, audio };
};
