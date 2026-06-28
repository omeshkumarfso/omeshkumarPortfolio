"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import gsap from "gsap"

// Dynamically import Canvas and 3D components with SSR disabled
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})
const Icosahedron = dynamic(() => import("../3d/Icosahedron"), {
  ssr: false,
})
const Environment = dynamic(() => import("@react-three/drei").then((mod) => mod.Environment), {
  ssr: false,
})
const Float = dynamic(() => import("@react-three/drei").then((mod) => mod.Float), {
  ssr: false,
})

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Fade in the hero text
      gsap.fromTo(
        ".hero-text > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      )
      
      // Fade in the 3D canvas container
      gsap.fromTo(
        ".hero-canvas",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20"
      id="hero"
    >
      {/* Static Fallback for mobile / no-js */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-black pointer-events-none md:hidden" />

      {/* 3D Canvas Container */}
      <div className="hero-canvas absolute inset-0 z-0 hidden md:block opacity-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Icosahedron />
          </Float>
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-center text-center hero-text">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
          Omesh Kumar
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-zinc-300 font-light mb-4">
          Full-Stack Developer &middot; React &middot; TypeScript &middot; Node.js
        </h2>
        
        <p className="text-zinc-500 max-w-2xl text-base md:text-lg mb-12">
          ~5 years &middot; Founder of Kodikas &middot; Open to remote roles globally
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#projects"
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors w-full sm:w-auto text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
