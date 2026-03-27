import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, User, Send, Check, Ruler } from 'lucide-react'
import './BookOnline.css'

function BookOnline() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    area_length: '',
    area_width: '',
    area_description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="book">
        <section className="book__hero">
          <div className="book__hero-bg" />
          <div className="container book__hero-content">
            <motion.div
              className="book__success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="book__success-icon"><Check size={40} /></div>
              <h2>Quote Request Submitted!</h2>
              <p>Thank you, {form.name || 'friend'}! We'll review your info and get back to you within 1–2 business days with a quote.</p>
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
    <div className="book">
      <section className="book__hero">
        <div className="book__hero-bg" />
        <div className="container book__hero-content">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get a Quote
          </motion.span>
          <motion.h1
            className="book__title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Build a Pool
          </motion.h1>
          <motion.p
            className="book__subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Tell us about the area and we'll put together a personalized quote.
          </motion.p>
        </div>
        <div className="book__wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40C360 100 720 0 1080 60C1260 90 1380 80 1440 70V120H0V40Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <motion.form
            className="quote__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="quote__section">
              <h2 className="quote__section-title">
                <MapPin size={20} />
                About the Area
              </h2>
              <p className="quote__section-desc">Where will the pool go? Give us the dimensions or describe the space.</p>

              <div className="quote__fields">
                <div className="quote__field">
                  <label><MapPin size={14} /> Property Address</label>
                  <input
                    type="text"
                    required
                    placeholder="123 Beach Blvd, South Padre Island, TX"
                    value={form.address}
                    onChange={e => set('address', e.target.value)}
                  />
                </div>

                <div className="quote__row">
                  <div className="quote__field">
                    <label><Ruler size={14} /> Area Length (ft)</label>
                    <input
                      type="number"
                      placeholder="e.g. 40"
                      value={form.area_length}
                      onChange={e => set('area_length', e.target.value)}
                    />
                  </div>
                  <div className="quote__field">
                    <label><Ruler size={14} /> Area Width (ft)</label>
                    <input
                      type="number"
                      placeholder="e.g. 25"
                      value={form.area_width}
                      onChange={e => set('area_width', e.target.value)}
                    />
                  </div>
                </div>

                <div className="quote__field">
                  <label>Describe the Area</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the space — backyard size, any slopes, fencing, access for equipment, or anything else that might help us give you a better quote."
                    value={form.area_description}
                    onChange={e => set('area_description', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="quote__divider" />

            <div className="quote__section">
              <h2 className="quote__section-title">
                <User size={20} />
                Your Contact Info
              </h2>

              <div className="quote__fields">
                <div className="quote__row">
                  <div className="quote__field">
                    <label><User size={14} /> Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                    />
                  </div>
                  <div className="quote__field">
                    <label><Phone size={14} /> Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="(956) 555-1234"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="quote__field">
                  <label><Mail size={14} /> Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn--primary quote__submit">
              <span>Submit Quote Request</span>
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default BookOnline
