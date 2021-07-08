import { FC } from 'react';
import ReactDOM from 'react-dom';
import './score-point.scss';

const CORRECT_POINT_PATH = '../icons/star-win.svg';
const ERROR_POINT_PATH = '../icons/star.svg';

type ScorePointElemntProps = {
  isMatched: boolean;
};

const ScorePointElement: FC<ScorePointElemntProps> = ({ isMatched }: ScorePointElemntProps) => {
  return (
    <div className="score-point">
      <div className="score-point__image" style={{ backgroundImage: `url(${isMatched ? CORRECT_POINT_PATH : ERROR_POINT_PATH})` }} />
    </div>
  );
};

const ScoreItems = (score: boolean[]) => {
  const items = score.map((bool, ind) => <ScorePointElement key={ind} isMatched={bool} />);
  return <div className="score-points">{items}</div>;
};

export const renderScorePoint = (score: boolean[]): void => {
  ReactDOM.render(ScoreItems(score), document.getElementById('score'));
};
