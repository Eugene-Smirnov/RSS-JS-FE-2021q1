import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CategoryModel } from '../../../models/category-model';
import { AppState } from '../../../store/reducer';
import { AdminCategory } from '../admin-category/admin-category';
import './admin-main-page.scss';

export const AdminMainPage: FC = () => {
  const categories = useSelector<AppState, CategoryModel[]>(({ categories }) => categories);

  return (
    <main id="main" className="admin-main">
      <div className="admin-categories__wrapper">
        {categories.map(cat => {
          return <AdminCategory key={cat.name} category={cat} onSelect={() => {}} />;
        })}
      </div>
    </main>
  );
};
