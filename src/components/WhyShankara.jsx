export default function WhyShankara() {
  const PILLARS = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'Private VIP Suites',
      desc: 'Individual soundproof grooming cabins with custom acoustic treatment, private entertainment screens, and zero outside distractions.',
      tag: 'Exclusive Privacy',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: 'Artisanal Precision Tools',
      desc: 'Handcrafted Japanese Mizutani cobalt shears, Takara Belmont motorized recliners, and micro-mist scalp therapeutic steamers.',
      tag: 'Master Equipment',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: '100% Imported Formulations',
      desc: 'We exclusively formulate with Kérastase Homme, Davines organic hair remedies, Moroccanoil, and 24K gold facial elixirs.',
      tag: 'Global Products',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: 'Gentlemen’s Lounge & Valet',
      desc: 'Enjoy complimentary freshly roasted artisanal espresso, private parking valet service, and relaxing jazz ambiance.',
      tag: 'Royal Hospitality',
    },
  ]

  return (
    <section className="why-luxe-section" id="why-us">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">The Shankara Standard</span>
          <h2 className="section-title">
            Redefining Men&apos;s Grooming with <br />
            <span className="gold-gradient-text">World-Class Hospitality.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every detail is designed to give you an unhurried, transformative salon experience of supreme relaxation and unmatched grooming craftsmanship.
          </p>
        </div>

        <div className="why-luxe-grid">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className={`why-luxe-card reveal reveal-delay-${(idx % 4) + 1}`}>
              <div className="why-luxe-icon-wrap">{pillar.icon}</div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '8px' }}>
                {pillar.tag}
              </span>
              <h3 className="why-luxe-title">{pillar.title}</h3>
              <p className="why-luxe-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
