"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const chapters = [
  { id: "intro", label: "01" },
  { id: "identity", label: "02" },
  { id: "thinking", label: "03" },
  { id: "work", label: "04" },
  { id: "evidence", label: "05" },
  { id: "contact", label: "06" },
]

export default function ChapterProgress() {
  const [activeChapter, setActiveChapter] = useState("intro")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show progress only after scrolling past the first 100px
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine which chapter is active based on scroll position
      const sections = chapters.map(c => document.getElementById(c.id))
      
      let currentActive = "intro"
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && window.scrollY >= section.offsetTop - window.innerHeight / 2) {
          currentActive = chapters[i].id
          break
        }
      }
      
      if (currentActive !== activeChapter) {
        setActiveChapter(currentActive)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeChapter])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4 mix-blend-difference text-white"
        >
          {chapters.map((chapter) => (
            <div key={chapter.id} className="flex items-center gap-4 group">
              <span 
                className={`text-xs font-serif italic transition-all duration-300 ${
                  activeChapter === chapter.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                }`}
              >
                Chapter
              </span>
              <div 
                className={`w-1 transition-all duration-300 rounded-full ${
                  activeChapter === chapter.id ? "h-8 bg-white" : "h-2 bg-zinc-600 hover:bg-zinc-400 cursor-pointer"
                }`}
                onClick={() => {
                  const element = document.getElementById(chapter.id)
                  if (element) {
                    window.scrollTo({ top: element.offsetTop, behavior: "smooth" })
                  }
                }}
              />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
