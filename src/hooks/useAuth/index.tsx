// import { loginSuccess, logout } from '../../store/actions/authActions';

import api from "../../service/api";

export const useAuth = () => {
  // const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state: any) => state.auth);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.post("/login", { email, password });
      console.log(response);
      const { token } = response.data;
      // dispatch(loginSuccess(token));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    // dispatch(logout());
  };

  return { handleLogin, handleLogout };
};
