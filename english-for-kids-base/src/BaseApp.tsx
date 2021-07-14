import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { CategoryPage } from './components/category-page/CategoryPage';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/Header';
import { MainPage } from './components/main-page/MainPage';
import { loadCategories } from './store/thunks';

export const BaseApp: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/category/:name" component={CategoryPage} />
      </Switch>
      <Footer />
    </>
  );
};
