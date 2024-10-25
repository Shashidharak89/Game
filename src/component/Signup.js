import React from 'react';
import './styles/auth.css';

const Signup = ({ toggleForm }) => {
  return (
    <div className='signup'>
      <br/><br/>
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" required />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>Already have an account? <span className="link" onClick={toggleForm}>Login</span></p>
    </div>
    </div>
  );
};

export default Signup;
