import './style.css'
import React from 'react'
import EDU from './Components/countDownTimer/Utils/HalvingEDU.js'

import CountdownTimer from './Components/countDownTimer/countDownTimer';

function App() {
  return (
    <div className="App">
     <CountdownTimer
     countdownTimestampMs={1711251267000}/>
      <EDU />
    </div>
  );
}

export default App;