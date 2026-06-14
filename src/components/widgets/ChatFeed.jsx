import React, { useState } from 'react';
import { useStore } from '../../store/store';
import './ChatFeed.css';

function ChatFeed() {
  const { chatMessages, addChatMessage } = useStore();
  const [inputValue, setInputValue] = useState('');

  const handleAddMessage = () => {
    if (inputValue.trim()) {
      addChatMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="chat-feed-widget">
      <div className="chat-messages">
        {chatMessages.map((msg) => (
          <div key={msg.id} className="chat-message">
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddMessage()}
          placeholder="Add message..."
          className="chat-input"
        />
        <button onClick={handleAddMessage} className="chat-send-btn">
          ↗
        </button>
      </div>
    </div>
  );
}

export default ChatFeed;
