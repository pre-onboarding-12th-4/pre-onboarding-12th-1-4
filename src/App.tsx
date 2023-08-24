import Layout from 'components/common/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<h1>Home </h1>} />
          <Route path='/todo' element={<h1>todo list </h1>} />
          <Route path='/signin' element={<h1>signin </h1>} />
          <Route path='/signup' element={<h1>signup </h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;