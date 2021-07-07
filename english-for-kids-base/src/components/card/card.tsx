import { FC, useState } from 'react';
import { CardModel } from '../../models/card-model';
import './card.scss';

type CardProps = {
  card: CardModel;
};

export const Card: FC<CardProps> = ({ card }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
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

  return (
    <div className={`card__wrapper${isFlipped ? ' card__wrapper_flipped' : ''}`} onMouseLeave={onMouseLeave} onClick={playTitle}>
      <div className="card">
        <div className="card__front">
          <div className="card-image__wrapper">
            <div className="card-image" style={{ backgroundImage: `url(${card.image})` }} />
          </div>
          <div className="card__title">
            {card.title}
            <button className="card__button" onClick={toggleFlip}>
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
