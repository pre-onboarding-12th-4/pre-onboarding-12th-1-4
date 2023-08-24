import { AuthContext } from './AuthContext';
import { fetchSignIn, fetchSignUp } from 'api/auth';
import { ReactNode, useCallback, useState } from 'react';

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(false);
  const signIn = useCallback(async (email: string, password: string) => {
    const res = await fetchSignIn(email, password);
    if (res) {
      localStorage.setItem('token', res.access_token);
      setUser(true);
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    await fetchSignUp(email, password);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout }}>
      {children};
    </AuthContext.Provider>
  );
}
