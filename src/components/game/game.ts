import { BaseComponent } from '../base-component';
import { CardsField } from '../cards-field/cards-field';
import { Card } from '../card/card';
import { delay } from '../../shared';

const FLIP_DELAY = 3000;

export class Game extends BaseComponent {
  private readonly cardsField = new CardsField();

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      // this.activeCard.showError();
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      // this.activeCard.showSuccess();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
