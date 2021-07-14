import { FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { CategoryDTO } from '../../../dto/category';
import { CardModel } from '../../../models/card-model';
import { cardsService } from '../../../services/cards-service';
import { categoryService } from '../../../services/category-service';
import './admin-category.scss';

type AdminCategoryEditProps = {
  category: CategoryDTO;
  onSelect: (category: CategoryDTO) => void;
};

export const AdminCategoryEdit: FC<AdminCategoryEditProps> = ({ category, onSelect }: AdminCategoryEditProps) => {
  const [cards, setCards] = useState<CardModel[]>([]);
  const [nameInputValue, setNameInputValue] = useState<string>(category.title);
  const [thisCategory, setThisCategory] = useState<CategoryDTO>(category);

  useEffect(() => {
    cardsService.getCards(category.name).then(categoryCards => setCards(categoryCards));
  });

  const onClick = useCallback(() => {
    return onSelect(category);
  }, [onSelect, category]);

  const onNameChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setNameInputValue(e.currentTarget.value);
  };

  const onImageChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) return;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      const data = reader.result || '';
      setThisCategory({ ...thisCategory, image: data.toString() });
    };
  };

  const onSubmit = useCallback(() => {
    categoryService.update(thisCategory);
  }, [thisCategory]);

  return (
    <div className="admin-category admin-category_edit" onClick={onClick}>
      <div className="admin-category-image__wrapper">
        <div className="admin-category__delete">
          <span className="admin-category__delete-span" />
          <span className="admin-category__delete-span" />
        </div>
        <div className="admin-category__title">
          <input type="text" placeholder="Category Name" value={nameInputValue} onChange={onNameChange}></input>
          <p>{`Words: ${cards.length}`}</p>
        </div>
        <label className="admin-category-image-input__label" htmlFor="category-image-input">
          <div className="admin-category-image" style={{ backgroundImage: `url(${thisCategory.image})` }} />
        </label>
        <input
          className="admin-category-image-input"
          type="file"
          name="category-image-input"
          id="category-image-input"
          onChange={onImageChange}
        />
      </div>
      <div className="admin-category__buttons">
        <button className="admin-category__button admin-category__button_cancel" id="category-update-cancel">
          cancel
        </button>
        <button className="admin-category__button admin-category__button_submit" id="category-update-submit" onClick={onSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};
