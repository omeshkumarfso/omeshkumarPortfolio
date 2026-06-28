"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import portfolioData from "@/lib/data.json"
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null)
  
  const { personalInfo } = portfolioData

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Content fades and slides in
      gsap.fromTo(
        ".contact-content",
        { y: 50, opacity: 0 },
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
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      id="contact" 
      className="py-24 lg:py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center contact-content">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 mx-auto max-w-xl">
          Open to senior remote roles globally and to relocation. Also available for freelance projects through Kodikas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="group flex flex-col items-center p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900 transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Email</div>
            <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
              {personalInfo.email}
            </div>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${personalInfo.phone.replace(/\\s/g, '')}`} 
            className="group flex flex-col items-center p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900 transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Phone</div>
            <div className="text-white font-medium group-hover:text-emerald-400 transition-colors">
              {personalInfo.phone}
            </div>
          </a>

          {/* Location */}
          <div className="group flex flex-col items-center p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900 transition-colors">
            <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Location</div>
            <div className="text-white font-medium">
              {personalInfo.location}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href={personalInfo.socials.linkedin || "/"} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href={personalInfo.socials.github || "/"} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="/" 
            className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:-translate-y-1"
            aria-label="Portfolio"
          >
            <Globe className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
