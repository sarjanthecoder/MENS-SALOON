import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const els = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          els.forEach(e => e.classList.add('visible'))
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const WHY_ITEMS = [
  {
    num: '01',
    tag: 'Personalized',
    title: 'Personalized Care',
    desc: 'Every treatment plan begins with understanding you — your concerns, your comfort, and your specific oral health goals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5v6" stroke="#0ea5e9" strokeWidth="2.5" />
        <path d="M9 8h6" stroke="#0ea5e9" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'High-Tech',
    title: 'Modern Technology',
    desc: 'Contemporary diagnostic tools and up-to-date dental equipment ensure high precision, minimal discomfort, and swift recovery.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        <circle cx="12" cy="12" r="9" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Relaxed',
    title: 'Comfort-First Design',
    desc: 'A serene, anxiety-free clinical atmosphere designed around your relaxation, transparent explanation, and gentle handling.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" stroke="#0ea5e9" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    num: '04',
    tag: 'Prevention',
    title: 'Long-Term Oral Health',
    desc: 'Beyond immediate procedures, we focus on sustainable preventive guidance to preserve your natural teeth for a lifetime.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
        <circle cx="12" cy="12" r="4" stroke="#0ea5e9" strokeWidth="2.5" />
      </svg>
    ),
  },
]

function TiltCard({ item, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -7
    const rotateY = ((x - centerX) / centerX) * 7

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`
  }

  return (
    <div
      ref={cardRef}
      className="why-item-premium reveal tilt-card"
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Gradient Glowing Edge */}
      <div className="why-card-glow-bar" />

      <div className="why-card-top-row">
        <div className="why-icon-bubble">
          {item.icon}
        </div>
        <div className="why-index-badge">
          <span>{item.num}</span>
        </div>
      </div>

      <div className="why-tag-pill">{item.tag}</div>

      <h3 className="why-title-premium">{item.title}</h3>
      <p className="why-desc-premium">{item.desc}</p>
      
      <div className="why-footer-premium">
        <span className="why-footer-text">Learn More</span>
        <div className="why-footer-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function WhyShankara() {
  const ref = useReveal()

  return (
    <section className="why-section-premium" id="about" ref={ref}>
      <div className="container">
        <div className="why-header-row">
          <div className="why-header-content">
            <span className="section-eyebrow reveal">The Shankara Difference</span>
            <h2 className="why-headline reveal reveal-delay-1">
              Dentistry Built <span className="text-gradient-sky">Around You.</span>
            </h2>
            <p className="why-subtitle-text reveal reveal-delay-2">
              Modern clinical expertise combined with empathetic patient care for every member of your family.
            </p>
          </div>

          <div className="why-header-stat reveal reveal-delay-2">
            <div className="why-stat-box">
              <div className="why-stat-num">100%</div>
              <div className="why-stat-label">Personalized Care Plans</div>
            </div>
          </div>
        </div>

        <div className="why-grid-premium">
          {WHY_ITEMS.map((item, i) => (
            <TiltCard key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
