"use client"

import { useEffect, useState, useRef } from "react"

interface Stat {
  label: string
  value: number
  suffix: string
  prefix?: string
}

const stats: Stat[] = [
  { label: "LINES_OF_CODE", value: 2847563, suffix: "", prefix: "" },
  { label: "COMMITS_DEPLOYED", value: 4782, suffix: "+", prefix: "" },
  { label: "BUGS_ELIMINATED", value: 99.7, suffix: "%", prefix: "" },
  { label: "COFFEE_CONSUMED", value: 8472, suffix: "L", prefix: "" },
  { label: "UPTIME_MAINTAINED", value: 99.99, suffix: "%", prefix: "" },
  { label: "PROJECTS_SHIPPED", value: 47, suffix: "", prefix: "" }
]

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(value, stepValue * step)
      
      // Add some randomness for "hacking" effect
      if (step < steps - 5) {
        current += (Math.random() - 0.5) * stepValue * 2
      }
      
      setDisplayValue(Math.max(0, current))

      if (step >= steps) {
        setDisplayValue(value)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const formatNumber = (num: number) => {
    if (value >= 1000000) {
      return num.toLocaleString("en-US", { maximumFractionDigits: 0 })
    }
    if (value % 1 !== 0) {
      return num.toFixed(2)
    }
    return Math.floor(num).toLocaleString("en-US")
  }

  return (
    <div ref={ref} className="font-mono">
      {prefix}{formatNumber(displayValue)}{suffix}
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#bd00ff]/5 via-transparent to-[#00f7ff]/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bd00ff] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f7ff] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="relative group text-center p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 border border-[#2a2a2a] group-hover:border-[#bd00ff] transition-colors duration-300">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#bd00ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00f7ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00f7ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#bd00ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold text-[#e0e0e0] group-hover:text-[#00f7ff] transition-colors duration-300">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              {/* Label */}
              <div className="mt-2 text-xs text-[#888] font-mono tracking-wider">
                {stat.label}
              </div>

              {/* Active indicator */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#bd00ff] to-[#00f7ff] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
