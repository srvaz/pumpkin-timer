import React from 'react';

import './styles.css';

import Header from './components/Header';
import Timer from './components/Timer';

function App() {
  return (
    <div className="main-container">
      <Header title="PumpkinTimer()" />
      <Timer seconds="3000" />
    </div>
  );
}

export default App;
