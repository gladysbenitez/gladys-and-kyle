import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Events</NavLink></li>
          <li><NavLink to="/travel" activeClassName="active">Travel</NavLink></li>
          <li><NavLink to="/rsvp" activeClassName="active">RSVP</NavLink></li>
          <li><NavLink to="/registry" activeClassName="active">Registry</NavLink></li>
          <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
        </ul>
      </div>
      <img src="/images/Piazzteta (3).png" alt="Wedding Crest" className="wedding-crest" />
    </nav>
  );
};

export default NavBar;
