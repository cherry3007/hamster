import React, { useState } from 'react';
import "./Earn.css";

const Earn = () => {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);     // Для "Earn per tap"
  const [isProfitOpen, setIsProfitOpen] = useState(false);       // Для "Profit per hour"

  return (
    <div>
      <div className="earn">
        <div className="tap" onClick={() => setIsUpgradeOpen(true)}>
          <h2>Earn per tap</h2>
          <div className="taps">
            <img src="img.png" alt="" />
            <h3>+12</h3>
          </div>
        </div>

        <div className="coin">
          <h3>Coins to level up</h3>
          <p>10 M</p>
        </div>

        <div className="profit" onClick={() => setIsProfitOpen(true)}>
          <h3>Profit per hour</h3>
          <div className="profits">
            <img src="img.png" alt="" />
            <h3>+636</h3>
          </div>
        </div>
      </div>

      {/* Earn per tap */}
      {isUpgradeOpen && (
        <div className="upgrade-popup">
          <button className="close-btn-small" onClick={() => setIsUpgradeOpen(false)}>&times;</button>
          <div className="poup">
            <div className="po">
              <div className="level"><h2>lvl2</h2></div>
              <div className="ln"></div>
              <div className="xmm"><h4>+3</h4><img src="img.png" alt="" /></div>
              <div className="min"><h5>-2500</h5><img src="img.png" alt="" /></div>
            </div>
            <div className="po">
              <div className="level"><h2>lvl3</h2></div>
              <div className="ln"></div>
              <div className="xmm"><h4>+4</h4><img src="img.png" alt="" /></div>
              <div className="min"><h5>-6000</h5><img src="img.png" alt="" /></div>
            </div>
          </div>
        </div>
      )}

      {/* Profit per hour */}
      {isProfitOpen && (
        <div className="upgrade-popup">
          <button className="close-btn-small" onClick={() => setIsProfitOpen(false)}>&times;</button>
          <div className="poup">
            <div className="po">
              <div className="level"><h2>lvl1</h2></div>
              <div className="ln"></div>
              <div className="xmm"><h4>+2</h4><img src="img.png" alt="" /></div>
              <div className="min"><h5>-1000</h5><img src="img.png" alt="" /></div>
            </div>
            <div className="po">
              <div className="level"><h2>lvl2</h2></div>
              <div className="ln"></div>
              <div className="xmm"><h4>+3</h4><img src="img.png" alt="" /></div>
              <div className="min"><h5>-2500</h5><img src="img.png" alt="" /></div>
            </div>
            <div className="po">
              <div className="level"><h2>lvl3</h2></div>
              <div className="ln"></div>
              <div className="xmm"><h4>+4</h4><img src="img.png" alt="" /></div>
              <div className="min"><h5>-6000</h5><img src="img.png" alt="" /></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Earn;
