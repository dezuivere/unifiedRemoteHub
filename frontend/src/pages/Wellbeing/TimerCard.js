import React from 'react';

const TimerCard = ({ time, handleStartClick, handleToggleTimer, running, setTime }) => {
  return (
    <div className='timer-card'>
      <h2>Let's meditate</h2>
      <p className='timer'>Timer:{format(time)}</p>
      <div className='actions'>
       
        <button onClick={handleToggleTimer}>{running ? 'Stop' : 'Resume'}</button>
        <button onClick={handleStartClick}>Start</button>
        <button onClick={() => { setTime(0); handleToggleTimer(); }}>Restart</button>
      </div>
    </div>
  );
};

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
};

export default TimerCard;
