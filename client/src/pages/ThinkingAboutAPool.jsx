import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HelpCircle, ChevronRight, ChevronLeft, Check,
  Phone, Send, MapPin, User, Mail, Ruler
} from 'lucide-react'
import './ThinkingAboutAPool.css'

const QUESTIONS = [
  {
    id: 'reason',
    question: "What's the main reason you want a pool?",
    options: ['Family fun & kids', 'Relaxation & entertaining', 'Exercise & fitness', 'Increase property value', 'Not sure yet — just exploring'],
  },
  {
    id: 'timeline',
    question: 'When are you hoping to have a pool?',
    options: ['As soon as possible', 'Within 3–6 months', 'Within a year', 'No rush — just getting ideas'],
  },
  {
    id: 'yard',
    question: 'How would you describe your yard?',
    options: ['Big open backyard', 'Medium-sized yard', 'Small or tight space', 'Not sure about the size'],
  },
  {
    id: 'budget',
    question: 'Do you have a budget in mind?',
    options: ['Under $30,000', '$30,000 – $50,000', '$50,000 – $75,000', '$75,000+', 'No idea yet'],
  },
  {
    id: 'features',
    question: "Any features you're dreaming about?",
    options: ['Just a simple pool', 'Spa / hot tub', 'Waterfall or fountain', 'Tanning ledge', 'I want it all!', 'Not sure yet'],
    multi: true,
  },
]

function ThinkingAboutAPool() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [contact, setContact] = useState({ name: '', phone: '', email: '', address: '' })
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState(1)

  const totalSteps = QUESTIONS.length + 1
  const isContactStep = step === QUESTIONS.length
  const currentQ = QUESTIONS[step]

  const selectAnswer = (questionId, option) => {
    const q = QUESTIONS.find(q => q.id === questionId)
    if (q.multi) {
      setAnswers(prev => {
        const current = prev[questionId] || []
        return {
          ...prev,
          [questionId]: current.includes(option)
            ? current.filter(o => o !== option)
            : [...current, option]
        }
      })
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: option }))
      setTimeout(() => {
        setDirection(1)
        setStep(s => Math.min(s + 1, totalSteps - 1))
      }, 300)
    }
  }

  const goNext = () => { setDirection(1); setStep(s => Math.min(s + 1, totalSteps - 1)) }
  const goPrev = () => { setDirection(-1); setStep(s => Math.max(s - 1, 0)) }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const fadeVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -50 : 50 }),
  }

  if (submitted) {
    return (
      <div className="thinking">
        <section className="thinking__hero">
          <div className="thinking__hero-bg" />
          <div className="container thinking__hero-content">
            <motion.div
              className="thinking__success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="thinking__success-icon"><Check size={40} /></div>
              <h2>We've Got Your Info!</h2>
              <p>Thanks, {contact.name || 'friend'}! Based on your answers, we'll put together some ideas and reach out within 1–2 business days.</p>
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
    <div className="thinking">
      <section className="thinking__hero">
        <div className="thinking__hero-bg" />
        <div className="container thinking__hero-content">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's Figure It Out Together
          </motion.span>
          <motion.h1
            className="thinking__title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm Thinking About a Pool
          </motion.h1>
          <motion.p
            className="thinking__subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Not sure where to start? Answer a few quick questions and we'll help guide you toward the right pool for your space and budget.
          </motion.p>
        </div>
        <div className="thinking__wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40C360 100 720 0 1080 60C1260 90 1380 80 1440 70V120H0V40Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      <section className="thinking__body">
        <div className="container">
          {/* Progress */}
          <div className="thinking__progress">
            <div className="thinking__progress-bar">
              <div
                className="thinking__progress-fill"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
            <span className="thinking__progress-text">{step + 1} of {totalSteps}</span>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait" custom={direction}>
              {!isContactStep && currentQ && (
                <motion.div
                  key={currentQ.id}
                  className="thinking__card"
                  custom={direction}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                >
                  <div className="thinking__card-number">Question {step + 1}</div>
                  <h2 className="thinking__card-question">{currentQ.question}</h2>
                  <div className="thinking__options">
                    {currentQ.options.map(option => {
                      const isSelected = currentQ.multi
                        ? (answers[currentQ.id] || []).includes(option)
                        : answers[currentQ.id] === option
                      return (
                        <button
                          key={option}
                          type="button"
                          className={`thinking__option ${isSelected ? 'thinking__option--selected' : ''}`}
                          onClick={() => selectAnswer(currentQ.id, option)}
                        >
                          <span>{option}</span>
                          {isSelected && <Check size={16} />}
                        </button>
                      )
                    })}
                  </div>
                  {currentQ.multi && (
                    <p className="thinking__multi-hint">Select all that apply, then tap Next.</p>
                  )}
                </motion.div>
              )}

              {isContactStep && (
                <motion.div
                  key="contact"
                  className="thinking__card"
                  custom={direction}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                >
                  <div className="thinking__card-number">Last Step</div>
                  <h2 className="thinking__card-question">How can we reach you?</h2>
                  <p className="thinking__card-desc">Drop your info and we'll follow up with personalized recommendations.</p>

                  <div className="thinking__fields">
                    <div className="thinking__field">
                      <label><User size={14} /> Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={contact.name}
                        onChange={e => setContact(p => ({ ...p, name: e.target.value }))}
                      />
                    </div>
                    <div className="thinking__row">
                      <div className="thinking__field">
                        <label><Phone size={14} /> Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="(956) 555-1234"
                          value={contact.phone}
                          onChange={e => setContact(p => ({ ...p, phone: e.target.value }))}
                        />
                      </div>
                      <div className="thinking__field">
                        <label><Mail size={14} /> Email</label>
                        <input
                          type="email"
                          required
                          placeholder="john@email.com"
                          value={contact.email}
                          onChange={e => setContact(p => ({ ...p, email: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div className="thinking__field">
                      <label><MapPin size={14} /> Area / Address (optional)</label>
                      <input
                        type="text"
                        placeholder="South Padre Island, TX"
                        value={contact.address}
                        onChange={e => setContact(p => ({ ...p, address: e.target.value }))}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="thinking__nav">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={goPrev}
                disabled={step === 0}
              >
                <ChevronLeft size={18} />
                <span>Back</span>
              </button>

              {isContactStep ? (
                <button type="submit" className="btn btn--primary">
                  <span>Get My Recommendations</span>
                  <Send size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={goNext}
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </form>

          <div className="thinking__cta-alt">
            <p>Already know what you want?</p>
            <Link to="/book-online" className="btn btn--primary btn--sm">
              <span>Build a Pool — Get a Quote</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThinkingAboutAPool
