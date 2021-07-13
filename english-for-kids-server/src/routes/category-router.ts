import { Router } from 'express';

import { auth } from '../auth/guard';
import { context } from '../context';
import { CreateCategoryDto } from '../dto/create-category';
import { NotFoundError } from '../errors/not-found-error';
import { Category } from '../models/category';

export const categoryRouter = Router();

categoryRouter.get('/', async (_req, res) => {
  const categories: Category[] = await context.categoryService.getAll();
  res.json(categories);
});

categoryRouter.get('/:id', async (req, res, next) => {
  const id: string = req.params.id;
  const category: Category | null = await context.categoryService.get(id);

  if (!category) {
    return next(new NotFoundError('No Such Category'));
  }

  res.json(category);
});

categoryRouter.post('/', auth, async (req, res) => {
  const createCategoryDto: CreateCategoryDto = req.body;
  const category: Category = await context.categoryService.create(createCategoryDto);
  res.json(category);
});

categoryRouter.put('/:id', auth, async (req, res, next) => {
  const id: string = req.params.id;
  const categoryUpdate: Partial<CreateCategoryDto> = req.body;
  const updatedCategory: Category | null = await context.categoryService.update(id, categoryUpdate);

  if (!updatedCategory) {
    return next(new NotFoundError('No Such Category'));
  }

  res.json(updatedCategory);
});

categoryRouter.delete('/:id', auth, async (req, res, next) => {
  const id: string = req.params.id;
  const deletedCategory: Category | null = await context.categoryService.remove(id);

  if (!deletedCategory) {
    return next(new NotFoundError('No Such Category'));
  }

  res.json(deletedCategory);
});
