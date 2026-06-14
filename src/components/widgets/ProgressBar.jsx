import React, { useState } from 'react';
import { useStore } from '../../store/store';
import './ProgressBar.css';

function ProgressBar() {
  const { progressGoal, progressCurrent, setProgressGoal, setProgressCurrent } =
    useStore();
  const [editMode, setEditMode] = useState(false);
  const [tempGoal, setTempGoal] = useState(progressGoal);

  const percentage = Math.min((progressCurrent / progressGoal) * 100, 100);

  const handleSetGoal = () => {
    setProgressGoal(parseInt(tempGoal) || 100);
    setEditMode(false);
  };

  return (
    <div className="progress-widget">
      <div className="progress-label">
        {editMode ? (
          <input
            type="number"
            value={tempGoal}
            onChange={(e) => setTempGoal(e.target.value)}
            onBlur={handleSetGoal}
            onKeyPress={(e) => e.key === 'Enter' && handleSetGoal()}
            autoFocus
          />
        ) : (
          <span onClick={() => setEditMode(true)}>
            Goal: {progressCurrent} / {progressGoal}
          </span>
        )}
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="progress-controls">
        <button onClick={() => setProgressCurrent(progressCurrent + 1)}>+</button>
        <button onClick={() => setProgressCurrent(Math.max(0, progressCurrent - 1))}>
          −
        </button>
        <button onClick={() => setProgressCurrent(0)}>⟲</button>
      </div>
    </div>
  );
}

export default ProgressBar;
