export default function StylistSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const topOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="stylist-section" id="stylist">
      <div className="container">
        <div className="stylist-grid">
          {/* Left Master Stylist Portrait */}
          <div className="stylist-portrait-wrap reveal">
            <div className="stylist-portrait-circle">
              <img
                src="/images/master_stylist.jpg"
                alt="Shankara Master Grooming Director"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Stylist Philosophy & Bio */}
          <div className="stylist-info reveal reveal-delay-1">
            <span className="section-eyebrow">Creative Direction &amp; Artistry</span>
            <h2 className="section-title">
              Crafted for Men Who Demand <br />
              <span className="gold-gradient-text">Uncompromised Distinction.</span>
            </h2>

            <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: '1.75', marginBottom: '18px' }}>
              At Shankara Men&apos;s Salon, grooming is not merely a service—it is a bespoke discipline of facial aesthetics, head shape architecture, and rejuvenating wellness.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '28px' }}>
              Trained under global masters in London and Milan, our Creative Director brings over 14 years of specialized expertise in straight-razor detailing, skin-fade geometry, and luxury groom transformations.
            </p>

            {/* Credential Metrics Grid */}
            <div className="stylist-creds-grid">
              <div className="stylist-cred-card">
                <div className="stylist-cred-val">14+</div>
                <div className="stylist-cred-lbl">Years Master Craftsmanship</div>
              </div>

              <div className="stylist-cred-card">
                <div className="stylist-cred-val">15,000+</div>
                <div className="stylist-cred-lbl">Bespoke Haircuts &amp; Shaves</div>
              </div>

              <div className="stylist-cred-card">
                <div className="stylist-cred-val">100%</div>
                <div className="stylist-cred-lbl">Imported Organic Formulations</div>
              </div>

              <div className="stylist-cred-card">
                <div className="stylist-cred-val">4.98 ★</div>
                <div className="stylist-cred-lbl">Rated Luxury Men&apos;s Lounge</div>
              </div>
            </div>

            <a
              href="#appointment"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('appointment') }}
            >
              <span>Consult with Master Stylist</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
