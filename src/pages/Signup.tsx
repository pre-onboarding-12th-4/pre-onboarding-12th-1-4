import SignUpForm from 'components/auth/SignupForm';
import AuthContextProvider from 'context/auth/AuthContextProvider';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const SignUp = () => {
  return (
    <AuthContextProvider>
      <ContainerStyle>
        <HeaderStyle>
          <h1>Sign Up</h1>
        </HeaderStyle>
        <SignUpForm />
      </ContainerStyle>
    </AuthContextProvider>
  );
};
export default SignUp;
