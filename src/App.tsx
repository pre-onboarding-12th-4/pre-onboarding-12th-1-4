import AuthContextProvider from 'context/auth/AuthContextProvider';
import TodoContextProvider from 'context/todo/TodoContextProvider';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Signin from 'pages/SignIn';
import SignUp from 'pages/Signup';
import Todo from 'pages/Todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { signLoader, todoLoader } from 'route/loader';
import GlobalStyle from 'styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/todo',
    element: (
      <AuthContextProvider>
        <TodoContextProvider>
          <Todo />
        </TodoContextProvider>
      </AuthContextProvider>
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
    element: <SignUp />,
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
