import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ 
  isLoginActive, 
  onLoginClick, 
  onRegisterClick, 
  isLoggedIn, 
  onLogout,
  currentPage
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    navigate(`/${page}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <p>CloudPass .</p>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'responsive' : ''}`}>
        <ul>
          <li>
            <Link 
              to="/home" 
              className={`link ${currentPage === 'home' || !currentPage ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={`link ${currentPage === 'blog' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`link ${currentPage === 'services' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <div className="nav-button">
          <button className="btn" onClick={onLogout}>
            <i className='bx bx-log-out'></i> Logout
          </button>
        </div>
      ) : (
        <div className="nav-button">
          <button 
            className={`btn ${isLoginActive ? 'white-btn' : ''}`} 
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
          <button 
            className={`btn ${!isLoginActive ? 'white-btn' : ''}`} 
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
        </div>
      )}
      <div className="nav-menu-btn">
        <i className="bx bx-menu" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}

export default Navbar;