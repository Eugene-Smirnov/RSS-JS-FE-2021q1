import { BaseComponent } from '../base-component';
import { HeaderNavLink } from './header__link';

export class HeaderNav extends BaseComponent {
  constructor() {
    super('nav', ['header__nav']);
    const garageLink = new HeaderNavLink('garage');
    garageLink.element.dataset.route = '/garage';
    const winnersLink = new HeaderNavLink('winners');
    winnersLink.element.dataset.route = '/winners';
    this.element.append(garageLink.element, winnersLink.element);
  }
}
