"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/shubham7003", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/shubham-kumar-dubey-650485295", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/_shubham_67", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-[#2a2a2a]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bd00ff]/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-[#2a2a2a] bg-[#0a0a0a] text-[#888888] transition-all hover:border-[#bd00ff] hover:text-[#bd00ff] hover:shadow-[0_0_15px_rgba(189,0,255,0.3)]"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Terminal-style message */}
          <div className="font-mono text-xs text-center text-[#888888] space-y-1">
            <p>
              <span className="text-[#00f7ff]">{">"}</span> CONNECTION_ESTABLISHED
            </p>
            <p>
              <span className="text-[#bd00ff]">{">"}</span> READY_FOR_COLLABORATION
            </p>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-[#888888]">
            <span className="text-[#ff0055]">©</span> {new Date().getFullYear()} | SHUBHAM_KUMAR_DUBEY | ALL_RIGHTS_RESERVED
          </div>

          {/* Decorative bottom element */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#bd00ff] via-[#00f7ff] to-[#ff0055]"
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
