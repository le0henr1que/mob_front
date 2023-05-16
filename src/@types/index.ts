

import { Dispatch, SetStateAction } from "react";
export interface Comments {
    author:string;
    title:string;
    rating: 1 | 2 |  3 |  4 |  5;
    comment:string;
    createdAt:string;
    variant?:string
}
export interface LocalCard {
    author:string;
    rating: 1 | 2 |  3 |  4 |  5;
}


export interface MenuItemsHeader {
    label: string;
    href: string;
  }

export interface TypeStars{
    size: "small" | "default" | "inherit" | "large" | "medium";
    variant:string;
    rating: 1 | 2 |  3 |  4 |  5;
    starType: "view" | "select";
    onReturnRating?: any;
}

export interface LoadSkeleton {
    size: "small" | "large" | "medium";
    type: "circle" | "line"
}

export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
  }
  

export interface UserInterface {
    id?:string;
    name?:string;
    email:string;
    password?:string;
    accepted_terms?:boolean
}

export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  login: ({email, password}:UserInterface) => Promise<void>;
  register: ({email, password, name, accepted_terms}:UserInterface) => Promise<any>;
  loginGoogle:(access_token:string) => Promise<void>;
  logout: () => void;
  AuthError:string | null
  authState:any
}

