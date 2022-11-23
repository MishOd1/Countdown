import React, {useState, useEffect} from 'react'
import './countDownTimer.css'
import {getRemainingTimeUntilMsTimestamp} from './Utils/countdownTimerUtils.js'


const defaultRemainingTime={
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
      }, 1000);
      return () => clearInterval(intervalId);
  },[countdownTimestampMs]);

  function updateRemainingTime(countdown) {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return(
    <div className="countdown-timer1">
      <div className="countdown-timer2"> 
        <span>{remainingTime.days}</span>
        <span>Days</span>
        <span>{remainingTime.hours}</span>
        <span>Hours</span>
        <span>{remainingTime.minutes}</span>
        <span>Minutes</span>
        <span>{remainingTime.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>  
  );
}

export default CountdownTimer;