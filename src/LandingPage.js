import React, { useEffect,useState } from 'react';
import './LandingPage.css'

const LandingPage = ({ onEnter }) => {
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true); 
 

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

  useEffect(() => {
    // Trigger the animation after a delay or when the component mounts
    const timer = setTimeout(() => {
      setVisible(true);
      setMuted(!muted);
    }, 500); // Delay in milliseconds

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="landing-page-background">
        <video autoPlay="autoplay" loop="loop" muted className="video-content">
        <source src="https://www.sugokuii-events.com/media/demo.mov" type="video/mp4" />
        </video> 
        <img src="/images/Piazzteta (3).png" alt="Descriptive Alt Text" className="top-image"/>
        <audio autoPlay loop muted={muted}>
        <source src="https://www.sugokuii-events.com/media/roberta-capri.mp3" type="audio/mpeg" />
      </audio>
        <div className="login-container">
        {/* <h1 className='landing-page-title'>Gladys and Kyle</h1> */}
        <h1 className={`landing-page-subtitle ${visible ? 'visible' : ''}`}
        >Capri, Italy, 2025</h1>
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