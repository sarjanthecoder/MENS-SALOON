import { useEffect, useRef } from 'react'

export default function FeaturedSection() {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const rect = bgRef.current.parentElement.getBoundingClientRect()
        const offset = -rect.top * 0.25
        bgRef.current.style.transform = `scale(1.1) translateY(${offset}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="featured-section">
      <div className="featured-bg" ref={bgRef} />
      <div className="featured-overlay" />
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="featured-content">
          <p className="featured-tag">● Featured Treatment</p>
          <h2 className="featured-title">Confidence<br />You Can See.</h2>
          <p className="featured-desc">
            A smile transformation is more than cosmetic — it's about feeling confident,
            comfortable, and proud of your appearance every single day.
          </p>
          <a
            href="#treatments"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Explore Treatments →
          </a>
        </div>
      </div>
    </section>
  )
}
