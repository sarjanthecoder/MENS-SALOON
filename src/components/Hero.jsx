import { useEffect, useRef } from 'react'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    // Parallax
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.2
        bgRef.current.style.transform = `scale(1.05) translateY(${y}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    setTimeout(() => bgRef.current?.classList.add('loaded'), 100)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-light" id="hero">
      {/* 3D Glowing Ambient Orbs */}
      <div className="hero-orb-light hero-orb-light-1" />
      <div className="hero-orb-light hero-orb-light-2" />
      
      {/* Clinic Background Image with High Visibility */}
      <div className="hero-bg-light" ref={bgRef} style={{ backgroundImage: "url('/images/hero_new.jpg')" }} />
      <div className="hero-overlay-light" />
      <div className="hero-grid-lines-light" />

      <div className="container">
        <div className="hero-inner-light">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-eyebrow-badge">
              <span className="hero-eyebrow-dot" />
              <span>Shankara Dental Clinic · Dharmapuri</span>
            </div>

            <h1 className="hero-title-light">
              A Better Smile<br />
              Begins With<br />
              <span className="hero-title-gradient">Better Care.</span>
            </h1>

            <p className="hero-sub-light">
              Advanced dental care with a human touch — designed around your
              comfort, confidence and long-term oral health.
            </p>

            <div className="hero-actions">
              <a
                href="#appointment"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); scrollTo('appointment') }}
              >
                <span>Book an Appointment</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#treatments"
                className="btn-outline-sky"
                onClick={(e) => { e.preventDefault(); scrollTo('treatments') }}
              >
                <span>Explore Treatments</span>
              </a>
            </div>
          </div>

          {/* RIGHT - 3D Doctor Scene with Circular Portrait */}
          <div className="hero-right">
            <div className="hero-doctor-scene">
              {/* 3D Orbiting Rings & Glow Dots */}
              <div className="doctor-orbit-ring-light" />
              <div className="doctor-orbit-dot-light" />
              <div className="doctor-orbit-dot-light-2" />

              {/* Round Circular Doctor Portrait Frame */}
              <div className="hero-doctor-circle-frame">
                <img
                  src="/images/doctor.jpg"
                  alt="Dr. S. Manimozhi — Shankara Dental Clinic"
                  className="hero-doctor-round-img"
                  loading="eager"
                />
              </div>

              {/* 3D Floating White Glass Card */}
              <div className="hero-float-card-light">
                <div className="hero-float-card-top-light">Your Smile</div>
                <div className="hero-float-card-title-light">Our Expertise.</div>
                <div className="hero-float-card-sub-light">Dr. S. Manimozhi, B.D.S.</div>
              </div>

              {/* 3D Floating White Practice Badge */}
              <div className="hero-badge-light">
                <div className="hero-badge-icon-box-light">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="hero-badge-text-light">
                  <strong>Verified Dental Practice</strong>
                  <span>Pennagaram Rd, Dharmapuri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-light">
        <span>Scroll to explore</span>
        <div className="hero-scroll-line-light" />
      </div>
    </section>
  )
}
