"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function OpenSource() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".os-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      )

      // Card scale-up animation
      gsap.fromTo(
        ".os-card",
        { scale: 0.95, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".os-card",
            start: "top 85%",
          }
        }
      )

      // Footer note fade-in
      gsap.fromTo(
        ".os-note",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: ".os-card",
            start: "top 85%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      id="open-source" 
      className="py-24 lg:py-32 bg-black border-t border-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="os-header text-center mb-16">
          <span className="text-zinc-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Contributing to the community
          </h2>
        </div>

        <div className="os-card bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-8 lg:p-12 transition-all duration-300 hover:bg-zinc-900/60 relative group">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none rounded-2xl" />

          <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              {/* GitHub SVG Icon */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-black" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">wanasit/chrono</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Open PR #645
                </span>
              </div>
            </div>
            
            <div className="flex gap-2 flex-wrap md:justify-end">
              {['JavaScript', 'NLP', 'i18n'].map((tag) => (
                <span key={tag} className="text-xs font-medium text-zinc-300 bg-zinc-800/80 px-3 py-1.5 rounded-full border border-zinc-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Added initial Hindi locale support to chrono, a widely-used natural-language date parser for JavaScript. 
            This PR dramatically expands the library's accessibility for over 600 million Hindi speakers globally.
          </p>

          <a 
            href="https://github.com/wanasit/chrono/pull/645"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group/link"
          >
            View PR on GitHub 
            <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
          </a>
        </div>

        <p className="os-note text-center text-zinc-500 text-sm mt-12 max-w-lg mx-auto leading-relaxed">
          Open to contributing to more open-source projects — especially in React, TypeScript, and developer tooling.
        </p>
      </div>
    </section>
  )
}
