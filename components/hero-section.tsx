"use client"

import { motion } from "framer-motion"
import { Code2, Terminal, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-charcoal-bg">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-bold tracking-wider rounded-sm uppercase"
          >
            Front-End Developer
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-mono font-bold leading-[1.1] tracking-tight text-foreground">
            Talk is cheap.<br />
            Show me the code
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg font-mono">
            I design and code beautifully simple things,<br />
            and I love what I do.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          >
            <a
              href="#contact"
              className="inline-block relative text-neon-green font-mono font-bold tracking-widest uppercase pb-1 group"
            >
              LET'S CHAT!
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-neon-green/50 group-hover:bg-neon-green transition-colors" />
            </a>

            {/* Social Links */}
            <div className="flex gap-5 items-center">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-neon-green transition-all hover:scale-110 duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-12 pt-16 md:pt-24"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-mono text-foreground">12</span>
              <span className="text-xs font-mono text-muted-foreground uppercase leading-tight">
                Years<br />Experience
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-mono text-foreground">165</span>
              <span className="text-xs font-mono text-muted-foreground uppercase leading-tight">
                Projects Completed<br />On 18 Countries
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Hooded Developer Image & Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center lg:justify-end"
        >
          {/* Hooded Developer Image */}
          <div className="relative z-10 w-full h-full max-w-lg lg:max-w-xl mx-auto lg:mr-0 xl:-mr-12 pointer-events-none flex items-center justify-center">
            <div className="relative w-[330px] h-[330px] lg:w-[500px] lg:h-[500px]">
              {/* Unified single outer glowing circle */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#d946ef]/65 shadow-[0_0_95px_rgba(217,70,239,0.5)] bg-[#181a1f] group isolate">
                {/* Portrait expanded to fill outer circle */}
                <img
                  src="/images/profile.png"
                  alt="Developer"
                  className="w-full h-full object-cover object-[center_38%] scale-[1.5] transition-transform duration-700 group-hover:scale-[1.55] brightness-[1.05] saturate-[1.05]"
                />

                {/* Subtle vignette to transition to the border */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_75%,rgba(217,70,239,0.1)_90%,rgba(24,26,31,0.5)_100%)] z-10" />

                {/* Purple key-light integration */}
                <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(217,70,239,0)_30%,rgba(217,70,239,0.15)_100%)] mix-blend-overlay z-20" />
              </div>

              {/* Re-placed icon bubbles inside the glowing perimeter */}
              <FloatingIcon
                delay={0}
                className="top-[8%] right-[8%] p-3 bg-[#dcecff]/70 text-[#2f74d8] border-[#8ebcff]/50"
                icon={<Code2 className="w-8 h-8" />}
              />
              <FloatingIcon
                delay={0.8}
                className="bottom-[7%] right-[6%] p-4 bg-[#2b1436]/70 text-[#d946ef] border-[#d946ef]/35"
                icon={<Terminal className="w-10 h-10" />}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FloatingIcon({ icon, className, delay }: { icon: React.ReactNode, className: string, delay: number }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ 
        repeat: Infinity, 
        duration: 4, 
        delay: delay,
        ease: "easeInOut" 
      }}
      className={`absolute z-20 p-4 rounded-full border shadow-2xl backdrop-blur-sm ${className}`}
    >
      {icon}
    </motion.div>
  )
}

