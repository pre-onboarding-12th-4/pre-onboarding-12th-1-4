import SignupForm from 'components/auth/SignupForm';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const Signup = () => {
  return (
    <ContainerStyle>
      <HeaderStyle>
        <h1>회원가입</h1>
      </HeaderStyle>
      <SignupForm />
    </ContainerStyle>
  );
};
export default Signup;
