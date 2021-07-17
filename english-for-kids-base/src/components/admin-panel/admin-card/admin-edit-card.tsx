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
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const [thisCard, setThisCard] = useState<CardModel>({ ...card });
  const [fileImage, setfileImage] = useState<File | null>(null);
  const [fileSound, setfileSound] = useState<File | null>(null);

  const onImageChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const { files } = e.currentTarget;
      if (!files) return;
      const img = files[0];
      setfileImage(img);
      const reader = new FileReader();
      reader.readAsDataURL(img);
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

  const onAudioChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) return;
    const sound = files[0];
    setfileSound(sound);
  }, []);

  const onCancelClick = useCallback(() => {
    setEditingCard(null);
  }, [setEditingCard]);

  const onSubmitClick = useCallback(async () => {
    setIsSubmited(true);
    await cardsService.update(thisCard, fileImage, fileSound);
    setEditingCard(null);
    loadPage();
  }, [loadPage, setEditingCard, thisCard, fileImage, fileSound]);

  return (
    <div className="admin-card__wrapper">
      {isSubmited ? (
        <div className="admin-card__wait-msg">
          <p>Card is updating. Please wait...</p>
        </div>
      ) : (
        ''
      )}
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
          <label className="admin-card-info__row">
            <input type="file" className="admin-card-edit__input_file" onChange={onAudioChange} id="card-audio-input" />
          </label>
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
