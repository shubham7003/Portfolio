"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Lock, Unlock } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SECURITY_FRAMEWORK",
    description: "Framework to detect and mitigate security vulnerabilities like buffer overflows and cache poisoning",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    tech: ["Python", "Security", "Simulation", "Monitoring"],
    status: "DEPLOYED",
    github: "https://github.com/shubham7003/Security-Vulnerability-Detection-Framework",
    live: "#",
  },
  {
    id: 2,
    title: "ZYNKLY_APP",
    description: "Android Application developed for Zynkly",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tech: ["JavaScript", "Android", "Mobile", "App"],
    status: "DEPLOYED",
    github: "https://github.com/shubham7003/Zynkly",
    live: "#",
  },
  {
    id: 3,
    title: "KOTLIN_OOPS",
    description: "Comprehensive study and implementation of Kotlin OOP concepts",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    tech: ["Kotlin", "OOP", "Android Studio", "Education"],
    status: "ARCHIVED",
    github: "https://github.com/shubham7003/Kotlin-From-Scratch",
    live: "#",
  },
  {
    id: 4,
    title: "TODO_LIST",
    description: "Interactive TO DO List application for task management",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tech: ["JavaScript", "HTML5", "CSS3", "Web"],
    status: "DEPLOYED",
    github: "https://github.com/shubham7003/To-DO",
    live: "#",
  },
  {
    id: 5,
    title: "DSA_PROJECTS",
    description: "Collection of Data Structures and Algorithms implementations",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tech: ["Java", "Algorithms", "Data Structures", "Problem Solving"],
    status: "ACTIVE",
    github: "https://github.com/shubham7003/DSA-Projects",
    live: "#",
  },
  {
    id: 6,
    title: "SYSTEM_VULN",
    description: "System vulnerability analysis and research tools",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    tech: ["JavaScript", "Security", "Analysis", "Research"],
    status: "RESEARCH",
    github: "https://github.com/shubham7003/System-Vulnerability",
    live: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32">
      {/* Background accents */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#bd00ff]/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#888888]">//</span> DECRYPTED PROJECT FILES
          </h2>
          <p className="font-mono text-sm text-[#888888]">
            {">"} Accessing classified project data... <span className="text-[#00f7ff]">ACCESS GRANTED</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectNode key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectNode({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDecrypted, setIsDecrypted] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => {
        setIsHovered(true)
        setTimeout(() => setIsDecrypted(true), 200)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsDecrypted(false)
      }}
    >
      {/* Hexagonal border effect */}
      <div
        className="relative bg-[#0a0a0a] border-2 border-[#2a2a2a] overflow-hidden transition-all duration-300"
        style={{
          clipPath: "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: "inset 0 0 30px rgba(189, 0, 255, 0.3)",
          }}
        />

        {/* Image container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              filter: isDecrypted ? "none" : "grayscale(100%) contrast(1.2)",
            }}
          />
          
          {/* Noise overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isDecrypted ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="noise-overlay" />
          </div>

          {/* Scanline effect */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
              isHovered ? "opacity-50" : "opacity-30"
            }`}
            style={{
              background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 2px)",
            }}
          />

          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-1 font-mono text-xs uppercase tracking-wider border ${
                project.status === "DEPLOYED"
                  ? "border-[#00f7ff] text-[#00f7ff] bg-[#00f7ff]/10"
                  : project.status === "BETA"
                  ? "border-[#bd00ff] text-[#bd00ff] bg-[#bd00ff]/10"
                  : project.status === "PRIVATE"
                  ? "border-[#ff0055] text-[#ff0055] bg-[#ff0055]/10"
                  : "border-[#888888] text-[#888888] bg-[#888888]/10"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Decrypt icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered && !isDecrypted ? 1 : 0 }}
          >
            <motion.div
              animate={{ rotate: isDecrypted ? 180 : 0 }}
              className="p-3 rounded-full bg-[#0a0a0a]/80 border border-[#bd00ff]"
            >
              {isDecrypted ? (
                <Unlock className="w-6 h-6 text-[#00f7ff]" />
              ) : (
                <Lock className="w-6 h-6 text-[#bd00ff]" />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <motion.h3
            className="text-lg font-sans font-bold tracking-wide transition-all duration-300"
            style={{
              color: isHovered ? "#bd00ff" : "#e0e0e0",
              textShadow: isHovered ? "0 0 10px rgba(189, 0, 255, 0.5)" : "none",
            }}
          >
            {project.title}
          </motion.h3>

          <p className="font-mono text-xs text-[#888888] leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack - system readout style */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0.6,
              height: "auto",
            }}
            className="pt-2 border-t border-[#2a2a2a]"
          >
            <div className="font-mono text-xs text-[#888888] mb-2">
              {">"} TECH_STACK:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-[#1a1a1a] text-[#00f7ff] border border-[#2a2a2a]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action links */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              className="flex items-center gap-1 text-xs font-mono text-[#888888] hover:text-[#bd00ff] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE</span>
            </a>
            <a
              href={project.live}
              className="flex items-center gap-1 text-xs font-mono text-[#888888] hover:text-[#00f7ff] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>DEPLOY</span>
            </a>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#bd00ff] opacity-50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#bd00ff] opacity-50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#00f7ff] opacity-50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#00f7ff] opacity-50" />
      </div>
    </motion.div>
  )
}
