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
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const TREATMENTS = [
  {
    name: 'General Dental Check-up',
    desc: 'Comprehensive visual oral examination and digital diagnosis to detect early concerns and safeguard oral wellness.',
    img: '/images/treatment_general.jpg',
    tag: 'Preventive',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Teeth Cleaning & Scaling',
    desc: 'Advanced ultrasonic scaling and enamel polishing to eliminate stubborn plaque, tartar, and surface stains.',
    img: '/images/treatment_cleaning.jpg',
    tag: 'Hygiene',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: 'Root Canal Treatment (RCT)',
    desc: 'Single-sitting and multi-step endodontic therapy with digital apex locators to relieve severe toothache and preserve natural teeth.',
    img: '/images/treatment_rct.jpg',
    tag: 'Endodontics',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    name: 'Crowns & Dental Bridges',
    desc: 'High-strength monolithic zirconia and ceramic crowns crafted to restore natural chewing bite and seamless aesthetics.',
    img: '/images/treatment_crowns.jpg',
    tag: 'Restorative',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: 'Tooth-Coloured Fillings',
    desc: 'Biocompatible composite resin fillings matched exactly to your natural tooth shade for imperceptible restorations.',
    img: '/images/treatment_fillings.jpg',
    tag: 'Aesthetic',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4-14 14H4v-4L18 2z" />
      </svg>
    ),
  },
  {
    name: 'Cosmetic Teeth Whitening',
    desc: 'In-office clinical brightening treatment that safely removes years of coffee and food discoloration for a glowing smile.',
    img: '/images/treatment_cosmetic.jpg',
    tag: 'Cosmetic',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
      </svg>
    ),
  },
  {
    name: 'Pediatric Dental Care',
    desc: 'Gentle, reassuring dentistry specially tailored for children to cultivate healthy oral habits and fear-free clinic visits.',
    img: '/images/treatment_pediatric.jpg',
    tag: 'Pediatric',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: 'Dentures (Full & Partial)',
    desc: 'Precision-fitted removable dentures and flexible partial prosthetics designed for optimal chewing comfort and support.',
    img: '/images/treatment_dentures.jpg',
    tag: 'Prosthetics',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
  },
]

export default function TreatmentSection() {
  const ref = useReveal()

  return (
    <section className="treatments-section" id="treatments" ref={ref}>
      <div className="container">
        <div style={{ maxWidth: '640px', marginBottom: '50px' }}>
          <span className="section-eyebrow reveal">Clinical Services</span>
          <h2 className="treatments-title reveal reveal-delay-1" style={{ marginBottom: '14px' }}>
            Comprehensive Dental Care.
          </h2>
          <p style={{ color: 'var(--gray-700)', fontSize: '16px', lineHeight: '1.6' }} className="reveal reveal-delay-2">
            Every procedure is performed with strict sterilization, modern instrumentation, and a gentle patient-first approach.
          </p>
        </div>

        <div className="treatments-grid">
          {TREATMENTS.map((t, i) => (
            <div
              className="treatment-card reveal tilt-card"
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
              key={t.name}
            >
              <div className="treatment-img-wrap">
                <img src={t.img} alt={t.name} loading="lazy" />
                <div className="treatment-img-overlay" />
                <div className="treatment-icon-badge">{t.icon}</div>
              </div>
              <div className="treatment-card-body">
                <div className="why-tag-pill" style={{ marginBottom: '8px' }}>{t.tag}</div>
                <h3 className="treatment-name">{t.name}</h3>
                <p className="treatment-desc">{t.desc}</p>
                <a
                  href="#appointment"
                  className="treatment-arrow"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>Book Consultation</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
