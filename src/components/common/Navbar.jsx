import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to="/" className="navbar-title">
            <h1>My Reads</h1>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;
