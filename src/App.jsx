import React from 'react';
import { useStore } from './store/store';
import MainUI from './components/MainUI';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MainUI />
    </div>
  );
}

export default App;
