import React, { useState } from "react";
import guestList from "./data/guestList"; // Import guest list
import Confetti from "react-confetti"; // 🎉 Confetti effect
import "./RSVPPage.css";

const RSVPPage = () => {
  const [response, setResponse] = useState("");
  const [guestName, setGuestName] = useState("");
  const [numGuests, setNumGuests] = useState(0);
  const [dietary, setDietary] = useState("");
  const [filteredGuests, setFilteredGuests] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false); // 🎉 Confetti animation
  const [showConfirmation, setShowConfirmation] = useState(false); // ✅ Confirmation Box

  // 🔍 Guest Name Search Function
  const handleGuestSearch = (e) => {
    const searchValue = e.target.value.trim();
    setGuestName(searchValue);
  
    if (!searchValue) {
      setFilteredGuests([]);
      return;
    }
  
    // Find guests that match the search
    const matches = guestList.filter(
      (guest) => guest.label.toLowerCase().includes(searchValue.toLowerCase()) ||
                 (guest.plusOnes && guest.plusOnes.some(plusOne => plusOne.toLowerCase().includes(searchValue.toLowerCase())))
    );
  
    let allMatches = [];
  
    matches.forEach((guest) => {
      // Add the main guest
      allMatches.push(guest);
  
      // If the searched name is a plus one, find the main guest they are associated with
      if (guest.plusOnes && guest.plusOnes.includes(searchValue)) {
        allMatches.push({ label: searchValue, value: searchValue, plusOnes: [] });
      }
  
      // Add their plus ones
      if (guest.plusOnes && Array.isArray(guest.plusOnes)) {
        guest.plusOnes.forEach((plusOne) => {
          allMatches.push({ label: plusOne, value: plusOne, plusOnes: [] });
        });
      }
    });
  
    // Remove duplicates
    setFilteredGuests([...new Map(allMatches.map((g) => [g.label, g])).values()]);
  };
  

  // ✅ Select/Deselect guest names
  const handleSelectGuest = (guest) => {
    let updatedGuests = [...selectedGuests];
  
    // If guest is already selected, remove them
    if (updatedGuests.includes(guest.label)) {
      updatedGuests = updatedGuests.filter((g) => g !== guest.label);
    } else {
      // Otherwise, add them
      updatedGuests.push(guest.label);
    }
  
    setSelectedGuests(updatedGuests);
    setNumGuests(updatedGuests.length);
  
    // Update input field with selected names (beautiful cursive input)
    setGuestName(updatedGuests.join(" and "));
  };
  

  // 📤 Form submission to Google Sheets
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      guestName: selectedGuests.join(", "), // Combine all selected names
      plusOne: selectedGuests.length > 1 ? selectedGuests.slice(1).join(", ") : "", // All but first guest
      numGuests,
      attendance: response, // Accepts or Declines
      dietary,
    };
  
    console.log("Submitting RSVP:", requestData); // Debugging log
    console.log("API URL:", process.env.REACT_APP_RSVP_API_URL);

    fetch(process.env.REACT_APP_RSVP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
  
      },   
      body: JSON.stringify(requestData),
      mode: "cors" // ✅ Ensures CORS is enabled

    })
      .then(async (res) => {
        console.log("Submitting RSVP:", requestData);
        console.log("Raw Response:", res);
        if (!res.ok) {
          const text = await res.text();
          console.error("Server Response Error:", text);
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("RSVP response:", data);
        if (data.success) {
          setShowConfetti(true);
          setShowConfirmation(true);
          setTimeout(() => setShowConfetti(false), 5000);
        } else {
          throw new Error("Google Sheets response error");
        }
      })
      .catch((err) => console.error("Error submitting RSVP:", err));
       
    }
  return (
    <div className="rsvp-page">
      {/* 🎉 Confetti Animation */}
      {showConfetti &&
       <Confetti
       />}

      <div className="rsvp-container">
        {showConfirmation ? (
          /** ✅ Confirmation Message **/
          <div className="confirmation-box">
            {response === "Declines with regret" ? (
              <>
                <h1>😢 We'll Miss You!</h1>
                <p>Thank you for letting us know, <strong>{guestName}</strong>.</p>
                <p>We’re sad you won’t be able to join us, but we appreciate your response.</p>
                <p>If anything changes, please <a href="mailto:gladysbenitez.an@gmail.com">contact us</a>.</p>
              </>
            ) : (
              <>
                <h1>🎉 You're In! 🎉</h1>
                <p>Thank you, <strong>{guestName}</strong>, for your RSVP!</p>
                <p>You've reserved <strong>{numGuests}</strong> guest(s).</p>
                <p>If you have any last-minute changes, please <a href="mailto:gladysbenitez.an@gmail.com">contact us</a>.</p>
              </>
            )}
          </div>
        ) : (
          /** ✅ Regular RSVP Form **/
          <>
            <h1 className="rsvp-title">Kindly Reply</h1>
            <p className="rsvp-date">By 7 April 2025</p>

            <form onSubmit={handleSubmit}>
              {/* ✅ RSVP OPTIONS */}
              <div className="rsvp-option">
                <input
                  type="radio"
                  id="accepts"
                  name="response"
                  value="Accepts with pleasure"
                  onChange={(e) => setResponse(e.target.value)}
                />
                <label htmlFor="accepts">Accepts with pleasure</label>
              </div>
              <div className="rsvp-option">
                <input
                  type="radio"
                  id="declines"
                  name="response"
                  value="Declines with regret"
                  onChange={(e) => setResponse(e.target.value)}
                />
                <label htmlFor="declines">Declines with regret</label>
              </div>

              {/* ✅ Guest Search Input */}
              <div className="name-input">
                <input
                  type="text"
                  name="guest-name"
                  placeholder="Enter your name"
                  value={guestName}
                  onChange={handleGuestSearch}
                  required
                />
              </div>

              {/* 🔽 Guest Selection Dropdown */}
              {filteredGuests.length > 0 && (
  <div className="guest-dropdown">
    {filteredGuests.map((guest, index) => (
      <div key={index} className="guest-group">
        {/* Main Guest */}
        <div className="guest-option">
          <input
            type="checkbox"
            id={guest.label}
            value={guest.label}
            checked={selectedGuests.includes(guest.label)}
            onChange={() => handleSelectGuest(guest)}
          />
          <label htmlFor={guest.label}>{guest.label}</label>
        </div>
      </div>
    ))}
  </div>
)}

              {/* ✅ Number of Guests */}
              <div className="guest-count">
                <label>No. of Guests:</label>
                <input
                  type="number"
                  name="numGuests"
                  min="1"
                  value={numGuests}
                  readOnly
                />
              </div>

              {/* ✅ Dietary Requirements */}
              <div className="dietary-requirements">
                <label>Dietary Requirements:</label>
                <textarea
                  name="dietary"
                  placeholder="Enter any dietary restrictions here"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                />
              </div>

              {/* ✅ Submit Button */}
              <button type="submit" className="submit-btn" onTouchEnd={(e) => e.target.click()}>
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RSVPPage;
