import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach(e => e.classList.add('visible'))
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const TECH_STEPS = [
  {
    num: '01',
    tag: 'Imaging',
    title: 'Precision Diagnosis',
    desc: 'Digital intraoral radiography and magnification diagnostics provide 3D clarity for accurate treatment planning.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'Roadmap',
    title: 'Custom Care Planning',
    desc: 'A comprehensive, step-by-step roadmap is discussed transparently with clear timelines and estimated outcomes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Gentle',
    title: 'Micro-Invasive Treatment',
    desc: 'Contemporary endodontic motors and sterile isolation techniques minimize tissue trauma and expedite healing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4-14 14H4v-4L18 2z" />
        <path d="m14.5 5.5 4 4" />
      </svg>
    ),
  },
  {
    num: '04',
    tag: 'Recall',
    title: 'Preventive Continuity',
    desc: 'Post-procedure monitoring protocols and digital recall reminders to safeguard your results long-term.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
]

export default function TechnologySection() {
  const ref = useReveal()

  return (
    <section className="tech-section-premium" id="technology" ref={ref}>
      <div className="container">
        <div className="tech-header-block">
          <span className="section-eyebrow reveal">Clinical Workflow</span>
          <h2 className="tech-headline-premium reveal reveal-delay-1">
            Modern Technology. <span className="text-gradient-sky">Precise Dentistry.</span>
          </h2>
          <p className="tech-sub-text reveal reveal-delay-2">
            Integrated diagnostic imaging and guided procedures designed to maximize patient comfort and surgical precision.
          </p>
        </div>

        <div className="tech-grid-premium">
          {/* Left Tech Showcase Card with Scanner Effect */}
          <div className="tech-showcase-card reveal">
            <div className="tech-image-container">
              <img src="/images/tech_bg.jpg" alt="Digital Dental Diagnostic Technology" loading="lazy" />
              <div className="tech-scanner-beam" />
              <div className="tech-hud-overlay">
                <div className="tech-hud-tag">
                  <span className="tech-pulse-dot" />
                  <span>3D Digital Diagnostics Active</span>
                </div>
                <div className="tech-hud-badge">
                  <div className="tech-hud-val">0.01mm</div>
                  <div className="tech-hud-lbl">Measurement Precision</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Workflow Cards */}
          <div className="tech-steps-column">
            {TECH_STEPS.map((step, i) => (
              <div className="tech-step-card-premium reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={step.num}>
                <div className="tech-step-left">
                  <div className="tech-step-num-box">
                    <span>{step.num}</span>
                  </div>
                  <div className="tech-step-icon-bubble">{step.icon}</div>
                </div>

                <div className="tech-step-right">
                  <div className="tech-step-tag-pill">{step.tag}</div>
                  <h3 className="tech-step-card-title">{step.title}</h3>
                  <p className="tech-step-card-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
