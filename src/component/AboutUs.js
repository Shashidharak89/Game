import React from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        Welcome to <span className="highlight">GameNexPlay</span>! Our mission is to provide you with a diverse selection of online games that you can enjoy instantly without any downloads or installations. 
        Whether you're looking for thrilling action, mind-bending puzzles, or fun casual games, we have something for every gamer.
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>Instant Access</h3>
          <p>Play your favorite games instantly, anytime, anywhere. No downloads required!</p>
        </div>
        <div className="card">
          <h3>Diverse Collection</h3>
          <p>From puzzles to action games, our library is packed with fun options for all ages.</p>
        </div>
        <div className="card">
          <h3>Play for Free</h3>
          <p>Enjoy gaming without any cost—just jump in and start playing!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
