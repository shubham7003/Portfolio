"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

export function SystemStatusBar() {
  const [systemIntegrity, setSystemIntegrity] = useState(98)
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemIntegrity(Math.floor(Math.random() * 3) + 97)
    }, 2000)

    const timeInterval = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }, 1000)

    return () => {
      clearInterval(interval)
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a2a] bg-[#050505]/90 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-4 md:gap-8 font-mono text-xs md:text-sm">
          <StatusItem
            label="SYS_INTEGRITY"
            value={`${systemIntegrity}%`}
            color="text-[#00f7ff]"
          />
          <div className="hidden md:block h-4 w-px bg-[#2a2a2a]" />
          <StatusItem
            label="NET_STATUS"
            value="CONNECTED"
            color="text-[#bd00ff]"
            pulse
          />
          <div className="hidden md:block h-4 w-px bg-[#2a2a2a]" />
          <StatusItem
            label="TIME"
            value={time || "00:00:00"}
            color="text-[#ff0055]"
          />
          <div className="hidden lg:block h-4 w-px bg-[#2a2a2a]" />
          <span className="hidden lg:block text-[#888888]">
            USER: <span className="text-[#e0e0e0]">DEVELOPER_01</span>
          </span>
        </div>

        <motion.button
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative flex items-center gap-2 px-4 py-2 border border-[#bd00ff] bg-transparent text-[#bd00ff] font-mono text-xs md:text-sm uppercase tracking-wider transition-all hover:bg-[#bd00ff]/10"
        >
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-[#bd00ff]/5"
              style={{
                clipPath: `inset(0 ${Math.random() * 100}% 0 0)`,
              }}
            />
          )}
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">[ INITIATE_RESUME_DOWNLOAD ]</span>
          <span className="sm:hidden">[ RESUME ]</span>
        </motion.button>
      </div>
    </motion.header>
  )
}

function StatusItem({
  label,
  value,
  color,
  pulse = false,
}: {
  label: string
  value: string
  color: string
  pulse?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#888888]">{label}:</span>
      <span className={`${color} ${pulse ? "animate-pulse" : ""}`}>{value}</span>
    </div>
  )
}
