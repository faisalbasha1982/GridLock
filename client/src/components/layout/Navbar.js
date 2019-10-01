import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
          <a href="index.html"><i className="fas fa-code"></i> GridLock System</a>
        </h1>
        <ul>
          <li><a href="profiles.html">Users</a></li>
          <li><a href="register.html">Register</a></li>
          <li><a href="login.html">Login</a></li>
        </ul>
      </nav>
  
    );
}

export default Navbar;