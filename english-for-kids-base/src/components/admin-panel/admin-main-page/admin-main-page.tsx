import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CategoryDTO } from '../../../dto/category';
import { categoryService } from '../../../services/category-service';
import { setAdminActiveCategory } from '../../../store/actions';
import { AppState } from '../../../store/reducer';
import { loadCategories } from '../../../store/thunks';
import { AdminCategory } from '../admin-category/admin-category';
import { AdminCategoryEdit } from '../admin-category/admin-category-edit';
import './admin-main-page.scss';

export const AdminMainPage: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector<AppState, CategoryDTO[]>(({ categories }) => categories);
  const updatingCategory = useSelector<AppState, CategoryDTO | null>(({ admin }) => admin.updatingCategory);

  const onSelect = useCallback(
    (category: CategoryDTO) => {
      dispatch(setAdminActiveCategory(category));
    },
    [dispatch],
  );

  const onChangeWords = useCallback(
    (category: CategoryDTO) => {
      history.push(category.name ? `/admin/category/${category.name}` : '/admin');
    },
    [history],
  );

  const onDelete = useCallback(
    async (category: CategoryDTO) => {
      await categoryService.remove(category);
      dispatch(loadCategories());
    },
    [dispatch],
  );

  const onCreate = useCallback(async () => {
    const newCategory = await categoryService.create();
    dispatch(loadCategories());
    dispatch(setAdminActiveCategory(newCategory));
  }, [dispatch]);

  return (
    <main id="main" className="admin-main">
      <div className="admin-categories__wrapper">
        {categories.map(cat => {
          if (cat.id === updatingCategory?.id) return <AdminCategoryEdit key={cat.name} category={cat} onDelete={onDelete} />;
          return <AdminCategory key={cat.name} category={cat} onSelect={onSelect} onChangeWords={onChangeWords} onDelete={onDelete} />;
        })}
        <div className="admin-category admin-category-add" onClick={onCreate}>
          <p className="admin-category-add__plus">+</p>
          <p>add new category</p>
        </div>
      </div>
    </main>
  );
};
