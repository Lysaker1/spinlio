import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          spinlio
        </Link>
        <nav className="nav-buttons">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/configurator">Design</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;