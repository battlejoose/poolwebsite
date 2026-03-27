import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.svg" alt="L&D Pools" className="navbar__logo-img" />
        </Link>

        <div className="navbar__links">
          <Link
            to="/"
            className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/book-online"
            className={`navbar__link ${location.pathname === '/book-online' ? 'navbar__link--active' : ''}`}
          >
            Book Online
          </Link>
          <a href="#services" className="navbar__link">Services</a>
          <a href="#promise" className="navbar__link">About</a>
        </div>

        <a href="tel:9565610967" className="navbar__cta">
          <Phone size={16} />
          <span>(956) 561-0967</span>
        </a>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="navbar__mobile-link">Home</Link>
            <Link to="/book-online" className="navbar__mobile-link">Book Online</Link>
            <a href="#services" className="navbar__mobile-link">Services</a>
            <a href="#promise" className="navbar__mobile-link">About</a>
            <a href="tel:9565610967" className="navbar__mobile-cta">
              <Phone size={16} />
              <span>Call (956) 561-0967</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
