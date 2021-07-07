import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { CategoryModel } from '../../models/category-model';
import { setActiveCategory } from '../../store/actions';
import { AppState } from '../../store/reducer';

export const CategoryPage: FC = () => {
  const dispatch = useDispatch();
  const isGameMode = useSelector<AppState, boolean>(({ isGameMode }) => isGameMode);
  const { name } = useParams<{ name: string }>();
  // const category = useSelector<AppState, CategoryModel | undefined>(({ categories }) => {
  //   return categories.find(cat => cat.name === name);
  // });

  useEffect(() => {
    dispatch(setActiveCategory(name));
  }, [name, dispatch]);

  return (
    <main className={`main${isGameMode ? ' game-mode' : ''}`}>
      <div>{name}</div>
    </main>
  );
};
