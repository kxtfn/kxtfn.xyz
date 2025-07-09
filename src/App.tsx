import React, { useState } from 'react';
import logo from './img/logo.svg';
import Projects from './projects';
import Blog from './blog';
import About from './about';
import Home from './home';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="App">
      <div className="content-box">
        <header className="navbar">
        <a href="#" className="logo-link" onClick={() => setPage('home')}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
          <nav className="nav-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }}>About</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('projects'); }}>Projects</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('blog'); }}>Blog</a>
          </nav>
        </header>

        <main>
          {page === 'home' && <Home />}
          {page === 'projects' && <Projects/>}
          {page === 'blog' && <Blog />}
          {page === 'about' && <About />}
        </main>
    
        <footer>
          <p>© 2025 Igor</p>
        </footer>

      </div>
    </div>
  );

}

export default App;
