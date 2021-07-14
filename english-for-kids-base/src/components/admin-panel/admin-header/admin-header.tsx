import { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '../../../services/auth-service';
import './admin-header.scss';

export const AdminHeader: FC = () => {
  const history = useHistory();
  const onLogOut = useCallback(() => {
    authService.logout();
    history.push('/');
  }, [history]);
  return (
    <header className="admin-header">
      <h2 className="heading">admin panel</h2>
      <button className="admin-header__button" onClick={onLogOut}>
        log out
      </button>
    </header>
  );
};
