import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { AuthContext } from 'context/auth/AuthContext';
import useFormValidation from 'hooks/useFormValidation';
import { ChangeEvent, FormEvent, useContext } from 'react';
import { FormStyle } from 'styles/CommonStyle';

export default function SignUpForm() {
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
  const ctx = useContext(AuthContext);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ctx.signUp(email, password);
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

  return (
    <FormStyle onSubmit={handleSubmit}>
      {formFields.map((input, index) => (
        <Input key={index} {...input} />
      ))}
      <Button
        type='submit'
        dataTestId='signup-button'
        disabled={!isValid}
        text='회원가입'
        btnWidth=''
        btnPadding=''
      />
    </FormStyle>
  );
}
