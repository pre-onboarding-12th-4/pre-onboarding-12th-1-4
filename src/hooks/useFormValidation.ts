import { useCallback, useState } from 'react';

type Props = {
  initialEmail: string;
  initialPassword: string;
};

export default function useFormValidation({ initialEmail, initialPassword }: Props) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;

  const emailValidate = useCallback(() => {
    if (email.length === 0) return '';
    return !isEmailValid ? '유효한 이메일을 입력해주세요.' : '';
  }, [email]);

  const passwordValidate = useCallback(() => {
    if (password.length === 0) return '';
    return !isPasswordValid ? '비밀번호는 8자 이상이여야 합니다.' : '';
  }, [password]);

  const validate = useCallback(() => {
    return isEmailValid && isPasswordValid;
  }, [email, password]);

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  return {
    email,
    password,
    isValid: validate(),
    emailValid: emailValidate(),
    passwordValid: passwordValidate(),
    handleEmailChange,
    handlePasswordChange,
  };
}
