"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, TrendingUp, Building, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "FiftyFiveTechnologies Pvt. Ltd.",
      position: "Software Developer",
      duration: "Nov 2023 – Present",
      location: "India",
      color: "from-emerald-500 to-teal-500",
      achievements: [
        "Led development teams of 7 members across frontend, backend, and mobile development",
        "Architected three interconnected portals (B2B, B2C, Admin) using React.js and Node.js",
        "Reduced system response time by 50% through microservices architecture",
        "Improved team velocity by 60% through Agile methodologies and mentoring",
        "Built role management system handling 4,800+ permission variables",
      ],
      projects: ["SwilMart Multi-Portal System", "Swil ERP Admin", "Logical Contracts Platform"],
    },
    {
      company: "Softworld (India) Pvt. Ltd.",
      position: "React Developer",
      duration: "Aug 2022 – May 2023",
      location: "India",
      color: "from-teal-500 to-cyan-500",
      achievements: [
        "Developed secure crypto payment platform with merchant integration",
        "Built responsive user interfaces using React.js and TypeScript",
        "Implemented secure payment workflows adhering to cryptocurrency compliance",
        "Integrated RESTful APIs for seamless payment service communication",
        "Collaborated with cross-functional teams for robust feature implementation",
      ],
      projects: ["Quickbit Crypto Payment Platform"],
    },
    {
      company: "Celebal Technology Private Limited",
      position: "Associate Developer",
      duration: "July 2021 – Aug 2022",
      location: "India",
      color: "from-cyan-500 to-blue-500",
      achievements: [
        "Developed HR engagement workflow systems",
        "Created dating web/mobile applications with payment integration",
        "Built TATA Motors employee request management system",
        "Developed offline-capable billing system handling 50GB+ data",
        "Created marketing platform with reward system",
      ],
      projects: ["HR Engagement System", "Dating App", "TATA Motors Portal", "Acclaimssystem", "Markboot"],
    },
    {
      company: "Eniacoder Private Limited",
      position: "Developer",
      duration: "April 2020 – March 2021",
      location: "Jaipur",
      color: "from-orange-500 to-amber-500",
      achievements: [
        "Started professional development journey",
        "Gained foundational experience in web development",
        "Worked on various client projects",
        "Developed problem-solving and coding skills",
      ],
      projects: ["Various Client Projects"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-linear-to-b from-slate-900 to-slate-800">
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
            Career Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            4.5+ years of building innovative solutions and leading development teams
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-linear-to-b from-emerald-500 via-teal-500 to-orange-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-linear-to-r ${exp.color} rounded-full border-4 border-slate-900 z-10 flex items-center justify-center`}
              >
                <Building className="h-6 w-6 text-white" />
              </div>

              <div className="ml-20 md:ml-0 group relative">
                <div
                  className={`absolute inset-0 bg-linear-to-r ${exp.color.replace("from-", "from-").replace("to-", "to-")}/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="relative bg-linear-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-3xl backdrop-blur-sm border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <div
                      className={`flex items-center px-3 py-1 bg-linear-to-r ${exp.color}/20 rounded-full border border-emerald-500/30`}
                    >
                      <Calendar className="h-4 w-4 mr-2 text-emerald-400" />
                      <span className="text-emerald-300 text-sm font-medium">{exp.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-slate-300 mb-6">
                    <MapPin className="h-5 w-5 mr-2 text-teal-400" />
                    <span className="font-semibold text-lg">{exp.company}</span>
                    <span className="ml-2 text-slate-400">• {exp.location}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-300 flex items-start">
                          <Award className="h-4 w-4 text-emerald-400 mr-3 mt-1 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Notable Projects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, projIndex) => (
                        <span
                          key={projIndex}
                          className="px-4 py-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
