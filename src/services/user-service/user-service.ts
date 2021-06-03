import { User } from '../../models/user';
import { UserRepository } from './user-repository';

export class UserService {
  private loggedUser: User | null = null;

  userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  createUser(firstName = '', lastName = '', email = '', avatarData = ''): void {
    const user = new User(firstName, lastName, email, avatarData);
    this.loggedUser = user;
    this.userRepo.create(user);
  }

  updateUserScore(score: number): void {
    if (this.loggedUser) {
      this.loggedUser.score = score;
      this.userRepo.updateUserScore(this.loggedUser);
    }
  }

  async getTopPlayers(): Promise<User[]> {
    const allUsers = await this.userRepo.getAllUsers();
    return allUsers.sort((a, b) => b.score - a.score).slice(0, 10);
  }

  getLoggedUser(): User | null {
    return this.loggedUser;
  }
}
