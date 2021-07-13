import { sign } from 'jsonwebtoken';

import { CreateUserDto } from '../dto/create-user';
import { LoginUserDto } from '../dto/login-user';
import { User } from '../models/user';
import { Repository } from '../interfaces/repository';
import { JwtPayload } from '../interfaces/jwt-payload';
import { AuthenticatedUser } from '../dto/authed-user';
import { CreatedUserDto } from '../dto/created-user';

export class AuthService {
  constructor(private readonly userRepository: Repository<User, CreateUserDto>) {}

  async register(createUserDto: CreateUserDto): Promise<AuthenticatedUser> {
    // TODO password must be hashed
    // TODO check login collision
    const user = await this.userRepository.create(createUserDto);
    const token = this.createToken(user);

    return {
      user: user.toDto(),
      token,
    };
  }

  async login(loginUserDto: LoginUserDto): Promise<AuthenticatedUser | null> {
    const user = await this.userRepository.getByName!(loginUserDto.login);
    const isCorrectPassword = user?.password === loginUserDto.password;

    if (!user || !isCorrectPassword) {
      return null;
    }

    const token = this.createToken(user);
    return {
      user: user.toDto(),
      token,
    };
  }

  async get(id: string): Promise<CreatedUserDto | null> {
    const user = await this.userRepository.get(id);

    if (!user) {
      return null;
    }

    return user.toDto();
  }

  private createToken(user: User): string {
    const payload: JwtPayload = { id: user.id, login: user.login };
    return sign(payload, 'super_secret_key', { expiresIn: '2d' });
  }
}
