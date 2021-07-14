import { FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authService } from '../../services/auth-service';
import { toggleIsAdminLogged, toggleIsLoginPopupDisplayed } from '../../store/actions';
import './login-pop-up.scss';

export const LoginPopUp: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isErrorCaught, setIsErrorCaught] = useState(false);

  const outClick = (e: SyntheticEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement;
    if (target.closest('.login-form__wrapper')) return;
    const popUp = document.getElementById('popup_place');
    if (!popUp) return;
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
    main?.classList.remove('scroll-y-none');
    footer?.classList.add('scroll-y-none');

    dispatch(toggleIsLoginPopupDisplayed());
  };

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const onLoginChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  }, []);
  const onPasswordChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback(async () => {
    const response = await authService.login(login, password);
    if (!response?.token) {
      setIsErrorCaught(true);
      return;
    }
    dispatch(toggleIsAdminLogged(true));
    setIsErrorCaught(false);
    dispatch(toggleIsLoginPopupDisplayed());
    history.push('/admin');
  }, [login, password, history, dispatch]);

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
        <input
          className="login-form__input"
          type="text"
          name="login"
          id="input-login"
          placeholder="Login"
          value={login}
          onChange={onLoginChange}
        />
        <input
          className="login-form__input"
          type="password"
          name="password"
          id="input-password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        {isErrorCaught ? <p className="login-form__error-message">Incorrect login or password</p> : ''}
        <button className="login-form__button" onClick={onSubmit}>
          log in
        </button>
      </div>
    </div>
  );
};
