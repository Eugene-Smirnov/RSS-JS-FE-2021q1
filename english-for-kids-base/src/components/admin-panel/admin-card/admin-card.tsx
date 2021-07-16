import { FC, useCallback, useState } from 'react';
import { CardModel } from '../../../models/card-model';
import { cardsService } from '../../../services/cards-service';
import './admin-card.scss';

type AdminCardProps = {
  card: CardModel;
  setEditingCard: (card: CardModel | null) => void;
  loadPage: () => void;
};

export const AdminCard: FC<AdminCardProps> = ({ card, setEditingCard, loadPage }: AdminCardProps) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const playTitle = () => {
    if (isAudioPlaying) return;
    setIsAudioPlaying(true);
    const audio = new Audio(card.audio);
    audio.play().then(() => setIsAudioPlaying(false));
  };

  const onEditClick = useCallback(() => {
    setEditingCard(card);
  }, [card, setEditingCard]);

  const onDeleteClick = useCallback(async () => {
    await cardsService.remove(card);
    loadPage();
  }, [card, loadPage]);

  return (
    <div className="admin-card__wrapper">
      <div className="admin-card">
        <div className="admin-card-image__wrapper">
          <div className="admin-card-image" style={{ backgroundImage: `url(${card.image})` }} />
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
            <button className="admin-card__button admin-card__audio-path" onClick={playTitle}>
              {'🗣️'}
            </button>
          </div>
        </div>
        <div className="admin-card__buttons">
          <button className="admin-card__button admin-card__button_delete" onClick={onDeleteClick}>
            delete
          </button>
          <button className="admin-card__button admin-card__button_edit" onClick={onEditClick}>
            edit
          </button>
        </div>
      </div>
    </div>
  );
};
