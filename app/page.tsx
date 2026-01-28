import { SystemStatusBar } from "@/components/system-status-bar"
import { HeroSection } from "@/components/hero-section"
import { StatsCounter } from "@/components/stats-counter"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { AchievementsSection } from "@/components/achievements-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TerminalContact } from "@/components/terminal-contact"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      {/* Scanlines overlay */}
      <div className="scanlines" />
      
      {/* Circuit background */}
      <div className="fixed inset-0 circuit-bg pointer-events-none" />
      
      {/* Floating navigation */}
      <FloatingNav />
      
      {/* Main content */}
      <SystemStatusBar />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <StatsCounter />
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="experience">
        <ExperienceTimeline />
      </section>
      
      <section id="achievements">
        <AchievementsSection />
      </section>
      
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      <section id="terminal">
        <TerminalContact />
      </section>
      
      <Footer />
    </main>
  )
}
