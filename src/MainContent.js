import React, { useState } from 'react';
import './MainContent.css';


const MainContent = () => {
    // eslint-disable-next-line no-unused-vars
  const [muted, setMuted] = useState(true);  // Controls the audio muting

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay playsinline disablePictureInPicture loop muted style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', objectFit: 'cover' }}>
        <source src="https://www.sugokuii-events.com/worldofsugo-img/seawave.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '10', color: 'white', textAlign: 'center' }}>
        <h1>Coming Soon...</h1> 
        <h1>- Capri, Italy -</h1>
        <h1>2025</h1>
        <audio autoPlay loop muted={!muted}>
          <source src="https://www.sugokuii-events.com/media/abbronzatissima-sugoworld.mp3" type="audio/mpeg" />
        </audio>

        {/* <button onClick={() => setMuted(!muted)} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          {muted ? 'Unmute' : 'Mute'}
        </button> */}
      </div>

    </div>
  );
};

export default MainContent;
