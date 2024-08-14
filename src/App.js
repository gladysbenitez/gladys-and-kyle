import React, { useState } from 'react';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import RSVPPage from './RSVPPage';
import GalleryPage from './GalleryPage';
import EventsPage from './EventsPage';
import TravelPage from './TravelPage';
import HotelsPage from './HotelsPage';
import RegistryPage from './Registry';
import ExplorePage from './Explore';
import NavBar from './NavBar'; // Your NavBar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './fonts.css'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isComingSoon, setIsComingSoon] = useState(true);
  const handleAuthentication = () => {
    setIsAuthenticated(true);
    // setIsComingSoon(false)
  };

  return (
    <Router>
      <div>
        {!isAuthenticated ? (
          <LandingPage onEnter={handleAuthentication} />
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/rsvp" element={<RSVPPage />} />
              <Route path="/registry" element={<RegistryPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
