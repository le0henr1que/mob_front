import { UserInterface } from "../../@types";
import api from "../../utils/api";

const authService = {
  async login({ email, password }: UserInterface) {
    try {
      alert(email);
      const response = await api.post("/login", { email, password });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async register({ name, email, password }: UserInterface) {
    try {
      const response = await api.post("/register", { name, email, password });
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
