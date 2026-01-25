import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><NavLink to="/" end>[HOME]</NavLink></li>
        <li><NavLink to="/about">[ABOUT]</NavLink></li>
        <li><NavLink to="/contact">[CONTACT]</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
