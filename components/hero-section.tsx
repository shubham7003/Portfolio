"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let rotation = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener("resize", resize)

    const drawWireframeSphere = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.35

      ctx.clearRect(0, 0, width, height)

      // Draw longitude lines
      ctx.strokeStyle = "#bd00ff"
      ctx.lineWidth = 1

      for (let i = 0; i < 12; i++) {
        ctx.beginPath()
        const angle = (i / 12) * Math.PI * 2 + rotation

        for (let j = 0; j <= 50; j++) {
          const phi = (j / 50) * Math.PI
          const x = centerX + radius * Math.sin(phi) * Math.cos(angle)
          const y = centerY + radius * Math.cos(phi)
          const depth = Math.sin(phi) * Math.sin(angle)

          ctx.globalAlpha = 0.3 + depth * 0.4

          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Draw latitude lines
      ctx.strokeStyle = "#00f7ff"
      for (let i = 1; i < 8; i++) {
        ctx.beginPath()
        const phi = (i / 8) * Math.PI
        const r = radius * Math.sin(phi)
        const y = centerY + radius * Math.cos(phi)

        for (let j = 0; j <= 50; j++) {
          const theta = (j / 50) * Math.PI * 2 + rotation
          const x = centerX + r * Math.cos(theta)
          const depth = Math.sin(theta)

          ctx.globalAlpha = 0.3 + depth * 0.4

          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Draw glowing center point
      ctx.globalAlpha = 1
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 0.3)
      gradient.addColorStop(0, "rgba(189, 0, 255, 0.3)")
      gradient.addColorStop(1, "rgba(189, 0, 255, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.3, 0, Math.PI * 2)
      ctx.fill()

      // Draw data points
      for (let i = 0; i < 20; i++) {
        const phi = Math.random() * Math.PI
        const theta = Math.random() * Math.PI * 2 + rotation
        const x = centerX + radius * Math.sin(phi) * Math.cos(theta)
        const y = centerY + radius * Math.cos(phi)
        const depth = Math.sin(phi) * Math.sin(theta)

        if (depth > 0) {
          ctx.fillStyle = "#ff0055"
          ctx.globalAlpha = 0.5 + depth * 0.5
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      rotation += 0.005
      animationId = requestAnimationFrame(drawWireframeSphere)
    }

    drawWireframeSphere()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background circuit lines */}
      <div className="absolute inset-0 circuit-bg" />
      
      {/* Pulsing circuit accent */}
      <motion.div
        className="absolute left-0 top-1/3 w-px h-64 bg-gradient-to-b from-transparent via-[#bd00ff] to-transparent circuit-pulse"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute right-0 top-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#00f7ff] to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
      />

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              className="inline-block px-3 py-1 border border-[#00f7ff] bg-[#00f7ff]/5 text-[#00f7ff] font-mono text-xs uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              System Access Granted
            </motion.div>

            <GlitchText text="> SHUBHAM_DUBEY" />
            <GlitchText text="// FULLSTACK_ENGINEER" delay={0.3} />
          </div>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-[#888888] font-mono leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            
            <span className="text-[#00f7ff]">Security Researcher</span>.
            <br />
            A passionate developer from India, currently student in Lovely Professional University.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 bg-[#bd00ff] text-[#050505] font-mono text-sm uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(189,0,255,0.5)]"
            >
              <span className="relative z-10">[ VIEW_PROJECTS ]</span>
              <div className="absolute inset-0 bg-[#ff0055] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a
              href="#skills"
              className="px-6 py-3 border border-[#00f7ff] text-[#00f7ff] font-mono text-sm uppercase tracking-wider transition-all hover:bg-[#00f7ff]/10 hover:shadow-[0_0_20px_rgba(0,247,255,0.3)]"
            >
              [ SCAN_SKILLS ]
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Holographic visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[300px] md:h-[400px] lg:h-[500px]"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 font-mono text-xs text-[#888888]">
            <div className="text-[#00f7ff]">COORDS: 20.5937°N</div>
            <div className="text-[#bd00ff]">SIGNAL: ██████████</div>
          </div>
          
          <div className="absolute bottom-4 left-4 font-mono text-xs text-[#888888]">
            <div className="text-[#ff0055]">STATUS: ONLINE</div>
            <div className="text-[#888888]">UPTIME: 99.9%</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function GlitchText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-[#e0e0e0] tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + delay }}
      whileHover={{ 
        textShadow: [
          "2px 0 #00f7ff, -2px 0 #ff0055",
          "-2px 0 #00f7ff, 2px 0 #ff0055",
          "2px 0 #bd00ff, -2px 0 #00f7ff",
        ]
      }}
    >
      {text}
    </motion.h1>
  )
}
