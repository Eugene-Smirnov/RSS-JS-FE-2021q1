import { FC, useCallback, useState } from 'react';
import { CardModel } from '../../../models/card-model';
import './admin-card.scss';

type AdminCardProps = {
  card: CardModel;
  setEditingCard: (card: CardModel | null) => void;
};

const DELETE_AFTER_EDITING_SERVER = '../';

export const AdminCard: FC<AdminCardProps> = ({ card, setEditingCard }: AdminCardProps) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const playTitle = () => {
    if (isAudioPlaying) return;
    setIsAudioPlaying(true);
    const audio = new Audio(`${DELETE_AFTER_EDITING_SERVER}${card.audio}`);
    audio.play().then(() => setIsAudioPlaying(false));
  };

  const onEditClick = useCallback(() => {
    setEditingCard(card);
  }, [card, setEditingCard]);

  return (
    <div className="admin-card__wrapper">
      <div className="admin-card">
        <div className="admin-card-image__wrapper">
          <div className="admin-card-image" style={{ backgroundImage: `url(${DELETE_AFTER_EDITING_SERVER}${card.image})` }} />
        </div>
        <div className="admin-card-info">
          <div className="admin-card-info__row">
            {'Title: '}
            <div className="admin-card__title">{card.title}</div>
          </div>
          <div className="admin-card-info__row">
            {'Translation: '}
            <div className="admin-card__translation">{card.translation}</div>
          </div>
          <div className="admin-card-info__row">
            {'Audio: '}
            <div className="admin-card__audio-path" onClick={playTitle}>
              {card.audio}
            </div>
          </div>
        </div>
        <div className="admin-card__buttons">
          <button className="admin-card__button admin-card__button_delete">delete</button>
          <button className="admin-card__button admin-card__button_edit" onClick={onEditClick}>
            edit
          </button>
        </div>
      </div>
    </div>
  );
};
