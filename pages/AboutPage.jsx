// pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
  return (
    <div className="about">
      <h2>About This App</h2>
      <p>Made using ReactJS, JavaScript, and CSS during the Kshitij Workshop 2025.</p>
      <p>We learned state, routing, localStorage, and basic animations!</p>
      <img src="/meme.png" alt="meme" style={{ maxWidth: '300px' }} />
    </div>
  );
}

export default AboutPage;
