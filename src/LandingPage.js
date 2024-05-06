import React, { useEffect,useState } from 'react';
import './LandingPage.css'

const LandingPage = ({ onEnter }) => {
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
   // eslint-disable-next-line no-unused-vars
   const [muted, setMuted] = useState(true);  // Controls the audio muting 

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
    }, 1000); // Delay in milliseconds
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="landing-page-background">
        <audio key='unmuted' autoPlay loop muted={!muted}>
        <source src="https://www.sugokuii-events.com/media/roberta-capri.mp3" type="audio/mpeg" />
      </audio>
        <video className='background-media' autoPlay loop muted={true}>
        <source src="https://www.sugokuii-events.com/media/demo.mov" type="video/mp4" />
        </video> 
        <img className='background-media' src='/images/abc.jpeg' alt="Background"></img>
        <img src="/images/Piazzteta (3).png" alt="Descriptive Alt Text" className="top-image"/>
      
        <div className="login-container">
        {/* <h1 className='landing-page-title'>Gladys and Kyle</h1> */}
        <h1 className={`landing-page-title ${visible ? 'visible' : ''}`}
        >CAPRI, ITALY</h1>
          <h1 className={`landing-page-subtitle ${visible ? 'visible' : ''}`}
        >2025</h1>
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