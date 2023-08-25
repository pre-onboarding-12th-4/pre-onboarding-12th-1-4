import TodoContextProvider from 'context/todo/TodoContextProvider';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Signin from 'pages/SignIn';
import Signup from 'pages/SignUp';
import Todo from 'pages/Todo';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

const signLoader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return redirect('/todo');
  }
  return null;
};

const todoLoader = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return redirect('/signin');
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/todo',
    element: (
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    ),
    loader: todoLoader,
  },
  {
    path: '/signin',
    element: <Signin />,
    loader: signLoader,
  },
  {
    path: '/signup',
    element: <Signup />,
    loader: signLoader,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
