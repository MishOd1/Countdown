import './style.css'
import React from 'react'
import EDU from './Components/countDownTimer/Utils/HalvingEDU.js'
import Fotter2 from './Fotter.js'
import CountdownTimer from './Components/countDownTimer/countDownTimer';
import Graph from './Graph.js'
import Graph2 from './Graph2.js'
function App() {
  return (
    <div>
      
      <div className="App">
      <CountdownTimer
      countdownTimestampMs={1711251267000}/>
        <div className="Graph2">
        <Graph2/>
        </div>
        <EDU />
        <div className="Graph1">
          <Graph />
        </div>
        
      </div>
      <footer className="footerMain">
          <Fotter2 />
        </footer>
    </div>
  );
}

export default App;