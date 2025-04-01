import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="app-main">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
