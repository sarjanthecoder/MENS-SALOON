import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'Master Stylist', id: 'stylist' },
  { label: 'Why Shankara', id: 'why-us' },
  { label: 'Services', id: 'services' },
  { label: 'VIP Packages', id: 'packages' },
  { label: 'Experience', id: 'experience' },
  { label: 'Lookbook', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
]

const PAGE_SECTIONS = [
  'hero',
  'stylist',
  'why-us',
  'services',
  'packages',
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

  // Live Scroll Spy with rAF throttle
  useEffect(() => {
    let ticking = false

    const updateScrollState = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)

      if (scrollY < 180) {
        setActiveSection('hero')
        ticking = false
        return
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveSection('contact')
        ticking = false
        return
      }

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

      if (currentSection === 'testimonials') currentSection = 'packages'
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
    updateScrollState()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dynamic active pill indicator
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
      <nav className={`navbar-luxe${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo */}
            <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
              <div className="navbar-logo-emblem">
                <img src="/logo.png" alt="Shankara Salon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
              <div className="navbar-logo-text">
                <span className="navbar-logo-brand">SHANKARA</span>
                <span className="navbar-logo-sub">Men&apos;s Salon &amp; Lounge</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="navbar-nav-container">
              <ul className="navbar-links-luxe" ref={navListRef}>
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

            {/* Right Reserve VIP CTA */}
            <a
              href="#appointment"
              className={`navbar-cta ${activeSection === 'appointment' ? 'active-cta' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo('appointment')
              }}
            >
              <span>Reserve VIP Slot</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="navbar-hamburger-luxe"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-menu-header">
          <div className="mobile-menu-brand">
            <div className="navbar-logo-emblem" style={{ width: '36px', height: '36px' }}>
              <img src="/logo.png" alt="Shankara Salon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <span className="navbar-logo-brand" style={{ fontSize: '16px' }}>SHANKARA SALON</span>
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
                {isActive && <span className="nav-active-dot" />}
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>

        <div className="mobile-menu-footer">
          <a
            href="#appointment"
            className="mobile-cta-btn"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('appointment')
            }}
          >
            <span>Reserve VIP Slot</span>
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
