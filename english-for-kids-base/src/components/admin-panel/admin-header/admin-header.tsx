import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authService } from '../../../services/auth-service';
import { toggleIsAdminLogged } from '../../../store/actions';
import './admin-header.scss';

export const AdminHeader: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogOut = useCallback(() => {
    authService.logout();
    dispatch(toggleIsAdminLogged(false));
    history.push('/');
  }, [history, dispatch]);
  return (
    <header className="admin-header">
      <h2 className="heading">admin panel</h2>
      <button className="admin-header__button" onClick={onLogOut}>
        log out
      </button>
    </header>
  );
};
