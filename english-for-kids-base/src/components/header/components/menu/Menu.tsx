import { FC, SyntheticEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CategoryModel } from '../../../../models/category-model';
import { setActiveCategory, toggleMenu } from '../../../../store/actions';
import { AppState } from '../../../../store/reducer';
import { MenuItem } from '../menu-item/MenuItem';
import './Menu.scss';

type MenuProps = {
  isMenuOpen: boolean;
  outClick: (e: SyntheticEvent) => void;
};

export const Menu: FC<MenuProps> = ({ isMenuOpen, outClick }: MenuProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector<AppState, CategoryModel[]>(({ categories }) => {
    if (!categories.length) return [];
    const isSelected = categories.some(({ isActive }) => isActive);
    return [
      {
        title: 'Main page',
        image: '',
        name: '',
        isActive: !isSelected,
      },
      ...categories,
    ];
  });

  const onSelect = useCallback(
    (category: CategoryModel) => {
      history.push(category.name ? `/category/${category.name}` : '/');
      dispatch(setActiveCategory(category.name));
      dispatch(toggleMenu(false));
    },
    [history, dispatch],
  );

  return (
    <div className={`menu_wrapper${isMenuOpen ? '' : ' menu__hidden'}`} onClick={outClick}>
      <div className="menu">
        {categories.map(category => (
          <MenuItem key={category.name} category={category} onSelect={onSelect} isActive={category.isActive} />
        ))}
      </div>
    </div>
  );
};
