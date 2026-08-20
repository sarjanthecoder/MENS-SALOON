import { useRef, useEffect, useState } from 'react'

const TESTIMONIALS = [
  {
    initial: 'R',
    name: 'Ravi K.',
    loc: 'Dharmapuri',
    quote: 'An incredibly comfortable experience from consultation to treatment. Dr. Manimozhi takes time to explain everything and makes the entire process stress-free.',
  },
  {
    initial: 'P',
    name: 'Priya S.',
    loc: 'Pennagaram',
    quote: 'I was very anxious about my root canal, but the team made it completely painless. The clinic is clean, modern, and the doctor is genuinely caring.',
  },
  {
    initial: 'M',
    name: 'Muthu R.',
    loc: 'Dharmapuri',
    quote: 'Excellent service and professional approach. My entire family visits Shankara Dental Clinic and we always leave satisfied with the care we receive.',
  },
  {
    initial: 'S',
    name: 'Sathya L.',
    loc: 'Salem',
    quote: 'After my dental filling, the results look completely natural. Highly recommend Dr. Manimozhi for anyone looking for quality dental treatment.',
  },
  {
    initial: 'A',
    name: 'Arun T.',
    loc: 'Krishnagiri',
    quote: 'Very thorough and patient with explanations. The clinic feels premium and the treatment quality is exceptional. Worth every visit.',
  },
]

export default function Testimonials() {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const checkScroll = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 20)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20)
    const cardWidth = el.querySelector('.testimonial-card')?.offsetWidth || 380
    const index = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, TESTIMONIALS.length - 1))
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()

    // Drag scroll
    let isDown = false, startX = 0, scrollLeft = 0
    const onMouseDown = (e) => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.cursor = 'grabbing' }
    const onMouseLeave = () => { isDown = false; el.style.cursor = 'grab' }
    const onMouseUp = () => { isDown = false; el.style.cursor = 'grab' }
    const onMouseMove = (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - el.offsetLeft; el.scrollLeft = scrollLeft - (x - startX) * 1.5 }
    
    el.style.cursor = 'grab'
    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)

    return () => {
      el.removeEventListener('scroll', checkScroll)
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const scroll = (direction) => {
    const el = trackRef.current
    if (!el) return
    const cardWidth = el.querySelector('.testimonial-card')?.offsetWidth || 380
    const scrollAmount = direction === 'left' ? -cardWidth - 24 : cardWidth + 24
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const scrollToIndex = (idx) => {
    const el = trackRef.current
    if (!el) return
    const cardWidth = el.querySelector('.testimonial-card')?.offsetWidth || 380
    el.scrollTo({ left: idx * (cardWidth + 24), behavior: 'smooth' })
  }

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header-row">
          <div>
            <span className="section-eyebrow">Patient Voices</span>
            <h2 className="section-title-dark" style={{ marginBottom: '8px' }}>
              Trusted by Patients.
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '15px' }}>
              Real clinical experiences shared by individuals and families in Dharmapuri.
            </p>
          </div>

          {/* Desktop Nav Controls (Top Right) */}
          <div className="testimonials-top-controls">
            <button
              className={`test-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
              aria-label="Previous testimonial"
              disabled={!canScrollLeft}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              className={`test-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              aria-label="Next testimonial"
              disabled={!canScrollRight}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="testimonials-track" ref={trackRef}>
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-stars">
              {[...Array(5)].map((_, starIdx) => (
                <svg key={starIdx} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initial}</div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-loc">{t.loc}, Tamil Nadu</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Controls with Previous, Next, and Dots Indicator */}
      <div className="container">
        <div className="testimonials-bottom-controls">
          <button
            className="test-bottom-btn"
            onClick={() => scroll('left')}
            aria-label="Previous review"
            disabled={!canScrollLeft}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </button>

          {/* Dots */}
          <div className="testimonials-dots">
            {TESTIMONIALS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`test-dot ${activeIndex === dotIdx ? 'active' : ''}`}
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            className="test-bottom-btn"
            onClick={() => scroll('right')}
            aria-label="Next review"
            disabled={!canScrollRight}
          >
            <span>Next</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
