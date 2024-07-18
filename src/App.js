import React, { useState } from 'react';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import RSVPPage from './RSVPPage';
import EngagementGalleryPage from './EngagementGalleryPage';
import ItineraryPage from './ItineraryPage';
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
              <Route path="/rsvp" element={<RSVPPage />} />
              <Route path="/engagement-gallery" element={<EngagementGalleryPage />} />
              <Route path="/itinerary" element={<ItineraryPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
