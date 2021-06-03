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
      const navLinks = document.querySelectorAll('header__link');
      if (navLinks)
        navLinks.forEach((link) =>
          link.classList.remove('header__link_active')
        );
      const state = router.getState();
      if (state === '/winners') {
        if (this.name === 'winners') {
          this.element.classList.add('header__link_active');
        }
        if (this.name === 'garage') {
          this.element.classList.add('header__link_active');
        }
      }
    });
  }
}
