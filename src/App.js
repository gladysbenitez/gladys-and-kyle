import React, { useState } from 'react';
import LandingPage from './LandingPage';
import MainContent from './MainContent'; // Assume you have this component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };


  return (
    <div>
      {!isAuthenticated ? (
        <LandingPage onEnter={handleAuthentication} />
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default App;