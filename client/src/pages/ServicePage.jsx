import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Waves, Wrench, Sparkles, Building2,
  Phone, Mail, User, MapPin, Send, Check, ChevronRight, CalendarDays
} from 'lucide-react'
import './ServicePage.css'

const SERVICE_DATA = {
  'weekly-maintenance': {
    icon: Waves,
    title: 'Weekly Maintenance',
    tagline: 'Keep your pool crystal clear, every week.',
    description: 'Comprehensive weekly swimming pool service including thorough chemical balancing, skimming, and vacuuming to ensure crystal-clear water for residents and guests alike.',
    includes: [
      'Chemical testing & balancing',
      'Surface skimming & debris removal',
      'Vacuum & brush walls and floor',
      'Filter inspection & cleaning',
      'Pump basket cleaning',
      'Water level check',
    ],
    fields: [
      { id: 'pool_type', label: 'Pool Type', type: 'select', options: ['In-ground', 'Above-ground', 'Not sure'] },
      { id: 'pool_size', label: 'Approximate Pool Size', type: 'select', options: ['Small (under 10,000 gal)', 'Medium (10,000–20,000 gal)', 'Large (20,000+ gal)', 'Not sure'] },
      { id: 'current_service', label: 'Currently have pool service?', type: 'select', options: ['Yes — looking to switch', 'No — first time', 'Had one before, but stopped'] },
      { id: 'preferred_day', label: 'Preferred Service Day', type: 'select', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'No preference'] },
      { id: 'notes', label: 'Anything else we should know?', type: 'textarea', placeholder: 'Any issues with the pool, special equipment, pets, gate codes, etc.' },
    ],
  },
  'technical-repairs': {
    icon: Wrench,
    title: 'Technical Repairs',
    tagline: 'Expert diagnostics and repair for your pool equipment.',
    description: 'Precision diagnostics and repairs for pumps, filters, heaters, and advanced salt systems. Our technical approach ensures your pool equipment operates with maximum efficiency.',
    includes: [
      'Pump diagnostics & repair',
      'Filter system repairs',
      'Heater & heat pump service',
      'Salt system troubleshooting',
      'Leak detection',
      'Timer & automation fixes',
    ],
    fields: [
      { id: 'issue', label: 'What seems to be the problem?', type: 'select', options: ['Pump not working', 'Filter issues', 'Heater not heating', 'Salt system problem', 'Leak / water loss', 'Strange noises', 'Other / not sure'] },
      { id: 'urgency', label: 'How urgent is this?', type: 'select', options: ['Emergency — pool is down', 'Soon — within a few days', 'Not urgent — just want it checked'] },
      { id: 'equipment_age', label: 'How old is your equipment?', type: 'select', options: ['Less than 2 years', '2–5 years', '5–10 years', '10+ years', 'Not sure'] },
      { id: 'notes', label: 'Describe the issue', type: 'textarea', placeholder: 'When did it start? Any error lights? What have you tried so far?' },
    ],
  },
  'deep-cleaning': {
    icon: Sparkles,
    title: 'Deep Cleaning',
    tagline: 'Restore your pool to like-new condition.',
    description: 'Intensive specialized cleaning services including tile scrubbing and debris removal. We restore the structural beauty of your pool through meticulous attention to every surface.',
    includes: [
      'Tile line scrubbing & descaling',
      'Full drain & acid wash (if needed)',
      'Surface stain treatment',
      'Heavy debris removal',
      'Filter deep clean',
      'Chemical rebalancing',
    ],
    fields: [
      { id: 'reason', label: 'Reason for deep clean?', type: 'select', options: ['Pool has been sitting unused', 'Green / algae buildup', 'Staining on surfaces', 'Getting ready for a season', 'Preparing to sell property', 'Other'] },
      { id: 'last_service', label: 'When was the pool last serviced?', type: 'select', options: ['Within the last month', '1–3 months ago', '3–6 months ago', '6+ months ago', 'Never / not sure'] },
      { id: 'pool_surface', label: 'Pool surface type', type: 'select', options: ['Plaster', 'Pebble / aggregate', 'Tile', 'Vinyl', 'Not sure'] },
      { id: 'notes', label: 'Anything else?', type: 'textarea', placeholder: 'Describe the current condition, any specific areas of concern...' },
    ],
  },
  'rental-property-care': {
    icon: Building2,
    title: 'Rental Property Care',
    tagline: 'Keep your rental pool guest-ready at all times.',
    description: 'Reliable, high-frequency maintenance plans designed for vacation rental properties. We synchronize our service schedules to ensure perfect pool conditions between guest rotations.',
    includes: [
      'Pre-guest pool preparation',
      'Post-guest cleanup',
      'Flexible scheduling around bookings',
      'Chemical balancing for heavy use',
      'Equipment monitoring',
      'Photo reports for property managers',
    ],
    fields: [
      { id: 'num_properties', label: 'How many rental properties?', type: 'select', options: ['1', '2–3', '4–5', '6+'] },
      { id: 'rental_platform', label: 'Rental platform', type: 'select', options: ['Airbnb', 'VRBO', 'Both', 'Property management company', 'Other'] },
      { id: 'turnover_frequency', label: 'How often do guests turn over?', type: 'select', options: ['Multiple times a week', 'Weekly', 'Every 2 weeks', 'Monthly', 'Varies'] },
      { id: 'current_service', label: 'Currently have pool service?', type: 'select', options: ['Yes — looking to switch', 'No — need to start', 'Inconsistent / unreliable'] },
      { id: 'notes', label: 'Tell us about your properties', type: 'textarea', placeholder: 'Property addresses, special requirements, booking calendar access, gate codes, etc.' },
    ],
  },
}

function ServicePage() {
  const { slug } = useParams()
  const service = SERVICE_DATA[slug]
  const [form, setForm] = useState({})
  const [contact, setContact] = useState({ name: '', phone: '', email: '', address: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!service) {
    return (
      <div className="sp">
        <section className="sp__hero">
          <div className="sp__hero-bg" />
          <div className="container sp__hero-content">
            <h1 className="sp__title">Service Not Found</h1>
            <p className="sp__subtitle">We couldn't find that service.</p>
            <Link to="/" className="btn btn--primary">Back to Home</Link>
          </div>
        </section>
      </div>
    )
  }

  const Icon = service.icon

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="sp">
        <section className="sp__hero">
          <div className="sp__hero-bg" />
          <div className="container sp__hero-content">
            <motion.div
              className="sp__success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="sp__success-icon"><Check size={40} /></div>
              <h2>Request Submitted!</h2>
              <p>Thanks, {contact.name || 'friend'}! We'll review your {service.title.toLowerCase()} request and reach out within 1–2 business days.</p>
              <a href="tel:9565610967" className="btn btn--primary">
                <Phone size={16} />
                <span>Call Us: (956) 561-0967</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="sp">
      <section className="sp__hero">
        <div className="sp__hero-bg" />
        <div className="container sp__hero-content">
          <motion.div
            className="sp__icon-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Icon size={32} />
          </motion.div>
          <motion.h1
            className="sp__title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="sp__subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {service.tagline}
          </motion.p>
        </div>
        <div className="sp__wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40C360 100 720 0 1080 60C1260 90 1380 80 1440 70V120H0V40Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      <section className="sp__body">
        <div className="container">
          <div className="sp__layout">
            {/* Sidebar */}
            <motion.div
              className="sp__sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="sp__sidebar-title">What's Included</h3>
              <p className="sp__sidebar-desc">{service.description}</p>
              <ul className="sp__includes">
                {service.includes.map(item => (
                  <li key={item}>
                    <Check size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="sp__sidebar-cta">
                <p>Prefer to talk?</p>
                <a href="tel:9565610967" className="btn btn--secondary">
                  <Phone size={16} />
                  <span>(956) 561-0967</span>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              className="sp__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="sp__form-title">Request {service.title}</h2>
              <p className="sp__form-desc">Fill out the details below and we'll get back to you.</p>

              <div className="sp__fields">
                {service.fields.map(field => (
                  <div key={field.id} className="sp__field">
                    <label>{field.label}</label>
                    {field.type === 'select' ? (
                      <select
                        value={form[field.id] || ''}
                        onChange={e => setForm(p => ({ ...p, [field.id]: e.target.value }))}
                      >
                        <option value="">Select...</option>
                        {field.options.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <textarea
                        rows={3}
                        placeholder={field.placeholder || ''}
                        value={form[field.id] || ''}
                        onChange={e => setForm(p => ({ ...p, [field.id]: e.target.value }))}
                      />
                    )}
                  </div>
                ))}

                <div className="sp__divider" />

                <h3 className="sp__contact-title">Your Contact Info</h3>
                <div className="sp__row">
                  <div className="sp__field">
                    <label><User size={14} /> Name</label>
                    <input type="text" required placeholder="John Doe" value={contact.name} onChange={e => setContact(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="sp__field">
                    <label><Phone size={14} /> Phone</label>
                    <input type="tel" required placeholder="(956) 555-1234" value={contact.phone} onChange={e => setContact(p => ({ ...p, phone: e.target.value }))} />
                  </div>
                </div>
                <div className="sp__row">
                  <div className="sp__field">
                    <label><Mail size={14} /> Email</label>
                    <input type="email" required placeholder="john@email.com" value={contact.email} onChange={e => setContact(p => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div className="sp__field">
                    <label><MapPin size={14} /> Address</label>
                    <input type="text" placeholder="South Padre Island, TX" value={contact.address} onChange={e => setContact(p => ({ ...p, address: e.target.value }))} />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn--primary sp__submit">
                <span>Submit Request</span>
                <Send size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage
