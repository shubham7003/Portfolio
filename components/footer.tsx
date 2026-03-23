"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/shubham7003", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/shubham-kumar-dubey-650485295", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/_shubham_67", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8">
          
          {/* Resume Download Button */}
          <motion.a
            href="/files/shubham_resume.docx"
            download="Shubham_Kumar_Dubey_Resume.docx"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary transition-all group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Download className="w-4 h-4" />
            <span className="font-mono text-sm tracking-wider">DOWNLOAD_RESUME</span>
          </motion.a>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>

          {/* Terminal-style message */}
          <div className="font-mono text-xs text-center text-muted-foreground space-y-1">
            <p>
              <span className="text-secondary-foreground">{">"}</span> CONNECTION_ESTABLISHED
            </p>
            <p>
              <span className="text-primary">{">"}</span> READY_FOR_COLLABORATION
            </p>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-muted-foreground/60">
            <span className="text-destructive">©</span> {new Date().getFullYear()} | SHUBHAM_KUMAR_DUBEY | ALL_RIGHTS_RESERVED
          </div>

          {/* Decorative bottom element */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-neon-green via-[#00f7ff] to-neon-green"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </footer>
  )
}
