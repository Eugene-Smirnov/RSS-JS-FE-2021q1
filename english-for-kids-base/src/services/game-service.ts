import { Dispatch } from 'redux';
import { addCardIndex, addMistake, addScore } from '../store/actions';
import { GameAudioService } from './game-audio-service';

export class GameService {
  static async correctMatch(dispatch: Dispatch, disableCard: () => void): Promise<void> {
    dispatch(addCardIndex());
    await GameAudioService.playCorrect();
    await dispatch(addScore(true));
    disableCard();
  }

  static async errorMatch(dispatch: Dispatch, showError: () => void): Promise<void> {
    dispatch(addMistake());
    await GameAudioService.playError();
    await dispatch(addScore(false));
    showError();
  }

  static async win(redirectToMain: () => void): Promise<void> {
    await GameAudioService.playSuccess();
    // draw winners pop-up
    setTimeout(redirectToMain, 7000);
  }

  static async lose(redirectToMain: () => void): Promise<void> {
    await GameAudioService.playFailure();
    // draw losers pop-up
    setTimeout(redirectToMain, 7000);
  }

  static async endGame(mistakes: number, redirectToMain: () => void): Promise<void> {
    if (mistakes) {
      GameService.lose(redirectToMain);
    } else {
      GameService.win(redirectToMain);
    }
  }
}
