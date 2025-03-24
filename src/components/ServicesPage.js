import React from 'react';

function ServicesPage() {
  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <div className="content-section">
        <div className="service-card">
          <i className='bx bx-lock-alt service-icon'></i>
          <h2>Password Management</h2>
          <p>
            Store, generate, and autofill strong passwords across all your devices.
            Never forget a password again with our secure vault.
          </p>
        </div>
        
        <div className="service-card">
          <i className='bx bx-mobile-alt service-icon'></i>
          <h2>Multi-Device Sync</h2>
          <p>
            Seamlessly access your passwords across all your devices - desktop,
            mobile, and tablets with real-time synchronization.
          </p>
        </div>
        
        <div className="service-card">
          <i className='bx bx-shield-quarter service-icon'></i>
          <h2>Security Monitoring</h2>
          <p>
            Receive alerts for data breaches and compromised passwords.
            We continuously monitor the web to keep your accounts safe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;