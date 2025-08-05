"use client"

import { motion } from "framer-motion"
import { Code, Server, Wrench, Layers } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "React Native", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material-UI", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "RESTful APIs", level: 95 },
        { name: "JWT Authentication", level: 90 },
        { name: "Microservices", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS/Azure", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "JIRA", level: 85 },
        { name: "Postman", level: 90 },
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: Layers,
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-500/10 to-amber-500/10",
      skills: [
        { name: "Redux", level: 90 },
        { name: "React Router", level: 95 },
        { name: "CKEditor", level: 85 },
        { name: "React Intl", level: 80 },
        { name: "Framer Motion", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-linear-to-b from-slate-800 to-slate-900">
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
            className="inline-block px-4 py-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-emerald-300 text-sm font-medium border border-emerald-500/30 mb-6"
          >
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-linear-to-r ${category.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-3xl backdrop-blur-sm border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-linear-to-r ${category.color} rounded-xl mr-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-medium text-lg">{skill.name}</span>
                        <span className="text-emerald-400 font-bold text-lg">{skill.level}%</span>
                      </div>
                      <div className="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full bg-linear-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
