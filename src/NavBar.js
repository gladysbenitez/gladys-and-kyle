import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';
import './fonts.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const navigate = useNavigate();

  const handleResize = () => {
    const mobileView = window.innerWidth <= 1024;
    setIsMobile(mobileView);
    console.log("Window resized. Is mobile:", mobileView);
    if (!mobileView) {
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

  const handleCrestClick = () => {
    if (isMobile) {
      toggleMenu(); // Toggle the menu on mobile
    } else {
      navigate('/'); // Navigate to the home page on desktop
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <img
          src="/images/Piazzteta (3).png"
          alt="Wedding Crest"
          className="wedding-crest"
          onClick={handleCrestClick}
        />

        {/* Log the current state for debugging */}
        {console.log("Is mobile:", isMobile)}
        {console.log("Is menu open:", isMenuOpen)}

        {/* Display MenuIcon on mobile, otherwise show nav links */}
        {isMobile ? (
          <MenuIcon
            className="hamburger-icon"
            onClick={toggleMenu}
            style={{ color: 'white', fontSize: '30px', cursor: 'pointer' }}
          />
        ) : null}

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
