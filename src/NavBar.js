import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import './fonts.css'

const NavBar = () => {
  return (
    <nav>
      <img src="/images/Piazzteta (3).png" alt="Wedding Crest" className="wedding-crest" />
      <div className="nav-links">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Welcome</NavLink></li>
          <li><NavLink exact to="/events" activeClassName="active">Events</NavLink></li>
          <li><NavLink to="/travel" activeClassName="active">Travel</NavLink></li>
          <li><NavLink exact to="/hotels" activeClassName="active">Hotel</NavLink></li>
          <li><NavLink exact to="/explore" activeClassName="active">Explore</NavLink></li>
          <li><NavLink to="/rsvp" activeClassName="active">Rsvp</NavLink></li>
          <li><NavLink to="/registry" activeClassName="active">Registry</NavLink></li>
          <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
