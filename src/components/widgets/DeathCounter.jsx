import React from 'react';
import { useStore } from '../../store/store';
import './DeathCounter.css';

function DeathCounter() {
  const { deathCount, incrementDeaths, decrementDeaths, resetDeaths } =
    useStore();

  return (
    <div className="death-counter-widget">
      <div className="death-label">Deaths</div>
      <div className="death-count">{deathCount}</div>
      <div className="death-controls">
        <button onClick={incrementDeaths} title="Add death">
          +
        </button>
        <button onClick={decrementDeaths} title="Remove death">
          −
        </button>
        <button onClick={resetDeaths} title="Reset">
          ⟲
        </button>
      </div>
    </div>
  );
}

export default DeathCounter;
