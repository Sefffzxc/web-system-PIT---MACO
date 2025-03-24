import React from 'react';

function AboutPage() {
  return (
    <div className="page-container">
      <h1>About CloudPass</h1>
      <div className="content-section">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At CloudPass, we believe that everyone deserves a secure and hassle-free 
            digital life. Our mission is to simplify password management while providing 
            the highest level of security for your sensitive information.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, CloudPass was born out of the frustration of dealing with 
            countless passwords across different platforms. Our founders, a team of 
            cybersecurity experts and UX designers, came together to create a solution 
            that balances security with ease of use.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Security First</h2>
          <p>
            Security is at the core of everything we do. We use end-to-end encryption, 
            meaning your data is encrypted before it leaves your device. Not even our 
            team can access your passwords - only you hold the key.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;