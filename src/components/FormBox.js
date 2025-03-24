import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function FormBox({ isLoginActive, onLoginClick, onRegisterClick, onLogin, onRegister }) {
  return (
    <div className="form-box">
      <LoginForm 
        isActive={isLoginActive} 
        onRegisterClick={onRegisterClick}
        onLogin={onLogin} 
      />
      <RegisterForm 
        isActive={!isLoginActive} 
        onLoginClick={onLoginClick}
        onRegister={onRegister} 
      />
    </div>
  );
}

export default FormBox;