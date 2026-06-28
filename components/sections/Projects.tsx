"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import portfolioData from "@/lib/data.json"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null)
  const { projects } = portfolioData

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".projects-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      )

      // Cards stagger animation
      gsap.fromTo(
        ".project-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="py-24 lg:py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="projects-header text-center mb-16">
          <span className="text-zinc-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projects Built
          </h2>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col h-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-zinc-700/50 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-transparent pointer-events-none" />

              {/* Tag Badge */}
              <div className="mb-6 flex items-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.features?.[0] || project.technologies[0]}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title.split('—')[0].trim()}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Stack & Metric */}
              <div className="mt-auto pt-6 border-t border-zinc-800/50 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium text-zinc-300 bg-zinc-800/50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {/* Extract a metric string from achievements or metrics object */}
                  {project.metrics ? Object.values(project.metrics).join(' · ') : project.achievements[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
