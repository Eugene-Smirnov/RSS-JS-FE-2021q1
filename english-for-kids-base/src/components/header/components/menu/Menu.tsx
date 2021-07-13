import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CategoryModel } from '../../../../models/category-model';
import { setActiveCategory, toggleMenu } from '../../../../store/actions';
import { AppState } from '../../../../store/reducer';
import { renderLoginPopUp } from '../../../login-pop-up/login-pop-up';
import { MenuItem } from '../menu-item/MenuItem';
import './Menu.scss';

type MenuProps = {
  isMenuOpen: boolean;
  outClick: () => void;
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

  const onSelectLogin = useCallback(() => {
    renderLoginPopUp();
    dispatch(toggleMenu(false));
  }, [dispatch]);

  return (
    <div className={`menu__wrapper${isMenuOpen ? '' : ' menu_hidden'}`}>
      <div className="menu">
        {categories.map(category => (
          <MenuItem key={category.name} category={category} onSelect={onSelect} isActive={category.isActive} />
        ))}
        <a className="menu-item menu-item_admin" onClick={onSelectLogin}>
          Admin panel
        </a>
      </div>
      <div className="menu__out" onClick={outClick} />
    </div>
  );
};
