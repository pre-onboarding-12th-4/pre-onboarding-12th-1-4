import TodoContextProvider from 'context/todo/TodoContextProvider';
import Home from 'pages/Home';
import Signin from 'pages/SignIn';
import Signup from 'pages/Signup';
import Todo from 'pages/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/todo'
          element={
            <TodoContextProvider>
              <Todo />
            </TodoContextProvider>
          }
        />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
