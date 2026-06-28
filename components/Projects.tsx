"use client"

import { motion } from "framer-motion"
import { ExternalLink, Play, TrendingUp, Shield, Zap, Star } from "lucide-react"


export default function Projects() {
  const projects = [
    {
      title: "Kodikas Partner — three-portal e-commerce SaaS",
      description:
        "A multi-tenant e-commerce platform built solo end to end: a customer storefront, a merchant portal with sales analytics, and a super-admin console with oversight of all stores.",
      image: "/partnerApps.png",
      video: "/ecommerce-order-management-demo.png",
      technologies: ["React", "TypeScript", "Node.js", "Multi-tenant", "Analytics"],
      achievements: [
        "Architected and built three connected portals single-handedly",
        "Customer storefront with full shopping and checkout flow",
        "Merchant portal with real-time sales analytics",
        "Super-admin console with oversight across all stores",
      ],
      metrics: {
        portals: "3",
        tenancy: "Multi",
        built: "Solo",
      },
      features: ["Customer Storefront", "Merchant Analytics", "Super-Admin Console", "Multi-tenant Architecture"],
      color: "from-emerald-500 to-teal-500",
      liveLinks: [
        { label: "Storefront", url: "https://shop.kodikas.in" },
        { label: "Partner Portal", url: "https://partner.kodikas.in" },
      ],
    },
    {
      title: "New Sarkari Result — Government Jobs Platform",
      description:
        "A live platform delivering government job notifications, results, and admit cards to job seekers across India, built for SEO and high-traffic content delivery.",
      image: "/newsarkariResult.png",
      video: "/placeholder.svg",
      technologies: ["Next.js", "Node.js", "SEO", "SSR", "Content Delivery"],
      achievements: [
        "Launched a public government-jobs platform for Indian job seekers",
        "Delivers job notifications, results, and admit cards",
        "Engineered for SEO and high-traffic content delivery",
        "Server-rendered with Next.js for fast, indexable pages",
      ],
      metrics: {
        focus: "SEO",
        traffic: "High",
        region: "India",
      },
      features: ["Job Notifications", "Results & Admit Cards", "SEO Optimized", "High-Traffic Delivery"],
      color: "from-teal-500 to-cyan-500",
      liveLinks: [{ label: "Live Demo", url: "https://newsarkariresult.org" }],
    },
    {
      title: "Logical Contracts Platform",
      description:
        "AI-powered legal contract platform allowing real-time collaboration and AI-assisted drafting of legal documents.",
      image: "/legal-contract-dashboard.png",
      video: "/contract-editing-interface-demo.png",
      technologies: ["React.js", "TypeScript", "OpenAI API", "WebSockets", "Redux Toolkit"],
      achievements: [
        "Built real-time editor supporting 20+ simultaneous users",
        "Optimized performance reducing page load time by 45%",
        "Achieved 80% test coverage reducing production bugs",
        "Implemented scalable editor capable of handling 100+ page contracts",
      ],
      metrics: {
        users: "20+",
        performance: "45%",
        coverage: "80%",
      },
      features: ["AI-Powered Drafting", "Real-time Collaboration", "WebSockets", "Large Document Support"],
      color: "from-emerald-500 to-teal-500",
      liveLinks: [] as { label: string; url: string }[],
    },
    {
      title: "SwilMart Multi-Portal System",
      description:
        "Multi-tenant e-commerce ecosystem including Admin, B2B, and B2C portals with order management, inventory tracking, and merchant onboarding.",
      image: "/ecommerce-multi-portal-dashboard.png",
      video: "/ecommerce-order-management-demo.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Microservices", "AWS"],
      achievements: [
        "Led cross-functional team of 7 developers",
        "Architected multi-portal scalable system architecture",
        "Improved system response time by 50%",
        "Integrated POS and delivery systems via microservices",
      ],
      metrics: {
        performance: "50%",
        portals: "3",
        team: "7",
      },
      features: ["Multi-tenant Support", "Real-time Tracking", "Inventory Management", "Payment Gateway"],
      color: "from-teal-500 to-cyan-500",
      liveLinks: [] as { label: string; url: string }[],
    },
    {
      title: "Quickbit Crypto Platform",
      description:
        "A secure cryptocurrency payment platform enabling merchants to accept crypto payments and perform bank-to-crypto transactions with compliance-based workflows.",
      image: "/cryptocurrency-payment-platform.png",
      video: "/crypto-payment-transaction-demo.png",
      technologies: ["React.js", "TypeScript", "Django", "Crypto APIs", "JWT Auth"],
      achievements: [
        "Developed secure crypto payment platform for merchant integration",
        "Implemented secure payment workflows adhering to crypto compliance standards",
        "Built responsive and intuitive user interfaces",
        "Integrated RESTful APIs for seamless communication",
      ],
      metrics: {
        security: "100%",
        compliance: "Full",
        integration: "Seamless",
      },
      features: ["Crypto Payments", "Merchant Tools", "Security Compliance", "Transaction Tracking"],
      color: "from-cyan-500 to-blue-500",
      liveLinks: [] as { label: string; url: string }[],
    },
    {
      title: "Swil ERP Admin System",
      description:
        "Enterprise ERP admin platform managing permissions, workflows, and operational data for large-scale business users.",
      image: "/erp-admin-dashboard.png",
      video: "/erp-role-management-demo.png",
      technologies: ["React.js", "Redux Toolkit", "RBAC", "Form Validation", "Caching Strategies"],
      achievements: [
        "Developed role & permission system managing 4,800+ variables",
        "Reduced form submission errors by 75% using advanced validations",
        "Improved admin workflow efficiency by 40%",
        "Optimized performance using caching techniques",
      ],
      metrics: {
        permissions: "4.8K+",
        efficiency: "40%",
        errors: "-75%",
      },
      features: ["Role Management", "Permission Control", "Advanced Validations", "Performance Optimization"],
      color: "from-orange-500 to-amber-500",
      liveLinks: [] as { label: string; url: string }[],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
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
            Portfolio Showcase
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
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
                    className={`absolute inset-0 bg-gradient-to-r ${project.color}/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 blur-xl`}
                  ></div>
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-3xl overflow-hidden border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        className={`flex items-center px-4 py-2 rounded-md font-medium bg-gradient-to-r ${project.color} hover:scale-110 text-white shadow-lg transform transition-all duration-300`}
                      >
                        <Play className="mr-2 h-5 w-5" />
                        View Demo
                      </button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`p-2 bg-gradient-to-r ${project.color} rounded-full`}>
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
                        className="text-center p-4 bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl border border-emerald-500/20 backdrop-blur-sm"
                      >
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
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
                        <span
                          key={techIndex}
                          className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/50 transition-colors"
                        >
                          {tech}
                        </span>
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
                  {project.liveLinks.length > 0 && (
                    <div className="flex gap-4 flex-wrap">
                      {project.liveLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-4 py-2 rounded-md font-medium bg-gradient-to-r ${project.color} hover:scale-105 text-white shadow-lg transform transition-all duration-300`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
