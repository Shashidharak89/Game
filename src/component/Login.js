import React from 'react';
import './styles/auth.css'; 

// document.getElementById('login-signup').style.display = 'none';

const Login = ({ toggleForm }) => {
  return (
    <div className='login-sign'>
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <p>Don't have an account? <span className="link" onClick={toggleForm}>Sign Up</span></p>
    </div>
    </div>
  );
};

export default Login;
