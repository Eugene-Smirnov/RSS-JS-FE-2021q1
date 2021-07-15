import { FC, useCallback, useEffect, useState } from 'react';
import { CategoryDTO } from '../../../dto/category';
import { CardModel } from '../../../models/card-model';
import { cardsService } from '../../../services/cards-service';
import './admin-category.scss';

type AdminCategoryProps = {
  category: CategoryDTO;
  onSelect: (category: CategoryDTO) => void;
  onChangeWords: (category: CategoryDTO) => void;
  onDelete: (category: CategoryDTO) => void;
};

export const AdminCategory: FC<AdminCategoryProps> = ({ category, onSelect, onChangeWords, onDelete }: AdminCategoryProps) => {
  const [cards, setCards] = useState<CardModel[]>([]);
  useEffect(() => {
    cardsService
      .getCards(category.name)
      .then(categoryCards => setCards(categoryCards))
      .catch(() => {});
  });

  const onUpdateClick = useCallback(() => {
    onSelect(category);
  }, [onSelect, category]);

  const onAddWordClick = useCallback(() => {
    onChangeWords(category);
  }, [onChangeWords, category]);

  const onDeleteClick = useCallback(() => {
    onDelete(category);
  }, [category, onDelete]);

  return (
    <div className="admin-category">
      <div className="admin-category-image__wrapper">
        <div className="admin-category__delete" onClick={onDeleteClick}>
          <span className="admin-category__delete-span" />
          <span className="admin-category__delete-span" />
        </div>
        <div className="admin-category__title">
          <p>{category.title}</p>
          <p>{`Words: ${cards.length}`}</p>
        </div>
        <div className="admin-category-image" style={{ backgroundImage: `url(${category.image})` }} />
      </div>
      <div className="admin-category__buttons">
        <button className="admin-category__button" onClick={onUpdateClick}>
          update
        </button>
        <button className="admin-category__button" onClick={onAddWordClick}>
          add word
        </button>
      </div>
    </div>
  );
};
