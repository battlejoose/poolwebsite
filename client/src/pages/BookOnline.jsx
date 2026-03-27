import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Waves, Wrench, Settings, ChevronRight, X, Check, DollarSign, Clock, Star } from 'lucide-react'
import './BookOnline.css'

const services = [
  {
    id: 1,
    title: 'Weekly Pool Service',
    description: 'Crystal-clear pool maintenance',
    details: 'Comprehensive weekly swimming pool service including thorough chemical balancing, skimming, and vacuuming to ensure crystal-clear water for residents and guests alike.',
    price: 100,
    icon: Waves,
    features: ['Chemical Balancing', 'Surface Skimming', 'Vacuum & Brushing', 'Filter Check'],
    duration: 'Weekly',
  },
  {
    id: 2,
    title: 'Pool Repairs',
    description: 'Expert pool repair solutions',
    details: 'Precision diagnostics and repairs for pumps, filters, heaters, and advanced salt systems. Our technical approach ensures your pool equipment operates with maximum efficiency.',
    price: 150,
    icon: Wrench,
    features: ['Pump Diagnostics', 'Filter Repair', 'Heater Service', 'Salt System Fix'],
    duration: 'Per Visit',
  },
  {
    id: 3,
    title: 'Equipment Check',
    description: 'Efficient pool equipment maintenance',
    details: 'Full inspection of pumps, filters, heaters, and salt systems. We identify potential issues before they become costly repairs.',
    price: 75,
    icon: Settings,
    features: ['Full Inspection', 'Performance Report', 'Preventive Tips', 'Parts Assessment'],
    duration: 'Per Visit',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12 }
  })
}

function BookOnline() {
  const [selectedService, setSelectedService] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSelectedService(null)
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', date: '', message: '' })
    }, 3000)
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
            Schedule Your Service
          </motion.span>
          <motion.h1
            className="book__title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Book Online
          </motion.h1>
          <motion.p
            className="book__subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Choose a service below and book your appointment in seconds.
          </motion.p>
        </div>
        <div className="book__wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40C360 100 720 0 1080 60C1260 90 1380 80 1440 70V120H0V40Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      <section className="book__services">
        <div className="container">
          <div className="book__grid">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="book-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
              >
                <div className="book-card__header">
                  <div className="book-card__icon">
                    <service.icon size={26} />
                  </div>
                  <div className="book-card__badge">
                    <Clock size={12} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="book-card__title">{service.title}</h3>
                <p className="book-card__desc">{service.description}</p>

                <div className="book-card__features">
                  {service.features.map((f) => (
                    <div key={f} className="book-card__feature">
                      <Check size={14} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="book-card__footer">
                  <div className="book-card__price">
                    <span className="book-card__price-dollar">$</span>
                    <span className="book-card__price-amount">{service.price}</span>
                    <span className="book-card__price-label">USD</span>
                  </div>
                  <button
                    className="btn btn--primary book-card__btn"
                    onClick={() => setSelectedService(service)}
                  >
                    <span>Book Now</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !submitted && setSelectedService(null)}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {submitted ? (
                <div className="modal__success">
                  <div className="modal__success-icon">
                    <Check size={36} />
                  </div>
                  <h3>Booking Confirmed!</h3>
                  <p>We'll reach out to confirm your {selectedService.title} appointment.</p>
                </div>
              ) : (
                <>
                  <div className="modal__header">
                    <div>
                      <h3 className="modal__title">{selectedService.title}</h3>
                      <p className="modal__price">${selectedService.price} USD</p>
                    </div>
                    <button className="modal__close" onClick={() => setSelectedService(null)}>
                      <X size={18} />
                    </button>
                  </div>

                  <form className="modal__form" onSubmit={handleSubmit}>
                    <div className="modal__field">
                      <label>Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="modal__row">
                      <div className="modal__field">
                        <label>Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@email.com"
                        />
                      </div>
                      <div className="modal__field">
                        <label>Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(956) 555-1234"
                        />
                      </div>
                    </div>
                    <div className="modal__field">
                      <label>Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="modal__field">
                      <label>Additional Notes</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Any special requests or details..."
                      />
                    </div>
                    <button type="submit" className="btn btn--primary modal__submit">
                      <span>Confirm Booking</span>
                      <Star size={16} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BookOnline
