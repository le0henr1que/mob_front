
import { useDispatch, useSelector } from 'react-redux';

// import { loginSuccess, logout } from '../../store/actions/authActions';

import api from '../../service/api';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.post('/login', { email, password });
      const { token } = response.data;
      // dispatch(loginSuccess(token));

    } catch (error) {
      alert(error)
    }
  };

  const handleLogout = () => {
    // dispatch(logout());
  };

  return { isAuthenticated, handleLogin, handleLogout };
};