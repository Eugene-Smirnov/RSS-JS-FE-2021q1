import { CategoryServiceFactory } from './factories/category-service-factory';
import { AuthServiceFactory } from './factories/auth-service-factory';
import { CategoryService } from './services/category-service';
import { AuthService } from './services/auth-service';
import { CardService } from './services/card-service';
import { CardServiceFactory } from './factories/card-service-factory';
import { FilePathResolver } from './services/file-path-resolver';

export interface AppContext {
  categoryService: CategoryService;
  authService: AuthService;
  cardService: CardService;
}

const createContext = () => {
  const filePathResolver = new FilePathResolver();
  const authService = AuthServiceFactory.create();
  const cardService = CardServiceFactory.create(filePathResolver);
  const categoryService = CategoryServiceFactory.create(cardService, filePathResolver);

  return {
    authService,
    cardService,
    categoryService,
  };
};

export const context: AppContext = createContext();
