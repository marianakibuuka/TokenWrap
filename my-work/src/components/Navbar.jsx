import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-user">
        {/* <span>Admin</span>
        <div className="avatar">A</div> */}
      </div>
    </div>
  );
};

export default Navbar;
