import { useState, useRef, useEffect } from 'react'

const KNOWLEDGE_BASE = {
  services: [
    { name: 'Bespoke Hair Architecture', price: '₹750', desc: 'Precision fade & scissor sculpting' },
    { name: 'Royal Hot Towel Shave', price: '₹550', desc: 'Sandalwood oils & straight-razor detailing' },
    { name: 'Kérastase Scalp Detox', price: '₹1,450', desc: 'Micro-mist hair spa & scalp therapy' },
    { name: '24K Gold Detan Facial', price: '₹1,850', desc: 'Volcanic ash peel & 24K gold active elixir' },
    { name: 'The Grand Groom Royale', price: '₹4,999', desc: 'Complete wedding day transformation' },
  ],
  packages: [
    { name: 'Executive Signature', price: '₹1,499' },
    { name: 'Imperial Grooming Ritual', price: '₹2,999' },
    { name: 'Grand Groom Royale', price: '₹4,999' },
  ],
  timing: 'Monday – Sunday: 8:30 AM – 9:30 PM (Private VIP suites by prior reservation)',
  location: '#42, 2nd Level, The Grand Promenade, Luxury Boulevard, Metro City',
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      type: 'text',
      text: 'Greetings, Gentleman. I am your AI Luxury Grooming Stylist at Shankara Men’s Salon. How may I elevate your style today?',
      time: 'Just now',
      showTopics: true,
    },
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleTopicClick = (topicKey, userPrompt) => {
    let botMsgData = {}

    if (topicKey === 'services') {
      botMsgData = {
        type: 'services',
        title: 'Our Signature Grooming Rituals:',
        items: KNOWLEDGE_BASE.services,
      }
    } else if (topicKey === 'wedding') {
      botMsgData = {
        type: 'wedding',
        title: 'Grand Groom Wedding Packages:',
        text: 'Our bespoke wedding packages include face-geometry haircuts, 24K gold detan facials, beard symmetry architecture, hair spa, and wedding day styling. Pricing starts from ₹4,999.',
      }
    } else if (topicKey === 'timing') {
      botMsgData = {
        type: 'info',
        title: 'Lounge Hours & Privacy:',
        text: KNOWLEDGE_BASE.timing,
      }
    } else if (topicKey === 'book') {
      botMsgData = {
        type: 'book',
        text: 'You can reserve your private VIP suite right on this page or connect directly with our WhatsApp concierge.',
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
    }, 450)
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const query = inputText.toLowerCase().trim()
    const currentInput = inputText
    setInputText('')

    let botMsgData = {}

    if (query.includes('hair') || query.includes('cut') || query.includes('fade') || query.includes('shave') || query.includes('facial') || query.includes('price') || query.includes('service')) {
      botMsgData = {
        type: 'services',
        title: 'Our Signature Services:',
        items: KNOWLEDGE_BASE.services,
      }
    } else if (query.includes('wedding') || query.includes('groom') || query.includes('marriage')) {
      botMsgData = {
        type: 'wedding',
        title: 'Wedding Royale Packages:',
        text: 'Our Grand Groom Royale offers complete pre-wedding skincare, beard detailing, hair spa, and wedding day styling. Starts from ₹4,999.',
      }
    } else {
      botMsgData = {
        type: 'text',
        text: `Thank you for your inquiry regarding "${currentInput}". Our Master Stylist would be delighted to assist you in our private VIP lounge. Would you like to reserve a slot?`,
      }
    }

    sendInteractiveMessage(currentInput, botMsgData)
  }

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        className="chatbot-launcher"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Grooming Assistant"
        style={{
          position: 'fixed', bottom: '28px', left: '28px', zIndex: 996,
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--gold-light), var(--gold-primary))',
          border: '2px solid var(--white)',
          color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(184, 134, 11, 0.45)', cursor: 'pointer',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed', bottom: '96px', left: '28px', zIndex: 999,
            width: '360px', maxWidth: 'calc(100vw - 40px)', height: '480px',
            background: 'var(--white)', border: '1.5px solid var(--gold-border)',
            borderRadius: '24px', display: 'flex', flexDirection: 'column',
            boxShadow: '0 24px 60px rgba(15, 19, 26, 0.15), 0 0 30px rgba(184, 134, 11, 0.15)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{ background: 'var(--bg-ivory)', padding: '16px 20px', borderBottom: '1.5px solid var(--gold-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--gold-primary)', boxShadow: '0 0 8px var(--gold-primary)' }} />
              <div>
                <strong style={{ color: 'var(--text-dark)', fontSize: '14px', display: 'block' }}>Shankara AI Stylist</strong>
                <span style={{ color: 'var(--gold-deep)', fontSize: '11px', fontWeight: '700' }}>Luxury Grooming Concierge</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '20px', cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m) => (
              <div key={m.id} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div
                  style={{
                    background: m.sender === 'user' ? 'linear-gradient(135deg, var(--gold-light), var(--gold-primary))' : 'var(--bg-ivory)',
                    color: m.sender === 'user' ? 'var(--white)' : 'var(--text-dark)',
                    padding: '12px 16px', borderRadius: '16px', fontSize: '13.5px', lineHeight: '1.55',
                    border: m.sender === 'user' ? 'none' : '1.5px solid var(--gold-border-light)',
                    fontWeight: m.sender === 'user' ? '700' : '400',
                  }}
                >
                  {m.text && <p>{m.text}</p>}
                  {m.title && <strong style={{ display: 'block', color: 'var(--gold-deep)', marginBottom: '6px' }}>{m.title}</strong>}
                  {m.items && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                      {m.items.map((it, i) => (
                        <div key={i} style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                          <span>{it.name}</span>
                          <strong style={{ color: 'var(--gold-deep)' }}>{it.price}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', color: 'var(--gold-deep)', fontSize: '12px', fontStyle: 'italic' }}>
                Stylist is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Topics */}
          <div style={{ padding: '8px 14px', background: 'var(--bg-ivory)', display: 'flex', gap: '6px', overflowX: 'auto', borderTop: '1.5px solid var(--gold-border-light)' }}>
            <button
              onClick={() => handleTopicClick('services', 'What are your signature services?')}
              style={{ background: 'var(--white)', border: '1px solid var(--gold-border)', color: 'var(--gold-deep)', fontSize: '11px', fontWeight: '700', padding: '5px 10px', borderRadius: '100px', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Services Menu
            </button>
            <button
              onClick={() => handleTopicClick('wedding', 'Tell me about Groom wedding packages')}
              style={{ background: 'var(--white)', border: '1px solid var(--gold-border)', color: 'var(--gold-deep)', fontSize: '11px', fontWeight: '700', padding: '5px 10px', borderRadius: '100px', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Wedding Packages
            </button>
            <button
              onClick={() => handleTopicClick('book', 'How can I reserve a VIP slot?')}
              style={{ background: 'var(--white)', border: '1px solid var(--gold-border)', color: 'var(--gold-deep)', fontSize: '11px', fontWeight: '700', padding: '5px 10px', borderRadius: '100px', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Book Slot
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} style={{ padding: '12px', display: 'flex', gap: '8px', background: 'var(--white)' }}>
            <input
              type="text"
              placeholder="Ask about haircuts, styling..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{ flex: 1, background: 'var(--bg-ivory)', border: '1.5px solid var(--gold-border-light)', borderRadius: '100px', padding: '10px 16px', color: 'var(--text-dark)', fontSize: '13px', outline: 'none' }}
            />
            <button
              type="submit"
              style={{ background: 'linear-gradient(135deg, var(--gold-light), var(--gold-primary))', border: 'none', width: '38px', height: '38px', borderRadius: '50%', color: 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  )
}
