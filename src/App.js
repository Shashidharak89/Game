// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Auth from './component/Auth';
import './component/styles/style.css'
import animal_connection from './component/images/coin.png';

const App = () => {
  return (
    <div className='main'>

      <Router>
        <div className='nav-bar'>
          <div className='dom-title'>

            <div className='link-items-container'>
              <label>GameNexPlay</label>
            </div>

            <div className='coins'>
              <div className='logo'><img src={animal_connection} alt="coins" className='coin-img'></img></div>
              <label>00000</label>
            </div>
          </div>

          <div className='link-items'>
            <Link to="/" className='nav-items'>Home</Link>
            <Link to="/about" className='nav-items'>About</Link>
            <Link to="/Login" className='nav-items' id='login-signup'>Login/Signup</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
