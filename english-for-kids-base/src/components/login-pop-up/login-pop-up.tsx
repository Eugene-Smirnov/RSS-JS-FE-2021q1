import { FC, SyntheticEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './login-pop-up.scss';

export const LoginPopUp: FC = () => {
  const outClick = (e: SyntheticEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement;
    if (target.closest('.login-form__wrapper')) return;
    const popUp = document.getElementById('popup_place');
    if (!popUp) return;
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
    main?.classList.remove('scroll-y-none');
    footer?.classList.add('scroll-y-none');

    ReactDOM.unmountComponentAtNode(popUp);
  };

  // TODO: replace without using classList

  useEffect(() => {
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
    main?.classList.add('scroll-y-none');
    footer?.classList.add('scroll-y-none');
  }, []);

  return (
    <div className="pop-up" onClick={outClick} id="pop-up-login-form">
      <div className="login-form__wrapper" id="login-form">
        <h2 className="login-form__heading">admin panel | log in</h2>
        <input className="login-form__input" type="text" name="login" id="input-login" placeholder="Login" />
        <input className="login-form__input" type="text" name="password" id="input-password" placeholder="Password" />
        <button className="login-form__button">log in</button>
      </div>
    </div>
  );
};

export const renderLoginPopUp = (): void => {
  setTimeout(() => {
    ReactDOM.render(<LoginPopUp />, document.getElementById('popup_place'));
  }, 0);
};
