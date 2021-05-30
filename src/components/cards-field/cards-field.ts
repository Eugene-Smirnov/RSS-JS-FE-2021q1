import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.append(card.element));
  }

  hideCards(): void {
    this.cards.forEach((card) => card.flipToBack());
  }
}
