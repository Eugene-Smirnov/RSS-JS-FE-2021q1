import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppState } from '../../store/reducer';
import { LoginPopUp } from '../login-pop-up/login-pop-up';
import './redirection-page.scss';

export const RedirectionPage: FC = () => {
  const history = useHistory();
  const isGameMode = useSelector<AppState, boolean>(({ isGameMode }) => isGameMode);
  const isMenuOpen = useSelector<AppState, boolean>(({ isMenuOpen }) => isMenuOpen);
  const isLoginPopupDisplayed = useSelector<AppState, boolean>(({ isLoginPopupDisplayed }) => isLoginPopupDisplayed);

  useEffect(() => {
    setTimeout(() => history.push('/'), 4000);
  }, [history]);

  return (
    <main id="main" className={`main redirection-main${isGameMode ? ' game-mode' : ''}${isMenuOpen ? ' scroll-y-none' : ''}`}>
      <div className="redirection-message__wrapper">
        <div className="redirection-message">You have no permission to acess this page. Redirection to main...</div>
      </div>
      <div id="popup_place" className="popup_place">
        {isLoginPopupDisplayed ? <LoginPopUp /> : ''}
      </div>
    </main>
  );
};
