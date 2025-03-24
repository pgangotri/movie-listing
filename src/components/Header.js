import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

const Header = () => {
  return (
    <nav className="container-fluid header">
      <div className="container">
        <Link className="navbar-link" to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Header;
