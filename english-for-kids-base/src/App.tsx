import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AdminApp } from './AdminApp';
import { BaseApp } from './BaseApp';
import { LOCALSTORAGE_TOKEN_NAME } from './services/auth-service';
import { toggleIsAdminLogged } from './store/actions';
import { AppState } from './store/reducer';
import { loadCategories } from './store/thunks';

import './styles.scss';

export const App: FC = () => {
  const isAdminLogged = useSelector<AppState, boolean>(({ admin }) => admin.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
    if (window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)) dispatch(toggleIsAdminLogged(true));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {isAdminLogged || window.localStorage.getItem(LOCALSTORAGE_TOKEN_NAME) ? (
          <Route path="/admin" component={AdminApp} />
        ) : (
          <Redirect from="/admin" to="/redirect" />
        )}
        <Route path="/" component={BaseApp} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};
