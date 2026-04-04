import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Waves, Wrench, Sparkles, Building2,
  CalendarCheck, Droplets, ShieldCheck,
  ChevronRight, Sun, Phone, MapPin
} from 'lucide-react'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className={className}>
      {inView ? children : <div style={{ opacity: 0 }}>{children}</div>}
    </div>
  )
}

const services = [
  { icon: Waves, slug: 'weekly-maintenance', title: 'Weekly Maintenance', desc: 'Comprehensive weekly swimming pool service including thorough chemical balancing, skimming, and vacuuming to ensure crystal-clear water for residents and guests alike.' },
  { icon: Wrench, slug: 'technical-repairs', title: 'Technical Repairs', desc: 'Precision diagnostics and repairs for pumps, filters, heaters, and advanced salt systems. Our technical approach ensures your pool equipment operates with maximum efficiency.' },
  { icon: Sparkles, slug: 'deep-cleaning', title: 'Deep Cleaning', desc: 'Intensive specialized cleaning services including tile scrubbing and debris removal. We restore the structural beauty of your pool through meticulous attention to every surface.' },
  { icon: Building2, slug: 'rental-property-care', title: 'Rental Property Care', desc: 'Reliable, high-frequency maintenance plans designed for vacation rental properties. We synchronize our service schedules to ensure perfect pool conditions between guest rotations.' },
]

const promises = [
  { icon: CalendarCheck, title: 'Weekly Reliability', desc: 'Our consistent local schedule ensures your pool is serviced on the same day every week, providing total peace of mind for both permanent homeowners and rental property managers.' },
  { icon: Droplets, title: 'Crystal-Clear Quality', desc: 'We utilize advanced chemical testing and premium treatments to maintain perfect water balance and pristine clarity, guaranteeing a refreshing and safe swim every single day.' },
  { icon: ShieldCheck, title: 'Professional Care', desc: 'Our specialists handle every detail with precision, from routine cleaning to technical repairs, ensuring your equipment longevity and protecting your property investment.' },
]

const gallery = [
  { title: 'Hydraulic System Maintenance', img: '/images/gallery-1.jpg' },
  { title: 'Geometric Pool Architecture', img: '/images/gallery-2.jpg' },
  { title: 'Precision Control Systems', img: '/images/gallery-3.jpg' },
  { title: 'Chemical Purity Analysis', img: '/images/gallery-4.jpg' },
  { title: 'Filtration Optimization', img: '/images/gallery-5.jpg' },
  { title: 'Salt System Calibration', img: '/images/gallery-6.jpg' },
]

function Home() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          <img src="/images/hero.jpg" alt="" className="hero__bg-img" />
          <div className="hero__overlay" />
        </div>

        <div className="hero__marquee">
          <div className="hero__marquee-track">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className="hero__marquee-text">
                L&D POOLS &bull; QUALITY SERVICE &bull; SOUTH PADRE ISLAND &bull; CRYSTAL CLEAR WATER &bull; RELIABLE MAINTENANCE &bull; POOL PERFECTION &bull; WELLNESS AT HOME &bull; TRUSTED CARE &bull;&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="container hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Sun size={14} />
            <span>Serving South Padre Island &amp; Laguna Heights</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Pool Perfection
            <br />
            <span className="hero__title-accent">At Your Service</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We provide reliable weekly pool maintenance and crystal-clear water for homeowners
            and rental properties. Trusted pool care so you can swim without the stress.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/book-online" className="btn btn--primary">
              <span>Build a Pool</span>
              <ChevronRight size={18} />
            </Link>
            <Link to="/thinking-about-a-pool" className="btn btn--secondary">
              <span>I'm Thinking About a Pool</span>
              <ChevronRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-num">24+</span>
              <span className="hero__stat-label">Years on the Island</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">37</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100+</span>
              <span className="hero__stat-label">Pools Serviced</span>
            </div>
          </motion.div>
        </div>

        <div className="hero__wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40C360 100 720 0 1080 60C1260 90 1380 80 1440 70V120H0V40Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <AnimatedSection className="section-header">
            <motion.span className="section-tag" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              What We Do
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
              Our Services
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
              Service, repairs and maintenance for pools of all sizes
            </motion.p>
          </AnimatedSection>

          <div className="services__grid">
            {services.map((service, i) => (
              <Link key={service.title} to={`/services/${service.slug}`} className="service-card__link">
                <motion.div
                  className="service-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <div className="service-card__icon-wrap">
                    <service.icon size={26} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                  <span className="service-card__cta">
                    Get Started <ChevronRight size={16} />
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="promise" id="promise">
        <div className="container">
          <AnimatedSection className="section-header">
            <motion.span className="section-tag" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Our Commitment
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
              The L&D Promise
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
              Why South Padre Island trusts us with their pools
            </motion.p>
          </AnimatedSection>

          <div className="promise__grid">
            {promises.map((item, i) => (
              <motion.div
                key={item.title}
                className="promise-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="promise-card__icon">
                  <item.icon size={28} />
                </div>
                <h3 className="promise-card__title">{item.title}</h3>
                <p className="promise-card__desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTAL READY */}
      <section className="rental">
        <div className="container">
          <motion.div
            className="rental__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rental__content">
              <span className="section-tag">For Property Managers</span>
              <h2 className="rental__title">Rental Ready</h2>
              <p className="rental__desc">
                We offer specialized pool maintenance designed for the specific needs of rental property owners.
                Our reliable systems ensure crystal-clear water and a pristine poolside experience for every guest arrival.
              </p>
              <Link to="/book-online" className="btn btn--primary">
                <span>Inquire Now</span>
                <ChevronRight size={18} />
              </Link>
            </div>
            <div className="rental__visual">
              <img src="/images/rental.jpg" alt="Rental pool maintenance" className="rental__img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="container">
          <AnimatedSection className="section-header">
            <motion.h2 className="section-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Engineering the Perfect Swim
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
              From complex hydraulic repairs to meticulous chemical management, explore the technical rigor we bring to every property.
            </motion.p>
          </AnimatedSection>

          <div className="gallery__scroll">
            <div className="gallery__track">
              {[...gallery, ...gallery].map((item, i) => (
                <motion.div
                  key={i}
                  className="gallery__item"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (i % gallery.length) * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="gallery__item-inner">
                    <img src={item.img} alt={item.title} className="gallery__item-img" />
                    <h4 className="gallery__item-title">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta__inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta__title">Ready for Crystal-Clear Water?</h2>
            <p className="cta__desc">Get in touch with Karen today for a free consultation.</p>
            <div className="cta__actions">
              <a href="tel:9565610967" className="btn btn--white">
                <Phone size={18} />
                <span>(956) 561-0967</span>
              </a>
              <a href="mailto:Karenjay.9@gmail.com" className="btn btn--outline-white">
                <span>Email Us</span>
              </a>
            </div>
            <div className="cta__address">
              <MapPin size={14} />
              <span>47486 Hwy 100, Laguna Heights, TX 78578</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
