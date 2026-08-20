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
  // Disable Right-Click and Image Dragging (Content & Media Protection)
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  // Ultra-Smooth Hardware-Accelerated Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // unobserve once visible for zero CPU/GPU overhead
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 80px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
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
    </>
  )
}
