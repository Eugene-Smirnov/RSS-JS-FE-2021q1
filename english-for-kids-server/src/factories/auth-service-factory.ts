import { User } from '../models/user';
import { MemoryUserRepository } from '../repositories/memory-user-repository';
import { Repository } from '../interfaces/repository';
import { AuthService } from '../services/auth-service';

export class AuthServiceFactory {
  static create(): AuthService {
    const repository: Repository<User> = new MemoryUserRepository();
    return new AuthService(repository);
  }
}
