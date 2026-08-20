export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">SHANKARA DENTAL CLINIC</div>
            <div className="footer-brand-tag">Modern Dentistry. Personal Care. Confident Smiles.</div>
            <p className="footer-brand-desc">
              Advanced clinical dentistry delivered with precision, hygiene, and patient empathy.
              Serving Dharmapuri and surrounding regions.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
              <a href="tel:+916374253113" aria-label="Call clinic" className="footer-icon-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a href="https://wa.me/916374253113" target="_blank" rel="noreferrer" aria-label="WhatsApp clinic" className="footer-icon-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.1 7.69C7.86 7.96 7.17 8.61 7.17 9.93C7.17 11.24 8.13 12.51 8.26 12.68C8.39 12.86 10.13 15.52 12.8 16.67C13.44 16.94 13.93 17.11 14.33 17.23C15.01 17.45 15.63 17.42 16.12 17.35C16.67 17.27 17.81 16.66 18.05 16C18.28 15.33 18.28 14.77 18.21 14.65C18.14 14.53 17.96 14.45 17.69 14.32C17.42 14.18 16.08 13.52 15.83 13.43C15.58 13.34 15.4 13.29 15.22 13.56C15.04 13.83 14.52 14.45 14.36 14.63C14.2 14.81 14.04 14.83 13.77 14.7C13.5 14.56 12.63 14.28 11.6 13.36C10.8 12.64 10.25 11.76 10.1 11.49C9.94 11.22 10.08 11.08 10.22 10.94C10.34 10.82 10.49 10.63 10.63 10.47C10.77 10.31 10.81 10.19 10.9 10.01C11 9.83 10.95 9.68 10.88 9.55C10.81 9.41 10.28 8.11 10.06 7.57C9.84 7.05 9.62 7.12 9.45 7.11C9.3 7.11 9.11 7.1 8.93 7.1C8.75 7.1 8.83 7.35 8.83 7.35Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <nav className="footer-links" aria-label="Footer navigation">
              {[
                ['Home', 'hero'],
                ['About Practice', 'about'],
                ['Doctor Profile', 'doctor'],
                ['Services', 'treatments'],
                ['Technology', 'technology'],
                ['Patient Voices', 'testimonials'],
                ['Clinic Tour', 'gallery'],
                ['Contact & Directions', 'contact'],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>{label}</a>
              ))}
            </nav>
          </div>

          {/* Treatments */}
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {['General Check-up', 'Root Canal Therapy', 'Crowns & Bridges', 'Composite Fillings', 'Cosmetic Whitening', 'Pediatric Dental Care'].map((t) => (
                <a key={t} href="#treatments" onClick={(e) => { e.preventDefault(); scrollTo('treatments') }}>{t}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Direct Contact</div>
            <div className="footer-links">
              <a href="tel:+916374253113">+91 63742 53113</a>
              <a href="tel:+919843366992">+91 98433 66992</a>
              <a href="tel:+918618002904">+91 86180 02904</a>
              <span className="footer-address-text">
                #19A, 2nd Floor, Thirupathi Complex,<br />
                Pennagaram Road, 4 Roads,<br />
                Dharmapuri, Tamil Nadu
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 Shankara Dental Clinic. All clinical rights reserved.</span>
          <div className="footer-legal-links">
            <a href="#appointment" onClick={(e) => { e.preventDefault(); scrollTo('appointment') }}>Terms of Clinical Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
