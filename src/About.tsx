import './App.css'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0
    }}>
      <button className="home-button" onClick={() => navigate('/')}>
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
    </div>
  )
}

export default About