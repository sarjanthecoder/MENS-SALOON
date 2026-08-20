import { useState } from 'react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const FAQS = [
    {
      q: 'Do I need a prior appointment, or are walk-ins welcome?',
      a: 'We strongly recommend reserving a VIP slot in advance to guarantee an unhurried session with our Master Stylist and access to a private suite with zero waiting time. Walk-ins are accommodated subject to cabin availability.',
    },
    {
      q: 'What global hair and skincare formulations do you formulate with?',
      a: 'We exclusively use world-renowned luxury brands including Kérastase Homme (Paris), Davines (Parma, Italy), Moroccanoil, 24K Gold colloidal serums, and dermatologically tested ammonia-free organic dyes.',
    },
    {
      q: 'What does the Grand Groom Wedding Royale package cover?',
      a: 'The wedding package is a full bespoke regimen starting 1–2 weeks before the wedding: face-geometry haircut, skin glow and detan ritual, beard symmetry architecture, micro-mist hair spa, manicure-pedicure, and final big-day hair styling.',
    },
    {
      q: 'How long does a bespoke haircut and royal hot towel shave take?',
      a: 'A complete haircut and royal hot-towel straight-razor shave takes approximately 75 to 90 minutes of dedicated, relaxing craftsmanship including head wash and acupressure massage.',
    },
    {
      q: 'Is there private valet parking available at the lounge?',
      a: 'Yes, we provide complimentary private valet parking at Thirupathi Complex, 4 Roads, Dharmapuri with direct elevator access to our 2nd-floor salon lounge.',
    },
  ]

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx)

  return (
    <section className="why-luxe-section" style={{ background: 'var(--bg-ivory)', borderTop: '1px solid var(--gold-border-light)' }} id="faq">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <span className="section-eyebrow">Frequently Asked Questions</span>
          <h2 className="section-title">
            Everything You Need to <br />
            <span className="gold-gradient-text">Know Before Your Visit.</span>
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '40px auto 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="tilt-card reveal"
                style={{
                  padding: '24px 28px',
                  cursor: 'pointer',
                  borderRadius: '18px',
                  background: 'var(--white)',
                  boxShadow: 'var(--shadow-card)',
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>
                    {faq.q}
                  </h3>
                  <span style={{ fontSize: '22px', color: 'var(--gold-primary)', fontWeight: '800', transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>
                    +
                  </span>
                </div>

                {isOpen && (
                  <p style={{ color: 'var(--text-body)', fontSize: '15px', lineHeight: '1.7', marginTop: '14px', borderTop: '1px solid var(--gold-border-light)', paddingTop: '14px' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
