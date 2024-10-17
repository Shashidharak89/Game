import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/home.css';  // Import CSS

const games = [
  { id: 1, name: 'Chess', image: 'chess.jpg', route: '/chess' },
  { id: 2, name: 'Tetris', image: 'tetris.jpg', route: '/tetris' },
  // You can add more games here
];

const Home = () => {
  const navigate = useNavigate();

  const handleGameClick = (route) => {
    navigate(route);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Choose Your Game</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleGameClick(game.route)}
          >
            <img src={game.image} alt={game.name} className="game-image" />
            <p className="game-name">{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
