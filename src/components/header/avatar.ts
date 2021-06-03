import { userService } from '../../services/user-service';
import { BaseComponent } from '../base-component';

export class HeaderAvatar extends BaseComponent {
  constructor() {
    super('div', ['header__useravatar-wrapper']);
    let avatarSrc = userService.getLoggedUser()?.avatarData;
    if (!avatarSrc) avatarSrc = './default-avatar.png';
    this.element.innerHTML = `
    <img class="header__useravatar" src="${avatarSrc}" alt="user avatar">
    `;
  }
}
