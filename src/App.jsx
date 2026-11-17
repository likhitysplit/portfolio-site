import { useState } from 'react'
import './App.css'
import githubLogo from './assets/github_logo.svg';
import linkedinLogo from './assets/linkedin_logo.png';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <div className = "main-hbox">
          <div className="main-text">
            <h1>hihi! my name is likhitha.</h1>
            <h3> software developer | 2D/3D artist | game dev enthusiast </h3>
            <h3>⚲ greater Boston area</h3>
            <p> 
              I'm an 18 y/o developer and artist currently studying Applied Math/CS 
              and Visual Arts at Brown University. 
            </p>

            <div className="logo-hbox">
            <a href="https://github.com/likhitysplit" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="github" className="logo-img" />
            </a>

            <a href="https://www.linkedin.com/in/likhitha-kosanam-b2525b321/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="linkedin" className="logo-img" />
            </a>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App