"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Brain, Zap, Target } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Excellence",
      description: "Expert in React.js, Next.js, TypeScript with modern UI frameworks",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
    },
    {
      icon: Database,
      title: "Backend Mastery",
      description: "Proficient in Node.js, MongoDB, RESTful APIs, and microservices",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native development for cross-platform mobile solutions",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Experience integrating AI/ML solutions and ChatGPT APIs",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-500/10 to-amber-500/10",
    },
  ]

  const stats = [
    { number: "4.5+", label: "Years Experience", icon: Target },
    { number: "50+", label: "Projects Completed", icon: Zap },
    { number: "10K+", label: "Users Impacted", icon: Code },
    { number: "7", label: "Team Members Led", icon: Database },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-emerald-300 text-sm font-medium border border-emerald-500/30 mb-6"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Passionate Developer
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate fullstack developer who thrives on turning complex problems into elegant solutions. With
            expertise spanning modern web technologies, mobile development, and AI integration, I bring ideas to life
            through clean, scalable code.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${highlight.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color} mb-4`}>
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-slate-300 leading-relaxed">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-emerald-500/20">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Throughout my career, I've had the privilege of working with innovative companies like
              FiftyFiveTechnologies, Softworld India, and Celebal Technology. I've led development teams, architected
              complex systems, and delivered solutions that have served thousands of users. My experience spans secure
              crypto payment platforms, real-time collaboration systems, multi-tenant e-commerce solutions, and
              comprehensive ERP systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Team Leadership", "System Architecture", "AI Integration", "Performance Optimization"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-emerald-300 text-sm font-medium border border-emerald-500/30"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
