import { BaseComponent } from '../../base-component';
import { linksList } from './links-list';

export class NavLink extends BaseComponent {
  constructor(linkName: keyof typeof linksList) {
    super('div', ['nav__link']);
    const linkData = linksList[linkName];
    this.element.dataset.route = linkData.route;
    this.element.innerHTML = `
      <span class="nav__icon ${linkData.name}"></span>
      <p>${linkData?.content}</p>
    `;
  }
}
