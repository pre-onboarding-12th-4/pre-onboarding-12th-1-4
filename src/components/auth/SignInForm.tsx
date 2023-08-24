import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { AuthContext } from 'context/auth/AuthContext';
import useFormValidation from 'hooks/useFormValidation';
import { FormEvent, useContext } from 'react';
import styled from 'styled-components';

export const FormStyle = styled.form`
  padding: 30px;
  text-align: center;
  button {
    margin-top: 15px;
  }
`;

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
  const authCtx = useContext(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authCtx.signIn(email, password);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
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
      <Button type='submit' dataTestId='signin-button' disabled={!isValid} text='로그인' />
    </FormStyle>
  );
}
