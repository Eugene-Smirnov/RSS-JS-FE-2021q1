import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CardModel } from '../../../models/card-model';
import { CategoryModel } from '../../../models/category-model';
import { cardsService } from '../../../services/cards-service';
import { AppState } from '../../../store/reducer';
import { AdminCard } from '../admin-card/admin-card';
import './admin-category-page.scss';

export const AdminCategoryPage: FC = () => {
  const history = useHistory();
  const categoryName = useParams<{ name: string }>().name;
  const category = useSelector<AppState, CategoryModel | undefined>(({ categories }) => categories.find(cat => cat.name === categoryName));
  const [cards, setCards] = useState<CardModel[]>([]);

  useEffect(() => {
    cardsService.getCards(categoryName).then(cards => {
      setCards(cards);
    });
  });

  const redirectToAdminMain = useCallback(() => {
    history.push('/admin');
  }, [history]);

  return (
    <main id="main" className="admin-main">
      <div className="admin-category-top-bar">
        <button className="admin-category-top-bar__button" onClick={redirectToAdminMain}>
          {'< back'}
        </button>
        <h2 className="admin-category-top-bar__heading">{category?.title}</h2>
      </div>
      <div className="admin-categories__wrapper">
        {cards.map(card => {
          return <AdminCard key={card.name} card={card} />;
        })}
      </div>
    </main>
  );
};
