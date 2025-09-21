import './App.css'
import { useNavigate } from 'react-router-dom'
import Silk from './components/Backgrounds/Silk/Silk';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import documentIcon from './assets/document.png';

function App() {
  const navigate = useNavigate()

  return (
    <div className="app-container">
      <Silk
        speed={5}
        scale={1}
        color="#748873"
        noiseIntensity={1.5}
        rotation={0}
      />
      <button className="top-left-title">
        CALVIN CHANG
      </button>
      <nav className="nav-container">
        <button className="nav-button" onClick={() => navigate('/about')}>
          ABOUT
        </button>
        <button className="nav-button" onClick={() => navigate('/projects')}>
          PROJECTS
        </button>
        <button className="nav-button" onClick={() => navigate('/experiences')}>
          EXPERIENCES
        </button>
      </nav>
      <div className="center-title">
        CALVIN CHANG
      </div>
      <div className="center-subtitle">
        I'm a Software and AI Engineer
      </div>
      <div className="social-icons">
        <a href="https://github.com/cctofu" className="social-icon">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/calvinchang216" className="social-icon">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="#" className="social-icon">
          <img src={documentIcon} alt="Resume" />
        </a>
      </div>
    </div>
  )
}

export default App
