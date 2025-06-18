import React, { useState } from 'react';
import './Home.css';

const Hamster = ({ coins, setCoins }) => {
  const [isTapping, setIsTapping] = useState(false);
  const [showPlus, setShowPlus] = useState(false);

  const handleTap = () => {
    setCoins(coins + 12); 
    setIsTapping(true);
    setShowPlus(true);

    setTimeout(() => setIsTapping(false), 150);
    setTimeout(() => setShowPlus(false), 500);
  };

  return (
    <div className="tap-container">
      <div className="hamster-zone" onClick={handleTap}>
        <img
          src="hamster.png"
          alt="hamster"
          className={`hamster-img ${isTapping ? 'tap-zoom' : ''}`}
        />
        {showPlus && <div className="plus">+12</div>}
      </div>
    </div>
  );
};

export default Hamster;
