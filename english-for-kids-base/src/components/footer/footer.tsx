import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducer';
import './footer.scss';

export const Footer: FC = () => {
  const isMenuOpen = useSelector<AppState, boolean>(({ isMenuOpen }) => isMenuOpen);

  return (
    <footer id="footer" className={`footer${isMenuOpen ? ' scroll-y-none' : ''}`}>
      <div className="footer__content">
        <a className="github" href="https://github.com/Eugene-Smirnov" style={{ backgroundImage: 'url(../icons/github.svg)' }}>
          Eugene-Smirnov
        </a>
        <a className="rss" href="https://rs.school/js/" style={{ backgroundImage: 'url(../icons/rss.svg)' }}>
          <span className="rss-year">{'`'}21</span>
        </a>
      </div>
    </footer>
  );
};
