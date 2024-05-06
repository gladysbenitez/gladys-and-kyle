import React, { useState } from 'react';
import './MainContent.css';


const MainContent = () => {
    // eslint-disable-next-line no-unused-vars
  const [muted, setMuted] = useState(true);  // Controls the audio muting

  return (
    <div className='main-content'>
        <div className='backgroundvideo'>
            <video autoPlay playsinline disablePictureInPicture loop muted style={{ position: 'absolute', minWidth: '100%', minHeight: '100%', top: '0', left: '0', objectFit: 'cover', zIndex:-1 }}>
                <source src="https://www.sugokuii-events.com/worldofsugo-img/seawave.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <div className="center-container">
            <h1 className='header-text'>Coming Soon...</h1> 
            <h1 className='header-text'>- Capri, Italy -</h1>
            <h1 className='header-text'>2025</h1>
            <audio autoPlay loop muted={!muted}>
            <source src="https://www.sugokuii-events.com/media/abbronzatissima-sugoworld.mp3" type="audio/mpeg" />
            </audio>
        </div>
        </div>
    </div>
  );
};

export default MainContent;
