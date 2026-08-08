import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'HOME', end: true },
  { to: '/photos', label: 'PHOTOS' },
  { to: '/about', label: 'ABOUT' },
  { to: '/contact', label: 'CONTACT' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  // On Photos the nav floats over images, so it earns a soft cream veil
  // once you've scrolled past the first fold. Fixed pages never trigger it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <ul className="navbar-links">
        {LINKS.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              <span className="bracket" aria-hidden="true">[</span>
              {label}
              <span className="bracket" aria-hidden="true">]</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
