import { Action } from 'redux';
import { CategoryDTO } from '../dto/category';
import { CardModel } from '../models/card-model';

interface ActionFactory<T = never> {
  (payload?: T): Action & { payload?: T };
  type: string;
}

function createAction<T = never>(type: string) {
  const actionFactory: ActionFactory<T> = payload => (payload !== undefined ? { type, payload } : { type });
  actionFactory.type = type;
  return actionFactory;
}

export const changeGameMode = createAction<boolean>('[HEADER] Change Game Mode');
export const toggleMenu = createAction<boolean>('[MENU] Toggle Menu');

export const setActiveCategory = createAction<string>('[CATEGORY] Set Active Category');
export const setCategories = createAction<CategoryDTO[]>('[CATEGORY] Set Categories');

export const setCards = createAction<[CategoryDTO, CardModel[]]>('[GAME] Set Cards');
export const setIsGameStarted = createAction<boolean>('[GAME] Set isGameStarted');
export const addMistake = createAction<void>('[GAME] Increment Mistake');
export const addScore = createAction<boolean>('[GAME] Add boolean score');
export const addCardIndex = createAction<void>('[GAME] Increment Current Card Index');
export const resetGame = createAction<void>('[GAME] Reset Game State');

export const toggleIsLoginPopupDisplayed = createAction<void>('[MENU] Toggle Login PopUp Dispaying');

export const toggleIsAdminLogged = createAction<boolean>('[ADMIN] Toggle Is Admin Logged');
export const setAdminActiveCategory = createAction<CategoryDTO | null>('[ADMIN] Set Active Admin Category');
