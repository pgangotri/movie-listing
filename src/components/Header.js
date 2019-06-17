import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="container-fluid header">
        <div className="container">
          <Link className="navbar-link" to="/">Home</Link>
        </div>
      </nav>
    )
  }
}

export default Header;