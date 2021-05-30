import './settings.scss';

import { BaseComponent } from '../base-component';
import { CardsTypeInput } from './cards-type-input';
import { GameDifficultyInput } from './difficulty-input';

export class Settings extends BaseComponent {
  public readonly cardsTypeInput = new CardsTypeInput();

  public readonly gameDifficultyInput = new GameDifficultyInput();

  constructor() {
    super('div', ['settings-board']);

    // ****
    const cardsType = new BaseComponent('div', ['settings__cards-type']);
    cardsType.element.innerHTML = `
      <h3 class="settings__input-heading">Game cards type:</h3>
    `;
    this.cardsTypeInput.element.addEventListener('change', () => {
      this.cardsTypeInput.setValue();
    });
    cardsType.element.append(this.cardsTypeInput.element);
    this.element.append(cardsType.element);

    // ****
    const gameDifficulty = new BaseComponent('div', [
      'settings__game-difficulty',
    ]);
    gameDifficulty.element.innerHTML = `
      <h3 class="settings__input-heading">Difficulty:</h3>
    `;
    this.gameDifficultyInput.element.addEventListener('change', () => {
      this.gameDifficultyInput.setValue();
    });
    gameDifficulty.element.append(this.gameDifficultyInput.element);
    this.element.append(gameDifficulty.element);
  }
}
