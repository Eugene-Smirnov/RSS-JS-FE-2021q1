import { FC, SyntheticEvent, useCallback, useState } from 'react';
import { CardModel } from '../../../models/card-model';
import { cardsService } from '../../../services/cards-service';
import './admin-card.scss';

type AdminCardProps = {
  card: CardModel;
  setEditingCard: (card: CardModel | null) => void;
  loadPage: () => void;
};

export const AdminEditCard: FC<AdminCardProps> = ({ card, setEditingCard, loadPage }: AdminCardProps) => {
  const [thisCard, setThisCard] = useState<CardModel>({ ...card });

  const onImageChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const { files } = e.currentTarget;
      if (!files) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        const data = reader.result || '';
        setThisCard({ ...thisCard, image: data.toString() });
      };
    },
    [thisCard],
  );

  const onTitleChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      setThisCard({ ...thisCard, title: e.currentTarget.value });
    },
    [thisCard],
  );

  const onTranslationChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      setThisCard({ ...thisCard, translation: e.currentTarget.value });
    },
    [thisCard],
  );

  const onAudioChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      setThisCard({ ...thisCard, audio: e.currentTarget.value });
    },
    [thisCard],
  );

  const onCancelClick = useCallback(() => {
    setEditingCard(null);
  }, [setEditingCard]);

  const onSubmitClick = useCallback(async () => {
    await cardsService.update(thisCard);
    setEditingCard(null);
    loadPage();
  }, [loadPage, setEditingCard, thisCard]);

  return (
    <div className="admin-card__wrapper">
      <div className="admin-card">
        <label className="admin-card-image-input__label" htmlFor="card-image-input">
          <div className="admin-card-image" style={{ backgroundImage: `url(${thisCard.image})` }} />
        </label>
        <input className="admin-card-image-input" type="file" name="card-image-input" id="card-image-input" onChange={onImageChange} />
        <div className="admin-card-info">
          <div className="admin-card-info__row">
            <input
              type="text"
              placeholder="Title"
              className="admin-card__title admin-card-edit__input"
              value={thisCard.title}
              onChange={onTitleChange}
            />
          </div>
          <div className="admin-card-info__row">
            <input
              type="text"
              placeholder="Translation"
              className="admin-card__translation admin-card-edit__input"
              value={thisCard.translation}
              onChange={onTranslationChange}
            />
          </div>
          <div className="admin-card-info__row">
            <input
              type="text"
              placeholder="Audio path"
              className="admin-card__audio-path admin-card-edit__input"
              value={thisCard.audio}
              onChange={onAudioChange}
            />
          </div>
        </div>
        <div className="admin-card__buttons">
          <button className="admin-card__button admin-card__button_cancel" onClick={onCancelClick}>
            cancel
          </button>
          <button className="admin-card__button admin-card__button_edit" onClick={onSubmitClick}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
