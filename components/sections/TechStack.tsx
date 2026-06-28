"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import portfolioData from "@/lib/data.json"
import * as LucideIcons from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Dynamically import Canvas and 3D components with SSR disabled
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})
const OrbitingSpheres = dynamic(() => import("../3d/OrbitingSpheres"), {
  ssr: false,
})

// Helper to render dynamic Lucide icon
const IconRenderer = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name]
  if (!IconComponent) return <LucideIcons.CheckCircle2 className={className} />
  return <IconComponent className={className} />
}

export default function TechStack() {
  const containerRef = useRef<HTMLElement>(null)
  const { skills } = portfolioData

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".tech-header",
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

      // 3D Canvas fade in
      gsap.fromTo(
        ".tech-canvas",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      )

      // Badges stagger
      gsap.fromTo(
        ".tech-badge",
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".tech-groups",
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
      id="skills" 
      className="relative py-24 lg:py-32 bg-black border-t border-zinc-900 overflow-hidden"
    >
      {/* 3D Background - Hidden on mobile */}
      <div className="tech-canvas absolute inset-0 z-0 hidden md:block opacity-0 h-[400px] top-1/2 -translate-y-1/2">
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
          <OrbitingSpheres />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="tech-header text-center mb-20">
          <span className="text-zinc-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            What I Build With
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Tech Stack
          </h2>
        </div>

        <div className="tech-groups flex flex-col gap-16 max-w-5xl mx-auto">
          {skills.map((skillGroup, groupIdx) => (
            <div key={groupIdx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              
              {/* Group Label */}
              <div className="w-full md:w-1/4 flex items-center gap-3 md:justify-end">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${skillGroup.bgColor}`}>
                  <IconRenderer name={skillGroup.icon} className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-br ${skillGroup.color} drop-shadow-md brightness-150`} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide uppercase">
                  {skillGroup.title}
                </h3>
              </div>

              {/* Badges */}
              <div className="w-full md:w-3/4 flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="tech-badge flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skillGroup.color}`} />
                    <span className="text-sm font-medium text-zinc-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
