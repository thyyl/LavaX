import { createContext } from "react";

export interface User {
  user: string;
}

export const AuthContext = createContext({
  user: null,
  createUser: (data: string) => {},
  updateUser: (data: string) => {},
  removeUser: () => {},
})