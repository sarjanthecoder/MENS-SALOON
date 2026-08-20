import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach(e => e.classList.add('visible'))
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

const EXPERIENCE_POINTS = [
  {
    num: '01',
    title: 'Comfortable Visits',
    desc: 'A calm and welcoming environment designed to make every visit relaxed and stress-free — from the moment you walk in.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" stroke="#0ea5e9" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Clear Communication',
    desc: 'Understand your treatment fully before it begins. We explain every step, every option, and every outcome clearly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Personal Attention',
    desc: 'Every patient receives focused, unhurried care. Your dental health and comfort always come first.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
]

export default function PatientExperience() {
  const ref = useReveal()

  return (
    <section className="patient-section-premium" id="experience" ref={ref}>
      <div className="container">
        <div className="patient-grid-premium">
          {/* Left Column: Full-Height Balanced Visual Card */}
          <div className="patient-showcase-column reveal">
            <div className="patient-curved-frame-full">
              <img
                src="/images/patient_comfort.jpg"
                alt="Gentle patient care and consultation at Shankara Dental Clinic"
                className="patient-full-img"
                loading="lazy"
              />
              <div className="patient-overlay-glow" />

              {/* Top Floating Trust Pill */}
              <div className="patient-top-pill">
                <span className="patient-top-star">★</span>
                <span>Rated for Gentle Dentistry in Dharmapuri</span>
              </div>

              {/* Bottom Floating Satisfaction Badge */}
              <div className="patient-floating-stat">
                <div className="patient-stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <div className="patient-stat-val">99.8%</div>
                  <div className="patient-stat-sub">Patient Comfort Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Bottom Clinical Trust Strip */}
            <div className="patient-trust-strip">
              <div className="patient-trust-item">
                <span className="trust-dot-green" />
                <span>100% Sterile Operatory</span>
              </div>
              <div className="patient-trust-item">
                <span className="trust-dot-blue" />
                <span>Zero-Anxiety Environment</span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="patient-content-column">
            <span className="section-eyebrow reveal">Patient-First Philosophy</span>
            <h2 className="patient-headline-premium reveal reveal-delay-1">
              Designed Around <span className="text-gradient-sky">Your Comfort.</span>
            </h2>
            <p className="patient-sub-text reveal reveal-delay-2">
              We eliminate dental anxiety through gentle techniques, unhurried appointments, and clear transparent communication at every step.
            </p>

            <div className="patient-points-stack">
              {EXPERIENCE_POINTS.map((pt, i) => (
                <div className="patient-point-card-premium reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={pt.num}>
                  <div className="patient-point-num-glow">{pt.num}</div>
                  <div className="patient-point-body">
                    <div className="patient-point-header">
                      <div className="patient-point-icon-box">{pt.icon}</div>
                      <h3 className="patient-point-title-premium">{pt.title}</h3>
                    </div>
                    <p className="patient-point-desc-premium">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
