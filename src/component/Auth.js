import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './styles/auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
};

export default Auth;
