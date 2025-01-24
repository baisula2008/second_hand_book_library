import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li><a href="/" className="navbar-item">Home</a></li>
        <li><a href="/all-books" className="navbar-item">All Books</a></li>
        <li><a href="/my-books" className="navbar-item">My Books</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
