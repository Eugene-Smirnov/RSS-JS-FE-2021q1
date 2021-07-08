import { CardModel } from '../models/card-model';

const CORRECT_SOUND_PATH = '../audio/correct.mp3';
const ERROR_SOUND_PATH = '../audio/error.mp3';
const FAILURE_SOUND_PATH = '../audio/failure.mp3';
const SUCCESS_SOUND_PATH = '../audio/success.mp3';
export class GameAudioService {
  static async playTitle(card: CardModel): Promise<void> {
    const audio = new Audio(card.audio);
    await audio.play();
  }

  static async playCorrect(): Promise<void> {
    const audio = new Audio(CORRECT_SOUND_PATH);
    await audio.play();
  }

  static async playError(): Promise<void> {
    const audio = new Audio(ERROR_SOUND_PATH);
    await audio.play();
  }

  static async playFailure(): Promise<void> {
    const audio = new Audio(FAILURE_SOUND_PATH);
    await audio.play();
  }

  static async playSuccess(): Promise<void> {
    const audio = new Audio(SUCCESS_SOUND_PATH);
    await audio.play();
  }
}
