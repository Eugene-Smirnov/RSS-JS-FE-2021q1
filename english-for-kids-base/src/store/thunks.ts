import { Dispatch } from 'redux';
import { CategoryModel } from '../models/category-model';
import { cardsService } from '../services/cards-service';
import { categoryService } from '../services/category-service';
import { mixArray } from '../shared';
import { setCards, setCategories } from './actions';

export const loadCategories = () => {
  return (dispatch: Dispatch): void => {
    categoryService.getCategories().then(categories => dispatch(setCategories(categories)));
  };
};

export const loadGameCards = (category: CategoryModel) => {
  return (dispatch: Dispatch): void => {
    cardsService.getCards(category.name).then(cards => {
      const mixedCards = mixArray(cards);
      dispatch(setCards([category, mixedCards]));
    });
  };
};
