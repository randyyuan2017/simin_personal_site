import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
