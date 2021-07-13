import { Router } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import { auth } from '../auth/guard';
import { context } from '../context';
import { AuthenticatedUser } from '../dto/authed-user';
import { CreateUserDto } from '../dto/create-user';
import { CreatedUserDto } from '../dto/created-user';
import { LoginUserDto } from '../dto/login-user';
import { NotFoundError } from '../errors/not-found-error';
import { UnauthenticatedError } from '../errors/unauthenticated-error';

export const authRouter = Router();

authRouter.post('/register', async (req, res) => {
  const createUserDto: CreateUserDto = req.body;
  const user: AuthenticatedUser = await context.authService.register(createUserDto);
  res.json(user);
});

authRouter.post('/login', async (req, res, next) => {
  const loginUserDto: LoginUserDto = req.body;
  const user = await context.authService.login(loginUserDto);

  if (!user) {
    return next(new UnauthenticatedError());
  }

  res.json(user);
});

authRouter.get('/current-user', auth, async (req, res, next) => {
  const { id }: JwtPayload = req.user!;
  const user: CreatedUserDto | null = await context.authService.get(id);

  if (!user) {
    return next(new NotFoundError('No Such User'));
  }

  res.json(user);
});
