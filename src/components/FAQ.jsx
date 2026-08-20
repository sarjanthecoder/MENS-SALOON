import { useState } from 'react'

const FAQS = [
  {
    q: 'What documents or records should I bring for my first consultation?',
    a: 'Please bring any prior dental X-rays, medical records of ongoing medications or systemic conditions, and a valid ID. Arriving a few minutes ahead allows seamless digital registration.',
  },
  {
    q: 'How frequently should preventive check-ups and scaling be scheduled?',
    a: 'Clinical dental standards recommend routine comprehensive evaluation and scaling every six months to intercept early decay and gum inflammation before symptoms arise.',
  },
  {
    q: 'What is the standard duration of a primary dental consultation?',
    a: 'An initial clinical appointment typically spans 30 to 45 minutes, encompassing visual/digital examination, diagnostic discussion, and a prioritized treatment plan.',
  },
  {
    q: 'Are all procedures performed in-house at the Dharmapuri clinic?',
    a: 'Yes, routine operative dentistry, root canal treatments, prosthetic crowns, cosmetic scaling, and pediatric procedures are delivered on-site with verified sterilization protocols.',
  },
  {
    q: 'How does the clinic confirm appointment requests submitted online?',
    a: 'Upon submitting your booking details, our front desk coordinator reviews doctor availability and contacts you via call or WhatsApp within operating hours to confirm your time slot.',
  },
  {
    q: 'Do you provide specialized care for young children and nervous patients?',
    a: 'Yes, we practice gentle, communicative dentistry tailored to put anxious patients and children completely at ease before initiating any procedure.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div>
            <span className="section-eyebrow">Patient Inquiries</span>
            <h2 className="faq-sidebar-title">Frequently Asked<br />Questions.</h2>
            <p className="faq-sidebar-desc">
              Clear information regarding clinical protocols, consultation prep, and scheduling.
            </p>
            <div style={{ marginTop: '32px' }}>
              <a href="tel:+916374253113" className="btn-primary" style={{ display: 'inline-flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Clinic Desk
              </a>
            </div>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className={`faq-question${open === i ? ' open' : ''}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className={`faq-answer${open === i ? ' open' : ''}`} role="region">
                  <p className="faq-answer-inner">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
