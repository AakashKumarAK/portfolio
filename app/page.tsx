"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Publications from "@/components/publications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Add a state to track if we're on the client
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true once the component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        {/* Progress Bar - only render on client */}
        {isClient && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
            style={{ scaleX }}
          />
        )}

        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Certifications />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
