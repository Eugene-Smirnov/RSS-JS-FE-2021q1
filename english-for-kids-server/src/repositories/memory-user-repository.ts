import { CreateUserDto } from '../dto/create-user';
import { User } from '../models/user';
import { Repository } from '../interfaces/repository';

export class MemoryUserRepository implements Repository<User, CreateUserDto> {
  private readonly users: User[] = [];

  async create({ login, password }: CreateUserDto): Promise<User> {
    const user = new User(login, password);
    this.users.push(user);
    return user;
  }

  async get(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) ?? null;
  }

  async getByName(login: string): Promise<User | null> {
    return this.users.find(user => user.login === login) ?? null;
  }
}
