import React, {useState, useEffect} from 'react'
import './countDownTimer.css'
import {getRemainingTimeUntilMsTimestamp} from './Utils/countdownTimerUtils.js'


const defaultRemainingTime={
  millisecond:'00',
  seconds:'00',
  minutes:'00',
  hours:'00',
  days:'00',
  
}



const CountdownTimer = ({countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
      const intervalId = setInterval(() => {
          updateRemainingTime(countdownTimestampMs);
      }, 1);
      return () => clearInterval(intervalId);
  },[countdownTimestampMs]);

  function updateRemainingTime(countdown) {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return(
    <div className="countdown-timer1">
            <header>
        <div class="overlay">
          <h1>Countdown To The Next Bitcoin Halving</h1>
          </div>
      </header>
      <div className="countdown-timer2"> 
       <div className="frames">
          <span>{remainingTime.days}</span><br></br>
          <span id="hi">Days</span>
        </div>
        <div className="frames">
          <span>{remainingTime.hours}</span><br></br>
          <span id="hi">Hours</span>
        </div>
        <div className="frames">
          <span>{remainingTime.minutes}</span><br></br>
          <span id="hi">Minutes</span>
        </div>
        <div className="frames">
        <span>{remainingTime.seconds}</span><br></br>
        <span id="hi">Seconds</span>
        </div>
        <div className="frames">
        <span id="bye">{remainingTime.milliSeconds}</span><br></br>
        <span id="hi">MS</span>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
       <footer className="footer2" >'</footer>
       <br></br><br></br>
      <h2 className="h2">So, What is Bitcoin halving?</h2>
      <p className="btc-is">
        <li>A Bitcoin halving event occurs when the reward for mining Bitcoin transactions is cut in half.</li>
        <li>Halvings reduce the rate at which new coins are created.</li>
        <li>Previous halvings have correlated with intense boom and bust cycels</li>
        <li>Bitcoin last halved on May 11, 2020, resulting in a block reward of 6.25 BTC.</li>
        <li>The final halving will be in 2140 with the maximum supply of 21 million.</li>
      </p>
      <p>
        hello
      </p>
    </div>  
  );
}

export default CountdownTimer;