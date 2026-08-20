import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DoctorSection from './components/DoctorSection'
import WhyShankara from './components/WhyShankara'
import TreatmentSection from './components/TreatmentSection'
import FeaturedSection from './components/FeaturedSection'
import TechnologySection from './components/TechnologySection'
import PatientExperience from './components/PatientExperience'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import AppointmentSection from './components/AppointmentSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  // Global scroll reveal observer
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('.reveal')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 30) {
          el.classList.add('visible')
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    
    // Initial check
    checkVisibility()
    window.addEventListener('scroll', checkVisibility, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkVisibility)
    }
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <DoctorSection />
        <WhyShankara />
        <TreatmentSection />
        <FeaturedSection />
        <TechnologySection />
        <PatientExperience />
        <Testimonials />
        <Gallery />
        <FAQ />
        <AppointmentSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Interactive Dental Assistant Chatbot */}
      <Chatbot />

      {/* Floating desktop book button */}
      <a
        href="#appointment"
        className="floating-book"
        onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }) }}
        aria-label="Book an appointment"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Book Appointment</span>
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="mobile-sticky-bar" role="navigation" aria-label="Quick contact">
        <a href="tel:+916374253113" className="bar-call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call</span>
        </a>
        <a href="https://wa.me/916374253113" target="_blank" rel="noreferrer" className="bar-wa">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.1 7.69C7.86 7.96 7.17 8.61 7.17 9.93C7.17 11.24 8.13 12.51 8.26 12.68C8.39 12.86 10.13 15.52 12.8 16.67C13.44 16.94 13.93 17.11 14.33 17.23C15.01 17.45 15.63 17.42 16.12 17.35C16.67 17.27 17.81 16.66 18.05 16C18.28 15.33 18.28 14.77 18.21 14.65C18.14 14.53 17.96 14.45 17.69 14.32C17.42 14.18 16.08 13.52 15.83 13.43C15.58 13.34 15.4 13.29 15.22 13.56C15.04 13.83 14.52 14.45 14.36 14.63C14.2 14.81 14.04 14.83 13.77 14.7C13.5 14.56 12.63 14.28 11.6 13.36C10.8 12.64 10.25 11.76 10.1 11.49C9.94 11.22 10.08 11.08 10.22 10.94C10.34 10.82 10.49 10.63 10.63 10.47C10.77 10.31 10.81 10.19 10.9 10.01C11 9.83 10.95 9.68 10.88 9.55C10.81 9.41 10.28 8.11 10.06 7.57C9.84 7.05 9.62 7.12 9.45 7.11C9.3 7.11 9.11 7.1 8.93 7.1C8.75 7.1 8.83 7.35 8.83 7.35Z" />
          </svg>
          <span>WhatsApp</span>
        </a>
        <a
          href="#appointment"
          className="bar-book"
          onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }) }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Book</span>
        </a>
      </div>
    </>
  )
}
