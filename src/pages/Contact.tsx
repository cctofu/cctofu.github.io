import Stamp from '../components/Stamp'
import { PageLabel } from '../components/Furniture'
import './Contact.css'

const LINKS = [
  { label: 'Linkedin', handle: '@calvinchang216', href: 'https://linkedin.com/in/calvinchang216' },
  { label: 'Github', handle: '@changcalvin', href: 'https://github.com/changcalvin' },
]

function Contact() {
  return (
    <div className="page--fixed contact">
      <div className="contact__backdrop" />

      <PageLabel primary="Contact" secondary="Lemme know" />

      <div className="stamp-anchor">
        <Stamp className="contact__stamp">
          <h1 className="contact__title">MY LINKS</h1>

          <ul className="contact__links">
            {LINKS.map(({ label, handle, href }) => (
              <li key={label} className="contact__item">
                <span className="contact__label">{label}</span>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <span className="bracket">[</span>
                  {handle}
                  <span className="bracket">]</span>
                </a>
              </li>
            ))}
          </ul>
        </Stamp>
      </div>
    </div>
  )
}

export default Contact
