// type Props = {};
import SignInForm from 'components/auth/SignInForm';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

// input을 state로 관리한다.
// validate하는 hooks를 생성한다. (확인해서 warning test를 반환한다.)

export default function Signin() {
  return (
    <ContainerStyle>
      <HeaderStyle>
        <h1>Sign In</h1>
      </HeaderStyle>
      <SignInForm />
    </ContainerStyle>
  );
}
