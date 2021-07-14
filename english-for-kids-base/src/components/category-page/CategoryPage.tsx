import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardModel } from '../../models/card-model';
import { cardsService } from '../../services/cards-service';
import { resetGame, setActiveCategory } from '../../store/actions';
import { AppState } from '../../store/reducer';
import { Card } from '../card/card';
import { LoginPopUp } from '../login-pop-up/login-pop-up';
import { renderScorePoint } from '../score-bar/score-point/score-point';
import { ScoreBar } from '../score-bar/ScoreBar';
import './CategoryPage.scss';

export const CategoryPage: FC = () => {
  const dispatch = useDispatch();
  const isGameMode = useSelector<AppState, boolean>(({ isGameMode }) => isGameMode);
  const isMenuOpen = useSelector<AppState, boolean>(({ isMenuOpen }) => isMenuOpen);
  const isLoginPopupDisplayed = useSelector<AppState, boolean>(({ isLoginPopupDisplayed }) => isLoginPopupDisplayed);
  const categoryName = useParams<{ name: string }>().name;
  const [cards, setCards] = useState<CardModel[]>([]);

  useEffect(() => {
    cardsService.getCards(categoryName).then(cards => {
      setCards(cards);
      dispatch(setActiveCategory(categoryName));
      dispatch(resetGame());
      renderScorePoint([]);
    });
  });

  return (
    <main id="main" className={`main${isGameMode ? ' game-mode' : ''}${isMenuOpen ? ' scroll-y-none' : ''}`}>
      <ScoreBar isGameMode={isGameMode} categoryName={categoryName} />
      <div className="categories__wrapper">
        {cards.map(card => {
          return <Card key={card.name} card={card} />;
        })}
      </div>
      <div id="popup_place" className="popup_place">
        {isLoginPopupDisplayed ? <LoginPopUp /> : ''}
      </div>
    </main>
  );
};
