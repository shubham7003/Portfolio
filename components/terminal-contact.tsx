"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"

const commands: Record<string, string> = {
  help: `
AVAILABLE_COMMANDS:
  help          - Display this help message
  about         - Display operative information
  contact       - Initiate secure communication
  skills        - List augmentation modules
  projects      - Access classified data nodes
  socials       - Display network connections
  clear         - Clear terminal buffer
  hack          - ???
`,
  about: `
╔══════════════════════════════════════════════════╗
║  OPERATIVE DOSSIER // CLASSIFICATION: LEVEL 5    ║
╠══════════════════════════════════════════════════╣
║  CODENAME: SHUBHAM_7003                          ║
║  STATUS: ACTIVE                                  ║
║  SPECIALIZATION: App Development & AI/ML         ║
║  SECONDARY: Security Research                    ║
║  YEARS_ACTIVE: STUDENT                           ║
║  MISSIONS_COMPLETED: 15+ REPOS                   ║
║  SUCCESS_RATE: 100%                              ║
╚══════════════════════════════════════════════════╝
`,
  contact: `
INITIATING SECURE CHANNEL...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  EMAIL_UPLINK    : [REDACTED]
  SIGNAL_FREQ     : ENCRYPTED
  LOCATION_NODE   : India
  RESPONSE_TIME   : < 24 CYCLES
  
  Use 'send <message>' to transmit encrypted data
  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHANNEL_SECURE // ENCRYPTION: AES-256
`,
  skills: `
AUGMENTATION_MODULES // STATUS: ONLINE
┌─────────────────────────────────────────────────┐
│ [CORE_SYSTEMS]                                  │
│   ├── C/C++ ━━━━━━━━━━━━━━━━━━ [█████████░] 90% │
│   ├── Java ━━━━━━━━━━━━━━━━━━━ [█████████░] 92% │
│   ├── Python ━━━━━━━━━━━━━━━━━ [████████░░] 88% │
│   └── JavaScript ━━━━━━━━━━━━━ [███████░░░] 78% │
│                                                 │
│ [ANDROID_SUBSYSTEMS]                            │
│   ├── Kotlin ━━━━━━━━━━━━━━━━━ [█████████░] 90% │
│   ├── Android Studio ━━━━━━━━━ [████████░░] 85% │
│   └── Firebase ━━━━━━━━━━━━━━━ [████████░░] 88% │
│                                                 │
│ [TOOLS_&_SECURITY]                              │
│   ├── AWS/Docker ━━━━━━━━━━━━━ [████████░░] 80% │
│   ├── Vulnerability Scan ━━━━━ [███████░░░] 75% │
│   └── Git/GitHub ━━━━━━━━━━━━━ [█████████░] 90% │
└─────────────────────────────────────────────────┘
`,
  projects: `
ACCESSING CLASSIFIED DATA NODES...
[WARNING] SECURITY CLEARANCE VERIFIED

PROJECT_SEC      - Security Vulnerability Framework
PROJECT_ZYNKLY   - Android Application For Zynkly  
PROJECT_KOTLIN   - Kotlin From Scratch (OOP)
PROJECT_TODO     - Task Management System
PROJECT_DSA      - Algorithms Collection

Type 'project <name>' for detailed intel
`,
  socials: `
NETWORK_CONNECTIONS // ACTIVE_LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GITHUB     : github.com/shubham7003
  LINKEDIN   : linkedin.com/in/shubham-kumar-dubey-650485295
  TWITTER/X  : @_shubham_67
  STACKOVERFL: stackoverflow.com/users/shubham9819
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
  hack: `
[ALERT] UNAUTHORIZED ACCESS ATTEMPT DETECTED
[SYSTEM] INITIATING COUNTERMEASURES...
[TRACE] BACKTRACKING CONNECTION...
[FOUND] Nice try, hacker. 😈
[SYSTEM] ACCESS DENIED // INCIDENT LOGGED
`,
  clear: "CLEAR",
}

export function TerminalContact() {
  const [history, setHistory] = useState<Array<{ type: "input" | "output"; content: string }>>([
    { type: "output", content: `
┌───────────────────────────────────────────────────────────────┐
│  TERMINAL_SYSTEM v2.0 // SECURE CONNECTION ESTABLISHED        │
│  ─────────────────────────────────────────────────────────    │
│  Welcome. Type 'help' for available commands.                 │
│  All communications are encrypted and monitored.              │
└───────────────────────────────────────────────────────────────┘
` }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 't') {
        e.preventDefault()
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => inputRef.current?.focus(), 500)
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const typeOutput = async (text: string) => {
    setIsTyping(true)
    const chars = text.split("")
    let output = ""
    
    for (let i = 0; i < chars.length; i += 3) {
      output += chars.slice(i, i + 3).join("")
      setHistory(prev => {
        const newHistory = [...prev]
        if (newHistory[newHistory.length - 1]?.type === "output") {
          newHistory[newHistory.length - 1].content = output
        } else {
          newHistory.push({ type: "output", content: output })
        }
        return newHistory
      })
      await new Promise(resolve => setTimeout(resolve, 5))
    }
    setIsTyping(false)
  }

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    setHistory(prev => [...prev, { type: "input", content: `> ${cmd}` }])
    setInput("")

    if (trimmedCmd === "clear") {
      setHistory([])
      return
    }

    if (trimmedCmd.startsWith("send ")) {
      const message = cmd.slice(5)
      setHistory(prev => [...prev, { type: "output", content: "" }])
      await typeOutput(`
[ENCRYPTING MESSAGE...]
[ROUTING THROUGH TOR NETWORK...]
[TRANSMISSION SUCCESSFUL]

Your message "${message}" has been securely transmitted.
Expect response within 24 cycles.

[CONNECTION_MAINTAINED]
`)
      return
    }

    if (trimmedCmd.startsWith("project ")) {
        const pName = trimmedCmd.slice(8).trim();
        let pDetail = ""
        if (pName === "sec") {
            pDetail = `
[PROJECT_SEC] :: Security Vulnerability Framework
------------------------------------------------
STATUS: DEPLOYED
LANG: Python
INFO: A framework to detect and mitigate security vulnerabilities like buffer
overflows, trapdoors, and cache poisoning.
`
        } else if (pName === "zynkly") {
             pDetail = `
[PROJECT_ZYNKLY] :: Android Application
------------------------------------------------
STATUS: DEPLOYED
LANG: JavaScript/Android
INFO: Mobile application developed for Zynkly services.
`
        } else if (pName === "kotlin") {
             pDetail = `
[PROJECT_KOTLIN] :: Kotlin From Scratch
------------------------------------------------
STATUS: ARCHIVED
LANG: Kotlin
INFO: Specialized study on OOP concepts and Android fundamentals.
`
        } else if (pName === "todo") {
             pDetail = `
[PROJECT_TODO] :: Task Manager
------------------------------------------------
STATUS: DEPLOYED
LANG: JS/HTML/CSS
INFO: Lightweight task management interface.
`
        } else if (pName === "dsa") {
             pDetail = `
[PROJECT_DSA] :: Algorithms Library
------------------------------------------------
STATUS: ACTIVE
LANG: Java
INFO: Comprehensive collection of efficient algorithms.
`
        } else {
            pDetail = `[ERROR] PROJECT "${pName}" NOT FOUND IN ARCHIVES.`
        }
        
        setHistory(prev => [...prev, { type: "output", content: "" }])
        await typeOutput(pDetail)
        return
    }

    const response = commands[trimmedCmd] || `
[ERROR] COMMAND NOT RECOGNIZED: "${trimmedCmd}"
[HINT] Type 'help' for available commands
[STATUS] SYSTEM READY
`

    setHistory(prev => [...prev, { type: "output", content: "" }])
    await typeOutput(response)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim() && !isTyping) {
      handleCommand(input)
    }
  }

  return (
    <section ref={sectionRef} className="relative py-32 px-4">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <span className="text-muted-foreground text-sm tracking-[0.3em] font-mono">
            {'<'} SECURE_CHANNEL {'/>'} 
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            Terminal <span className="text-neon-green">Access</span>
          </h2>
          <div className="h-px bg-border mt-4 w-24 mx-auto" />
        </div>
      </div>

      {/* Terminal container */}
      <div className="max-w-4xl mx-auto">
        <div 
          className="relative border border-border rounded-lg shadow-sm overflow-hidden bg-background"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
            <div className="w-3 h-3 rounded-full bg-neon-green" />
            <span className="ml-4 text-muted-foreground text-xs font-mono">
              shubham@server:~$ secure_connect --mode=dark
            </span>
          </div>

          {/* Terminal content */}
          <div 
            ref={terminalRef}
            className="h-[400px] overflow-y-auto p-6 font-mono text-sm bg-muted/5"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, index) => (
              <div 
                key={index}
                className={`whitespace-pre-wrap mb-2 ${
                  entry.type === "input" 
                    ? "text-neon-green font-medium" 
                    : "text-foreground"
                }`}
              >
                {entry.content}
              </div>
            ))}
            
            {/* Input line */}
            <div className="flex items-center gap-2 text-neon-green">
              <span className="text-neon-green font-bold">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
                className="flex-1 bg-transparent outline-none text-foreground font-mono"
                placeholder={isTyping ? "Processing..." : "Enter command..."}
                autoFocus
              />
              <span className="animate-pulse text-neon-green">█</span>
            </div>
          </div>


        </div>

        {/* Quick commands */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["help", "about", "contact", "skills", "socials"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => !isTyping && handleCommand(cmd)}
              disabled={isTyping}
              className="px-4 py-2 bg-muted/20 border border-border rounded-md text-muted-foreground hover:text-neon-green hover:border-neon-green/50 hover:bg-neon-green/10 transition-all duration-300 font-mono text-xs disabled:opacity-50 uppercase tracking-widest"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
