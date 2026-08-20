export default function Gallery() {
  const LOOKS = [
    {
      img: '/images/service_haircut.jpg',
      tag: 'Hair Architecture',
      title: 'Precision Scissor Fade & Textured Crop',
    },
    {
      img: '/images/service_shave.jpg',
      tag: 'Beard Sculpting',
      title: 'Royal Sandalwood Hot Towel Shave',
    },
    {
      img: '/images/service_wedding.jpg',
      tag: 'Wedding Styling',
      title: 'Grand Groom Bespoke Makeover',
    },
    {
      img: '/images/service_spa.jpg',
      tag: 'Scalp Therapy',
      title: 'Kérastase Micro-Mist Hair Spa',
    },
    {
      img: '/images/service_facial.jpg',
      tag: 'Skin Wellness',
      title: '24K Gold & Volcanic Detan Facial',
    },
    {
      img: '/images/hero_salon.jpg',
      tag: 'Lounge Interior',
      title: 'Private VIP Grooming Suites',
    },
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">The Lookbook</span>
          <h2 className="section-title">
            A Glimpse of Mastery &amp; <br />
            <span className="gold-gradient-text">Refined Transformations.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explore our signature styles, grooming craftsmanship, and luxurious salon interiors.
          </p>
        </div>

        <div className="lookbook-grid">
          {LOOKS.map((item, idx) => (
            <div key={idx} className={`lookbook-item reveal reveal-delay-${(idx % 3) + 1}`}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="lookbook-overlay">
                <span className="lookbook-tag">{item.tag}</span>
                <h3 className="lookbook-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
