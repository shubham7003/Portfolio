"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award, FileCode2, Terminal } from "lucide-react"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  link: string
  category: "CLOUD" | "DEV" | "AI" | "SECURITY"
}

// User should replace these with actual certificate details
const certificates: Certificate[] = [
  {
    id: "CERT_001",
    title: "Red Hat System Administration I (RH124 - RHA) - Ver. 8.2",
    issuer: "Red Hat",
    date: "2025-07",
    credentialId: "RH124-RHA",
    link: "https://www.linkedin.com/in/shubham-dubey15/details/certifications/",
    category: "CLOUD"
  },
  {
    id: "CERT_002",
    title: "Cybersecurity Job Simulation",
    issuer: "Forage (Mastercard)",
    date: "2025-10",
    credentialId: "iEoPNbH64hXZzJjdi",
    link: "https://www.linkedin.com/in/shubham-dubey15/details/certifications/",
    category: "SECURITY"
  },
  {
    id: "CERT_003",
    title: "Cyber Job Simulation",
    issuer: "Forage (Deloitte Australia)",
    date: "2025-10",
    credentialId: "qNxb3RQqZpX5CfkHa",
    link: "https://www.linkedin.com/in/shubham-dubey15/details/certifications/",
    category: "SECURITY"
  },
  {
    id: "CERT_004",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "2024-09",
    credentialId: "OCGA4AYJQUHO",
    link: "https://www.linkedin.com/in/shubham-dubey15/details/certifications/",
    category: "CLOUD"
  },
  {
    id: "CERT_005",
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "2024-09",
    credentialId: "LI05E8UZT7RB",
    link: "https://www.linkedin.com/in/shubham-dubey15/details/certifications/",
    category: "DEV"
  },
  {
    id: "CERT_006",
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Universitat Autònoma de Barcelona",
    date: "2024-10",
    credentialId: "FDPFGWFOVW44",
    link: "https://www.linkedin.com/in/shubham-dubey15/details/certifications/",
    category: "DEV"
  },
  {
    id: "CERT_007",
    title: "Python Essentials 2",
    issuer: "Cisco",
    date: "2024-02",
    credentialId: "CISCO-PY-E2",
    link: "https://www.linkedin.com/in/shubham-dubey15/details/certifications/",
    category: "DEV"
  }
]

export function CertificatesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Matrix rain effect background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-green/10 via-background to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Terminal className="w-8 h-8 text-neon-green" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
              <span className="text-neon-green">&lt;</span>
              Certifications
              <span className="text-neon-green">/&gt;</span>
            </h2>
          </div>
          <div className="h-1 w-full max-w-md bg-gradient-to-r from-neon-green/50 to-transparent" />
          <p className="mt-4 text-muted-foreground font-mono max-w-2xl">
            // Validated expertise in secure development and cloud infrastructure...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 relative">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative border border-neon-green/20 bg-card/50 p-6 backdrop-blur-sm overflow-hidden hover:border-neon-green/50 transition-colors duration-300">
                {/* Hover scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                
                <div className="relative z-10 flex gap-4">
                  <div className="mt-1">
                    <div className="p-3 bg-neon-green/10 rounded-sm">
                      <Award className="w-6 h-6 text-neon-green" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold font-mono text-foreground group-hover:text-neon-green transition-colors">
                        {cert.title}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground font-mono">
                      Issuer: <span className="text-foreground">{cert.issuer}</span>
                    </p>
                    
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground font-mono opacity-70">
                        ID: {cert.credentialId}
                      </p>
                    )}
                    
                    <div className="pt-4 flex items-center justify-between">
                      <span className="inline-block px-2 py-1 bg-neon-green/5 border border-neon-green/20 text-xs font-mono text-neon-green/80 rounded">
                        {cert.category}
                      </span>
                      
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-neon-green hover:underline cursor-pointer"
                      >
                        VERIFY <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
