import { fetchSignIn } from 'api/auth';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import useFormValidation from 'hooks/useFormValidation';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const {
    email,
    password,
    isValid,
    emailValid,
    passwordValid,
    handleEmailChange,
    handlePasswordChange,
  } = useFormValidation({
    initialEmail: '',
    initialPassword: '',
  });

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    const res = await fetchSignIn(email, password);

    if (res.access_token) {
      // contextAPI(res.access_token)
      navigate('/todo')
    } else {
      // 사용자 정보 없음 알림
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name='email'
        value={email}
        onChange={e => handleEmailChange(e.target.value)}
        type='text'
        inputId='email'
        labelText='email'
        warning={emailValid}
        placeholder='이메일을 입력해주세요.'
        dataTestId='email-input'
      />
      <Input
        name='password'
        value={password}
        onChange={e => handlePasswordChange(e.target.value)}
        type='password'
        inputId='password'
        labelText='password'
        warning={passwordValid}
        placeholder='비밀번호를 입력해주세요.'
        dataTestId='password-input'
      />
      <Button
        type='submit'
        dataTestId='signin-button'
        disabled={!isValid}
        text='로그인'
        btnWidth=''
        btnPadding=''
      />
    </form>
  );
}
