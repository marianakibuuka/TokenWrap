import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">TokenWrap</div>
      <ul className="sidebar-menu">
        <li className="active">Home</li>
        
    
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;

