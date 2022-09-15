import React from 'react';
import './App.css';
import ParentContext from './context/ParentContext';
import AdminProducts from './pages/AdminProducts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <ParentContext>
        <AdminProducts />
      </ParentContext>
    </>
  );
}

export default App;
