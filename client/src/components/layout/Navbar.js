import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
            <Link to="/">
                <i className="fas fa-code"></i> GridLock System
            </Link>
        </h1>
        <ul>
          <li><a href="!#">Users</a></li>
          <li><Link to="/">Register</Link></li>
          <li><Link to="/">>Login</Link></li>
        </ul>
      </nav>  
    );
}

export default Navbar;