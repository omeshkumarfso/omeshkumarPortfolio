"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

interface ProjectProps {
  project: any;
  idx: number;
}

export default function ProjectDepthCard({ project, idx }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Mouse position tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for the mouse tracking
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 })

  // Map mouse position to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  // Map mouse position to glare/highlight effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    // Calculate mouse position relative to the center of the card (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5
    const mouseY = (e.clientY - rect.top) / height - 0.5
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group">
      <div className={`lg:col-span-7 perspective-[1000px] ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="relative aspect-[4/3] w-full bg-zinc-900 shadow-2xl preserve-3d cursor-crosshair overflow-hidden"
          role="img"
          aria-label={`Interactive 3D preview of ${project.title}`}
          tabIndex={0}
        >
          {/* Subtle glare overlay */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)`,
            }}
            className="absolute inset-0 z-20 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            aria-hidden="true"
          />

          <img 
            src={project.image || "/placeholder.svg"} 
            alt={`Screenshot of the ${project.title} project`}
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-[1.05]"
          />
        </motion.div>
      </div>
      
      <div className={`lg:col-span-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-3xl font-medium text-white mb-6 leading-snug">
            {project.title.split('—')[0]}
          </h3>
          <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="grid grid-cols-2 gap-4 border-t border-zinc-900 pt-6">
              {Object.entries(project.metrics).slice(0,2).map(([key, value], metricIdx) => (
                <div key={metricIdx}>
                  <div className="text-xl font-medium text-white">{value as string}</div>
                  <div className="text-sm text-zinc-600 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {project.liveLinks.length > 0 && (
            <a 
              href={project.liveLinks[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium uppercase tracking-[0.1em] text-white hover:text-zinc-400 transition-colors"
            >
              View Live <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          )}
        </motion.div>
      </div>
    </div>
  )
}
