import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsCounter } from "@/components/stats-counter"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { AchievementsSection } from "@/components/achievements-section"
import { CertificatesSection } from "@/components/certificates-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TerminalContact } from "@/components/terminal-contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      
      {/* Top Navigation */}
      <Navbar />
      
      {/* Main content */}
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
      
      <section id="certificates">
        <CertificatesSection />
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
