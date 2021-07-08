import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CategoryModel } from '../../models/category-model';
import { resetGame, setActiveCategory } from '../../store/actions';
import { AppState } from '../../store/reducer';
import { Category } from '../category/category';
import './MainPage.scss';

export const MainPage: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isGameMode = useSelector<AppState, boolean>(({ isGameMode }) => isGameMode);
  const categories = useSelector<AppState, CategoryModel[]>(({ categories }) => categories);
  const onSelect = useCallback(
    (category: CategoryModel) => {
      history.push(category.name ? `/category/${category.name}` : '/');
      dispatch(setActiveCategory(category.name));
    },
    [history, dispatch],
  );
  useEffect(() => {
    dispatch(() => {
      setActiveCategory();
      dispatch(resetGame());
    });
  }, [dispatch]);
  return (
    <main className={`main${isGameMode ? ' game-mode' : ''}`}>
      <div className="categories__wrapper">
        {categories.map(cat => {
          return <Category key={cat.name} category={cat} onSelect={onSelect} />;
        })}
      </div>
    </main>
  );
};
