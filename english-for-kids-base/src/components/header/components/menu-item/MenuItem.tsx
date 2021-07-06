import { FC, useCallback } from 'react';
import { CategoryModel } from '../../../../models/category-model';
import './MenuItem.scss';

type MenuItemProps = {
  category: CategoryModel;
  onSelect: (category: CategoryModel) => void;
  isActive: boolean;
};

export const MenuItem: FC<MenuItemProps> = ({ category, onSelect, isActive }: MenuItemProps) => {
  const onClick = useCallback(() => onSelect(category), [category, onSelect]);
  return (
    <a className={`menu-item${isActive ? ' menu-item__active' : ''}`} onClick={onClick}>
      {category.title}
    </a>
  );
};
