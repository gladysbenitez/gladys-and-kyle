import React, { useState } from 'react';
import './LandingPage.css'

const LandingPage = ({ onEnter }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEnter = () => {
    if (password === '2025') {
      onEnter();
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="landing-page-background">
        <video autoPlay="autoplay" loop="loop" muted className="video-content">
        <source src="https://www.sugokuii-events.com/media/demo.mov" type="video/mp4" />
        </video> 

        <audio autoPlay loop muted>
        <source src="https://www.sugokuii-events.com/media/roberta-capri.mp3" type="audio/mpeg" />
        </audio>
        <div className="login-container">
        <h1 className='water-brush-regular'>Gladys and Kyle</h1>
        <h1 className='water-brush-semi'>----Capri,Italy---</h1>
        <div className='login-form'>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
            />
            <button onClick={handleEnter}>Enter</button>
        </div>
    </div>
  </div>
);
};

export default LandingPage;