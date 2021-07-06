import { Action } from 'redux';
import { CategoryDTO } from '../dto/category';

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
