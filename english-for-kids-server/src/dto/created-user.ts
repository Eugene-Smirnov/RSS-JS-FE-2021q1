import { User } from '../models/user';

export type CreatedUserDto = Omit<User, 'password'>;
