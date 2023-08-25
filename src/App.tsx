import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Signin from 'pages/SignIn';
import Signup from 'pages/Signup';
import Todo from 'pages/Todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { signLoader, todoLoader } from 'routes/loader';
import GlobalStyle from 'styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/todo',
    element: <Todo />,
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
