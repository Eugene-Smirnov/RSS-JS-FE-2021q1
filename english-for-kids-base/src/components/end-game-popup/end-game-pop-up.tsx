import { FC } from 'react';
import ReactDOM from 'react-dom';
import './end-game-pop-up.scss';

const WIN_IMAGE_PATH = '../images/success.png';
const LOSE_IMAGE_PATH = '../images/failure.png';

type EndGamePopUpProps = {
  mistakes: number;
  win: boolean;
};

export const EndGamePopUp: FC<EndGamePopUpProps> = ({ win, mistakes }: EndGamePopUpProps) => {
  return (
    <div className="endgame-pop-up__wrapper">
      <div className="endgame-pop-up" style={{ backgroundImage: `url(${win ? WIN_IMAGE_PATH : LOSE_IMAGE_PATH})` }} />
      <p className="endgame-pop-up__message">{`You ${win ? 'won' : 'played'} with ${mistakes} mistakes!`}</p>
    </div>
  );
};

export const renderEndGamePopUp = (win: boolean, mistakes: number): void => {
  ReactDOM.render(<EndGamePopUp win={win} mistakes={mistakes} />, document.getElementById('main'));
};
