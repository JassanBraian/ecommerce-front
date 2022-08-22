import './App.css';
import ParentContext from './context/ParentContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/layout/Layout';
import authToken from './config/token';
import Home from './pages/Home';
import SalePage from './pages/SalePage';

const token = localStorage.getItem('token');

function App() {

  if (token) {
    authToken(token)
  }

  return (
    <>
      <ParentContext>
        <Layout>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sale' element={<SalePage />} />
            </Routes>
          </Router>
        </Layout>
      </ParentContext>

    </>
  );
}

export default App;
