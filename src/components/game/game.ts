import './game.scss';
import { BaseComponent } from '../base-component';
import { CardsField } from '../cards-field/cards-field';
import { Card } from '../card/card';
import { delay } from '../../shared';
import { ImageCategoryModel } from '../../models/image-category-models';
import { Timer } from '../timer/timer';
import { settingsSingleton } from '../../services/settings-service/settings-service';
import { userService } from '../../services/user-service';
import { appendCongratPopUp } from '../congratulations-pop-up/append-congrat-pop-up';
import { scoreCount } from './scoreCount';

const FLIP_DELAY = 1000;
const FIRST_LOOK_DELAY = 29;

export class Game extends BaseComponent {
  private readonly cardsField = new CardsField();

  private timer = new Timer();

  private activeCard?: Card;

  private isAnimation = false;

  private gameStartTime = new Date(0);

  private currentInterval?: NodeJS.Timeout;

  private cardsAmount = 0;

  private rightCheckCounter = 0;

  private wrongCheckCounter = 0;

  constructor() {
    super('div', ['game']);
    this.element.append(this.timer.element);
    this.element.append(this.cardsField.element);
    Game.loadImages().then((images) => {
      this.startTimer();
      this.startGame(images);
    });
  }

  private static async loadImages(): Promise<string[]> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const categoryName = settingsSingleton.cardsType;
    const catIndex = categories.findIndex((cat) => {
      if (cat.category === categoryName) return true;
      return false;
    });
    const cat = categories[catIndex];
    return cat.images.map((name) => `${cat.category}/${name}`);
  }

  startGame(images: string[]): void {
    this.cardsField.clear();
    this.cardsAmount = settingsSingleton.getDifficulty();
    const pack = images
      .sort(() => Math.random() - 0.5)
      .slice(0, this.cardsAmount);
    const cards = pack
      .concat(pack)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
  }

  private startTimer(): void {
    let currentTime = FIRST_LOOK_DELAY;
    const firstLookTimer = setInterval(() => {
      this.timer.setTime(currentTime);
      currentTime--;
    }, 1000);

    setTimeout(() => {
      clearInterval(firstLookTimer);
      this.cardsField.hideCards();
      this.gameStartTime = new Date();
      currentTime = 0;
      this.currentInterval = setInterval(() => {
        this.timer.setTime(currentTime);
        currentTime++;
      }, 1000);
    }, FIRST_LOOK_DELAY * 1000);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (card.isFlipped === false) return;

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.wrongCheckCounter++;
      this.activeCard.showError();
      card.showError();
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.rightCheckCounter++;
      this.activeCard.showSuccess();
      card.showSuccess();
      this.gameEnd();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  gameEnd(): void {
    if (this.rightCheckCounter === this.cardsAmount) {
      const endTime = new Date();
      const checkSum = this.wrongCheckCounter + this.rightCheckCounter;
      const score = scoreCount(
        checkSum,
        this.wrongCheckCounter,
        endTime,
        this.gameStartTime,
      );
      userService.updateUserScore(score);
      if (this.currentInterval) clearInterval(this.currentInterval);
      appendCongratPopUp();
    }
  }
}
