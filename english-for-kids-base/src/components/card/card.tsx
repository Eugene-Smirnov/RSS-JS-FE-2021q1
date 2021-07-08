import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CardModel } from '../../models/card-model';
import { setActiveCategory } from '../../store/actions';
import { AppState } from '../../store/reducer';
import { matchWord } from '../../store/thunks';
import './card.scss';

type CardProps = {
  card: CardModel;
};

export const Card: FC<CardProps> = ({ card }: CardProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const isGameMode = useSelector<AppState, boolean>(({ isGameMode }) => isGameMode);
  const isGameStarted = useSelector<AppState, boolean>(({ game }) => game.isStarted);

  const playTitle = () => {
    if (isAudioPlaying) return;
    setIsAudioPlaying(true);
    const audio = new Audio(card.audio);
    audio.play().then(() => setIsAudioPlaying(false));
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const onMouseLeave = () => {
    setIsFlipped(false);
  };

  // GAME-MODE METHODS

  const redirectToMain = useCallback(() => {
    history.push('/');
    dispatch(setActiveCategory(''));
  }, [history, dispatch]);

  const disableCard = () => {
    setIsDisabled(true);
  };

  const showError = () => {
    setIsError(true);
    setTimeout(() => setIsError(false), 500);
  };

  const onMatchCard = useCallback(() => {
    if (!isGameStarted) return;
    dispatch(matchWord(card, disableCard, showError, redirectToMain));
  }, [card, redirectToMain, isGameStarted, dispatch]);

  return (
    <div
      className={`card__wrapper${isFlipped ? ' card__wrapper_flipped' : ''}${isDisabled ? ' card__wrapper_disabled' : ''}${
        isError ? ' card__wrapper_error' : ''
      }`}
      onMouseLeave={onMouseLeave}
      onClick={isGameMode ? onMatchCard : playTitle}
    >
      <div className="card">
        <div className="card__front">
          <div className="card-image__wrapper">
            <div className="card-image" style={{ backgroundImage: `url(${card.image})` }} />
          </div>
          <div className="card__title">
            {card.title}
            <button className="card__button" onClick={isGameMode ? () => {} : toggleFlip}>
              <img className="rotate-icon" src="../icons/rotate.svg" alt="rotate" />
            </button>
          </div>
        </div>
        <div className="card__back">
          <div className="card__translation">{card.translation}</div>
        </div>
      </div>
    </div>
  );
};
