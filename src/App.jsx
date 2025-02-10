import React, { useState, useEffect } from "react";
import "./App.css";

const rotatingTaglineWords = [
  "innovation!",
  "technology!",
  "research!",
  "ai!",
  "ml!"
];

const App = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % rotatingTaglineWords.length);
    }, 5000); // Change word every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <div className="welcome-container">
        <h2>Welcome to...</h2>
      </div>

      {/* Labs Title */}
      <div className="labs-container">
        <h1>Sadhas Labs</h1>
      </div>

      <div>
        <img class="profile-image" src="src/assets/tanpura.svg"></img>
      </div>

      {/* Tagline with Rotating Last Word */}
      <div className="tagline-container">
        <p>
          where heritage meets{" "}
          <span className="rotating-word">
            {rotatingTaglineWords[taglineIndex]}
          </span>
        </p>
      </div>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          Sadhas Labs is a non-profit organization focused on integrating Carnatic music with machine learning and data science. Our mission is to bring state-of-the-art data technologies to further the knowledge of Carnatic music.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="meet-the-team" id="team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {/* Flip Card for Team Member 1 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="src/assets/team_images/srihari_profile.jpg" alt="Srihari Raman" />
                <h3>Srihari Raman</h3>
                <p>Founder & Principal Scientist</p>
              </div>
              <div className="flip-card-back">
                <p>
                  Srihari Raman is the visionary behind Sadhas Labs. He founded the organization as 
                  a means of driving innovation within the Carnatic music space.
                </p>
              </div>
            </div>
          </div>

          {/* Flip Card for Team Member 2 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://via.placeholder.com/200" alt="Member 2" />
                <h3>Person 2</h3>
                <p>Role: Placeholder</p>
              </div>
              <div className="flip-card-back">
                <p>
                  Person 2 contributes innovative ideas and creative solutions as a key member of our team.
                </p>
              </div>
            </div>
          </div>
          {/* Add more team members here as needed */}
          
        </div>
      </section>
    </>
  );
};

export default App;
