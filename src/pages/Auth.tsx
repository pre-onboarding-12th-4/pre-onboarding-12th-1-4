import AuthForm from 'components/auth';
import AuthContextProvider from 'context/auth/AuthContextProvider';
import { useLocation } from 'react-router-dom';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

export default function Auth() {
  const location = useLocation();
  const isPath = location.pathname === '/signin';

  return (
    <AuthContextProvider>
      <ContainerStyle>
        <HeaderStyle>{isPath ? <h1>Sign In</h1> : <h1>Sign Up</h1>}</HeaderStyle>
        <AuthForm />
      </ContainerStyle>
    </AuthContextProvider>
  );
}
