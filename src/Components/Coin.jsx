import React from 'react'
import "./Home.css"

const Coin = ({ coins }) => {
  return (
    <div className="coin-wrapper">
      <img src="img1.png" alt="Coin" className="coin-icon" />
      <h2 className="coin-amount">{coins.toLocaleString()}</h2>
    </div>
  );
};


export default Coin
