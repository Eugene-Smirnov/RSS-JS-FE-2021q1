import './header.scss';
import { BaseComponent } from '../base-component';
import { router } from '../../router';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
      <h1 style="display: none">Match-match game</h1>
      <div class="logo">
        <p class="logo__text">match</p>
        <p class="logo__text transparent">match</p>
      </div>
      <nav class="nav">
        <div class="nav__link" data-route="/about"><span class="nav__icon info"></span>About Game</div>
        <div class="nav__link" data-route="/score"><span class="nav__icon scores"></span>Best Score</div>
        <div class="nav__link" data-route="/settings"><span class="nav__icon settings"></span>Game Settings</div>
      </nav>
      <div>
        <button class="register-btn">register new player</button>
      </div>
    `;

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
