"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, TrendingUp, Building, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Kodikas",
      position: "Founder & Full-Stack Developer",
      duration: "2026 – Present",
      location: "Remote · India",
      color: "from-emerald-500 to-teal-500",
      achievements: [
        "Founded an independent software studio; designed, built, and deployed multiple production products end to end (frontend, backend, infra)",
        "Architected and built a three-portal multi-tenant e-commerce platform solo: customer storefront, merchant portal with sales analytics, and a super-admin console with oversight of all stores",
        "Built and launched the Kodikas studio site with in-browser tools (PDF, image, video, JSON), SEO-optimized with Next.js",
        "Launched New Sarkari Result, a government-jobs platform for Indian job seekers",
      ],
      projects: ["Kodikas Partner", "Kodikas Studio", "New Sarkari Result"],
    },
    {
      company: "FiftyFiveTechnologies Pvt. Ltd.",
      position: "Software Developer",
      duration: "Nov 2023 – Sep 2025",
      location: "India",
      color: "from-emerald-500 to-teal-500",
      achievements: [
        "Developed key features for a secure crypto payment platform enabling merchant integration",
        "Built real-time collaborative editor supporting 20+ simultaneous users for AI-powered contracts",
        "Integrated ChatGPT AI assistance for contract drafting and optimized performance by 45%",
        "Implemented scalable editor capable of handling 100+ page contracts with 80% test coverage",
      ],
      projects: ["Quickbit", "Logical Contracts"],
    },
    {
      company: "Softworld (india) Pvt. Ltd.",
      position: "React Developer",
      duration: "Aug 2022 – May 2023",
      location: "India",
      color: "from-teal-500 to-cyan-500",
      achievements: [
        "Led cross-functional team of 7 developers and architected multi-portal scalable system",
        "Developed role & permission system managing 4,800+ variables for ERP admin",
        "Reduced form submission errors by 75% using advanced validations",
        "Improved system response time by 50% and mentored junior developers",
      ],
      projects: ["SwilMart", "Swil ERP Admin"],
    },
    {
      company: "Celebal Technology private limited",
      position: "Associate Developer",
      duration: "July 2021 – Aug 2022",
      location: "India",
      color: "from-cyan-500 to-blue-500",
      achievements: [
        "Developed web app flow for hiring employees with automated social media vacancy posts",
        "Integrated Zoho database to fetch and display employee status and profiles",
        "Created an employee portal to handle leave requests with manager approval flow",
        "Implemented Covid vaccination tracking feature for employees",
      ],
      projects: ["Hr Engagement", "TATA Motors"],
    },
    {
      company: "Eniacoder private limited, Jaipur",
      position: "Developer",
      duration: "April 2020 – March 2021",
      location: "Jaipur",
      color: "from-orange-500 to-amber-500",
      achievements: [
        "Created authentication (Login, signup, logout) for Dating Web and Mobile App",
        "Managed application state using Redux in both web and mobile environments",
        "Implemented Razorpay payment gateway to handle user level upgrades (Silver to Gold)",
        "Built feature for favoriting users and customizing visibility based on membership levels",
      ],
      projects: ["Dating Web App/Mobile App"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
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
            Career Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            5+ years of building innovative solutions and leading development teams
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-orange-500 rounded-full"></div>

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
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-900 z-10 flex items-center justify-center`}
              >
                <Building className="h-6 w-6 text-white" />
              </div>

              <div className="ml-20 md:ml-0 group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color.replace("from-", "from-").replace("to-", "to-")}/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-3xl backdrop-blur-sm border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <div
                      className={`flex items-center px-3 py-1 bg-gradient-to-r ${exp.color}/20 rounded-full border border-emerald-500/30`}
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
                          <Award className="h-4 w-4 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
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
                          className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30"
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
