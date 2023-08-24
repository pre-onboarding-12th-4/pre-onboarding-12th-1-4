import instance from './index';

const fetchSignIn = async (email: string, password: string): Promise<{ access_token: string }> => {
  const response = await instance.post('/auth/signin', {
    email: email,
    password: password,
  });
  return response.data;
};

const fetchSignUp = async (email: string, password: string): Promise<boolean> => {
  const response = await instance.post('/auth/signup', {
    email: email,
    password: password,
  });
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
};

export { fetchSignIn, fetchSignUp };
