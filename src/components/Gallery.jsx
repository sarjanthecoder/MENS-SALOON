import { useState } from 'react'

const GALLERY_ITEMS = [
  { img: '/images/hero_new.jpg', label: 'Reception Lounge' },
  { img: '/images/patient_comfort.jpg', label: 'Private Operatory' },
  { img: '/images/tech_bg.jpg', label: 'Digital 3D Diagnostics' },
  { img: '/images/treatment_crowns.jpg', label: 'Restorative Suite' },
  { img: '/images/treatment_rct.jpg', label: 'Endodontic Care' },
  { img: '/images/treatment_pediatric.jpg', label: 'Pediatric Clinic' },
]

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null)

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <span className="section-eyebrow">Visual Tour</span>
        <h2 className="gallery-title">Inside Shankara Dental Clinic.</h2>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => setLightboxImg(item.img)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.label}`}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxImg(item.img) }}
            >
              <img src={item.img} alt={item.label} loading="lazy" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-overlay-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <span className="gallery-item-overlay-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div
        className={`lightbox ${lightboxImg ? 'open' : ''}`}
        onClick={() => setLightboxImg(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
      >
        <button
          className="lightbox-close"
          onClick={() => setLightboxImg(null)}
          aria-label="Close image preview"
        >
          ✕
        </button>
        {lightboxImg && <img src={lightboxImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />}
      </div>
    </section>
  )
}
