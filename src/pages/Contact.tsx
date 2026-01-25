import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-links">
          <div className="contact-item">
            <h2>Linkedin</h2>
            <a href="https://linkedin.com/in/calvinchang216" target="_blank" rel="noopener noreferrer">@calvinchang216</a>
          </div>
          <div className="contact-item">
            <h2>Github</h2>
            <a href="https://github.com/cctofu" target="_blank" rel="noopener noreferrer">@cctofu</a>
          </div>
        </div>
        <div className="photo-strip">
          <img src="/public/contact.png" alt="Photo strip" />
        </div>
      </div>
    </div>
  )
}

export default Contact
