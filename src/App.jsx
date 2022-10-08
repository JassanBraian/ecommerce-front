import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentContext from './context/ParentContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/layout/Layout';
import authToken from './config/token';
import Home from './pages/Home';
import SaleHistoryPage from './pages/SaleHistoryPage';
import SaleNewPage from './pages/SaleNewPage';
import AdminProducts from './pages/AdminProducts';
import AdminUsers from './pages/AdminUsers';

const token = localStorage.getItem('token');

function App() {

  if (token) {
    authToken(token)
  }

  return (
    <>
      <ParentContext>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sale-history' element={<SaleHistoryPage />} />
              <Route path='/sale-new' element={<SaleNewPage />} />
              <Route path='/admin-products' element={<AdminProducts />} />
              <Route path='/admin-users' element={<AdminUsers />} />
            </Routes>
          </Layout>
        </Router>
      </ParentContext>
    </>
  );
}

export default App;
