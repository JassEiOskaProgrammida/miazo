import React, { useEffect } from 'react';
import { useStore } from '../../store/store';
import './Timer.css';

function Timer() {
  const { timerTime, timerRunning, setTimerRunning, setTimerTime, resetTimer } =
    useStore();

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        setTimerTime(timerTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, timerTime, setTimerTime]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-widget">
      <div className="timer-display">{formatTime(timerTime)}</div>
      <div className="timer-controls">
        <button
          onClick={() => setTimerRunning(!timerRunning)}
          title={timerRunning ? 'Pause' : 'Start'}
        >
          {timerRunning ? '⏸' : '▶'}
        </button>
        <button onClick={resetTimer} title="Reset">
          ⟲
        </button>
      </div>
    </div>
  );
}

export default Timer;
