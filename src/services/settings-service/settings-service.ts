import { SettingsModel } from '../../models/settings-model';

export const settingsSingleton: SettingsModel = {
  difficulty: '4x4',
  cardsType: 'unsorted',

  getDifficulty() {
    const dif = this.difficulty;
    if (dif === '8x8') return 32;
    if (dif === '6x6') return 18;
    return 8;
  },
};
