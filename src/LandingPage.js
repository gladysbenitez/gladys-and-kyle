/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);  // Controls the audio muting

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEnter = useCallback(() => {
    // Normalize the password by converting to lowercase and removing spaces
    const normalizedPassword = password.toLowerCase().replace(/\s+/g, '');
    const correctPassword = 'thatsamore'; // Normalize your correct password the same way
  
    if (normalizedPassword === correctPassword) {
      onEnter();
    } else {
      alert('Incorrect password!');
    }
  }, [password, onEnter]);

  useEffect(() => {
    // Trigger the animation after a delay or when the component mounts
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); // Delay in milliseconds
    return () => clearTimeout(timer);
  }, [muted]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleEnter();
      }
    };

    // Add event listener for keydown
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleEnter]);

  return (
    <div className="landing-page-background">
      <audio autoPlay loop muted={!muted}>
        <source src="https://www.sugokuii-events.com/media/roberta-capri.mp3" type="audio/mpeg" />
      </audio>
      <video className='background-media' playsInline disablePictureInPicture autoPlay loop muted={true}>
        <source src="https://www.sugokuii-events.com/media/demo.mov" type="video/mp4" />
      </video>
      <img className='background-media' src='/images/abc.jpg' alt="Background" />
      <div className="content-container">
        <img src="/images/Piazzteta (3).png" alt="Wedding Crest" className="top-image" />
        <div className="text-container">
          <h1 className={`landing-page-title ${visible ? 'visible' : ''}`}>CAPRI, ITALY</h1>
          <h1 className={`landing-page-subtitle ${visible ? 'visible' : ''}`}>2025</h1>
        </div>
        <div className='login-form'>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="PASSWORD"
          />
          <button onClick={handleEnter}>ENTER</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
