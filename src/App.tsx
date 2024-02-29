import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Interview } from 'src/components/Interview';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Interview />
      </header>
    </div>
  );
};

export default App;
