export default function TechnologySection() {
  const TOOLS = [
    {
      title: 'Takara Belmont Recliners',
      desc: 'Handcrafted Japanese motorized styling chairs providing weightless ergonomic reclining for razor shaves and facials.',
      origin: 'Osaka, Japan',
    },
    {
      title: 'Mizutani Cobalt Shears',
      desc: 'Forged Japanese Damascus steel shears providing microscopic slicing accuracy that eliminates split ends.',
      origin: 'Tokyo, Japan',
    },
    {
      title: 'Micro-Mist Scalp Steamers',
      desc: 'Ultrasonic micro-steam technology opening hair follicles for maximum absorption of organic essential oils.',
      origin: 'Milan, Italy',
    },
    {
      title: 'Kérastase & Davines Organic Care',
      desc: 'Pure botanical shampoos, sulfate-free scalp scrubs, and 24K gold active serums for pristine skin and hair health.',
      origin: 'Paris & Parma',
    },
  ]

  return (
    <section className="why-luxe-section" style={{ background: 'var(--surface-1)' }} id="craft">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">Artisanal Equipment &amp; Products</span>
          <h2 className="section-title">
            The World&apos;s Finest Tools for <br />
            <span className="gold-gradient-text">Precision &amp; Supreme Comfort.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We do not compromise on your hair and skin. Every instrument and formulation is imported from master ateliers worldwide.
          </p>
        </div>

        <div className="why-luxe-grid" style={{ marginTop: '50px' }}>
          {TOOLS.map((tool, idx) => (
            <div key={idx} className={`why-luxe-card reveal reveal-delay-${idx + 1}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {tool.origin}
                </span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold-primary)', boxShadow: '0 0 8px var(--gold-primary)' }} />
              </div>
              <h3 className="why-luxe-title" style={{ fontSize: '20px' }}>{tool.title}</h3>
              <p className="why-luxe-desc">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
