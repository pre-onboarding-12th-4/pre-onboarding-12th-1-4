import { redirect } from 'react-router-dom';

export const signLoader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return redirect('/todo');
  }
  return null;
};

export const todoLoader = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return redirect('/signin');
  }
  return null;
};
