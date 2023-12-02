
import React, { useEffect, useRef, useState } from 'react';
import CustomNavbar from '../../components/navbar';
import TimerCard from './TimerCard';
import AudioCard from './AudioCard';

export default function WellBeing() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const timer = useRef();

  useEffect(() => {
    if (isStarted) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [isStarted]);

  const handleStartClick = () => {
    setIsStarted(true);
    setRunning(true);
  };

  const handleToggleTimer = () => {
    setIsStarted(!isStarted);
    setRunning(!running);
  };

  return (
    <div>
      <CustomNavbar />
      <div className='well-being-container'>
        <TimerCard
          time={time}
          handleStartClick={handleStartClick}
          handleToggleTimer={handleToggleTimer}
          running={running}
          setTime={setTime}
        />
        <AudioCard running={running} />
      </div>
      <div className="bg">
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      </div>
    </div>
  );
}
