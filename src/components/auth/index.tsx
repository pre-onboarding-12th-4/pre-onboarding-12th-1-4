import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { AuthContext } from 'context/auth/AuthContext';
import useFormValidation from 'hooks/useFormValidation';
import { ChangeEvent, FormEvent, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FormStyle } from 'styles/CommonStyle';

export default function AuthForm() {
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
  const location = useLocation();
  const isPath = location.pathname === '/signin';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isPath ? authCtx.signIn(email, password) : authCtx.signUp(email, password);
    handleEmailChange('');
    handlePasswordChange('');
  };

  const formFields = [
    {
      name: 'email',
      value: email,
      onChange: (e: ChangeEvent<HTMLInputElement>) => handleEmailChange(e.target.value),
      type: 'text',
      inputId: 'email',
      labelText: 'email',
      warning: emailValid,
      placeholder: '이메일을 입력해주세요.',
      dataTestId: 'email-input',
    },
    {
      name: 'password',
      value: password,
      onChange: (e: ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value),
      type: 'password',
      inputId: 'password',
      labelText: 'password',
      warning: passwordValid,
      placeholder: '비밀번호를 입력해주세요.',
      dataTestId: 'password-input',
    },
  ];

  const buttonProps = {
    disabled: !isValid,
    btnWidth: '',
    btnPadding: '',
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      {formFields.map((input, index) => (
        <Input key={index} {...input} />
      ))}
      {isPath ? (
        <Button {...buttonProps} dataTestId='signin-button' text='로그인' />
      ) : (
        <Button {...buttonProps} dataTestId='signup-button' text='회원가입' />
      )}
    </FormStyle>
  );
}
