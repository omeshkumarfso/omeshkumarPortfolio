"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            >
              <Sparkles className="h-4 w-4 text-emerald-400/30" />
            </motion.div>
          ))}
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-linear-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-linear-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="relative w-56 h-56 mx-auto mb-8">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-linear-to-r from-slate-800 to-slate-700 rounded-full"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl shadow-emerald-500/25">
                <img
                  src="/professional-developer-headshot.png"
                  alt="Omesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-emerald-300 text-sm font-medium border border-emerald-500/30 mb-4">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Omesh Kumar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-6 font-medium"
          >
            Fullstack Developer & AI Integration Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting innovative digital solutions with 4.5+ years of expertise in React.js, Node.js, and AI integration.
            Passionate about building scalable platforms that drive business growth and enhance user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border-2 border-emerald-500/50 hover:border-emerald-400 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:omeshkumarfso@gmail.com"
              className="p-4 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="tel:+919634409101"
              className="p-4 bg-linear-to-r from-teal-500/20 to-cyan-500/20 rounded-full text-teal-400 hover:text-white border border-teal-500/30 hover:border-teal-400 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-4 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-4 bg-linear-to-r from-orange-500/20 to-amber-500/20 rounded-full text-orange-400 hover:text-white border border-orange-500/30 hover:border-orange-400 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ChevronDown className="h-8 w-8 text-emerald-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
