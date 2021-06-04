import './header.scss';
import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { HeaderNav } from './header__nav';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
      <h1 style="display: none">async-race</h1>
      <div class="logo">
        <p class="logo__text_async">Async</p>
        <p class="logo__text_race">RACE</p>
      </div>
    `;
    const nav = new HeaderNav();
    this.element.append(nav.element);

    this.handleNavigation();
    this.handleLogo();
  }

  private handleNavigation(): void {
    this.element.addEventListener('click', (event) => {
      const link = (event.target as HTMLElement).closest('.header__link');
      if (link) {
        const route = link.getAttribute('data-route');
        if (route) {
          router.navigate(route);
        }
      }
    });
  }

  private handleLogo(): void {
    const logo = this.element.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', () => {
        router.navigate('/');
      });
    }
  }
}
