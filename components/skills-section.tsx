"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, Smartphone, Database, Cloud, Shield, Code2 } from "lucide-react"

const skillModules = [
  {
    id: "languages",
    name: "LANGUAGES_CORE",
    icon: Code2,
    color: "#bd00ff",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
    level: 95,
    connections: ["web", "mobile"],
  },
  {
    id: "web",
    name: "WEB_STACK",
    icon: Cloud,
    color: "#00f7ff",
    skills: ["HTML5", "CSS3", "React", "Node.js", "Tailwind"],
    level: 90,
    connections: ["languages", "database", "design"],
  },
  {
    id: "mobile",
    name: "ANDROID_DEV",
    icon: Smartphone,
    color: "#ff0055",
    skills: ["Kotlin", "Android Studio", "Java", "Firebase", "XML"],
    level: 88,
    connections: ["languages", "web"],
  },
  {
    id: "database",
    name: "DATA_&_TOOLS",
    icon: Database,
    color: "#bd00ff",
    skills: ["MySQL", "AWS", "Docker", "Git", "MongoDB"],
    level: 85,
    connections: ["web", "cloud"],
  },
  {
    id: "design",
    name: "DESIGN_CREATIVE",
    icon: Cpu,
    color: "#00f7ff",
    skills: ["Illustrator", "Photoshop", "UI/UX", "Figma", "Canva"],
    level: 82,
    connections: ["web", "mobile"],
  },
  {
    id: "security",
    name: "SECURITY_RESEARCH",
    icon: Shield,
    color: "#ff0055",
    skills: ["Vulnerability Detect", "Network Security", "Python Scripting", "Kali", "Linux"],
    level: 78,
    connections: ["languages", "web"],
  },
]

export function SkillsSection() {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(189,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(189,0,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#e0e0e0] mb-4">
            INSTALLED AUGMENTATIONS
          </h2>
          <p className="font-mono text-sm text-[#888888]">
            {">"} Neural interface compatibility: <span className="text-[#00f7ff]">100%</span>
          </p>
        </motion.div>

        {/* Connection lines SVG - visible on larger screens */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bd00ff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#00f7ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#bd00ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skillModules.map((module, index) => (
            <SkillModule
              key={module.id}
              module={module}
              index={index}
              isActive={activeModule === module.id}
              isConnected={activeModule ? (skillModules.find(m => m.id === activeModule)?.connections.includes(module.id) ?? false) : false}
              onHover={setActiveModule}
            />
          ))}
        </div>

        {/* System stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 border border-[#2a2a2a] bg-[#0a0a0a]/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SystemStat label="PROJECTS_DEPLOYED" value="15+" color="#bd00ff" />
            <SystemStat label="CURRENT_STATUS" value="STUDENT" color="#00f7ff" />
            <SystemStat label="STACK_MASTERY" value="15+" color="#ff0055" />
            <SystemStat label="COFFEE_CONSUMED" value="∞" color="#bd00ff" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillModule({
  module,
  index,
  isActive,
  isConnected,
  onHover,
}: {
  module: (typeof skillModules)[0]
  index: number
  isActive: boolean
  isConnected: boolean
  onHover: (id: string | null) => void
}) {
  const Icon = module.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => onHover(module.id)}
      onMouseLeave={() => onHover(null)}
      className={`relative p-6 border-2 transition-all duration-300 cursor-pointer ${
        isActive
          ? "border-[#bd00ff] bg-[#bd00ff]/5"
          : isConnected
          ? "border-[#00f7ff] bg-[#00f7ff]/5"
          : "border-[#2a2a2a] bg-[#0a0a0a]"
      }`}
      style={{
        boxShadow: isActive
          ? `0 0 30px ${module.color}40, inset 0 0 30px ${module.color}10`
          : isConnected
          ? "0 0 20px rgba(0, 247, 255, 0.2)"
          : "none",
      }}
    >
      {/* Module header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-2 border"
          style={{
            borderColor: module.color,
            backgroundColor: `${module.color}20`,
          }}
        >
          <Icon className="w-5 h-5" style={{ color: module.color }} />
        </div>
        <div>
          <h3
            className="font-mono text-sm font-bold tracking-wider"
            style={{ color: isActive ? module.color : "#e0e0e0" }}
          >
            {module.name}
          </h3>
          <div className="font-mono text-xs text-[#888888]">
            v2.{index + 1}.0
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between font-mono text-xs mb-1">
          <span className="text-[#888888]">PROFICIENCY</span>
          <span style={{ color: module.color }}>{module.level}%</span>
        </div>
        <div className="h-2 bg-[#1a1a1a] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${module.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="h-full"
            style={{
              background: `linear-gradient(90deg, ${module.color}, ${module.color}80)`,
              boxShadow: `0 0 10px ${module.color}`,
            }}
          />
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-[#888888]">{">"} INSTALLED:</div>
        <div className="flex flex-wrap gap-2">
          {module.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 font-mono text-xs border border-[#2a2a2a] bg-[#1a1a1a]/50 text-[#e0e0e0] transition-all duration-200 hover:border-[#bd00ff] hover:text-[#bd00ff]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Connection indicator */}
      {isConnected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#00f7ff]"
          style={{ boxShadow: "0 0 10px #00f7ff" }}
        />
      )}

      {/* Corner decorations */}
      <div
        className="absolute top-0 left-0 w-3 h-3 border-l border-t transition-colors"
        style={{ borderColor: isActive ? module.color : "#2a2a2a" }}
      />
      <div
        className="absolute top-0 right-0 w-3 h-3 border-r border-t transition-colors"
        style={{ borderColor: isActive ? module.color : "#2a2a2a" }}
      />
      <div
        className="absolute bottom-0 left-0 w-3 h-3 border-l border-b transition-colors"
        style={{ borderColor: isActive ? module.color : "#2a2a2a" }}
      />
      <div
        className="absolute bottom-0 right-0 w-3 h-3 border-r border-b transition-colors"
        style={{ borderColor: isActive ? module.color : "#2a2a2a" }}
      />
    </motion.div>
  )
}

function SystemStat({
  label,
  value,
  color,
}: {
  label: string
  value: string
  color: string
}) {
  return (
    <div className="text-center">
      <div className="font-mono text-xs text-[#888888] mb-1">{label}</div>
      <div
        className="text-2xl md:text-3xl font-sans font-bold"
        style={{ color, textShadow: `0 0 20px ${color}50` }}
      >
        {value}
      </div>
    </div>
  )
}
