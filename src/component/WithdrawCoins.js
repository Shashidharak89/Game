import React, { useState } from 'react';
import './styles/WithdrawCoins.css';

const WithdrawCoins = () => {
  const [coins, setCoins] = useState(10000); // Example: Starting with 5000 coins
  const [message, setMessage] = useState('');

  const handleWithdraw = (voucher, cost) => {
    if (coins >= cost) {
      setCoins(coins - cost);
      setMessage(`Successfully redeemed ${voucher} voucher!`);
    } else {
      setMessage('Not enough coins for this voucher.');
    }
  };

  return (
    <div className='withdraw'>
      <br/> <br/>
      <div className="withdraw-container">
        <h2>Withdraw Coins</h2>
        <p className="total-coins">Total Available Coins: {coins}</p>
        {message && <p className="message">{message}</p>}
        <div className="voucher-options">
          <div className="voucher-card">
            <h3>Amazon Pay Voucher</h3>
            <p>Cost: 2000 Coins</p>
            <button onClick={() => handleWithdraw('Amazon Pay', 2000)} className='redeem-button'>Redeem</button>
          </div>
          <div className="voucher-card">
            <h3>Flipkart Voucher</h3>
            <p>Cost: 1500 Coins</p>
            <button onClick={() => handleWithdraw('Flipkart', 1500)} className='redeem-button'>Redeem</button>
          </div>
          <div className="voucher-card">
            <h3>Google Play Redeem Code</h3>
            <p>Cost: 2500 Coins</p>
            <button onClick={() => handleWithdraw('Google Play', 2500)} className='redeem-button'>Redeem</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawCoins;
