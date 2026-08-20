import { useState, useRef, useEffect } from 'react'

const KNOWLEDGE_BASE = {
  services: [
    { name: 'General Dental Check-up & Digital Exam', desc: 'Comprehensive visual & digital radiographic assessment.' },
    { name: 'Teeth Cleaning & Scaling', desc: 'Ultrasonic plaque removal and stain polishing.' },
    { name: 'Root Canal Treatment (RCT)', desc: 'Painless endodontic therapy to save natural teeth.' },
    { name: 'Crowns & Dental Bridges', desc: 'High-strength aesthetic ceramic replacements.' },
    { name: 'Tooth-Coloured Fillings', desc: 'Composite restorations matching your natural enamel.' },
    { name: 'Cosmetic Teeth Whitening', desc: 'In-clinic brightening for a radiant smile.' },
    { name: 'Pediatric Dental Care', desc: 'Gentle, anxiety-free dentistry for children.' },
    { name: 'Dentures (Full & Partial)', desc: 'Custom prosthetics for full functional restoration.' },
  ],
  contacts: [
    { label: 'Reception Desk 1', number: '63742 53113' },
    { label: 'Reception Desk 2', number: '98433 66992' },
    { label: 'Direct Line 1', number: '86180 02904' },
    { label: 'Direct Line 2', number: '79102 50263' },
  ],
  address: '#19A, 2nd Floor, Thirupathi Complex, Pennagaram Road, 4 Roads, Dharmapuri, Tamil Nadu – 636701',
  landmark: 'Located at 4 Roads Junction, Pennagaram Road.',
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
    { day: 'Sunday', time: 'Prior Appointment Only' },
  ],
  doctor: {
    name: 'Dr. S. Manimozhi',
    qual: 'B.D.S., FCE (Fellowship in Clinical Endodontics)',
    title: 'Dental Surgeon & Specialist',
    desc: 'Specialized in single-sitting root canals, aesthetic restorations, and personalized family dental care.',
  },
}

const QUICK_TOPICS = [
  { id: 'services', label: 'Dental Services' },
  { id: 'contact', label: 'Call Numbers' },
  { id: 'address', label: 'Location & Map' },
  { id: 'doctor', label: 'Doctor Profile' },
  { id: 'hours', label: 'Clinic Timings' },
  { id: 'book', label: 'Book Appointment' },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      type: 'welcome',
      text: 'Hello! Welcome to Shankara Dental Clinic. I am your Dental Care Assistant. How can I help you today?',
      time: 'Just now',
      showTopics: true,
    },
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleTopicClick = (topicId) => {
    let userPrompt = ''
    let botMsgData = {}

    if (topicId === 'services') {
      userPrompt = 'What dental services are offered?'
      botMsgData = {
        type: 'services',
        title: 'Complete Dental Care Under One Roof:',
        items: KNOWLEDGE_BASE.services,
      }
    } else if (topicId === 'contact') {
      userPrompt = 'What are the clinic phone numbers?'
      botMsgData = {
        type: 'contact',
        title: 'Direct Clinic Contact Numbers:',
        items: KNOWLEDGE_BASE.contacts,
      }
    } else if (topicId === 'address') {
      userPrompt = 'Where is the clinic located?'
      botMsgData = {
        type: 'address',
        address: KNOWLEDGE_BASE.address,
        landmark: KNOWLEDGE_BASE.landmark,
      }
    } else if (topicId === 'doctor') {
      userPrompt = 'Who is the doctor?'
      botMsgData = {
        type: 'doctor',
        doctor: KNOWLEDGE_BASE.doctor,
      }
    } else if (topicId === 'hours') {
      userPrompt = 'What are the clinic timings?'
      botMsgData = {
        type: 'hours',
        hours: KNOWLEDGE_BASE.hours,
      }
    } else if (topicId === 'book') {
      userPrompt = 'I want to schedule an appointment.'
      botMsgData = {
        type: 'book',
        text: 'You can easily reserve your slot using our direct booking form on this page or call our reception desk directly.',
      }
    }

    sendInteractiveMessage(userPrompt, botMsgData)
  }

  const sendInteractiveMessage = (userText, botData) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      type: 'text',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        ...botData,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showTopics: true,
      }
      setMessages((prev) => [...prev, botMsg])
    }, 500)
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const query = inputText.toLowerCase().trim()
    const currentInput = inputText
    setInputText('')

    let botMsgData = {}

    if (query.includes('service') || query.includes('treatment') || query.includes('root canal') || query.includes('cleaning') || query.includes('crown') || query.includes('filling') || query.includes('whitening')) {
      botMsgData = {
        type: 'services',
        title: 'Our Key Dental Procedures:',
        items: KNOWLEDGE_BASE.services,
      }
    } else if (query.includes('number') || query.includes('phone') || query.includes('contact') || query.includes('call') || query.includes('whatsapp')) {
      botMsgData = {
        type: 'contact',
        title: 'Reception Helplines:',
        items: KNOWLEDGE_BASE.contacts,
      }
    } else if (query.includes('address') || query.includes('location') || query.includes('where') || query.includes('map')) {
      botMsgData = {
        type: 'address',
        address: KNOWLEDGE_BASE.address,
        landmark: KNOWLEDGE_BASE.landmark,
      }
    } else if (query.includes('doctor') || query.includes('manimozhi') || query.includes('dentist')) {
      botMsgData = {
        type: 'doctor',
        doctor: KNOWLEDGE_BASE.doctor,
      }
    } else if (query.includes('time') || query.includes('hour') || query.includes('open') || query.includes('sunday')) {
      botMsgData = {
        type: 'hours',
        hours: KNOWLEDGE_BASE.hours,
      }
    } else if (query.includes('book') || query.includes('appointment') || query.includes('schedule')) {
      botMsgData = {
        type: 'book',
        text: 'You can submit your appointment request through our online booking section or call our reception desk directly.',
      }
    } else {
      botMsgData = {
        type: 'text',
        text: 'Thank you for your message! For clinical questions, pricing inquiries, or booking, please select a topic below or call our desk at 63742 53113.',
      }
    }

    sendInteractiveMessage(currentInput, botMsgData)
  }

  // Render Rich Message Cards
  const renderBotContent = (m) => {
    if (m.type === 'services') {
      return (
        <div className="chat-rich-content">
          <div className="chat-content-title">{m.title}</div>
          <div className="chat-services-list">
            {m.items.map((s, idx) => (
              <div key={idx} className="chat-service-row">
                <div className="chat-service-dot">{idx + 1}</div>
                <div>
                  <div className="chat-service-name">{s.name}</div>
                  <div className="chat-service-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (m.type === 'contact') {
      return (
        <div className="chat-rich-content">
          <div className="chat-content-title">{m.title}</div>
          <div className="chat-contact-list">
            {m.items.map((c, idx) => (
              <div key={idx} className="chat-contact-row">
                <div className="chat-contact-label">{c.label}:</div>
                <a href={`tel:+91${c.number.replace(/\s+/g, '')}`} className="chat-phone-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{c.number}</span>
                </a>
              </div>
            ))}
            <div style={{ marginTop: '10px' }}>
              <a href="https://wa.me/916374253113" target="_blank" rel="noreferrer" className="chat-wa-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.1 7.69C7.86 7.96 7.17 8.61 7.17 9.93C7.17 11.24 8.13 12.51 8.26 12.68C8.39 12.86 10.13 15.52 12.8 16.67C13.44 16.94 13.93 17.11 14.33 17.23C15.01 17.45 15.63 17.42 16.12 17.35C16.67 17.27 17.81 16.66 18.05 16C18.28 15.33 18.28 14.77 18.21 14.65C18.14 14.53 17.96 14.45 17.69 14.32C17.42 14.18 16.08 13.52 15.83 13.43C15.58 13.34 15.4 13.29 15.22 13.56C15.04 13.83 14.52 14.45 14.36 14.63C14.2 14.81 14.04 14.83 13.77 14.7C13.5 14.56 12.63 14.28 11.6 13.36C10.8 12.64 10.25 11.76 10.1 11.49C9.94 11.22 10.08 11.08 10.22 10.94C10.34 10.82 10.49 10.63 10.63 10.47C10.77 10.31 10.81 10.19 10.9 10.01C11 9.83 10.95 9.68 10.88 9.55C10.81 9.41 10.28 8.11 10.06 7.57C9.84 7.05 9.62 7.12 9.45 7.11C9.3 7.11 9.11 7.1 8.93 7.1C8.75 7.1 8.83 7.35 8.83 7.35Z" />
                </svg>
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      )
    }

    if (m.type === 'address') {
      return (
        <div className="chat-rich-content">
          <div className="chat-content-title">Clinic Location:</div>
          <div className="chat-address-card">
            <p className="chat-address-text">{m.address}</p>
            <div className="chat-landmark-tag">{m.landmark}</div>
            <a
              href="https://maps.google.com/?q=Shankara+Dental+Clinic+Pennagaram+Road+Dharmapuri"
              target="_blank"
              rel="noreferrer"
              className="chat-map-action-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      )
    }

    if (m.type === 'doctor') {
      return (
        <div className="chat-rich-content">
          <div className="chat-doctor-card">
            <div className="chat-doc-name">{m.doctor.name}</div>
            <div className="chat-doc-qual">{m.doctor.qual}</div>
            <div className="chat-doc-title">{m.doctor.title}</div>
            <p className="chat-doc-desc">{m.doctor.desc}</p>
          </div>
        </div>
      )
    }

    if (m.type === 'hours') {
      return (
        <div className="chat-rich-content">
          <div className="chat-content-title">Clinical Working Hours:</div>
          <div className="chat-hours-table">
            {m.hours.map((h, idx) => (
              <div key={idx} className="chat-hour-row">
                <span className="chat-hour-day">{h.day}:</span>
                <span className="chat-hour-time">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (m.type === 'book') {
      return (
        <div className="chat-rich-content">
          <p style={{ marginBottom: '12px' }}>{m.text}</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              className="chat-action-pill"
              onClick={() => {
                setIsOpen(false)
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Go to Booking Form →
            </button>
            <a href="tel:+916374253113" className="chat-action-pill outline">
              Call 63742 53113
            </a>
          </div>
        </div>
      )
    }

    // Default text
    return <p>{m.text}</p>
  }

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <button
        className={`chatbot-launcher ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Dental Assistant Chat"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="chatbot-launcher-dot" />
          </>
        )}
      </button>

      {/* Chat Window Modal */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                <path d="M32 8C24 8 18 13 18 20c0 4 1.5 7 3 10 1.5 3.5 2 6 2 8 0 3 1.5 5 3 5 2 0 3-2 4-5 .5-1.5 1-3 2-3s1.5 1.5 2 3c1 3 2 5 4 5 1.5 0 3-2 3-5 0-2 .5-4.5 2-8 1.5-3 3-6 3-10 0-7-6-12-14-12z" fill="#ffffff" />
              </svg>
            </div>
            <div>
              <div className="chatbot-header-title">Shankara Dental Assistant</div>
              <div className="chatbot-header-status">
                <span className="status-indicator" /> Online · Clinic Live Desk
              </div>
            </div>
          </div>
          <button
            className="chatbot-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close Chat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages Body */}
        <div className="chatbot-messages">
          {messages.map((m) => (
            <div key={m.id} className={`chat-bubble-wrap ${m.sender}`}>
              <div className={`chat-bubble ${m.sender}`}>
                {m.sender === 'bot' ? renderBotContent(m) : <p>{m.text}</p>}
                <span className="chat-time">{m.time}</span>
              </div>

              {/* Quick Topic Chips */}
              {m.showTopics && (
                <div className="chat-quick-actions">
                  <span className="quick-action-title">Quick Inquiries:</span>
                  <div className="quick-chips-grid">
                    {QUICK_TOPICS.map((topic) => (
                      <button
                        key={topic.id}
                        className="quick-chip-btn"
                        onClick={() => handleTopicClick(topic.id)}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chat-bubble-wrap bot">
              <div className="chat-bubble bot typing">
                <span className="dot" /><span className="dot" /><span className="dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="chatbot-input-bar">
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask about treatments, appointments..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            className="chatbot-send-btn"
            disabled={!inputText.trim()}
            aria-label="Send Message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
