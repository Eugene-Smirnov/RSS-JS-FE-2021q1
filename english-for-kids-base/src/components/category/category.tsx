import { FC, useCallback } from 'react';
import { CategoryModel } from '../../models/category-model';
import './category.scss';

type CategoryProps = {
  category: CategoryModel;
  onSelect: (category: CategoryModel) => void;
};

export const Category: FC<CategoryProps> = ({ category, onSelect }: CategoryProps) => {
  const onClick = useCallback(() => {
    return onSelect(category);
  }, [onSelect, category]);
  return (
    <div className="category" onClick={onClick}>
      <div className="category-image__wrapper">
        <div className="category-image" style={{ backgroundImage: `url(${category.image})` }} />
      </div>
      <div className="category__title">{category.title}</div>
    </div>
  );
};
