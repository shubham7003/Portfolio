"use client"

import { useState } from "react"

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  rarity: "COMMON" | "RARE" | "LEGENDARY" | "MYTHIC"
  unlocked: boolean
  progress?: number
  maxProgress?: number
}

const achievements: Achievement[] = [
  {
    id: "ACH_001",
    title: "FIRST_BLOOD",
    description: "Deployed first production application",
    icon: "//",
    rarity: "COMMON",
    unlocked: true
  },
  {
    id: "ACH_002",
    title: "NIGHT_OWL",
    description: "Committed code at 3 AM for 30 consecutive days",
    icon: "◐",
    rarity: "RARE",
    unlocked: true
  },
  {
    id: "ACH_003",
    title: "ZERO_BUGS",
    description: "Shipped a feature with zero bug reports",
    icon: "◈",
    rarity: "LEGENDARY",
    unlocked: true
  },
  {
    id: "ACH_004",
    title: "POLYGLOT",
    description: "Master of 5+ programming languages",
    icon: "※",
    rarity: "RARE",
    unlocked: true
  },
  {
    id: "ACH_005",
    title: "OPEN_SOURCE_CONTRIB",
    description: "Active GitHub contributor",
    icon: "★",
    rarity: "LEGENDARY",
    unlocked: true,
    progress: 41,
    maxProgress: 100
  },
  {
    id: "ACH_006",
    title: "STACK_OVERFLOW",
    description: "Answer accepted with 100+ upvotes",
    icon: "↑",
    rarity: "RARE",
    unlocked: true
  },
  {
    id: "ACH_007",
    title: "SPEED_DEMON",
    description: "Optimized app load time by 500%",
    icon: "⚡",
    rarity: "LEGENDARY",
    unlocked: true
  },
  {
    id: "ACH_008",
    title: "THE_ARCHITECT",
    description: "Designed system handling 1M+ daily users",
    icon: "⌂",
    rarity: "MYTHIC",
    unlocked: true
  },
  {
    id: "ACH_009",
    title: "MENTORSHIP",
    description: "Trained 10+ junior developers",
    icon: "◇",
    rarity: "RARE",
    unlocked: true,
    progress: 12,
    maxProgress: 10
  },
  {
    id: "ACH_010",
    title: "WORLD_DOMINATION",
    description: "Build the ultimate system...",
    icon: "?",
    rarity: "MYTHIC",
    unlocked: false,
    progress: 47,
    maxProgress: 100
  }
]

const rarityColors: Record<string, { border: string; text: string; glow: string; bg: string }> = {
  COMMON: { border: "#888", text: "#888", glow: "rgba(136,136,136,0.3)", bg: "rgba(136,136,136,0.1)" },
  RARE: { border: "#00f7ff", text: "#00f7ff", glow: "rgba(0,247,255,0.3)", bg: "rgba(0,247,255,0.1)" },
  LEGENDARY: { border: "#bd00ff", text: "#bd00ff", glow: "rgba(189,0,255,0.3)", bg: "rgba(189,0,255,0.1)" },
  MYTHIC: { border: "#ff0055", text: "#ff0055", glow: "rgba(255,0,85,0.3)", bg: "rgba(255,0,85,0.1)" }
}

export function AchievementsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)

  const totalUnlocked = achievements.filter(a => a.unlocked).length
  const totalAchievements = achievements.length

  return (
    <section className="relative py-32 px-4">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <span className="text-[#bd00ff] text-sm tracking-[0.3em] font-mono">
            {'<'} SYSTEM_LOGS {'/>'} 
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            <span className="text-[#e0e0e0]">ACHIEVEMENT_</span>
            <span className="text-[#00f7ff] neon-text-blue">UNLOCKED</span>
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#bd00ff] to-transparent mt-4" />
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="flex justify-between text-sm font-mono mb-2">
            <span className="text-[#888]">COMPLETION_STATUS</span>
            <span className="text-[#00f7ff]">{totalUnlocked}/{totalAchievements}</span>
          </div>
          <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#bd00ff] via-[#00f7ff] to-[#ff0055] transition-all duration-1000"
              style={{ width: `${(totalUnlocked / totalAchievements) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Achievements grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {achievements.map((achievement) => {
          const colors = rarityColors[achievement.rarity]
          const isHovered = hoveredId === achievement.id

          return (
            <button
              key={achievement.id}
              type="button"
              className={`relative aspect-square transition-all duration-300 ${
                achievement.unlocked ? "cursor-pointer" : "cursor-not-allowed opacity-50"
              }`}
              onMouseEnter={() => setHoveredId(achievement.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => achievement.unlocked && setSelectedAchievement(achievement)}
            >
              {/* Hexagonal frame */}
              <div 
                className="absolute inset-2 transition-all duration-300"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: isHovered && achievement.unlocked ? colors.bg : "#0a0a0a",
                  border: `2px solid ${achievement.unlocked ? colors.border : "#2a2a2a"}`,
                  boxShadow: isHovered && achievement.unlocked ? `0 0 30px ${colors.glow}` : "none"
                }}
              >
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                  }}
                >
                  {/* Icon */}
                  <span 
                    className={`text-3xl font-mono transition-all duration-300 ${
                      isHovered ? "scale-110" : ""
                    }`}
                    style={{ color: achievement.unlocked ? colors.text : "#2a2a2a" }}
                  >
                    {achievement.unlocked ? achievement.icon : "?"}
                  </span>

                  {/* Progress bar for incomplete */}
                  {achievement.progress !== undefined && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-500"
                          style={{ 
                            width: `${Math.min(100, (achievement.progress / (achievement.maxProgress || 1)) * 100)}%`,
                            background: colors.border
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Rarity indicator */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 text-[8px] font-mono tracking-wider"
                style={{ 
                  background: "#050505",
                  color: achievement.unlocked ? colors.text : "#2a2a2a",
                  border: `1px solid ${achievement.unlocked ? colors.border : "#2a2a2a"}`
                }}
              >
                {achievement.rarity}
              </div>
            </button>
          )
        })}
      </div>

      {/* Achievement detail modal */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedAchievement(null)}
        >
          <div 
            className="relative max-w-md w-full p-8 bg-[#0a0a0a] border-2"
            style={{ 
              borderColor: rarityColors[selectedAchievement.rarity].border,
              boxShadow: `0 0 50px ${rarityColors[selectedAchievement.rarity].glow}`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-[#888] hover:text-[#e0e0e0] transition-colors"
            >
              [X]
            </button>

            {/* Content */}
            <div className="text-center">
              <div 
                className="w-24 h-24 mx-auto mb-6 flex items-center justify-center"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: rarityColors[selectedAchievement.rarity].bg,
                  border: `2px solid ${rarityColors[selectedAchievement.rarity].border}`
                }}
              >
                <span 
                  className="text-5xl font-mono"
                  style={{ color: rarityColors[selectedAchievement.rarity].text }}
                >
                  {selectedAchievement.icon}
                </span>
              </div>

              <p 
                className="text-xs font-mono mb-2"
                style={{ color: rarityColors[selectedAchievement.rarity].text }}
              >
                [{selectedAchievement.rarity}]
              </p>

              <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4">
                {selectedAchievement.title}
              </h3>

              <p className="text-[#888] text-sm mb-6">
                {selectedAchievement.description}
              </p>

              {selectedAchievement.progress !== undefined && (
                <div className="text-center">
                  <p className="text-xs font-mono text-[#888] mb-2">
                    PROGRESS: {selectedAchievement.progress}/{selectedAchievement.maxProgress}
                  </p>
                  <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden max-w-[200px] mx-auto">
                    <div 
                      className="h-full transition-all duration-500"
                      style={{ 
                        width: `${Math.min(100, (selectedAchievement.progress / (selectedAchievement.maxProgress || 1)) * 100)}%`,
                        background: rarityColors[selectedAchievement.rarity].border
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#2a2a2a]">
                <p className="text-xs font-mono text-[#888]">
                  ID: {selectedAchievement.id} // STATUS: VERIFIED
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
