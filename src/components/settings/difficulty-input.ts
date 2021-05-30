import { settingsSingleton } from '../../services/settings-service/settings-service';
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

    this.getValue();
    this.setValue();
  }

  public getValue(): void {
    if (settingsSingleton.difficulty) {
      this.element.value = settingsSingleton.difficulty;
    }
  }

  public setValue(): void {
    const { value } = this.element;
    if (value) settingsSingleton.difficulty = value;
    document.body.style.setProperty(
      '--cards-multiplier',
      `var(--game-difficulty__${value})`,
    );
  }
}
