import { useState } from 'react'

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '', treatment: '', message: ''
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
    <section className="appointment-section-light" id="appointment">
      <div className="container">
        <div className="appointment-layout-light">
          {/* Left Info Column */}
          <div className="appointment-info-light">
            <span className="section-eyebrow">Direct Clinic Booking</span>
            <h2 className="section-title-dark" style={{ marginBottom: '18px' }}>
              Schedule Your Dental Visit.
            </h2>
            <p className="appointment-desc-light">
              Experience gentle, unhurried dentistry with Dr. S. Manimozhi. Reserve your consultation time in just a few clicks.
            </p>

            {/* Feature Badges */}
            <div className="appointment-badges-grid">
              <div className="appt-badge-item">
                <div className="appt-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="appt-badge-title">Strict Sterilization</div>
                  <div className="appt-badge-sub">Autoclaved instruments & hygienic operatory</div>
                </div>
              </div>

              <div className="appt-badge-item">
                <div className="appt-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="appt-badge-title">Minimal Wait Time</div>
                  <div className="appt-badge-sub">Prioritized slot allocations</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="appt-quick-contact-box">
              <div className="appt-qc-header">Need immediate assistance?</div>
              <div className="appt-qc-row">
                <a href="tel:+916374253113" className="appt-qc-btn call">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>63742 53113</span>
                </a>
                <a href="https://wa.me/916374253113" target="_blank" rel="noreferrer" className="appt-qc-btn wa">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.1 7.69C7.86 7.96 7.17 8.61 7.17 9.93C7.17 11.24 8.13 12.51 8.26 12.68C8.39 12.86 10.13 15.52 12.8 16.67C13.44 16.94 13.93 17.11 14.33 17.23C15.01 17.45 15.63 17.42 16.12 17.35C16.67 17.27 17.81 16.66 18.05 16C18.28 15.33 18.28 14.77 18.21 14.65C18.14 14.53 17.96 14.45 17.69 14.32C17.42 14.18 16.08 13.52 15.83 13.43C15.58 13.34 15.4 13.29 15.22 13.56C15.04 13.83 14.52 14.45 14.36 14.63C14.2 14.81 14.04 14.83 13.77 14.7C13.5 14.56 12.63 14.28 11.6 13.36C10.8 12.64 10.25 11.76 10.1 11.49C9.94 11.22 10.08 11.08 10.22 10.94C10.34 10.82 10.49 10.63 10.63 10.47C10.77 10.31 10.81 10.19 10.9 10.01C11 9.83 10.95 9.68 10.88 9.55C10.81 9.41 10.28 8.11 10.06 7.57C9.84 7.05 9.62 7.12 9.45 7.11C9.3 7.11 9.11 7.1 8.93 7.1C8.75 7.1 8.83 7.35 8.83 7.35Z" />
                  </svg>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="appointment-card-light">
            {submitted ? (
              <div className="form-success-light">
                <div className="form-success-icon-light">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="form-success-title-light">Appointment Request Submitted</h3>
                <p className="form-success-desc-light">
                  Thank you, <strong>{form.name}</strong>. Our front desk at Shankara Dental Clinic will call you at <strong>{form.phone}</strong> to confirm your slot.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '20px' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-card-header-light">
                  <div className="form-card-title">Book a Consultation</div>
                  <div className="form-card-sub">Fill out the quick form below</div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-light" htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      className="form-input-light" placeholder="e.g. Ramesh Kumar"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-light" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="form-input-light" placeholder="+91 98765 43210"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label-light" htmlFor="email">Email Address (Optional)</label>
                  <input
                    id="email" name="email" type="email"
                    className="form-input-light" placeholder="name@example.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-light" htmlFor="date">Preferred Date</label>
                    <input
                      id="date" name="date" type="date"
                      className="form-input-light"
                      value={form.date} onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-light" htmlFor="time">Preferred Time Slot</label>
                    <select id="time" name="time" className="form-select-light" value={form.time} onChange={handleChange}>
                      <option value="">Select time slot</option>
                      <option>Morning (9:00 AM – 12:00 PM)</option>
                      <option>Afternoon (2:00 PM – 5:00 PM)</option>
                      <option>Evening (5:00 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label-light" htmlFor="treatment">Treatment / Concern</label>
                  <select id="treatment" name="treatment" className="form-select-light" value={form.treatment} onChange={handleChange}>
                    <option value="">Select purpose of visit</option>
                    <option>General Dental Check-up</option>
                    <option>Teeth Cleaning & Scaling</option>
                    <option>Toothache / Root Canal</option>
                    <option>Crowns & Bridgework</option>
                    <option>Tooth-Coloured Fillings</option>
                    <option>Cosmetic Teeth Whitening</option>
                    <option>Dentures & Replacement</option>
                    <option>Pediatric Child Care</option>
                    <option>Other Dental Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label-light" htmlFor="message">Note for Doctor (Optional)</label>
                  <textarea
                    id="message" name="message"
                    className="form-textarea-light" placeholder="Any specific dental symptoms or questions..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit-light" disabled={loading}>
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Confirm Appointment Request</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="form-disclaimer-light">
                  Direct clinic booking request. Our reception desk will verify doctor availability and call you.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
