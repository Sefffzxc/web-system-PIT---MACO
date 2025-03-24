import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ user, onLogout }) {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome, {user.firstName} {user.lastName}!</h1>
        <p>You've successfully logged into CloudPass.</p>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <i className='bx bx-shield-quarter'></i>
          <h3>Your Passwords</h3>
          <p>Manage and secure all your passwords in one place.</p>
        </div>
        
        <div className="dashboard-card">
          <i className='bx bx-note'></i>
          <h3>Secure Notes</h3>
          <p>Store confidential information with end-to-end encryption.</p>
        </div>
        
        <div className="dashboard-card">
          <i className='bx bx-share-alt'></i>
          <h3>Shared Access</h3>
          <p>Safely share credentials with family or team members.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;