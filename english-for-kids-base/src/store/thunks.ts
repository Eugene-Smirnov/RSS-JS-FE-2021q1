import { Dispatch } from 'redux';
import { renderEndGamePopUp } from '../components/end-game-popup/end-game-pop-up';
import { renderScorePoint } from '../components/score-bar/score-point/score-point';
import { CategoryDTO } from '../dto/category';
import { CardModel } from '../models/card-model';
import { cardsService } from '../services/cards-service';
import { categoryService } from '../services/category-service';
import { GameAudioService } from '../services/game-audio-service';
import { GameService } from '../services/game-service';
import { mixArray } from '../shared';
import { resetGame, setCards, setCategories, setIsGameStarted } from './actions';
import { AppState } from './reducer';

export const loadCategories = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const categories = await categoryService.getCategories();
    dispatch(setCategories(categories));
  };
};

export const startGame = (category: CategoryDTO | undefined) => {
  return async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
    if (!category) return;
    const cards = await cardsService.getCards(category.id);
    const mixedCards = mixArray(cards);
    dispatch(resetGame());
    dispatch(setCards([category, mixedCards]));
    dispatch(setIsGameStarted(true));

    const firstCard = getState().game.cards[0];
    setTimeout(() => GameAudioService.playTitle(firstCard), 500);
  };
};

export const matchWord = (card: CardModel, disableCard: () => void, showError: () => void, redirectToMain: () => void) => {
  return async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
    const {
      game: { currentIndex, cards, mistakes, score },
    } = getState();
    const nextIndex = currentIndex + 1;

    if (cards[currentIndex].name === card.name) {
      // CORRECT
      await GameService.correctMatch(dispatch, disableCard);
      renderScorePoint([...score, true]);
      if (cards[nextIndex]) {
        // NEXT CARD
        setTimeout(() => GameAudioService.playTitle(cards[nextIndex]), 1000);
      } else {
        // END OF GAME
        await GameService.endGame(mistakes, redirectToMain);
        renderEndGamePopUp(!mistakes, mistakes);
      }
    } else {
      // ERROR
      await GameService.errorMatch(dispatch, showError);
      renderScorePoint([...score, false]);
    }
  };
};
