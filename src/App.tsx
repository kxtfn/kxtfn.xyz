import React from 'react';
import logo from './img/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-box">
        <header><p>kxtfn</p></header>
    
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome!</h1>
          <p>You've landed on my personal page — a place where I showcase side projects, 
          fun features, and random things I'm working on.</p>
          <h1>About me</h1>
          <p>This is a simple React application.</p>
        </main>
    
        <footer>
          <p>© 2025 Igor</p>
        </footer>
      </div>
    </div>
  );

}

export default App;
