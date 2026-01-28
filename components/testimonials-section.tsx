"use client"

import { useState, useEffect, useRef } from "react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  message: string
  avatar: string
  securityLevel: number
}

const testimonials: Testimonial[] = [
  {
    id: "INT_001",
    name: "[REDACTED]",
    role: "CTO",
    company: "NEXUS_CORP",
    message: "The most skilled operative we've encountered. Delivered a quantum-encrypted platform in half the projected timeline. Their code is... beautiful chaos.",
    avatar: "A",
    securityLevel: 5
  },
  {
    id: "INT_002",
    name: "Sarah Chen",
    role: "Engineering Lead",
    company: "CIPHER_LABS",
    message: "Working with them felt like watching a master hacker at work. Every line of code was deliberate, every architecture decision was three steps ahead.",
    avatar: "S",
    securityLevel: 4
  },
  {
    id: "INT_003",
    name: "Marcus Webb",
    role: "Product Director",
    company: "DARK_TECH",
    message: "They don't just write code - they architect digital ecosystems. Our platform's performance increased 340% after their optimization protocols.",
    avatar: "M",
    securityLevel: 4
  },
  {
    id: "INT_004",
    name: "Elena Volkov",
    role: "Security Analyst",
    company: "GHOST_SEC",
    message: "I've audited their systems. Zero vulnerabilities. Either they're paranoid or prescient - probably both. Exactly what you want in a developer.",
    avatar: "E",
    securityLevel: 5
  }
]

function DecryptText({ text, isDecrypted }: { text: string; isDecrypted: boolean }) {
  const [displayText, setDisplayText] = useState("")
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789"

  useEffect(() => {
    if (isDecrypted) {
      let iteration = 0
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              if (index < iteration) return text[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
        )

        if (iteration >= text.length) {
          clearInterval(interval)
        }
        iteration += 1
      }, 30)

      return () => clearInterval(interval)
    } else {
      setDisplayText(text.split("").map(c => c === " " ? " " : "█").join(""))
    }
  }, [isDecrypted, text])

  return <span>{displayText}</span>
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDecrypting, setIsDecrypting] = useState(false)
  const [decryptedCards, setDecryptedCards] = useState<Set<number>>(new Set([0]))
  const containerRef = useRef<HTMLDivElement>(null)

  const handleDecrypt = (index: number) => {
    if (decryptedCards.has(index)) return
    
    setIsDecrypting(true)
    setActiveIndex(index)
    
    setTimeout(() => {
      setDecryptedCards(prev => new Set([...prev, index]))
      setIsDecrypting(false)
    }, 100)
  }

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Glowing orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bd00ff]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f7ff]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Section header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-block">
          <span className="text-[#00f7ff] text-sm tracking-[0.3em] font-mono">
            {'<'} INTERCEPTED_TRANSMISSIONS {'/>'} 
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            <span className="text-[#e0e0e0]">DATA_</span>
            <span className="text-[#ff0055]" style={{ textShadow: "0 0 10px #ff0055, 0 0 20px #ff0055" }}>INTERCEPTS</span>
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00f7ff] to-transparent mt-4" />
        </div>
      </div>

      {/* Testimonials grid */}
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {testimonials.map((testimonial, index) => {
          const isDecrypted = decryptedCards.has(index)
          const isActive = activeIndex === index

          return (
            <div
              key={testimonial.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                isActive ? "scale-[1.02]" : "hover:scale-[1.01]"
              }`}
              onClick={() => handleDecrypt(index)}
            >
              {/* Card */}
              <div 
                className={`relative p-8 bg-[#0a0a0a]/90 border transition-all duration-500 ${
                  isDecrypted 
                    ? "border-[#00f7ff]/50" 
                    : "border-[#ff0055]/50 hover:border-[#ff0055]"
                }`}
                style={{
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  boxShadow: isDecrypted 
                    ? "0 0 30px rgba(0, 247, 255, 0.1)" 
                    : "0 0 30px rgba(255, 0, 85, 0.1)"
                }}
              >
                {/* Security header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2a2a2a]">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div 
                      className={`w-12 h-12 flex items-center justify-center border-2 transition-colors duration-500 ${
                        isDecrypted ? "border-[#00f7ff] text-[#00f7ff]" : "border-[#ff0055] text-[#ff0055]"
                      }`}
                      style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
                    >
                      <span className="text-lg font-bold font-mono">
                        {isDecrypted ? testimonial.avatar : "?"}
                      </span>
                    </div>
                    
                    <div>
                      <p className={`font-bold transition-colors duration-500 ${
                        isDecrypted ? "text-[#e0e0e0]" : "text-[#ff0055]"
                      }`}>
                        {isDecrypted ? testimonial.name : "[ENCRYPTED]"}
                      </p>
                      <p className="text-[#888] text-sm font-mono">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Security level */}
                  <div className="text-right">
                    <p className="text-[#888] text-xs font-mono mb-1">SEC_LEVEL</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-4 transition-colors duration-300 ${
                            i < testimonial.securityLevel 
                              ? isDecrypted ? "bg-[#00f7ff]" : "bg-[#ff0055]"
                              : "bg-[#2a2a2a]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative min-h-[100px]">
                  <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                    isDecrypted ? "text-[#e0e0e0]" : "text-[#ff0055]/70"
                  }`}>
                    <span className="text-[#bd00ff] text-2xl">"</span>
                    <DecryptText text={testimonial.message} isDecrypted={isDecrypted} />
                    <span className="text-[#bd00ff] text-2xl">"</span>
                  </p>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2a2a2a]">
                  <span className="text-xs font-mono text-[#888]">
                    ID: {testimonial.id}
                  </span>
                  <span className={`text-xs font-mono px-2 py-1 ${
                    isDecrypted 
                      ? "text-[#00ff88] bg-[#00ff88]/10" 
                      : "text-[#ff0055] bg-[#ff0055]/10 animate-pulse"
                  }`}>
                    {isDecrypted ? "[DECRYPTED]" : "[CLICK TO DECRYPT]"}
                  </span>
                </div>

                {/* Scan line animation when decrypting */}
                {isDecrypting && isActive && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f7ff]/20 to-transparent animate-scan"
                    style={{ animation: "scan 0.5s linear" }}
                  />
                )}
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#bd00ff]/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#bd00ff]/50" />
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}
