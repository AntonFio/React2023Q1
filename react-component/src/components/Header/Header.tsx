import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? 'active-link' : '';

  return (
    <div className="Header">
      <nav>
        <ul className="Header-ul">
          <li>
            <NavLink to="/" className={setActive} style={{ textDecoration: 'none' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={setActive} style={{ textDecoration: 'none' }}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" className={setActive} style={{ textDecoration: 'none' }}>
              Test
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
