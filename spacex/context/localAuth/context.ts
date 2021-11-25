import { createContext } from "react";

export interface User {
  user: string;
}

export const LocalAuthContext = createContext({
  user: null,
  createUser: (data: string) => {},
  removeUser: () => {},
})