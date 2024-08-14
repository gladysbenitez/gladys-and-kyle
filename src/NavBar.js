import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';
import './fonts.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); // Close the menu if resizing to desktop
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <img
          src="/images/hamburger-icon.png" // Make sure to add a white hamburger icon in your images folder
          alt="Menu"
          className={`hamburger-icon ${isMobile ? 'visible' : 'hidden'}`}
          onClick={toggleMenu}
        />
        <div className={`nav-links ${isMenuOpen && isMobile ? 'open' : ''}`}>
          <ul>
            <li><NavLink exact to="/" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Welcome</NavLink></li>
            <li><NavLink exact to="/events" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Events</NavLink></li>
            <li><NavLink to="/travel" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Travel</NavLink></li>
            <li><NavLink exact to="/hotels" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Hotel</NavLink></li>
            <li><NavLink exact to="/explore" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Explore</NavLink></li>
            <li><NavLink to="/rsvp" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Rsvp</NavLink></li>
            <li><NavLink to="/registry" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Registry</NavLink></li>
            <li><NavLink to="/gallery" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
