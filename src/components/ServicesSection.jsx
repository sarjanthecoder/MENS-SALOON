export default function ServicesSection() {
  const SERVICES = [
    {
      id: 'haircut',
      title: 'Bespoke Hair Architecture & Styling',
      duration: '45 mins',
      price: '₹750',
      desc: 'Face-geometry consultation, precision scissor sculpting, skin-fade detailing, invigorating hair wash, and matte clay finish.',
      img: '/images/service_haircut.jpg',
    },
    {
      id: 'shave',
      title: 'Royal Hot Towel Straight-Razor Shave',
      duration: '40 mins',
      price: '₹550',
      desc: 'Pre-shave sandalwood essential oils, steaming herbal hot towels, traditional straight-razor detailing, and cold splash balm.',
      img: '/images/service_shave.jpg',
    },
    {
      id: 'spa',
      title: 'Kérastase Scalp Detox & Hair Spa',
      duration: '60 mins',
      price: '₹1,450',
      desc: 'Micro-mist therapeutic steam, deep scalp exfoliation, anti-dandruff / anti-hairfall serum infusion, and head massage.',
      img: '/images/service_spa.jpg',
    },
    {
      id: 'facial',
      title: '24K Gold & Charcoal Detan Facial',
      duration: '60 mins',
      price: '₹1,850',
      desc: 'Ultrasonic pore cleansing, volcanic ash detan treatment, 24K gold active elixir massage, and calming cryogenic ice globe therapy.',
      img: '/images/service_facial.jpg',
    },
    {
      id: 'massage',
      title: 'Deep Tissue Head & Neck Acupressure',
      duration: '35 mins',
      price: '₹650',
      desc: 'Stress-melting acupressure points on scalp, temples, and shoulders with warm organic argan and almond herbal oils.',
      img: '/images/service_massage.jpg',
    },
    {
      id: 'groom',
      title: 'The Grand Groom Wedding Royale',
      duration: '180 mins',
      price: '₹4,999',
      desc: 'Complete all-in-one pre-wedding transformation: Hair architecture, royal beard detailing, gold facial, hair spa, manicure & styling.',
      img: '/images/service_wedding.jpg',
    },
    {
      id: 'manicure',
      title: 'Gentleman’s Royal Hand & Foot Spa',
      duration: '50 mins',
      price: '₹1,150',
      desc: 'Warm copper bowl botanical soak, dead-skin buffing, nail grooming, dead sea salt scrub, and relaxing foot acupressure.',
      img: '/images/service_mani_pedi.jpg',
    },
    {
      id: 'color',
      title: 'Ammonia-Free Grey Blending & Color',
      duration: '45 mins',
      price: '₹950',
      desc: 'Discreet, natural grey camouflage blending for hair and beard using dermatologically safe organic Italian dyes.',
      img: '/images/service_color.jpg',
    },
  ]

  const scrollToBooking = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="services-luxe-section" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">The Service Catalog</span>
          <h2 className="section-title">
            Signature Grooming &amp; <br />
            <span className="gold-gradient-text">Artisanal Spa Rituals.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Each service is executed with surgical precision using imported global formulations and sanitized single-use tools.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((srv, idx) => (
            <div key={srv.id} className={`service-card reveal reveal-delay-${(idx % 3) + 1}`}>
              <div className="service-img-wrap">
                <img src={srv.img} alt={srv.title} loading="lazy" />
                <span className="service-duration-badge">{srv.duration}</span>
              </div>

              <div className="service-body">
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>

                <div className="service-footer">
                  <span className="service-price">{srv.price}</span>
                  <a
                    href="#appointment"
                    className="service-book-link"
                    onClick={(e) => { e.preventDefault(); scrollToBooking() }}
                  >
                    <span>Reserve Slot</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
