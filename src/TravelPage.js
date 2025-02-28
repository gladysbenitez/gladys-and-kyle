import React from "react";
import "./TravelPage.css"; // Make sure to include this CSS file

const TravelPage = () => {
  return (
    <div className="travel-page-container">
      <div className="travel-page-content">
        <div className="travel-page-header">
          <h1 className="travel-page-heading">Travel Information for Our Wedding in Capri, Italy</h1>
          <p className="travel-page-intro">
            <strong>Hi, it’s me—the bride, Gladys! 🎉</strong>  
            Thank you for your excitement! We are so looking forward to celebrating with you.  
            I am personally coding this entire website from scratch (yes, really), so it’s taking longer than a regular wedding website. While the User Interface of this current page is not to my liking, i know many of you are anxious for more details.. so for now please ignore the design for this page. 
            For those who need travel details **RIGHT THIS SECOND**, here’s a friendly guide to help you get to Capri! ✈️🚢
          </p>
        </div>

        {/* Step 1: Fly to Italy */}
        <div className="travel-page-step">
          <h2 className="travel-page-subheading">✈️ Step 1: Fly to Italy</h2>
          <p>Most guests are coming from the U.S., and the best airport to fly into is:</p>
          <ul>
            <li><strong>Naples International Airport (NAP)</strong> – Closest to Capri.</li>
            <li><strong>Rome Fiumicino (FCO)</strong> – Requires a train to Naples (~1 hour).</li>
          </ul>
          <div className="travel-page-tip">💡 <strong>Tip:</strong> If you fly into Rome, take the high-speed <strong>Frecciarossa train</strong> from Roma Termini to Napoli Centrale.</div>
        </div>

        {/* Step 2: Get to the Ferry */}
        <div className="travel-page-step">
          <h2 className="travel-page-subheading">⛴️ Step 2: Get to the Ferry in Naples</h2>
          <p>Once you arrive in Naples, you need to go to the ferry port to catch a boat to Capri.</p>
          <ul>
            <li><strong>From Naples Airport (NAP):</strong> Take a taxi (~20-30 minutes).</li>
            <li><strong>From Naples Train Station:</strong> Take a taxi (~15 minutes) or the Alibus shuttle.</li>
          </ul>
          <div className="travel-page-tip">🚕 <strong>Taxi tip:</strong> Always ask for the fixed fare to the port (€25-30) to avoid overpaying.</div>
        </div>

        {/* Step 3: Take the Ferry */}
        <div className="travel-page-step">
          <h2 className="travel-page-subheading">🚢 Step 3: Take the Ferry to Capri</h2>
          <p>There are two types of ferries from Naples to Capri:</p>
          <ul>
            <li><strong>Fast Ferry (Hydrofoil) – ~50 minutes</strong>
              <ul>
                <li>Best option – less time, smoother ride.</li>
                <li><strong>Book in advance</strong> – ferries sell out & the island can reach capacity.</li>
                <li>Buy tickets at least a week ahead from <a href="https://www.snav.it/en/" target="_blank" rel="noopener noreferrer">SNAV</a> or <a href="https://www.caremar.it/en/" target="_blank" rel="noopener noreferrer">Caremar</a>.</li>
              </ul>
            </li>
            <li><strong>Slow Ferry – ~80 minutes</strong>
              <ul>
                <li>More affordable but bumpier & takes longer.</li>
                <li>Not recommended unless you’re on a budget.</li>
              </ul>
            </li>
          </ul>
          <div className="travel-page-alert">
            🚨 **Ferry tips:**  
            ✔ Book tickets ahead of time.  
            ✔ Check the schedule—ferries don’t run late at night.  
            ✔ If seas are rough, ferries may be canceled—stay in Naples overnight if needed.
          </div>
        </div>

        {/* Step 4: Arriving in Capri */}
        <div className="travel-page-step">
          <h2 className="travel-page-subheading">🚖 Step 4: Arriving in Capri – Get to Your Hotel</h2>
          <p>Once you arrive in Capri, you’ll get off at <strong>Marina Grande</strong> (the main port). From here, you need to get to your hotel.</p>
          <h3 className="travel-page-subheading-small">Two Main Areas of Capri:</h3>
          <ul>
            <li>🌴 <strong>Capri Town (Lower Side):</strong> Busier, famous, luxury hotels, high-end shopping.</li>
            <li>🌿 <strong>Anacapri (Upper Side):</strong> More relaxed, charming. **Our wedding events are here!**</li>
          </ul>
          <div className="travel-page-tip">💡 If you're a **first-time traveler**, stay in **Anacapri** for an easier experience.</div>
        </div>

        {/* How to Get to the Hotel */}
        <div className="travel-page-step">
          <h2 className="travel-page-subheading">🚖 How to Get from the Port to Your Hotel</h2>
          <ul>
            <li><strong>1️⃣ By Taxi (Best Option)</strong>  
              <ul>
                <li>Just say **“Anacapri”** if your hotel is there.</li>
                <li>Costs around **€25-30** (cash preferred).</li>
                <li>The taxis are **convertibles**—so fun!</li>
              </ul>
            </li>
            <li><strong>2️⃣ By Bus (Only for the Brave!)</strong>  
              <ul>
                <li>Crowded and slow.</li>
                <li>**Beware of pickpockets**—keep your bag in front & zipped.</li>
                <li>Not recommended if you have luggage.</li>
              </ul>
            </li>
            <li><strong>3️⃣ By Hotel Transfer (Luxury Option)</strong>  
              <ul>
                <li>Some hotels offer private transfers—check with your hotel.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Final Tips */}
        <div className="travel-page-step">
          <h2 className="travel-page-subheading">🛑 Final Travel Tips</h2>
          <ul>
            <li>✔ **Book your ferry tickets early.**</li>
            <li>✔ **Taxis are the easiest way to get around.**</li>
            <li>✔ **Keep your bags in front of you** in crowded areas.</li>
            <li>✔ **Bring cash (€EUR)** for taxis & small shops.</li>
            <li>✔ **Wear comfortable shoes**—Capri has cobblestone streets!</li>
          </ul>
        </div>

        <div className="travel-page-footer">
          <p>We can’t wait to celebrate with you! 💛</p>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
