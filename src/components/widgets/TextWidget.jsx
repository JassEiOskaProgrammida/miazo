import React, { useState } from 'react';
import { useStore } from '../../store/store';
import './TextWidget.css';

function TextWidget() {
  const { textContent, setTextContent } = useStore();
  const [editMode, setEditMode] = useState(false);
  const [tempText, setTempText] = useState(textContent);

  const handleSave = () => {
    setTextContent(tempText);
    setEditMode(false);
  };

  return (
    <div className="text-widget">
      {editMode ? (
        <input
          type="text"
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          onBlur={handleSave}
          onKeyPress={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
          className="text-input"
        />
      ) : (
        <div className="text-display" onClick={() => setEditMode(true)}>
          {textContent}
        </div>
      )}
    </div>
  );
}

export default TextWidget;
