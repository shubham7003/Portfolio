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
          className={`bg-background/90 border border-border backdrop-blur-md rounded-lg shadow-sm transition-all duration-300 overflow-hidden ${
            isExpanded ? "w-48" : "w-12"
          }`}
        >
          {/* Header */}
          <div className={`px-3 py-3 border-b border-border transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
            <span className="text-[10px] font-sans font-semibold text-muted-foreground whitespace-nowrap tracking-widest uppercase">
              Navigation
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
                  className={`w-full flex items-center gap-3 px-3 py-2.5 transition-all duration-200 group relative ${
                    isActive 
                      ? "text-vibrant-orange bg-vibrant-orange/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {/* Indicator Line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vibrant-orange to-vibrant-rose rounded-r-full" />
                  )}

                  {/* Icon */}
                  <span className={`text-sm transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}>
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span className={`text-xs font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
                  }`}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
