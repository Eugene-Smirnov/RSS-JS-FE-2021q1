import { FC } from 'react';
import './MenuButton.scss';

type MenuButtonProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

export const MenuButton: FC<MenuButtonProps> = ({ isMenuOpen, onClick }: MenuButtonProps) => {
  return (
    <button className={`menu-button ${isMenuOpen ? 'menu-button__active' : ''}`} onClick={onClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};
