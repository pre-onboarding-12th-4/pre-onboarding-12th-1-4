import { AuthContext } from './AuthContext';
import { fetchSignIn, fetchSignUp } from 'api/auth';
import { ReactNode, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(false);

  const navigate = useNavigate();

  const signIn = useCallback(
    async (email: string, password: string) => {
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
    },
    [navigate],
  );

  const signUp = useCallback(
    async (email: string, password: string) => {
      try {
        await fetchSignUp(email, password);
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
      } catch (error) {
        alert('회원가입에 실패했습니다.');
      }
    },
    [navigate],
  );

  const logout = () => {
    localStorage.removeItem('token');
    setUser(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout }}>
      {children};
    </AuthContext.Provider>
  );
}
