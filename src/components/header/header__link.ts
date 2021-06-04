import { router } from '../../router';
import { BaseComponent } from '../base-component';

export class HeaderNavLink extends BaseComponent {
  private name;

  constructor(name: string) {
    super('div', ['header__link']);
    this.element.innerHTML = `
      <span class="header__link-${name}-image"></span>
      <p>${name}</p>
    `;
    this.name = name;
    this.handleActive();
  }

  handleActive(): void {
    router.subscribe(() => {
      this.element.classList.remove('header__link_active');

      const state = router.getState();
      const { route } = this.element.dataset;

      if (route) {
        if (route === state) {
          this.element.classList.add('header__link_active');
        }
      }
    });
  }
}
