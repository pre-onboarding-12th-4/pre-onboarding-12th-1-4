import { AuthContext } from './AuthContext';
import { fetchSignIn, fetchSignUp } from 'api/auth';
import { ReactNode, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(false);

  const navigate = useNavigate();

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const res = await fetchSignIn(email, password);
      if (res && res.access_token) {
        localStorage.setItem('token', res.access_token);
        setUser(true);
        navigate('/todo');
      }
    } catch (error) {
      alert('일치하는 사용자가 없습니다.');
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
