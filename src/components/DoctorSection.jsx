import { useEffect, useRef } from 'react'

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

const DOCTOR_PILLARS = [
  {
    label: 'Specialized Care',
    desc: 'Advanced endodontics & surgical precision',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    label: 'Patient-Centered',
    desc: 'Personalized treatment with gentle care',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    label: 'Precision Focus',
    desc: 'Accurate diagnostics & aesthetic results',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
]

export default function DoctorSection() {
  const ref = useReveal()

  return (
    <section className="doctor-section" id="doctor">
      <div className="container">
        <div className="doctor-grid" ref={ref}>
          {/* Round Doctor Image Composition */}
          <div className="doctor-image-wrap reveal">
            <div className="doctor-round-wrapper">
              <div className="doctor-orbit-ring-subtle" />
              <div className="doctor-round-frame">
                <img
                  src="/images/doctor.jpg"
                  alt="Dr. S. Manimozhi, Dental Surgeon — Shankara Dental Clinic"
                  className="doctor-round-img"
                  loading="lazy"
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="doctor-round-badge">
                <div className="doctor-badge-name">Dr. S. Manimozhi</div>
                <div className="doctor-badge-title">B.D.S., FCE · Dental Surgeon</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="doctor-content">
            <span className="section-eyebrow reveal">Meet Your Dentist</span>

            <h2 className="doctor-quote reveal reveal-delay-1">
              Focused on <em>precise</em> and<br />
              personalized dental<br />
              experiences.
            </h2>

            <p className="doctor-desc reveal reveal-delay-2">
              "At Shankara Dental Clinic, every patient is treated as an individual — with
              their concerns heard, their comfort prioritized, and their smile carefully cared for."
            </p>

            <div className="doctor-quals reveal reveal-delay-2">
              <div className="doctor-qual-item">
                <span className="doctor-qual-dot" />
                Bachelor of Dental Surgery (B.D.S.)
              </div>
              <div className="doctor-qual-item">
                <span className="doctor-qual-dot" />
                FCE — Fellowship in Clinical Endodontics
              </div>
              <div className="doctor-qual-item">
                <span className="doctor-qual-dot" />
                Registered Dental Surgeon, Tamil Nadu
              </div>
            </div>

            <div className="doctor-pillars reveal reveal-delay-3">
              {DOCTOR_PILLARS.map(({ label, desc, icon }) => (
                <div
                  className="doctor-pillar tilt-card"
                  key={label}
                  onMouseMove={(e) => {
                    const card = e.currentTarget
                    const rect = card.getBoundingClientRect()
                    const x = e.clientX - rect.left - rect.width / 2
                    const y = e.clientY - rect.top - rect.height / 2
                    card.style.transform = `perspective(600px) rotateX(${(-y / rect.height) * 12}deg) rotateY(${(x / rect.width) * 12}deg) translateY(-6px)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)'
                  }}
                >
                  <div className="doctor-pillar-icon-box">{icon}</div>
                  <div className="doctor-pillar-label">{label}</div>
                  <div className="doctor-pillar-desc">{desc}</div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4">
              <a
                href="#appointment"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <span>Book a Consultation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
