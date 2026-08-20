export default function SalonExperience() {
  const scrollToBooking = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-layout">
          {/* Left Text Column */}
          <div className="reveal">
            <span className="section-eyebrow">The VIP Experience</span>
            <h2 className="section-title">
              A Private Sanctuary for the <br />
              <span className="gold-gradient-text">Discerning Gentleman.</span>
            </h2>

            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: '1.75', marginBottom: '24px' }}>
              Step out of the city rush and immerse yourself in an atmosphere of refined tranquility. Our private suites feature soundproof acoustic architecture, ambient lighting, and bespoke leather seating.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--gold-primary)' }}>
                  ✓
                </div>
                <div>
                  <strong style={{ color: 'var(--text-dark)', display: 'block', fontSize: '15px' }}>Zero Waiting Time Guarantee</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Your reserved private suite is prepped and waiting prior to your arrival</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--gold-primary)' }}>
                  ✓
                </div>
                <div>
                  <strong style={{ color: 'var(--text-dark)', display: 'block', fontSize: '15px' }}>Complimentary Beverage Bar</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Freshly roasted single-origin espresso, gourmet teas, and refreshments</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--gold-primary)' }}>
                  ✓
                </div>
                <div>
                  <strong style={{ color: 'var(--text-dark)', display: 'block', fontSize: '15px' }}>Strict Sterilization & Single-Use Blades</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Medical-grade autoclaved tools and sealed Japanese straight razor blades</span>
                </div>
              </div>
            </div>

            <a
              href="#appointment"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToBooking() }}
            >
              <span>Book Your Private Suite</span>
            </a>
          </div>

          {/* Right Lounge Image */}
          <div className="experience-img-box reveal reveal-delay-1">
            <img
              src="/images/lounge_interior.jpg"
              alt="Shankara Luxury Men's Salon VIP Lounge"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
