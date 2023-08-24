import { createContext } from 'react';

export const AuthContext = createContext<{
  user: boolean;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logout: () => void;
}>({
  user: false,
  signIn: () => {},
  signUp: () => {},
  logout: () => {},
});
