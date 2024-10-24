// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import './component/styles/style.css'

const App = () => {
  return (
    <div className='main'>
    <Router>
      <div className='link-items'>
      <Link to="/" className='nav-items'>Home</Link>
      <Link to="/about"  className='nav-items'>About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
