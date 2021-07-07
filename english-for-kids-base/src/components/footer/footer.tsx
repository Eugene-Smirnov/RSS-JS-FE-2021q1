import { FC } from 'react';
import './footer.scss';

export const Footer: FC = () => {
  return (
    <footer className="footer">
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
