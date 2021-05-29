import './card.scss';
import { BaseComponent } from '../base-component';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  public isFlipped = true;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${image}')"></div>
        <div class="card__back"></div>
      </div>
    `;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(this.isFlipped);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip(this.isFlipped);
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((res) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => res(), {
        once: true,
      });
    });
  }

  showSuccess(): void {
    this.element.style.setProperty(
      '--pseudo-color',
      'var(--pseudo-color_green)',
    );
  }

  showError(): void {
    this.element.style.setProperty('--pseudo-color', 'var(--pseudo-color_red)');
    setTimeout(() => {
      this.element.style.setProperty('--pseudo-color', 'transparent');
    }, 500);
  }
}
