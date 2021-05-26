import './styles/logo.scss';
import { BaseComponent } from '../base-component';

export class HeaderLogo extends BaseComponent {
  constructor() {
    super('div', ['logo']);
    this.element.dataset.route = '/';
    this.element.innerHTML = `
      <p class="logo__text">match</p>
      <p class="logo__text transparent">match</p>
    `;
  }
}
