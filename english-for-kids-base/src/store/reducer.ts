import { Reducer } from 'redux';
import { CategoryDTO } from '../dto/category';
import { CategoryModel } from '../models/category-model';
import { changeGameMode, setActiveCategory, setCategories, toggleMenu } from './actions';

export interface AppState {
  isMenuOpen: boolean;
  isGameMode: boolean;
  categories: CategoryModel[];
}

const DEFAULT_STATE: AppState = {
  isMenuOpen: false,
  isGameMode: false,
  categories: [],
};

export const reducer: Reducer<AppState> = (state = DEFAULT_STATE, action): AppState => {
  switch (action.type) {
    case changeGameMode.type:
      return { ...state, isGameMode: action.payload };
    case toggleMenu.type:
      return { ...state, isMenuOpen: action.payload };
    case setActiveCategory.type:
      return {
        ...state,
        categories: state.categories.map(category => ({
          ...category,
          isActive: category.name === action.payload,
        })),
      };
    case setCategories.type:
      return {
        ...state,
        categories: (action.payload as CategoryDTO[]).map(category => ({
          ...category,
          isActive: false,
        })),
      };
    default:
      return state;
  }
};
