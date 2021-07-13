import { CategoryServiceFactory } from './factories/category-service-factory';
import { AuthServiceFactory } from './factories/auth-service-factory';
import { CategoryService } from './services/category-service';
import { AuthService } from './services/auth-service';
import { CardService } from './services/card-service';
import { CardServiceFactory } from './factories/card-service-factory';

export interface AppContext {
  categoryService: CategoryService;
  authService: AuthService;
  cardService: CardService;
}

const createContext = () => {
  const authService = AuthServiceFactory.create();
  const cardService = CardServiceFactory.create();
  const categoryService = CategoryServiceFactory.create(cardService);

  return {
    authService,
    cardService,
    categoryService,
  };
};

export const context: AppContext = createContext();
