"use client"

import { useState, useEffect } from "react"

const navItems = [
  { id: "hero", label: "HOME", icon: "⌂" },
  { id: "projects", label: "PROJECTS", icon: "◈" },
  { id: "skills", label: "SKILLS", icon: "◇" },
  { id: "experience", label: "EXPERIENCE", icon: "↻" },
  { id: "achievements", label: "ACHIEVEMENTS", icon: "★" },
  { id: "testimonials", label: "INTERCEPTS", icon: "◐" },
  { id: "terminal", label: "TERMINAL", icon: ">" }
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show nav after scrolling past hero
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    // Track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsExpanded(false)
  }

  return (
    <nav 
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
      }`}
    >
      <div 
        className="relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Navigation container */}
        <div 
          className={`bg-[#0a0a0a]/90 border border-[#2a2a2a] backdrop-blur-sm transition-all duration-300 ${
            isExpanded ? "w-48" : "w-12"
          }`}
          style={{
            clipPath: "polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)"
          }}
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-[#2a2a2a]">
            <span className={`text-[10px] font-mono text-[#bd00ff] whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}>
              NAV_SYSTEM v1.0
            </span>
          </div>

          {/* Nav items */}
          <div className="py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 transition-all duration-200 group ${
                    isActive 
                      ? "text-[#00f7ff] bg-[#00f7ff]/10" 
                      : "text-[#888] hover:text-[#e0e0e0] hover:bg-[#1a1a1a]"
                  }`}
                >
                  {/* Icon */}
                  <span className={`font-mono text-lg transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}>
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span className={`text-xs font-mono whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
                  }`}>
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <span className={`ml-auto text-[8px] font-mono transition-all duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}>
                      [ACTIVE]
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Footer */}
          <div className={`px-3 py-2 border-t border-[#2a2a2a] transition-all duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0 h-0 py-0 overflow-hidden"
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-[10px] font-mono text-[#888]">SYSTEM_ONLINE</span>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#bd00ff]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#00f7ff]" />
      </div>
    </nav>
  )
}
