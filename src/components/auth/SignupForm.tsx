import { fetchSignUp } from 'api/auth';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Form } from 'styles/SignupStyle';

const SignupForm = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchSignUp(input.email, input.password);

    setInput({ email: '', password: '' });
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <label htmlFor='email'>이메일</label>
        <input
          data-testid='email-input'
          type='email'
          name='email'
          value={input.email}
          onChange={changeHandler}
          placeholder='email'
          ref={inputRef}
        />
        <label htmlFor='password'>비밀번호</label>
        <input
          data-testid='password-input'
          type='password'
          name='password'
          value={input.password}
          onChange={changeHandler}
          placeholder='password'
        />
        <button data-testid='signup-button' type='submit'>
          회원가입
        </button>
      </Form>
    </>
  );
};
export default SignupForm;
