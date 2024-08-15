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
            <li><NavLink exact to="/" activeClassName="active" onClick={closeMenu}>Welcome</NavLink></li>
            <li><NavLink exact to="/events" activeClassName="active" onClick={closeMenu}>Events</NavLink></li>
            <li><NavLink to="/travel" activeClassName="active" onClick={closeMenu}>Travel</NavLink></li>
            <li><NavLink exact to="/hotels" activeClassName="active" onClick={closeMenu}>Hotel</NavLink></li>
            <li><NavLink exact to="/explore" activeClassName="active" onClick={closeMenu}>Explore</NavLink></li>
            <li><NavLink to="/rsvp" activeClassName="active" onClick={closeMenu}>Rsvp</NavLink></li>
            <li><NavLink to="/registry" activeClassName="active" onClick={closeMenu}>Registry</NavLink></li>
            <li><NavLink to="/gallery" activeClassName="active" onClick={closeMenu}>Gallery</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
