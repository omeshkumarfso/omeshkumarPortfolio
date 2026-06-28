"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Fade out and scale down slightly as user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className="w-full h-full flex flex-col justify-center">
      {children}
    </motion.div>
  )
}
