import React, { useState } from 'react';
import Home from './Components/Home';
import Earn from './Components/Earn';
import Coin from './Components/Coin';
import Hamster from './Components/Hamster';
import Boost from './Components/Boost';

const App = () => {
  const [coins, setCoins] = useState(0);

  return (
    <div className='container'>
      <h1>Hamster Kombat</h1>
      <Earn />
      <Coin coins={coins} />                                         {}
      <Hamster coins={coins} setCoins={setCoins} /> 
      <Boost/>                 {}
      <Home />
    </div>
  );
};

export default App;
