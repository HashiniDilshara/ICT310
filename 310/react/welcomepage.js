import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Foodie Delight</h1>
      <p>Explore a variety of cuisines and get your food delivered fast!</p>
      <ul>
        <li>Wide range of cuisines</li>
        <li>Fast delivery</li>
        <li>Exclusive discounts</li>
      </ul>
      <button onClick={() => alert("Start Ordering!")}>Get Started</button>
    </div>
  );
};

export default WelcomePage;
