import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';


// import components
import MiComponente from './components/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
<MiComponente/>

      </header>
    </div>
  );
}

export default App;