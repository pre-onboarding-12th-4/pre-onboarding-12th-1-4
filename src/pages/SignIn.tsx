import SignInForm from 'components/auth/SignInForm';
import AuthContextProvider from 'context/auth/AuthContextProvider';

import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

export default function Signin() {
  return (
    <AuthContextProvider>
      <ContainerStyle>
        <HeaderStyle>
          <h1>Sign In</h1>
        </HeaderStyle>
        <SignInForm />
      </ContainerStyle>
    </AuthContextProvider>
  );
}
