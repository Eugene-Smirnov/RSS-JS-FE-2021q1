import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AdminHeader } from './components/admin-panel/admin-header/admin-header';
import { AdminMainPage } from './components/admin-panel/admin-main-page/admin-main-page';
import { loadCategories } from './store/thunks';

export const AdminApp: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <>
      <AdminHeader />
      <Switch>
        <Route exact path="/admin" component={AdminMainPage} />
        {/* <Route exact path="/admin/category/:name" component={AdminCategoryPage} /> */}
        <Redirect from="/admin/*" to="/admin" />
      </Switch>
    </>
  );
};
