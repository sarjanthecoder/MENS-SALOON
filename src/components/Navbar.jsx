import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'Doctor', id: 'doctor' },
  { label: 'About', id: 'about' },
  { label: 'Treatments', id: 'treatments' },
  { label: 'Technology', id: 'technology' },
  { label: 'Patient Voices', id: 'testimonials' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
]

// All page sections in order of appearance
const PAGE_SECTIONS = [
  'hero',
  'doctor',
  'about',
  'treatments',
  'technology',
  'experience',
  'testimonials',
  'gallery',
  'faq',
  'appointment',
  'contact',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  
  const navListRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Live Scroll Spy: High-Performance requestAnimationFrame Scroll Spy
  useEffect(() => {
    let ticking = false

    const updateScrollState = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)

      // If at top
      if (scrollY < 180) {
        setActiveSection('hero')
        ticking = false
        return
      }

      // If near bottom of page, activate contact
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveSection('contact')
        ticking = false
        return
      }

      // Check each section in order
      const navOffset = 180
      let currentSection = 'hero'

      for (const sectionId of PAGE_SECTIONS) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= navOffset) {
            currentSection = sectionId
          }
        }
      }

      if (currentSection === 'experience') currentSection = 'technology'
      if (currentSection === 'faq') currentSection = 'gallery'

      setActiveSection(currentSection)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScrollState() // initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update gliding highlighter position based on activeSection
  useEffect(() => {
    if (!navListRef.current) return
    const activeItemEl = navListRef.current.querySelector(`[data-nav-id="${activeSection}"]`)
    if (activeItemEl) {
      const { offsetLeft, offsetWidth } = activeItemEl
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      })
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
    }
  }, [activeSection, scrolled])

  const scrollTo = (id) => {
    setMobileOpen(false)
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const topOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav className={`navbar-light${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
              <div className="navbar-logo-icon">
                <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8C24 8 18 13 18 20c0 4 1.5 7 3 10 1.5 3.5 2 6 2 8 0 3 1.5 5 3 5 2 0 3-2 4-5 .5-1.5 1-3 2-3s1.5 1.5 2 3c1 3 2 5 4 5 1.5 0 3-2 3-5 0-2 .5-4.5 2-8 1.5-3 3-6 3-10 0-7-6-12-14-12z" fill="#ffffff" />
                </svg>
              </div>
              <div className="navbar-logo-text">
                <span className="navbar-logo-name-light">SHANKARA</span>
                <span className="navbar-logo-sub-light">Dental Clinic</span>
              </div>
            </a>

            {/* Desktop Navigation with Live Gliding Highlighter */}
            <div className="navbar-nav-container">
              <ul className="navbar-links-light" ref={navListRef}>
                {/* Gliding Active Pill Highlighter */}
                <div
                  className="nav-gliding-pill"
                  style={{
                    transform: `translateX(${indicatorStyle.left}px)`,
                    width: `${indicatorStyle.width}px`,
                    opacity: indicatorStyle.opacity,
                  }}
                />

                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <li
                      key={item.id}
                      data-nav-id={item.id}
                      className={`nav-link-item ${isActive ? 'active' : ''}`}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollTo(item.id)
                        }}
                      >
                        {isActive && <span className="nav-active-dot" />}
                        <span>{item.label}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right Book Appointment CTA (Highlights when in appointment section) */}
            <a
              href="#appointment"
              className={`navbar-cta ${activeSection === 'appointment' ? 'active-cta' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo('appointment')
              }}
            >
              <span>Book Appointment</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="navbar-hamburger-light"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Drawer */}
      <div
        className={`mobile-menu${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Top Header inside Mobile Menu */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-brand">
            <div className="navbar-logo-icon" style={{ width: '32px', height: '32px' }}>
              <svg width="18" height="18" viewBox="0 0 64 64" fill="none">
                <path d="M32 8C24 8 18 13 18 20c0 4 1.5 7 3 10 1.5 3.5 2 6 2 8 0 3 1.5 5 3 5 2 0 3-2 4-5 .5-1.5 1-3 2-3s1.5 1.5 2 3c1 3 2 5 4 5 1.5 0 3-2 3-5 0-2 .5-4.5 2-8 1.5-3 3-6 3-10 0-7-6-12-14-12z" fill="#ffffff" />
              </svg>
            </div>
            <span className="navbar-logo-name-light" style={{ fontSize: '15px' }}>SHANKARA DENTAL</span>
          </div>

          <button
            type="button"
            className="mobile-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links List */}
        <div className="mobile-menu-body">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.id)
                }}
              >
                {isActive && <span className="mobile-active-indicator" />}
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mobile-menu-footer">
          <a
            href="#appointment"
            className={`mobile-cta-btn ${activeSection === 'appointment' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              scrollTo('appointment')
            }}
          >
            <span>Book Appointment</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
