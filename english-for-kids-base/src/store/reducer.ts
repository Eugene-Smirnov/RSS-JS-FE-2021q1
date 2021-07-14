import { Reducer } from 'redux';
import { CategoryDTO } from '../dto/category';
import { CardModel } from '../models/card-model';
import { CategoryModel } from '../models/category-model';
import {
  addCardIndex,
  addMistake,
  addScore,
  changeGameMode,
  resetGame,
  setActiveCategory,
  setAdminActiveCategory,
  setCards,
  setCategories,
  setIsGameStarted,
  toggleIsAdminLogged,
  toggleIsLoginPopupDisplayed,
  toggleMenu,
} from './actions';

export interface AppState {
  isMenuOpen: boolean;
  isGameMode: boolean;
  categories: CategoryModel[];
  game: {
    isStarted: boolean;
    category: CategoryDTO | null;
    cards: CardModel[];
    currentIndex: number;
    mistakes: number;
    score: boolean[];
  };
  isLoginPopupDisplayed: boolean;
  admin: {
    isLogged: boolean;
    updatingCategory: CategoryDTO | null;
  };
}

const DEFAULT_STATE: AppState = {
  isMenuOpen: false,
  isGameMode: false,
  categories: [],
  game: {
    isStarted: false,
    category: null,
    cards: [],
    currentIndex: 0,
    mistakes: 0,
    score: [],
  },
  isLoginPopupDisplayed: false,
  admin: {
    isLogged: false,
    updatingCategory: null,
  },
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
    case setCards.type:
      return {
        ...state,
        game: {
          ...state.game,
          category: (action.payload as [CategoryDTO, CardModel[]])[0],
          cards: [...(action.payload as [CategoryDTO, CardModel[]])[1]],
        },
      };
    case setIsGameStarted.type:
      return {
        ...state,
        game: {
          ...state.game,
          isStarted: action.payload,
        },
      };
    case addMistake.type:
      return {
        ...state,
        game: {
          ...state.game,
          mistakes: state.game.mistakes + 1,
        },
      };
    case addCardIndex.type:
      return {
        ...state,
        game: {
          ...state.game,
          currentIndex: state.game.currentIndex + 1,
        },
      };
    case addScore.type:
      return {
        ...state,
        game: {
          ...state.game,
          score: [...state.game.score, action.payload as boolean],
        },
      };
    case resetGame.type:
      return {
        ...state,
        game: { ...DEFAULT_STATE.game },
      };
    case toggleIsLoginPopupDisplayed.type:
      return {
        ...state,
        isLoginPopupDisplayed: !state.isLoginPopupDisplayed,
      };
    case toggleIsAdminLogged.type:
      return {
        ...state,
        admin: {
          ...state.admin,
          isLogged: action.payload as boolean,
        },
      };
    case setAdminActiveCategory.type:
      return {
        ...state,
        admin: {
          ...state.admin,
          updatingCategory: action.payload as CategoryDTO,
        },
      };
    default:
      return state;
  }
};
