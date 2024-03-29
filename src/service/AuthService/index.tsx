import { UserInterface } from "../../@types";
import api from "../../utils/api";

const authService = {
  async login({ email, password }: UserInterface) {
    try {
      const response = await api.post("/login", { email, password });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async loginGoogle(access_token: string) {
    try {
      const response = await api.post("/login/google", { access_token });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async register({ name, email, password, accepted_terms }: UserInterface) {
    try {
      const response = await api.post("/user", {
        name,
        email,
        password,
        accepted_terms,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async logout(token: string) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await api.post("/logout", {}, { headers });

      return response;
    } catch (error) {
      throw error;
    }
  },

  setToken(token: string) {
    localStorage.setItem("token", token);
  },

  getToken() {
    return localStorage.getItem("token");
  },

  clearToken() {
    localStorage.removeItem("token");
  },
};

export default authService;
