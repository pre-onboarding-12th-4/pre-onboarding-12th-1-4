import Layout from 'components/common/Layout';
import Signin from 'pages/SignIn';
import Signup from 'pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<h1>Home </h1>} />
          <Route path='/todo' element={<h1>todo list </h1>} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
