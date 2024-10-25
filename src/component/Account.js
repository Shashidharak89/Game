import React from 'react';
import './styles/account.css';
import profileImage from './images/profile.webp';

const Account = () => {
  const user = {
    profileImage: 'https://via.placeholder.com/150',
    name: 'Shashidhara K',
    phone: '123-456-7890',
    email: 'shashidharak334@example.com',
  };

  return (
    <div className='ac-holder'>
      <br/><br/>
      <div className="account-container">
        <h2>Your Account</h2>
        <div className="profile">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Phone Number:</strong> {user.phone}</p>
            <p><strong>Email Address:</strong> {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
