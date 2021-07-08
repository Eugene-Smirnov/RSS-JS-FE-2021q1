import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardModel } from '../../models/card-model';
import { cardsService } from '../../services/cards-service';
import { setActiveCategory } from '../../store/actions';
import { AppState } from '../../store/reducer';
import { Card } from '../card/card';
import { ScoreBar } from '../score-bar/ScoreBar';
import './CategoryPage.scss';

export const CategoryPage: FC = () => {
  const dispatch = useDispatch();
  const isGameMode = useSelector<AppState, boolean>(({ isGameMode }) => isGameMode);
  const categoryName = useParams<{ name: string }>().name;
  const [cards, setCards] = useState<CardModel[]>([]);

  useEffect(() => {
    cardsService.getCards(categoryName).then(cards => {
      setCards(cards);
      dispatch(setActiveCategory(categoryName));
    });
  });

  return (
    <main className={`main${isGameMode ? ' game-mode' : ''}`}>
      <ScoreBar isGameMode={isGameMode} />
      <div className="categories__wrapper">
        {cards.map(card => {
          return <Card key={card.name} card={card} />;
        })}
      </div>
    </main>
  );
};
