import { FC, useCallback, useEffect, useState } from 'react';
import { CardModel } from '../../../models/card-model';
import { CategoryModel } from '../../../models/category-model';
import { cardsService } from '../../../services/cards-service';
import './admin-category.scss';

type AdminCategoryProps = {
  category: CategoryModel;
  onSelect: (category: CategoryModel) => void;
};

export const AdminCategory: FC<AdminCategoryProps> = ({ category, onSelect }: AdminCategoryProps) => {
  const onClick = useCallback(() => {
    return onSelect(category);
  }, [onSelect, category]);
  const [cards, setCards] = useState<CardModel[]>([]);
  useEffect(() => {
    cardsService.getCards(category.name).then(categoryCards => setCards(categoryCards));
  });

  return (
    <div className="admin-category" onClick={onClick}>
      <div className="admin-category-image__wrapper">
        <div className="admin-category__delete">
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
        <button className="admin-category__button">update</button>
        <button className="admin-category__button">add word</button>
      </div>
    </div>
  );
};
