import { User } from '../models/user';

export interface AuthenticatedUser {
  user: Omit<User, 'password'>;
  token: string;
}
