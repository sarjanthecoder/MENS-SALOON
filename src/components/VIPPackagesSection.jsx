export default function VIPPackagesSection() {
  const PACKAGES = [
    {
      id: 'executive',
      name: 'The Executive Signature',
      subtitle: 'For the busy gentleman who demands perfection',
      price: '₹1,499',
      features: [
        'Bespoke Hair Architecture & Scissor Fade',
        'Royal Sandalwood Hot Towel Shave',
        'Deep Scalp Detox & Conditioning',
        'Relaxing Neck & Shoulder Acupressure',
        'Signature Styling with Matte Clay',
      ],
      isFeatured: false,
      tag: 'Most Popular',
    },
    {
      id: 'royale',
      name: 'The Imperial Grooming Ritual',
      subtitle: 'Complete head-to-toe luxury rejuvenation',
      price: '₹2,999',
      features: [
        'Master Stylist Bespoke Hair Sculpting',
        'Straight Razor Shave & Beard Contouring',
        '24K Gold Volcanic Ash Detan Facial',
        'Kérastase Deep Micro-Mist Hair Spa',
        'Royal Hand Care & Nail Detailing',
        'Complimentary Artisan Coffee / Single Malt',
      ],
      isFeatured: true,
      tag: 'Signature Experience',
    },
    {
      id: 'groom',
      name: 'The Grand Groom Royale',
      subtitle: 'Bespoke pre-wedding & big-day transformation',
      price: '₹4,999',
      features: [
        'Face Shape & Outfit Grooming Consultation',
        'Full Pre-Wedding Detan & Gold Glow Ritual',
        'Luxury Beard Architecture & Symmetry Lineup',
        'Intensive Scalp Therapy & Conditioning',
        'Gentleman’s Royal Manicure & Pedicure Spa',
        'Wedding Day Final Hair Styling & Setting',
      ],
      isFeatured: false,
      tag: 'Wedding Exclusive',
    },
  ]

  const scrollToBooking = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="packages-section" id="packages">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">Curated Combinations</span>
          <h2 className="section-title">
            VIP Luxury Packages for the <br />
            <span className="gold-gradient-text">Modern Gentleman.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive grooming rituals curated for executives, grooms, and gentlemen who value pristine presentation.
          </p>
        </div>

        <div className="packages-grid">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.isFeatured ? 'featured' : ''} reveal reveal-delay-${idx + 1}`}
            >
              {pkg.tag && <div className="package-badge">{pkg.tag}</div>}

              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-subtitle">{pkg.subtitle}</p>

              <div className="package-price-wrap">
                <span className="package-price">{pkg.price}</span>
              </div>

              <ul className="package-features-list">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="package-feature-item">
                    <svg className="package-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href="#appointment"
                  className={pkg.isFeatured ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%' }}
                  onClick={(e) => { e.preventDefault(); scrollToBooking() }}
                >
                  <span>Book This Package</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
