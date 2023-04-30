import React, { useState, createContext, useContext, useEffect } from "react";
import authService from "../service/AuthService";
import { UserInterface, AuthState, AuthContextType } from "../@types";
import { EmailOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  login: async ({ email, password }: UserInterface) => {},
  logout: () => {},
  AuthError: null,
  authState: { token: null, isAuthenticated: false },
});

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      setAuthState({
        token,
        isAuthenticated: true,
      });
    }
  }, []);

  const [AuthError, setAuthError] = useState<string | null>();
  const [redirect, setRedirect] = useState<boolean>();

  const login = async ({ email, password }: UserInterface) => {
    try {
      const userDataSendLogin: UserInterface = {
        email,
        password,
      };

      const response = await authService.login(userDataSendLogin);

      const token = response.data.token;
      console.log(response);

      authService.setToken(token);
      setAuthState({
        token,
        isAuthenticated: true,
      });
      setAuthError("");
    } catch (error: any) {
      console.log(error);

      if (error.response.data.message) {
        setAuthError(error.response.data.message);
      }
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
    <AuthContext.Provider
      //@ts-ignore
      value={{ authState, login, register, logout, AuthError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
