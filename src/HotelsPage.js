import React from 'react';
import './HotelsPage.css';

function HotelsPage() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="hotels-page">
      {/* Top Section with Fish Images */}
      <div className="hotels-intro">
        <h1 className="where-to-stay-title">WHERE TO STAY</h1>
        <p className="intro-text">
          Welcome to our curated list of accommodations for your stay in Anacapri.
          We've selected a range of hotels to suit different preferences and budgets,
          ensuring a comfortable and memorable experience for all our guests.
        </p>

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
            <img src="images/Jumeriah.png" alt="Jumeriah Capri Palace" />
            <div className="hotel-details">
              <h4>Jumeriah Capri Palace</h4>
              <p>
                <strong>Description:</strong> Located in the heart of Anacapri, this luxurious hotel offers stunning views, exquisite design, and world-class service. Enjoy the beautiful surroundings and elegant accommodations that make for a truly indulgent stay.
              </p>
              <p>
                <strong>Fun Fact:</strong> Zuma, one of the couple's favorite restaurants, opened its rooftop location in Capri in 2022. We highly recommend dining here if you plan to stay an extra night or arrive early. It's a vibrant hotspot with plenty of trendy activities and an unforgettable dining experience. (reservations needed)
              </p>
              <p>
                <strong>Booking Code:</strong> GKCAPRI2025
              </p>
              <p>
                <strong>Link to Book:</strong> Jumeriah Capri Palace
              </p>
            </div>
          </div>

          <div className="hotel-entry">
            <img src="images/CasearAug.png" alt="Hotel Caesar Augustus" />
            <div className="hotel-details">
              <h4>Hotel Caesar Augustus</h4>
              <p>
                <strong>Description:</strong> Perched on the dramatic cliffs of Anacapri, this hotel offers stunning views and luxurious rooms. While not exactly in the heart of Anacapri, it's still conveniently located about a 1-minute drive, making it easy to get to the pick-up locations for our events through their hotel car service.
              </p>
              <p>
                <strong>Things to note:</strong> While it's a short distance to the center of Anacapri, we do not recommend walking because the roads are very tight, and there are lots of traffic jams with the bigger buses.
              </p>
              <p>
                <strong>Link to Book:</strong> Hotel Caesar Augustus
              </p>
            </div>
          </div>
        </div>

        <div className="hotel-section" id="charming-retreats">
          <h3>Charming Retreats</h3>

          <div className="hotel-entry">
            <img src="images/CasaMariantonia.png" alt="Casa Mariantonia" />
            <div className="hotel-details">
              <h4>Casa Mariantonia</h4>
              <p>
                <strong>Description:</strong> Nearest to our rehearsal dinner space, this hotel offers a convenient and charming stay. Enjoy the historic ambiance and beautiful surroundings.
              </p>
              <p>
                <strong>Notable:</strong> La Zagara, Casa Mariantonia's in-house restaurant and wine bar, will host some events, making this a super convenient choice for our guests. The attached wine bar offers a selection of fine wines, hors d'oeuvres, and cheese and charcuterie plates. It's perfect for enjoying a glass of wine, a quick aperitivo, or a light snack while soaking in the local ambiance.
              </p>
              <p>
                <strong>Link to Book:</strong> Casa Mariantonia
              </p>
            </div>
          </div>

          <div className="hotel-entry">
            <img src="images/VillaBlu.png" alt="Villa Blu Capri" />
            <div className="hotel-details">
              <h4>Villa Blu Capri</h4>
              <p>
                <strong>Description:</strong> This charming villa offers personalized service and a relaxing atmosphere. It's the perfect retreat for those seeking a comfortable and intimate stay in Anacapri.
              </p>
              <p>
                <strong>Notable:</strong> This hotel is conveniently located next to one of our favorite casual lunch spots. If you’re looking for a delicious lunch without the need for a reservation, Sciué Sciué Restaurant is the perfect place to indulge.
              </p>
              <p>
                <strong>Link to Book:</strong> Villa Blu Capri
              </p>
            </div>
          </div>
        </div>

        <div className="hotel-section" id="cozy-comforts">
          <h3>Cozy Comforts</h3>
          <div className="hotel-entry">
            <img src="images/biancamaria.png" alt="Hotel Biancamaria" />
            <div className="hotel-details">
              <h4>Hotel Biancamaria</h4>
              <p>
                <strong>Description:</strong> Located in the heart of Anacapri, this hotel provides easy access to local attractions and offers a cozy, comfortable stay. Perfect for those looking for great value without sacrificing quality. </p>
              <p>
                <strong>Notable:</strong> This hotel boasts a prime location with breakfast included and is within walking distance to the rehearsal dinner and all transportation points. Additionally, it’s conveniently situated near one of our favorite casual lunch spots. Scui Scui Restaurant is the perfect place to indulge without a reservation. </p>
              <p>
                <strong>Link to Book:</strong> Hotel Biancamaria
              </p>            
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;
