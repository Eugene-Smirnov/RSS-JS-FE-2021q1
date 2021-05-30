import { User } from '../../models/user';
import { UserRepository } from './user-repository';

export class UserService {
  private loggedUser: User | null = null;

  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  createUser(firstName = '', lastName = '', email = ''): void {
    const user = new User(firstName, lastName, email);
    this.loggedUser = user;
    this.userRepo.create(user);
  }

  updateUserScore(score: number): void {
    if (this.loggedUser) {
      this.loggedUser.score = score;
      this.userRepo.updateUserScore(this.loggedUser);
    }
  }

  getTopPlayers(): User[] {
    return this.userRepo.getTopPlayers();
  }
}
