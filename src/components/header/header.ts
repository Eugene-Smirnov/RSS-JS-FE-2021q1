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
  }

  private handleNavigation(): void {
    this.element.addEventListener('click', (event) => {
      const selectedRoute = (event.target as HTMLDListElement).getAttribute(
        'data-route'
      );
      if (selectedRoute) {
        router.navigate(selectedRoute);
      }
    });
  }
}
