import React from 'react';
import './HotelsPage.css';

function HotelsPage() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="hotels-page">
      {/* Top Section with Fish Images */}
      <div className="hotels-intro">
        <h1 className="where-to-stay-title">WHERE TO STAY</h1>
        <p className="intro-text">Welcome to our curated list of accommodations for your stay in Anacapri. We've selected a range of hotels to suit different preferences and budgets, ensuring a comfortable and memorable experience for all our guests.</p>
        
        <div className="fish-selection">
          <img src="images/fish.png" alt="Luxury Escapes" className="fish-image" onClick={() => scrollToSection('luxury-escapes')} />
          <img src="images/fish.png" alt="Charming Retreats" className="fish-image" onClick={() => scrollToSection('charming-retreats')} />
          <img src="images/flippedfish.png" alt="Cozy Comforts" className="fish-image" onClick={() => scrollToSection('cozy-comforts')} />
        </div>
        
        <div className="hotel-categories">
          <div className="hotel-category" onClick={() => scrollToSection('luxury-escapes')}>
            <h2>Luxury Escapes</h2>
            <p>For those seeking the ultimate in comfort and indulgence, these hotels offer exceptional service, breathtaking views, and top-notch amenities. All while staying close to all our events.</p>
          </div>
          <div className="hotel-category" onClick={() => scrollToSection('charming-retreats')}>
            <h2>Charming Retreats</h2>
            <p>These accommodations provide a blend of comfort and local island charm, perfect for guests looking to enjoy a relaxed yet refined stay. Prime location for festivities as well.</p>
          </div>
          <div className="hotel-category" onClick={() => scrollToSection('cozy-comforts')}>
            <h2>Cozy Comforts</h2>
            <p>Offering great value, these hotels ensure a pleasant stay with all the necessary amenities for a delightful experience as well as optimal location for all weekend festivities.</p>
          </div>
        </div>
      </div>

      {/* Hotel Sections */}
      <div className="hotel-sections">
        <div className="hotel-section" id="luxury-escapes">
          <h3>Luxury Escapes</h3>
          <div className="hotel-entry">
            <img src="images/jumeriah-capri-palace.jpg" alt="Jumeriah Capri Palace" />
            <div className="hotel-details">
              <h4>Jumeriah Capri Palace</h4>
              <p>Description and details about the hotel...</p>
            </div>
          </div>
        </div>

        <div className="hotel-section" id="charming-retreats">
          <h3>Charming Retreats</h3>
          <div className="hotel-entry">
            <img src="images/casa-mariantonia.jpg" alt="Casa Mariantonia" />
            <div className="hotel-details">
              <h4>Casa Mariantonia</h4>
              <p>Description and details about the hotel...</p>
            </div>
          </div>
        </div>

        <div className="hotel-section" id="cozy-comforts">
          <h3>Cozy Comforts</h3>
          <div className="hotel-entry">
            <img src="images/hotel-biancamaria.jpg" alt="Hotel Biancamaria" />
            <div className="hotel-details">
              <h4>Hotel Biancamaria</h4>
              <p>Description and details about the hotel...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;
