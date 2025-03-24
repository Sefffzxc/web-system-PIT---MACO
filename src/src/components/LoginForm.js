import React, { useState } from 'react';

function LoginForm({ isActive, onRegisterClick, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const loginSuccess = onLogin(email, password);
    
    if (!loginSuccess) {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div 
      className="login-container" 
      style={{ 
        left: isActive ? '4px' : '-510px',
        opacity: isActive ? 1 : 0
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="top">
          <span>
            Don't have an account? <a href="#" onClick={onRegisterClick}>Sign Up</a>
          </span>
          <header>Login</header>
        </div>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
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
          <input 
            type={showPassword ? "text" : "password"} 
            className="input-field" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            <i className={showPassword ? "bx bx-show" : "bx bx-hide"}></i>
          </span>
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="submit" className="submit" value="Sign In" />
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="login-check" />
            <label htmlFor="login-check"> Remember Me</label>
          </div>
          <div className="two">
            <label><a href="#">Forgot password?</a></label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;