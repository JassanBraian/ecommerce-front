import React from 'react';
import './App.css';
import ParentContext from './context/ParentContext';
import AdminProducts from './pages/AdminProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminUsers from './pages/AdminUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ParentContext>
        <Router>
          <Routes>
            <Route path='/admin-products' element={<AdminProducts />} />
            <Route path='/admin-users' element={<AdminUsers />} />
          </Routes>
        </Router>
      </ParentContext>
    </>
  );
}

export default App;
