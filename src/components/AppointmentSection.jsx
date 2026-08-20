import { useState } from 'react'

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '', service: '', suite: 'Private VIP Suite', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 900)
  }

  return (
    <section className="booking-section" id="appointment">
      <div className="container">
        <div className="booking-layout">
          {/* Left Info Column */}
          <div className="reveal">
            <span className="section-eyebrow">VIP Slot Reservation</span>
            <h2 className="section-title">
              Reserve Your Private <br />
              <span className="gold-gradient-text">Grooming Experience.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.75', marginBottom: '28px' }}>
              Experience unhurried luxury with our Master Stylist. Reserve your preferred time slot and bespoke services in seconds.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: 'var(--surface-card)', border: '1px solid var(--gold-border-light)', borderRadius: '18px', padding: '18px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: 'var(--white)', fontWeight: '700', fontSize: '15px' }}>Lounge Timings</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Monday – Sunday: 8:30 AM – 9:30 PM</div>
                </div>
              </div>

              <div style={{ background: 'var(--surface-card)', border: '1px solid var(--gold-border-light)', borderRadius: '18px', padding: '18px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.1 7.69C7.86 7.96 7.17 8.61 7.17 9.93C7.17 11.24 8.13 12.51 8.26 12.68C8.39 12.86 10.13 15.52 12.8 16.67C13.44 16.94 13.93 17.11 14.33 17.23C15.01 17.45 15.63 17.42 16.12 17.35C16.67 17.27 17.81 16.66 18.05 16C18.28 15.33 18.28 14.77 18.21 14.65C18.14 14.53 17.96 14.45 17.69 14.32C17.42 14.18 16.08 13.52 15.83 13.43C15.58 13.34 15.4 13.29 15.22 13.56C15.04 13.83 14.52 14.45 14.36 14.63C14.2 14.81 14.04 14.83 13.77 14.7C13.5 14.56 12.63 14.28 11.6 13.36C10.8 12.64 10.25 11.76 10.1 11.49C9.94 11.22 10.08 11.08 10.22 10.94C10.34 10.82 10.49 10.63 10.63 10.47C10.77 10.31 10.81 10.19 10.9 10.01C11 9.83 10.95 9.68 10.88 9.55C10.81 9.41 10.28 8.11 10.06 7.57C9.84 7.05 9.62 7.12 9.45 7.11C9.3 7.11 9.11 7.1 8.93 7.1C8.75 7.1 8.83 7.35 8.83 7.35Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: 'var(--white)', fontWeight: '700', fontSize: '15px' }}>Instant WhatsApp VIP Desk</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>+91 63742 53113 (Direct Concierge)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="booking-card reveal reveal-delay-1">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', border: '2px solid var(--gold-primary)', color: 'var(--gold-primary)', fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--white)', marginBottom: '10px' }}>
                  VIP Reservation Confirmed
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '24px' }}>
                  Thank you, <strong>{form.name}</strong>. Our salon concierge will connect with you at <strong>{form.phone}</strong> to confirm your private suite and prepare your session.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--white)' }}>
                    Book Your Experience
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Complete the quick reservation form below</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      className="form-input" placeholder="e.g. Vikram Sharma"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="form-input" placeholder="+91 98765 43210"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Preferred Date</label>
                    <input
                      id="date" name="date" type="date"
                      className="form-input"
                      value={form.date} onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="time">Preferred Time</label>
                    <select id="time" name="time" className="form-select" value={form.time} onChange={handleChange}>
                      <option value="">Select time slot</option>
                      <option>Morning (9:00 AM – 12:00 PM)</option>
                      <option>Afternoon (1:00 PM – 5:00 PM)</option>
                      <option>Evening Prime (5:00 PM – 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Desired Service / Package</label>
                  <select id="service" name="service" className="form-select" value={form.service} onChange={handleChange}>
                    <option value="">Select service or package</option>
                    <option>Bespoke Hair Architecture &amp; Styling (₹750)</option>
                    <option>Royal Hot Towel Beard Shave (₹550)</option>
                    <option>Kérastase Scalp Detox &amp; Hair Spa (₹1,450)</option>
                    <option>24K Gold &amp; Volcanic Detan Facial (₹1,850)</option>
                    <option>The Executive Signature Package (₹1,499)</option>
                    <option>The Imperial Grooming Ritual (₹2,999)</option>
                    <option>The Grand Groom Wedding Royale (₹4,999)</option>
                    <option>Deep Tissue Head &amp; Neck Acupressure (₹650)</option>
                    <option>Gentleman’s Royal Hand &amp; Foot Spa (₹1,150)</option>
                    <option>Ammonia-Free Grey Blending &amp; Color (₹950)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Special Styling Notes / Requests (Optional)</label>
                  <textarea
                    id="message" name="message"
                    className="form-textarea" placeholder="Specific hairstyle preference, beard style, or wedding date..."
                    rows={3}
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px' }} disabled={loading}>
                  {loading ? (
                    <span>Processing Reservation...</span>
                  ) : (
                    <>
                      <span>Confirm VIP Reservation</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
