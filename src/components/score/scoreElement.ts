import { User } from '../../models/user';
import { BaseComponent } from '../base-component';

export class ScoreElement extends BaseComponent {
  constructor(user: User) {
    super('div', ['score-element']);
    let avatarSrc = user.avatarData;
    if (avatarSrc === '') avatarSrc = './default-avatar.png';
    this.element.innerHTML = `
      <div class="score__info">
        <div class="score__avatar-wrapper">
          <img class="score__avatar" src="${avatarSrc}" alt="user avatar">
        </div>
        <div class="score__user">
          <div class="score__username"><p>${user.firstName} ${user.lastName}</p></div>
          <div class="score__email"><p>${user.email}</p></div>
        </div>
      </div>
      <div class="score__userscore">
        <p>Score: <span class="score__value">${user.score}</span></p>
      </div>
    `;
  }
}
