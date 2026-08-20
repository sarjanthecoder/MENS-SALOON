export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">Location &amp; Concierge</span>
          <h2 className="section-title">
            Visit the Shankara <br />
            <span className="gold-gradient-text">Grooming Lounge.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Conveniently situated at the 4 Roads junction in Dharmapuri with private valet parking and private elevator access.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Cards List */}
          <div className="reveal">
            {/* Address */}
            <div className="contact-card-item">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--white)' }}>
                  Lounge Location
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px', lineHeight: '1.6' }}>
                  <strong>#19A, 2nd Floor, Thirupathi Complex</strong><br />
                  Pennagaram Road, 4 Roads Junction,<br />
                  Dharmapuri, Tamil Nadu – 636701
                </div>
              </div>
            </div>

            {/* Direct Helplines */}
            <div className="contact-card-item">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--white)' }}>
                  Direct Concierge Helplines
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '6px', flexWrap: 'wrap' }}>
                  <a href="tel:+916374253113" style={{ color: 'var(--gold-primary)', textDecoration: 'none', fontWeight: '700' }}>
                    +91 63742 53113
                  </a>
                  <span style={{ color: 'var(--gold-border)' }}>/</span>
                  <a href="tel:+919843366992" style={{ color: 'var(--gold-primary)', textDecoration: 'none', fontWeight: '700' }}>
                    +91 98433 66992
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '4px', flexWrap: 'wrap' }}>
                  <a href="tel:+918618002904" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13.5px' }}>
                    +91 86180 02904
                  </a>
                  <span style={{ color: 'var(--gold-border)' }}>/</span>
                  <a href="tel:+917910250263" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13.5px' }}>
                    +91 79102 50263
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp VIP Card */}
            <div className="contact-card-item" style={{ border: '1px solid rgba(37,211,102,0.4)', background: 'rgba(37,211,102,0.06)' }}>
              <div className="contact-icon-box" style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.1 7.69C7.86 7.96 7.17 8.61 7.17 9.93C7.17 11.24 8.13 12.51 8.26 12.68C8.39 12.86 10.13 15.52 12.8 16.67C13.44 16.94 13.93 17.11 14.33 17.23C15.01 17.45 15.63 17.42 16.12 17.35C16.67 17.27 17.81 16.66 18.05 16C18.28 15.33 18.28 14.77 18.21 14.65C18.14 14.53 17.96 14.45 17.69 14.32C17.42 14.18 16.08 13.52 15.83 13.43C15.58 13.34 15.4 13.29 15.22 13.56C15.04 13.83 14.52 14.45 14.36 14.63C14.2 14.81 14.04 14.83 13.77 14.7C13.5 14.56 12.63 14.28 11.6 13.36C10.8 12.64 10.25 11.76 10.1 11.49C9.94 11.22 10.08 11.08 10.22 10.94C10.34 10.82 10.49 10.63 10.63 10.47C10.77 10.31 10.81 10.19 10.9 10.01C11 9.83 10.95 9.68 10.88 9.55C10.81 9.41 10.28 8.11 10.06 7.57C9.84 7.05 9.62 7.12 9.45 7.11C9.3 7.11 9.11 7.1 8.93 7.1C8.75 7.1 8.83 7.35 8.83 7.35Z" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--white)' }}>
                  VIP WhatsApp Concierge
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '13.5px', marginTop: '2px', marginBottom: '8px' }}>
                  Send hairstyle references, wedding inquiries, or direct questions.
                </div>
                <a
                  href="https://wa.me/916374253113"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#25D366', fontWeight: '800', textDecoration: 'none', fontSize: '13px' }}
                >
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="contact-map-wrap reveal reveal-delay-1">
            <iframe
              title="Shankara Luxury Mens Salon Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.9!2d77.9600!3d11.9400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE5JzQ4LjAiTiA3N8KwNDEnMzAuMCJF!5e0!3m2!1sen!2sin!4v1613000000000"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Shankara Luxury Mens Salon map location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
