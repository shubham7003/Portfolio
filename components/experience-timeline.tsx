"use client"

import { useState, useEffect, useRef } from "react"

interface Experience {
  id: string
  year: string
  title: string
  company: string
  description: string
  techStack: string[]
  status: "COMPLETED" | "ACTIVE" | "CLASSIFIED"
}

const experiences: Experience[] = [
  {
    id: "EXP_001",
    year: "2024 - Present",
    title: "Student Developer",
    company: "Lovely Professional University",
    description: "Pursuing Engineering degree. Specializing in App Development and AI/ML technologies. Leading academic projects and hackathon teams.",
    techStack: ["Java", "Python", "Data Structures", "AI/ML"],
    status: "ACTIVE"
  },
  {
    id: "EXP_002", 
    year: "2025",
    title: "Security Researcher",
    company: "Independent Research",
    description: "Developed a comprehensive Security Vulnerability Detection Framework. Analyzed buffer overflows and system trapdoors.",
    techStack: ["Python", "Network Security", "Kali Linux", "Scripting"],
    status: "COMPLETED"
  },
  {
    id: "EXP_003",
    year: "2025",
    title: "Android Developer",
    company: "Project Zynkly",
    description: "Designed and developed the Zynkly Android application. Implemented modern Android patterns and Kotlin coroutines.",
    techStack: ["Kotlin", "Android SDK", "XML", "Firebase"],
    status: "COMPLETED"
  },
  {
    id: "EXP_004",
    year: "2024",
    title: "Open Source Contributor",
    company: "GitHub",
    description: "Actively contributing to open source repositories and building personal portfolio of projects.",
    techStack: ["Git", "JavaScript", "HTML/CSS", "Markdown"],
    status: "ACTIVE"
  }
]

function DataStream({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "01アイウエオカキクケコサシスセソタチツテト"
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops: number[] = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = active ? "#bd00ff" : "#1a1a1a"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => clearInterval(interval)
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      width={100}
      height={400}
      className="absolute left-1/2 top-0 -translate-x-1/2 opacity-30"
    />
  )
}

export function ExperienceTimeline() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.3 }
    )

    return () => observerRef.current?.disconnect()
  }, [])

  const registerRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el && observerRef.current) {
      el.id = id
      observerRef.current.observe(el)
    }
  }

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background data streams */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-[#bd00ff] to-transparent"
            style={{ left: `${20 + i * 15}%`, animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      {/* Section header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-block">
          <span className="text-[#ff0055] text-sm tracking-[0.3em] font-mono">
            {'<'} MISSION_LOGS {'/>'} 
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            <span className="text-[#e0e0e0]">EXPERIENCE_</span>
            <span className="text-[#bd00ff] neon-text-purple">ARCHIVE</span>
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ff0055] to-transparent mt-4" />
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Central line with data stream */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-[#bd00ff] via-[#00f7ff] to-[#ff0055]" />
          <DataStream active={hoveredId !== null} />
        </div>

        {/* Timeline items */}
        <div className="space-y-24">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            const isVisible = visibleItems.has(exp.id)
            const isHovered = hoveredId === exp.id

            return (
              <div
                key={exp.id}
                ref={registerRef(exp.id)}
                className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Node on timeline */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all duration-500 z-10 ${
                    isHovered 
                      ? "border-[#00f7ff] bg-[#00f7ff] scale-150 shadow-[0_0_20px_#00f7ff]" 
                      : exp.status === "ACTIVE"
                        ? "border-[#00ff88] bg-[#00ff88]/20 animate-pulse"
                        : "border-[#bd00ff] bg-[#bd00ff]/20"
                  }`}
                >
                  <div className="absolute inset-1 rounded-full bg-[#050505]" />
                </div>

                {/* Content card */}
                <div 
                  className={`w-[calc(50%-40px)] transition-all duration-700 ${
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : `opacity-0 ${isLeft ? "-translate-x-10" : "translate-x-10"}`
                  }`}
                >
                  <div 
                    className={`relative p-6 bg-[#0a0a0a]/80 border transition-all duration-300 ${
                      isHovered 
                        ? "border-[#00f7ff] shadow-[0_0_30px_rgba(0,247,255,0.2)]" 
                        : "border-[#2a2a2a]"
                    }`}
                    style={{
                      clipPath: isLeft 
                        ? "polygon(0 0, 100% 0, 95% 100%, 0 100%)"
                        : "polygon(5% 0, 100% 0, 100% 100%, 0 100%)"
                    }}
                  >
                    {/* Year badge */}
                    <div className={`absolute -top-3 ${isLeft ? "left-4" : "right-4"}`}>
                      <span className="px-3 py-1 bg-[#bd00ff] text-[#050505] text-xs font-bold tracking-wider">
                        {exp.year}
                      </span>
                    </div>

                    {/* Status indicator */}
                    <div className={`absolute top-4 ${isLeft ? "right-8" : "left-8"}`}>
                      <span className={`text-xs font-mono ${
                        exp.status === "ACTIVE" ? "text-[#00ff88]" : 
                        exp.status === "CLASSIFIED" ? "text-[#ff0055]" : "text-[#888]"
                      }`}>
                        [{exp.status}]
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-[#e0e0e0] mb-1">{exp.title}</h3>
                      <p className="text-[#00f7ff] font-mono text-sm mb-3">@{exp.company}</p>
                      <p className="text-[#888] text-sm leading-relaxed mb-4">{exp.description}</p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#bd00ff] text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 ${isLeft ? "right-0" : "left-0"} w-8 h-8`}>
                      <div className={`absolute ${isLeft ? "right-2" : "left-2"} bottom-2 w-4 h-4 border-b-2 border-r-2 border-[#bd00ff]/30`} />
                    </div>
                  </div>

                  {/* Connection line to node */}
                  <div 
                    className={`absolute top-1/2 ${isLeft ? "right-0" : "left-0"} w-10 h-px bg-gradient-to-${isLeft ? "r" : "l"} from-[#2a2a2a] to-transparent ${
                      isHovered ? "!bg-gradient-to-r from-[#00f7ff] to-transparent" : ""
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* End node */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-4">
          <div className="w-4 h-4 rotate-45 border-2 border-[#ff0055] bg-[#050505]" />
        </div>
      </div>
    </section>
  )
}
