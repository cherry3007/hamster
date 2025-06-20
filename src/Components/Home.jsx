import React, { useState } from 'react';
import "./Home.css";

const Home = () => {
  const [isCardsOpen, setIsCardsOpen] = useState(false);
  const [isCardsOpen1, setIsCardsOpen1] = useState(false);
  const [isCardsOpen2, setIsCardsOpen2] = useState(false);
  const [isCardsOpen3, setIsCardsOpen3] = useState(false);
  const [isCardsOpen4, setIsCardsOpen4] = useState(false);



  return (
    <div>
      <div className="naav">
        <div className="nav" onClick={() => setIsCardsOpen(true)}>
          <img src="u.png" alt="" />
          <h5>Exchange</h5>
        </div>
        <div className="nav1" onClick={() => setIsCardsOpen1(true)}>
          <img src="u1.png" alt="" />
          <h5>Mine</h5>
        </div>
        <div className="nav2" onClick={() => setIsCardsOpen2(true)}>
          <img src="u2.png" alt="" />
          <h5>Friends</h5>
        </div>
        <div className="nav3" onClick={() => setIsCardsOpen3(true)}>
          <img src="u3.png" alt="" />
          <h5>Earn</h5>
        </div>
        <div className="nav4" onClick={() => setIsCardsOpen4(true)}>
          <img src="u4.png" alt="" />
          <h5>Airdrop</h5>
        </div>
      </div>


      
      {isCardsOpen && (
        <div className="modal-backdrop" onClick={() => setIsCardsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsCardsOpen(false)}>&times;</button>
            <div className="modaals">

           
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
       {isCardsOpen1 && (
        <div className="modal-backdrop" onClick={() => setIsCardsOpen1(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsCardsOpen1(false)}>&times;</button>
            <div className="modaals">

           
              <div className="modals">
                <div className="img_modals">
                  <img src="Exclude.png" alt="" />
                  <div className="texts_img">
                    <h2>Cloud Miner</h2>
                    <p>Earn passive income</p>
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

          
              <div className="modals modals1">
                <div className="img_modals1">
                  <img src="mem.png" alt="" />
                  <div className="texts_img1">
                    <h2>ASIC Rig</h2>
                    <p>Boost mining power</p>
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

              <div className="modals2">
                <div className="img_modals2">
                  <img src="x10.png" alt="" />
                  <div className="texts_img2">
                    <h2>GPU Farm</h2>
                    <p>Advanced GPU mining</p>
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

{isCardsOpen2 && (
        <div className="modal-backdrop" onClick={() => setIsCardsOpen2(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsCardsOpen2(false)}>&times;</button>
            <div className="modaals">

           
              <div className="modals">
                <div className="img_modals">
                  <img src="Exclude.png" alt="" />
                  <div className="texts_img">
                    <h2>Invite Friends</h2>
                    <p>Get rewards for each invite</p>
                    <div className="xz">
                      <img src="img.png" alt="" />
                      <h3>120</h3>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="lvl"><h3>lvl 4</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" className='coinimg' />
                    <h3>192</h3>
                  </div>
                </div>
              </div>

          
              <div className="modals modals1">
                <div className="img_modals1">
                  <img src="mem.png" alt="" />
                  <div className="texts_img1">
                    <h2>Team Bonus</h2>
                    <p>Earn from your network</p>
                    <div className="xz1">
                      <img src="img.png" alt="" />
                      <h3>376</h3>
                    </div>
                  </div>
                  <div className="line1"></div>
                  <div className="lvl"><h3>lvl 6</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" />
                    <h3>2.3k</h3>
                  </div>
                </div>
              </div>

              <div className="modals2">
                <div className="img_modals2">
                  <img src="x10.png" alt="" />
                  <div className="texts_img2">
                    <h2>Leaderboards </h2>
                    <p>Top inviters rank</p>
                    <div className="xz2">
                      <img src="img.png" alt="" />
                      <h3>997</h3>
                    </div>
                  </div>
                  <div className="line2"></div>
                  <div className="lvl"><h3>lvl 8</h3></div>
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


{isCardsOpen3 && (
        <div className="modal-backdrop" onClick={() => setIsCardsOpen3(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsCardsOpen3(false)}>&times;</button>
            <div className="modaals">

           
              <div className="modals">
                <div className="img_modals">
                  <img src="Exclude.png" alt="" />
                  <div className="texts_img">
                    <h2>Earn per Tap</h2>
                    <p>Click to collect coins</p>
                    <div className="xz">
                      <img src="img.png" alt="" />
                      <h3>120</h3>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="lvl"><h3>lvl 4</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" className='coinimg' />
                    <h3>192</h3>
                  </div>
                </div>
              </div>

          
              <div className="modals modals1">
                <div className="img_modals1">
                  <img src="mem.png" alt="" />
                  <div className="texts_img1">
                    <h2>Hourly Profit</h2>
                    <p>Get rewards automatically</p>
                    <div className="xz1">
                      <img src="img.png" alt="" />
                      <h3>376</h3>
                    </div>
                  </div>
                  <div className="line1"></div>
                  <div className="lvl"><h3>lvl 6</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" />
                    <h3>2.3k</h3>
                  </div>
                </div>
              </div>

              <div className="modals2">
                <div className="img_modals2">
                  <img src="x10.png" alt="" />
                  <div className="texts_img2">
                    <h2>Daily Tasks </h2>
                    <p>Complete and earn more</p>
                    <div className="xz2">
                      <img src="img.png" alt="" />
                      <h3>997</h3>
                    </div>
                  </div>
                  <div className="line2"></div>
                  <div className="lvl"><h3>lvl 8</h3></div>
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

{isCardsOpen4 && (
        <div className="modal-backdrop" onClick={() => setIsCardsOpen4(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsCardsOpen4(false)}>&times;</button>
            <div className="modaals">

           
              <div className="modals">
                <div className="img_modals">
                  <img src="Exclude.png" alt="" />
                  <div className="texts_img">
                    <h2>Daily Airdrop</h2>
                    <p>Claim free coins every day</p>
                    <div className="xz">
                      <img src="img.png" alt="" />
                      <h3>120</h3>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="lvl"><h3>lvl 4</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" className='coinimg' />
                    <h3>192</h3>
                  </div>
                </div>
              </div>

          
              <div className="modals modals1">
                <div className="img_modals1">
                  <img src="mem.png" alt="" />
                  <div className="texts_img1">
                    <h2>Special Drop</h2>
                    <p>Limited-time giveaways</p>
                    <div className="xz1">
                      <img src="img.png" alt="" />
                      <h3>376</h3>
                    </div>
                  </div>
                  <div className="line1"></div>
                  <div className="lvl"><h3>lvl 6</h3></div>
                  <div className="lines"></div>
                  <div className="cooin">
                    <img src="img.png" alt="" />
                    <h3>2.3k</h3>
                  </div>
                </div>
              </div>

              <div className="modals2">
                <div className="img_modals2">
                  <img src="x10.png" alt="" />
                  <div className="texts_img2">
                    <h2>Invite Bonus</h2>
                    <p>Get airdrops for referrals</p>
                    <div className="xz2">
                      <img src="img.png" alt="" />
                      <h3>997</h3>
                    </div>
                  </div>
                  <div className="line2"></div>
                  <div className="lvl"><h3>lvl 8</h3></div>
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
