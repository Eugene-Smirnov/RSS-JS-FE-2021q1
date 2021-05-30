import './score.scss';
import { BaseComponent } from '../base-component';
import { ScoreElement } from './scoreElement';
import { userService } from '../../services/user-service';
import { User } from '../../models/user';

export class Score extends BaseComponent {
  private users?: User[];

  constructor() {
    super('div', ['score-board']);
    this.element.innerHTML = `
    <h2 class="score__heading">Best players</h2>
    `;
    userService.getTopPlayers().then((users) => {
      users.forEach((user) => {
        const row = new ScoreElement(user);
        this.element.append(row.element);
      });
    });
  }
}
