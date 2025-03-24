import React, { useState } from 'react';

function RegisterForm({ isActive, onLoginClick, onRegister }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      return 'Weak';
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8) {
      return 'Strong';
    } else {
      return 'Moderate';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    
    if (passwordStrength === 'Weak') {
      setErrorMessage('Password is too weak');
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password
    };

    const registerSuccess = onRegister(userData);
    
    if (!registerSuccess) {
      setErrorMessage('Email already exists');
    }
  };

  return (
    <div 
      className="register-container" 
      style={{ 
        right: isActive ? '5px' : '-520px',
        opacity: isActive ? 1 : 0
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="top">
          <span>
            Have an account? <a href="#" onClick={onLoginClick}>Login</a>
          </span>
          <header>Sign Up</header>
        </div>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        <div className="two-forms">
          <div className="input-box">
            <input 
              type="text" 
              className="input-field" 
              placeholder="Firstname" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input 
              type="text" 
              className="input-field" 
              placeholder="Lastname" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>
        </div>
        <div className="input-box">
          <input 
            type="email" 
            className="input-field" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="bx bx-envelope"></i>
        </div>
        <div className="input-box">
          <i className="bx bx-lock-alt"></i>
          <input 
            type={showPassword ? "text" : "password"}
            className="input-field" 
            placeholder="Password" 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordStrength(checkPasswordStrength(e.target.value));
            }}
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            <i className={showPassword ? "bx bx-show" : "bx bx-hide"}></i>
          </span>
          {password && (
          <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
            <i className></i> 
            {passwordStrength.toLowerCase() === "weak" && "🛈 Password is "}
            {passwordStrength.toLowerCase() === "moderate" && "🛈 Password is "}
            {passwordStrength.toLowerCase() === "strong" && "🛈 Password is "}
            {passwordStrength.toLowerCase()}
          </div>
          )}
        </div>
        <div className="input-box">
        <i className="bx bx-lock-alt"></i>
          <input 
            type={showConfirmPassword ? "text" : "password"} 
            className="input-field" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            <i className={showConfirmPassword ? "bx bx-show" : "bx bx-hide"}></i>
          </span>
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="submit" className="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;