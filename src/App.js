import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import EcommerceShop from './components/MainContent/EcommerceShop/EcommerceShop';

function App() {
  const location = useLocation();
  const isEcommercePage = location.pathname === '/ellies-market';

  return (
    <div className="App">
      <Sidebar currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/ellies-market" element={<EcommerceShop />} />
      </Routes>
    </div>
  );
}

export default App;
