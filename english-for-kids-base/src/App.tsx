import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CategoryPage } from './components/category-page/CategoryPage';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/Header';
import { MainPage } from './components/main-page/MainPage';
import { loadCategories } from './store/thunks';

import './styles.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/category/:name" component={CategoryPage} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
