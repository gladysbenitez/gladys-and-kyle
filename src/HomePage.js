import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [muted, setMuted] = useState(true); // Controls the audio muting

  return (
    <div className='main-content'>
      <video className="home-background-media" autoPlay loop muted playsInline>
        <source src="https://www.sugokuii-events.com/worldofsugo-img/seawave.mp4" type="video/mp4" />
      </video>
      <div className="center-container">
        <h1 className='header-text'>Coming Soon...</h1> 
        <h1 className='header-text'> Capri, Italy </h1>
        <h1 className='header-text'>2025</h1>
        <audio autoPlay loop muted={!muted}>
          <source src="https://www.sugokuii-events.com/media/abbronzatissima-sugoworld.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default HomePage;
