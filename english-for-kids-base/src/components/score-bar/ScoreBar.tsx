import { FC, useState } from 'react';
import './ScoreBar.scss';

type ScoreBarProps = {
  isGameMode: boolean;
};

export const ScoreBar: FC<ScoreBarProps> = ({ isGameMode }: ScoreBarProps) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggle = () => {
    setIsGameStarted(!isGameStarted);
  };

  return (
    <div className={`score-bar__wrapper${isGameMode ? '' : ' score-bar_hidden'}`}>
      <div className="score-bar">
        <div className="score-bar__title">score:</div>
        <div className="score" id="score" />
        <div className="score-bar__button">
          <button className={`game-button${isGameStarted ? ' game-button_repeat' : ''}`} onClick={toggle}>
            {isGameStarted ? <img className="rotate-icon" src="../icons/rotate.svg" alt="rotate" /> : 'play'}
          </button>
        </div>
      </div>
    </div>
  );
};
