import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/logo.svg" alt="L&D Pools" className="footer__logo-img" />
            </Link>
            <p className="footer__tagline">Service, Repairs and Maintenance</p>
            <p className="footer__desc">
              Trusted pool care in South Padre Island with decades of experience.
              Crystal-clear water for homeowners and rental properties.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/book-online" className="footer__link">Book Online</Link>
            <a href="#services" className="footer__link">Our Services</a>
            <a href="#promise" className="footer__link">Our Promise</a>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <span className="footer__link">Weekly Maintenance</span>
            <span className="footer__link">Technical Repairs</span>
            <span className="footer__link">Deep Cleaning</span>
            <span className="footer__link">Rental Property Care</span>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <a href="mailto:Karenjay.9@gmail.com" className="footer__contact">
              <Mail size={16} />
              <span>Karenjay.9@gmail.com</span>
            </a>
            <a href="tel:9565610967" className="footer__contact">
              <Phone size={16} />
              <span>(956) 561-0967</span>
            </a>
            <div className="footer__contact">
              <MapPin size={16} />
              <span>47486 Hwy 100<br/>Laguna Heights, TX 78578</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__line" />
          <p className="footer__copy">&copy; 2026 L&D Pools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
