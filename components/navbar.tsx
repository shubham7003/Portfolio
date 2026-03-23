"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Twitter, Mail } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <span className="text-foreground">Shubham</span>
          <span className="text-foreground/70">Dubey</span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#services" className="text-neon-green hover:text-neon-green/80 flex items-center gap-2 transition-colors">
            <span className="text-xs">&lt;</span> Services <span className="text-xs">&gt;</span>
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Works</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Notes</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contacts</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-neon-green transition-colors flex items-center gap-2 text-sm">
              <Twitter className="w-4 h-4" /> <span className="hidden lg:inline">Twitter</span>
            </a>
            <a href="#" className="hover:text-neon-green transition-colors flex items-center gap-2 text-sm">
              <Github className="w-4 h-4" /> <span className="hidden lg:inline">Github</span>
            </a>
          </div>
          <a 
            href="#contact"
            className="w-10 h-10 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-neon-green hover:bg-neon-green/10 transition-all hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
