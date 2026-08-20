export default function Testimonials() {
  const REVIEWS = [
    {
      name: 'Aditya Vardhan',
      title: 'Managing Director & Entrepreneur',
      rating: 5,
      text: '“Shankara is in a league of its own. The private VIP suite gives complete peace of mind, and the master stylist’s fade precision and hot-towel shave are by far the finest I have experienced in South India.”',
    },
    {
      name: 'Dr. Rajesh Kanna',
      title: 'Senior Surgeon & Groom Client',
      rating: 5,
      text: '“Booked the Grand Groom Royale package for my wedding week. The 24K gold facial and beard architecture had me looking sharp and photogenic throughout all ceremonies. Exceptional service.”',
    },
    {
      name: 'Vikram Sundaram',
      title: 'Tech Executive',
      rating: 5,
      text: '“From the complimentary artisan espresso to the weightless Takara Belmont recliner and Kérastase scalp massage, every visit feels like a luxury resort retreat. Highly recommended for gentlemen.”',
    },
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">Client Acclaim</span>
          <h2 className="section-title">
            Trusted by Distinguished <br />
            <span className="gold-gradient-text">Gentlemen &amp; Leaders.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hear what our esteemed patrons have to say about the Shankara luxury grooming experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className={`testimonial-card reveal reveal-delay-${idx + 1}`}>
              <div className="testimonial-stars">{'★'.repeat(rev.rating)}</div>
              <p className="testimonial-quote">{rev.text}</p>
              <div>
                <div className="testimonial-author-name">{rev.name}</div>
                <div className="testimonial-author-title">{rev.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
