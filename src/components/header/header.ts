import './header.scss';
import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { HeaderLogo } from './logo';
import { HeaderNav } from './nav/nav';
import { HeaderButton } from './button';

export class Header extends BaseComponent {
  private readonly logo = new HeaderLogo();

  private readonly nav = new HeaderNav();

  private readonly button = new HeaderButton();

  constructor() {
    super('header', ['header']);
    this.logo = new HeaderLogo();
    this.element.append(this.logo.element);
    this.nav = new HeaderNav();
    this.element.append(this.nav.element);
    this.button = new HeaderButton();
    this.element.append(this.button.element);
    // this.element.innerHTML = `
    //   <div>
    //     <button class="register-btn">register new player</button>
    //   </div>
    // `;

    this.handleNavigation();
  }

  private handleNavigation(): void {
    this.element.addEventListener('click', (event) => {
      const selectedRoute = (event.target as HTMLDListElement).getAttribute(
        'data-route',
      );
      if (selectedRoute) {
        router.navigate(selectedRoute);
      }
    });
  }
}
