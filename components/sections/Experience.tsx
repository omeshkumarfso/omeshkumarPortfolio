"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import portfolioData from "@/lib/data.json"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null)
  const { experience } = portfolioData

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Fade in header
      gsap.fromTo(
        ".experience-header",
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

      // Timeline items staggered animation
      const items = gsap.utils.toArray(".timeline-item")
      items.forEach((item: any, i) => {
        // Determine direction based on index (even = left, odd = right) for desktop
        // On mobile, they all come from the right or fade up.
        // We'll just use a subtle fade-up and slide from the sides on desktop
        const isLeft = i % 2 === 0
        
        gsap.fromTo(
          item,
          { 
            x: isLeft ? -50 : 50, 
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        )
      })

      // Animate the center line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.inOut",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 75%",
            end: "bottom 85%",
            scrub: 1, // Tie it to scroll
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      id="experience" 
      className="py-24 lg:py-32 bg-black border-t border-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="experience-header text-center mb-20">
          <span className="text-zinc-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Where I've Been
          </h2>
        </div>

        <div className="relative timeline-container max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2">
            <div className="timeline-line absolute top-0 left-0 w-full h-full bg-blue-500 origin-top scale-y-0" />
          </div>

          <div className="space-y-12 md:space-y-0">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0
              return (
                <div 
                  key={index} 
                  className={`timeline-item relative flex flex-col md:flex-row items-center md:items-start ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } w-full`}
                >
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black -translate-x-1/2 mt-6 md:mt-8 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 pr-4 md:px-12 py-4`}>
                    <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-6 lg:p-8 hover:bg-zinc-900/60 transition-colors duration-300">
                      <div className="flex flex-col mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{job.company}</h3>
                        <div className="text-lg font-medium text-zinc-300 mb-2">{job.position}</div>
                        <div className="text-sm font-medium text-blue-400 tracking-wide uppercase">
                          {job.duration}
                        </div>
                      </div>
                      
                      <div className="text-zinc-400 leading-relaxed text-sm lg:text-base space-y-2">
                        <ul className="list-disc list-inside space-y-2 marker:text-zinc-600">
                          {job.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
