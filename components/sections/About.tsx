"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import portfolioData from "@/lib/data.json"
import { Download } from "lucide-react"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Dynamically import Canvas and 3D components with SSR disabled
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})
const TorusKnot = dynamic(() => import("../3d/TorusKnot"), {
  ssr: false,
})

export default function About() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Left column slides in from left
      gsap.fromTo(
        ".about-left",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      )

      // Stat cards stagger up
      gsap.fromTo(
        ".stat-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 85%",
          }
        }
      )

      // Right column (3D) fades in
      gsap.fromTo(
        ".about-right",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const { personalInfo, about } = portfolioData

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="py-24 lg:py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* LEFT COLUMN - 60% */}
          <div className="w-full lg:w-[60%] about-left">
            <span className="text-zinc-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Building products that scale
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
              {personalInfo.shortDescription}
            </p>

            {/* Stats Row */}
            <div className="stats-container grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {about.stats.map((stat, idx) => (
                <div key={idx} className="stat-card p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <a 
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-medium rounded-full border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* RIGHT COLUMN - 40% */}
          <div className="w-full lg:w-[40%] about-right relative h-[400px]">
            {/* Mobile Gradient Placeholder */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-900/20 to-zinc-900 border border-zinc-800/50 md:hidden flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
            </div>

            {/* 3D Canvas (hidden on mobile to save performance if requested, but requirement says "hide 3D canvas, show gradient placeholder div") */}
            <div className="hidden md:block w-full h-full">
              <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                <TorusKnot />
              </Canvas>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
