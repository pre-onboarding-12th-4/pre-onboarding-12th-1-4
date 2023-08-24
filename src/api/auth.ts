import instance from './index';

const fetchSignIn = async (email: string, password: string): Promise<{ access_token: string }> => {
  const response = await instance.post('/auth/signin', {
    email: email,
    password: password,
  });
  return response.data;
};

const fetchSignUp = async (email: string, password: string): Promise<any> => {
  try {
    const response = await instance.post('/auth/signup', {
      email: email,
      password: password,
    });
    if (response.status === 201) {
      alert('회원가입이 완료되었습니다.');
      window.location.href = '/signin';
    }
  } catch (err) {
    alert('회원가입에 실패했습니다.');
  }
};

export { fetchSignIn, fetchSignUp };
