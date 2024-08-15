import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        {/* Wedding Crest */}
        <img
          src="/images/Piazzteta (3).png"
          alt="Wedding Crest"
          className="wedding-crest"
          onClick={closeMenu}
        />

        {/* Hamburger Icon */}
        <MenuIcon
          className="hamburger-icon"
          onClick={toggleMenu}
          style={{ color: 'white', fontSize: '30px', cursor: 'pointer' }}
        />

        {/* Overlay */}
        <div
          className={`overlay ${isMenuOpen ? 'visible' : ''}`}
          onClick={closeMenu}
        ></div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink end to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Welcome</NavLink></li>
            <li><NavLink end to="/events" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Events</NavLink></li>
            <li><NavLink end to="/travel" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Travel</NavLink></li>
            <li><NavLink end to="/hotels" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Hotel</NavLink></li>
            <li><NavLink end to="/explore" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Explore</NavLink></li>
            <li><NavLink end to="/rsvp" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Rsvp</NavLink></li>
            <li><NavLink end to="/registry" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Registry</NavLink></li>
            <li><NavLink end to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>Gallery</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
