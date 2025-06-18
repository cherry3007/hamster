import React, { useState } from 'react';
import "./Home.css";

const Home = () => {
  const [isCardsOpen, setIsCardsOpen] = useState(false);

  return (
    <div>
      <div className="naav">
        <div className="nav" onClick={() => setIsCardsOpen(true)}>
          <img src="u.png" alt="" />
          <h5>Exchange</h5>
        </div>
        <div className="nav1">
          <img src="u1.png" alt="" />
          <h5>Mine</h5>
        </div>
        <div className="nav2">
          <img src="u2.png" alt="" />
          <h5>Friends</h5>
        </div>
        <div className="nav3">
          <img src="u3.png" alt="" />
          <h5>Earn</h5>
        </div>
        <div className="nav4">
          <img src="u4.png" alt="" />
          <h5>Airdrop</h5>
        </div>
      </div>


      
      {isCardsOpen && (
        <div className="modal-backdrop" onClick={() => setIsCardsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsCardsOpen(false)}>&times;</button>
            <div className="modaals">

              {/* 1 */}
              <div className="modals">
                <div className="img_modals">
                  <img src="Exclude.png" alt="" />
                  <div className="texts_img">
                    <h2>Top 10 cmc pairs</h2>
                    <p>Profit per hour</p>
                    <div className="xz">
                      <img src="img.png" alt="" />
                      <h3>120</h3>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="lvl"><h3>lvl 1</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" className='coinimg' />
                    <h3>192</h3>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div className="modals modals1">
                <div className="img_modals1">
                  <img src="mem.png" alt="" />
                  <div className="texts_img1">
                    <h2>Meme coins</h2>
                    <p>Profit per hour</p>
                    <div className="xz1">
                      <img src="img.png" alt="" />
                      <h3>376</h3>
                    </div>
                  </div>
                  <div className="line1"></div>
                  <div className="lvl"><h3>lvl 1</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" />
                    <h3>2.3k</h3>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="modals2">
                <div className="img_modals2">
                  <img src="x10.png" alt="" />
                  <div className="texts_img2">
                    <h2>Margin trading x10</h2>
                    <p>Profit per hour</p>
                    <div className="xz2">
                      <img src="img.png" alt="" />
                      <h3>997</h3>
                    </div>
                  </div>
                  <div className="line2"></div>
                  <div className="lvl"><h3>lvl 1</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" />
                    <h3>11.2k</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
