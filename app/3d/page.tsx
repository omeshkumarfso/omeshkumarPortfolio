import { Metadata } from "next"

import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import OpenSource from "@/components/sections/OpenSource"
import Contact from "@/components/sections/Contact"
import portfolioData from "@/lib/data.json"

import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import TechStack from "@/components/sections/TechStack"
export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | 3D Portfolio`,
  description: "Full-Stack Developer · Founder of Kodikas. A 3D interactive portfolio experience.",
}

export default function ThreeDPortfolio() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <OpenSource />
      <Contact />
    </main>
  )
}
