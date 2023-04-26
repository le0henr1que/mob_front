import React, { useState, createContext, useContext, useEffect } from "react";
import authService from "../service/AuthService";
import { UserInterface, AuthState, AuthContextType } from "../@types";
import { EmailOutlined } from "@material-ui/icons";

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  login: async ({ email, password }: UserInterface) => {},
  logout: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Verifica se o usuário já está autenticado ao carregar a página
    const token = authService.getToken();
    if (token) {
      setAuthState({
        token,
        isAuthenticated: true,
      });
    }
  }, []);

  const [loginError, setLoginError] = useState<string | null>(null);
  const login = async ({ email, password }: UserInterface) => {
    try {
      alert(email);

      const userDataSendLogin: UserInterface = {
        email,
        password,
      };
      const response = await authService.login(userDataSendLogin);

      const token = response.data.token;
      authService.setToken(token);
      setAuthState({
        token,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error(error);
      setLoginError("Email ou senha incorretos");
    }
  };

  const register = async ({ name, email, password }: UserInterface) => {
    try {
      const userDataSendRegister: UserInterface = {
        name,
        email,
        password,
      };
      const response = await authService.register(userDataSendRegister);
      const token = response.data.token;
      authService.setToken(token);
      setAuthState({
        token,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    authService.clearToken();
    setAuthState({
      token: null,
      isAuthenticated: false,
    });
  };

  return (
    //@ts-ignore
    <AuthContext.Provider value={{ authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
