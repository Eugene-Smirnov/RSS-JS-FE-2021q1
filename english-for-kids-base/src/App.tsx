import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AdminApp } from './AdminApp';
import { BaseApp } from './BaseApp';
import { loadCategories } from './store/thunks';

import './styles.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminApp} />
        <Route path="/" component={BaseApp} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};
