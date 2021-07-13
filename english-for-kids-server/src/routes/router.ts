import { Router } from 'express';
import { authRouter } from './auth-router';
import { cardRouter } from './card-router';
import { categoryRouter } from './category-router';

export const router = Router();

router.use('/category', categoryRouter);
router.use('/auth', authRouter);
router.use('/category/:categoryId/card', cardRouter);
