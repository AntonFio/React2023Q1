import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <nav>
        <ul className="Header-ul">
          <li>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" style={{ textDecoration: 'none' }}>
              Test
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
