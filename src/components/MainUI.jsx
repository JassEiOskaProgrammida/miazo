import React, { useState } from 'react';
import { useStore } from '../store/store';
import Timer from './widgets/Timer';
import DeathCounter from './widgets/DeathCounter';
import ProgressBar from './widgets/ProgressBar';
import TextWidget from './widgets/TextWidget';
import ChatFeed from './widgets/ChatFeed';
import './MainUI.css';

function MainUI() {
  const {
    showTimer,
    showDeathCounter,
    showProgressBar,
    showTextWidget,
    showChatFeed,
    toggleWidget,
  } = useStore();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-ui">
      {/* Widgets */}
      {showTimer && <Timer />}
      {showDeathCounter && <DeathCounter />}
      {showProgressBar && <ProgressBar />}
      {showTextWidget && <TextWidget />}
      {showChatFeed && <ChatFeed />}

      {/* Control Button */}
      <div className="control-panel">
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          title="Toggle widgets"
        >
          ⚙️
        </button>

        {menuOpen && (
          <div className="menu-dropdown">
            <label>
              <input
                type="checkbox"
                checked={showTimer}
                onChange={() => toggleWidget('showTimer')}
              />
              Timer
            </label>
            <label>
              <input
                type="checkbox"
                checked={showDeathCounter}
                onChange={() => toggleWidget('showDeathCounter')}
              />
              Death Counter
            </label>
            <label>
              <input
                type="checkbox"
                checked={showProgressBar}
                onChange={() => toggleWidget('showProgressBar')}
              />
              Progress Bar
            </label>
            <label>
              <input
                type="checkbox"
                checked={showTextWidget}
                onChange={() => toggleWidget('showTextWidget')}
              />
              Text Widget
            </label>
            <label>
              <input
                type="checkbox"
                checked={showChatFeed}
                onChange={() => toggleWidget('showChatFeed')}
              />
              Chat Feed
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainUI;
