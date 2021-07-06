import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGameMode, toggleMenu } from '../../store/actions';
import { AppState } from '../../store/reducer';
import { MenuButton } from './components/menu-button/MenuButton';
import { Menu } from './components/menu/Menu';
import { ModeSwitch } from './components/mode-switch/ModeSwitch';
import './Header.scss';

export const Header: FC = () => {
  const isGameMode = useSelector<AppState, boolean>(({ isGameMode }) => isGameMode);
  const isMenuOpen = useSelector<AppState, boolean>(({ isMenuOpen }) => isMenuOpen);
  const dispatch = useDispatch();

  return (
    <header className={`header${isGameMode ? ' game-mode' : ''}`}>
      <Menu isMenuOpen={isMenuOpen} />
      <MenuButton
        isMenuOpen={isMenuOpen}
        onClick={() => {
          dispatch(toggleMenu(!isMenuOpen));
        }}
      />
      <h2 className="heading">english for kids</h2>
      <ModeSwitch
        isGameMode={isGameMode}
        onClick={() => {
          dispatch(changeGameMode(!isGameMode));
        }}
      />
    </header>
  );
};
