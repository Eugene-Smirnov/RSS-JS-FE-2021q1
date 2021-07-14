import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { CategoryDTO, emptyCategory } from '../../../dto/category';
import { AppState } from '../../../store/reducer';
import { AdminCategory } from '../admin-category/admin-category';
import { AdminCategoryEdit } from '../admin-category/admin-category-edit';
import './admin-main-page.scss';

export const AdminMainPage: FC = () => {
  const categories = useSelector<AppState, CategoryDTO[]>(({ categories }) => categories);
  const [selectedCategory, setSelectedCategory] = useState<CategoryDTO>(emptyCategory);

  const onSelect = useCallback((category: CategoryDTO) => {
    setSelectedCategory(category);
  }, []);

  return (
    <main id="main" className="admin-main">
      <div className="admin-categories__wrapper">
        {categories.map(cat => {
          if (cat.name === selectedCategory.name) return <AdminCategoryEdit key={cat.name} category={cat} onSelect={() => {}} />;
          return <AdminCategory key={cat.name} category={cat} onSelect={onSelect} />;
        })}
      </div>
    </main>
  );
};
