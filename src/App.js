// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FormBox from './components/FormBox';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import 'boxicons/css/boxicons.min.css';

// Create a layout component for authentication pages
const AuthLayout = ({ isLoginActive, onLoginClick, onRegisterClick, onLogin, onRegister }) => {
  return (
    <div className="wrapper">
      <Navbar 
        isLoginActive={isLoginActive} 
        onLoginClick={onLoginClick} 
        onRegisterClick={onRegisterClick} 
        isLoggedIn={false}
      />
      <FormBox 
        isLoginActive={isLoginActive} 
        onLoginClick={onLoginClick} 
        onRegisterClick={onRegisterClick}
        onLogin={onLogin}
        onRegister={onRegister}
      />
    </div>
  );
};

// Create a layout component for authenticated pages
const AppLayout = ({ currentUser, onLogout, currentPage }) => {
  const location = useLocation();
  
  return (
    <div className="app-container">
      <Navbar 
        isLoggedIn={true}
        onLogout={onLogout}
        currentPage={currentPage}
      />
      <div className={`page-transition ${currentPage}`}>
        <Routes>
           {/* Route for the Home Page*/}
          <Route path="/home" element={<HomePage user={currentUser} onLogout={onLogout} />} />
          {/* Route for the Blog Page */}
          <Route path="/blog" element={<BlogPage />} />
           {/* Route for the Services Page */}
          <Route path="/services" element={<ServicesPage />} />
          {/* Route for the About Page */}
          <Route path="/about" element={<AboutPage />} />
          {/* Redirect any unknown routes to Home Page */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoginClick = () => {
    setIsLoginActive(true);
    window.history.pushState({}, "", "/login");
  };

  const handleRegisterClick = () => {
    setIsLoginActive(false);
    window.history.pushState({}, "", "/register");
  };

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleRegister = (userData) => {
    // Check if email already exists
    if (users.some(user => user.email === userData.email)) {
      return false;
    }
    
    setUsers([...users, userData]);
    setCurrentUser(userData);
    setIsLoggedIn(true);
    return true;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsLoginActive(true);
    window.history.pushState({}, "", "/login");
  };

  const updateCurrentPageFromPath = () => {
    const path = window.location.pathname;
    if (path.includes('home')) setCurrentPage('home');
    else if (path.includes('blog')) setCurrentPage('blog');
    else if (path.includes('services')) setCurrentPage('services');
    else if (path.includes('about')) setCurrentPage('about');
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      window.history.pushState({}, "", isLoginActive ? "/login" : "/register");
    }
    
    window.addEventListener('popstate', updateCurrentPageFromPath);
    
    return () => {
      window.removeEventListener('popstate', updateCurrentPageFromPath);
    };
  }, [isLoginActive]);

  return (
    <Router>
      <Routes>
        {/* Route for the Login Page, redirects to Home if naka login na */}
        <Route 
          path="/login" 
          element={
            isLoggedIn ? 
            <Navigate to="/home" replace /> : 
            <AuthLayout 
              isLoginActive={true} 
              onLoginClick={handleLoginClick} 
              onRegisterClick={handleRegisterClick}
              onLogin={handleLogin}
              onRegister={handleRegister}
            />
          } 
        />
        {/* Route for the Register Page, redirects to Home if naka login na */}
        <Route 
          path="/register" 
          element={
            isLoggedIn ? 
            <Navigate to="/home" replace /> : 
            <AuthLayout 
              isLoginActive={false} 
              onLoginClick={handleLoginClick} 
              onRegisterClick={handleRegisterClick}
              onLogin={handleLogin}
              onRegister={handleRegister}
            />
          } 
        />
        {/* Route for all authenticated pages, redirects to Login if wala pa ka login*/}
        <Route 
          path="/*" 
          element={
            isLoggedIn ? 
            <AppLayout 
              currentUser={currentUser} 
              onLogout={handleLogout} 
              currentPage={currentPage}
            /> : 
            <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;