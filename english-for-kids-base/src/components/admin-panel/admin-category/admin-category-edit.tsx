import { FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryDTO } from '../../../dto/category';
import { CardModel } from '../../../models/card-model';
import { cardsService } from '../../../services/cards-service';
import { categoryService } from '../../../services/category-service';
import { setAdminActiveCategory } from '../../../store/actions';
import { AppState } from '../../../store/reducer';
import { loadCategories } from '../../../store/thunks';
import './admin-category.scss';

type AdminCategoryEditProps = {
  category: CategoryDTO;
  onDelete: (category: CategoryDTO) => void;
};

export const AdminCategoryEdit: FC<AdminCategoryEditProps> = ({ category, onDelete }: AdminCategoryEditProps) => {
  const dispatch = useDispatch();
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const updatingCategory = useSelector<AppState, CategoryDTO | null>(({ admin }) => admin.updatingCategory);

  const [cards, setCards] = useState<CardModel[]>([]);
  const [fileImage, setfileImage] = useState<File | null>(null);

  useEffect(() => {
    cardsService
      .getCards(category.id)
      .then(categoryCards => setCards(categoryCards))
      .catch(() => {});
  }, [category]);

  const onTitleChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      if (!updatingCategory) {
        dispatch(setAdminActiveCategory(null));
        return;
      }
      dispatch(setAdminActiveCategory({ ...updatingCategory, title: e.currentTarget.value }));
    },
    [updatingCategory, dispatch],
  );

  const onImageChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) return;
    const img = files[0];
    setfileImage(img);
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      const data = reader.result || '';
      if (!updatingCategory) {
        dispatch(setAdminActiveCategory(null));
        return;
      }
      dispatch(setAdminActiveCategory({ ...updatingCategory, image: data.toString() }));
    };
  };

  const onDeleteClick = useCallback(() => {
    dispatch(setAdminActiveCategory(null));
    onDelete(category);
  }, [category, onDelete, dispatch]);

  const onSubmit = useCallback(async () => {
    if (!updatingCategory) return;
    setIsSubmited(true);
    await categoryService.update(updatingCategory, fileImage);
    dispatch(loadCategories());
    dispatch(setAdminActiveCategory(null));
  }, [updatingCategory, dispatch, fileImage]);

  const onCancel = useCallback(async () => {
    if (!updatingCategory) return;
    dispatch(loadCategories());
    dispatch(setAdminActiveCategory(null));
  }, [updatingCategory, dispatch]);

  return (
    <div className="admin-category admin-category_edit">
      <div className="admin-category__wrapper">
        {isSubmited ? (
          <div className="admin-category__wait-msg">
            <p>Category is updating. Please wait...</p>
          </div>
        ) : (
          ''
        )}
        <div className="admin-category-image__wrapper">
          <div className="admin-category__delete" onClick={onDeleteClick}>
            <span className="admin-category__delete-span" />
            <span className="admin-category__delete-span" />
          </div>
          <div className="admin-category__title">
            <input type="text" placeholder="Category Title" value={updatingCategory?.title} onChange={onTitleChange}></input>
            <p>{`Words: ${cards.length}`}</p>
          </div>
          <label className="admin-category-image-input__label" htmlFor="category-image-input">
            <div className="admin-category-image" style={{ backgroundImage: `url(${updatingCategory?.image})` }} />
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
          <button className="admin-category__button admin-category__button_cancel" id="category-update-cancel" onClick={onCancel}>
            cancel
          </button>
          <button className="admin-category__button admin-category__button_submit" id="category-update-submit" onClick={onSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
