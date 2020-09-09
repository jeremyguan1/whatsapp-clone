import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chart from './Chat';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chart />
      </div>
    </div>
  );
}

export default App;
