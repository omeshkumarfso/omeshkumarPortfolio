"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Play, TrendingUp, Shield, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Logical Contracts Platform",
      description:
        "AI-powered legal contract platform with real-time collaboration supporting 20+ simultaneous editors. Integrated OpenAI ChatGPT for contract drafting assistance.",
      image: "/legal-contract-dashboard.png",
      video: "/contract-editing-interface-demo.png",
      technologies: ["React.js", "TypeScript", "OpenAI API", "Real-time Collaboration", "Node.js"],
      achievements: [
        "10K+ active users",
        "45% faster page load times",
        "80% test coverage",
        "70% reduction in production bugs",
      ],
      metrics: {
        users: "10K+",
        performance: "45%",
        coverage: "80%",
      },
      features: ["AI-Powered Drafting", "Real-time Collaboration", "Document Management", "Version Control"],
      color: "from-emerald-500 to-teal-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SwilMart Multi-Portal System",
      description:
        "Comprehensive e-commerce ecosystem with three interconnected portals (B2B, B2C, Admin) featuring multi-tenant architecture and real-time order tracking.",
      image: "/ecommerce-multi-portal-dashboard.png",
      video: "/ecommerce-order-management-demo.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Microservices", "Real-time APIs"],
      achievements: [
        "Multi-tenant architecture",
        "50% faster system response",
        "Real-time inventory management",
        "Secure payment integration",
      ],
      metrics: {
        performance: "50%",
        portals: "3",
        team: "7",
      },
      features: ["Multi-tenant Support", "Real-time Tracking", "Inventory Management", "Payment Gateway"],
      color: "from-teal-500 to-cyan-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Quickbit Crypto Platform",
      description:
        "Secure cryptocurrency payment platform enabling merchant integration and bank-to-crypto transactions with compliance-focused security measures.",
      image: "/cryptocurrency-payment-platform.png",
      video: "/crypto-payment-transaction-demo.png",
      technologies: ["React.js", "TypeScript", "Crypto APIs", "Security Protocols", "Payment Processing"],
      achievements: [
        "Secure payment workflows",
        "Cryptocurrency compliance",
        "Merchant integration",
        "Bank-to-crypto transactions",
      ],
      metrics: {
        security: "100%",
        compliance: "Full",
        integration: "Seamless",
      },
      features: ["Crypto Payments", "Merchant Tools", "Security Compliance", "Transaction Tracking"],
      color: "from-cyan-500 to-blue-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Swil ERP Admin System",
      description:
        "Enterprise resource planning system with advanced role management handling 4,800+ permission variables and supporting 1000+ concurrent users.",
      image: "/erp-admin-dashboard.png",
      video: "/erp-role-management-demo.png",
      technologies: ["React.js", "Node.js", "Role Management", "Caching", "Performance Optimization"],
      achievements: [
        "4,800+ permission variables",
        "75% fewer form errors",
        "40% improved efficiency",
        "60% fewer database queries",
      ],
      metrics: {
        permissions: "4.8K+",
        users: "1K+",
        efficiency: "40%",
      },
      features: ["Role Management", "Permission Control", "User Analytics", "Performance Optimization"],
      color: "from-orange-500 to-amber-500",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-linear-to-b from-slate-800 to-slate-900">
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
            Portfolio Showcase
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that have made a real impact on businesses and users
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Project Media */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${project.color}/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 blur-xl`}
                  ></div>
                  <div className="relative bg-linear-to-br from-slate-800/80 to-slate-700/80 rounded-3xl overflow-hidden border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        className={`bg-linear-to-r ${project.color} hover:scale-110 text-white shadow-lg transform transition-all duration-300`}
                      >
                        <Play className="mr-2 h-5 w-5" />
                        View Demo
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`p-2 bg-linear-to-r ${project.color} rounded-full`}>
                        <Star className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 bg-linear-to-br from-slate-800/60 to-slate-700/60 rounded-2xl border border-emerald-500/20 backdrop-blur-sm"
                      >
                        <div
                          className={`text-2xl font-bold bg-linear-to-r ${project.color} bg-clip-text text-transparent`}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-slate-400 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-linear-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-slate-300">
                          <span className="text-emerald-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-300 flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      className={`bg-linear-to-r ${project.color} hover:scale-105 text-white shadow-lg transform transition-all duration-300`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white bg-transparent transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
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
