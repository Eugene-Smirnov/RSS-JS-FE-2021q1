import './score.scss';
import { BaseComponent } from '../base-component';
import { ScoreElement } from './scoreElement';
import { userService } from '../../services/user-service';
import { User } from '../../models/user';
import {
  fakeUser1,
  fakeUser2,
  fakeUser3,
} from '../../services/user-service/fake-users';

export class Score extends BaseComponent {
  private users?: User[];

  constructor() {
    super('div', ['score-board']);
    this.element.innerHTML = `
    <h2 class="score__heading">Best players</h2>
    `;
    userService.getTopPlayers().then((users) => {
      if (users[0] === undefined) {
        userService.userRepo.create(fakeUser1);
        users.push(fakeUser1);
        userService.userRepo.create(fakeUser2);
        users.push(fakeUser2);
        userService.userRepo.create(fakeUser3);
        users.push(fakeUser3);
      }
      users.forEach((user) => {
        const row = new ScoreElement(user);
        this.element.append(row.element);
      });
    });
  }
}
