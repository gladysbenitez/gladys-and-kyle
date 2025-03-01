import React, { useState, useEffect } from "react";
import "./WelcomePage.css"; // Make sure to include this CSS file

const WelcomePage = () => {
  const weddingDate = new Date("May 24, 2025 18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="welcome-container">
      {/* Hero Section */}
      <div className="hero">
        <img
          src="/images/engagement/Gladys-Kyle-Aspen-Winter-Proposal-Photography-by-Jacie-Marguerite-199.jpg" 
          alt="Capri, Italy"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="welcome-heading">Gladys & Kyle</h1>
          <p className="wedding-date">May 24, 2025 | Capri, Italy</p>
        </div>
      </div>

  
        {/* Welcome Message */}
        <div className="welcome-content">
          <h2 className="welcome-subheading">Welcome to Our Wedding Website</h2>
          <p className="welcome-text">
            We’re so excited to celebrate with you in beautiful **Capri, Italy**!  
            Explore this site for all the details about our special day,  
            from travel tips to event schedules.  
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <h3 className="countdown-title">Countdown to Our Big Day</h3>
          <div className="countdown-timer">
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WelcomePage;
