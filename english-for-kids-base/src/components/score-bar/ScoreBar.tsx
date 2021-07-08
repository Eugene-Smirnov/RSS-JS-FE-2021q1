import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryDTO } from '../../dto/category';
import { CardModel } from '../../models/card-model';
import { GameAudioService } from '../../services/game-audio-service';
import { AppState } from '../../store/reducer';
import { startGame } from '../../store/thunks';
import './ScoreBar.scss';

type ScoreBarProps = {
  isGameMode: boolean;
  categoryName: string;
};

export const ScoreBar: FC<ScoreBarProps> = ({ isGameMode, categoryName }: ScoreBarProps) => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector<AppState, boolean>(({ game }) => game.isStarted);
  const currentIndex = useSelector<AppState, number>(({ game }) => game.currentIndex);
  const cards = useSelector<AppState, CardModel[]>(({ game }) => game.cards);
  const category = useSelector<AppState, CategoryDTO | undefined>(({ categories }) => {
    return categories.find(category => category.name === categoryName);
  });

  const play = useCallback(() => {
    dispatch(startGame(category));
  }, [category, dispatch]);

  const repeat = useCallback(() => {
    GameAudioService.playTitle(cards[currentIndex]);
  }, [cards, currentIndex]);

  return (
    <div className={`score-bar__wrapper${isGameMode ? '' : ' score-bar_hidden'}`}>
      <div className="score-bar">
        <div className="score-bar__title">score:</div>
        <div className="score" id="score" />
        <div className="score-bar__button">
          <button className={`game-button${isGameStarted ? ' game-button_repeat' : ''}`} onClick={isGameStarted ? repeat : play}>
            {isGameStarted ? <img className="rotate-icon" src="../icons/rotate.svg" alt="rotate" /> : 'play'}
          </button>
        </div>
      </div>
    </div>
  );
};
