import React from 'react';

function HotelsPage (){
const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <div className="hotels-section">
        <div className="hotels-nav">
          <img src="images/fish-luxury-escapes.png" alt="Luxury Escapes" className="nav-image" onClick={() => scrollToSection('luxury-escapes')} />
          <img src="images/fish-charming-retreats.png" alt="Charming Retreats" className="nav-image" onClick={() => scrollToSection('charming-retreats')} />
          <img src="images/fish-cozy-comforts.png" alt="Cozy Comforts" className="nav-image" onClick={() => scrollToSection('cozy-comforts')} />
        </div>

        <div className="section-header" id="luxury-escapes-header">
          <h2>Luxury Escapes</h2>
        </div>
        <div className="section-header" id="charming-retreats-header">
          <h2>Charming Retreats</h2>
        </div>
        <div className="section-header" id="cozy-comforts-header">
          <h2>Cozy Comforts</h2>
        </div>

        <div id="luxury-escapes">
          <h3>Jumeriah Capri Palace</h3>
          <img src="images/jumeriah-capri-palace.jpg" alt="Jumeriah Capri Palace" />
          <p>Description and details about the hotel...</p>
        </div>

        <div id="charming-retreats">
          <h3>Casa Mariantonia</h3>
          <img src="images/casa-mariantonia.jpg" alt="Casa Mariantonia" />
          <p>Description and details about the hotel...</p>
        </div>

        <div id="cozy-comforts">
          <h3>Hotel Biancamaria</h3>
          <img src="images/hotel-biancamaria.jpg" alt="Hotel Biancamaria" />
          <p>Description and details about the hotel...</p>
        </div>
      </div>
    </div>
  );
}

export default HotelsPage