import './score.scss';
import { BaseComponent } from '../base-component';

class Score extends BaseComponent {
  constructor() {
    super('div', ['score']);
    this.element.innerHTML = `
      <h2 class="score__heading">Best players</h2>
    `;
  }
}
