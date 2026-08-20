export default function Hero() {
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
    <section className="hero-luxe" id="hero">
      {/* High-Definition Luxury Salon Background */}
      <div
        className="hero-bg-luxe"
        style={{ backgroundImage: "url('/images/hero_salon.jpg')" }}
      />
      <div className="hero-overlay-luxe" />

      <div className="container">
        <div className="hero-inner-luxe">
          {/* Left Text Card */}
          <div className="hero-left-luxe reveal">
            <span className="section-eyebrow">
              ★ Dharmapuri&apos;s Premier Men&apos;s Grooming Lounge
            </span>

            <h1 className="hero-title-luxe">
              Bespoke Hair Architecture. <br />
              <span className="gold-gradient-text">Royal Luxury Styling.</span>
            </h1>

            <p className="hero-sub-luxe">
              Precision haircuts, artisanal hot towel straight-razor shaves, Kérastase scalp therapies, and 24K gold facials tailored for distinguished gentlemen.
            </p>

            <div className="hero-actions-luxe">
              <a
                href="#appointment"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); scrollTo('appointment') }}
              >
                <span>Reserve VIP Slot</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="#services"
                className="btn-secondary"
                onClick={(e) => { e.preventDefault(); scrollTo('services') }}
              >
                <span>Explore Service Menu</span>
              </a>
            </div>
          </div>

          {/* Right Master Stylist Scene */}
          <div className="hero-right-luxe reveal reveal-delay-1">
            <div className="hero-stylist-scene">
              <div className="orbit-ring-gold" />

              {/* Master Stylist Circle Frame */}
              <div className="hero-stylist-circle-frame">
                <img
                  src="/images/master_stylist.jpg"
                  alt="Master Hair Stylist & Grooming Director — Shankara Men's Salon"
                  className="hero-stylist-round-img"
                  loading="eager"
                />
              </div>

              {/* Floating Gold Feature Badge */}
              <div className="hero-badge-gold">
                <div className="badge-gold-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '13px', display: 'block' }}>Master Hair Artisan</strong>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '11px', fontWeight: '700' }}>14+ Years International Mastery</span>
                </div>
              </div>

              {/* Floating Private Suite Card */}
              <div className="hero-float-card-gold">
                <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  The Gentleman&apos;s Suite
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--white)', marginTop: '2px' }}>
                  Takara Belmont Recliners
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Private Sound-Proof Cabins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
