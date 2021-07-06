import { Dispatch } from 'redux';
import { categoryService } from '../services/category-service';
import { setCategories } from './actions';

export const loadCategories = () => {
  return (dispatch: Dispatch): void => {
    categoryService.getCategories().then(categories => dispatch(setCategories(categories)));
  };
};
