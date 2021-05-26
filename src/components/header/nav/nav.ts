import '../styles/nav.scss';
import { BaseComponent } from '../../base-component';
import { NavLink } from './nav-link';
import { linksList } from './links-list';

export class HeaderNav extends BaseComponent {
  private navLinks: NavLink[];

  constructor() {
    super('nav', ['nav']);
    const linksData = Object.values(linksList);
    this.navLinks = [];
    linksData.forEach((link) => {
      const navLink = new NavLink(link.name);
      this.navLinks.push(navLink);
      this.element.append(navLink.element);
    });
  }
}
