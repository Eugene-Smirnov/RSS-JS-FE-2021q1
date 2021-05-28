import { SettingsInput } from './settings-input';

const difficulties = ['4x4', '6x6', '8x8'];

export class GameDifficultyInput extends SettingsInput {
  constructor() {
    super();
    this.element.setAttribute('name', 'game-difficulty-input');
    this.element.setAttribute('id', 'game-difficulty-input');

    difficulties.forEach((dif) => {
      const option = document.createElement('option');
      option.classList.add('settings-option');
      option.classList.add('settings-option_difficulty');
      option.setAttribute('value', dif);
      option.innerText = dif;
      this.element.append(option);
    });
  }
}
