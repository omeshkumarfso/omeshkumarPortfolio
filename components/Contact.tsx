"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
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
            Let's Connect
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-emerald-500/20 flex flex-col items-center text-center">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mr-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                </div>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl">
                  I'm always interested in new opportunities, challenging projects, and meaningful collaborations.
                  Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>

                <div className="space-y-6 w-full max-w-xl">
                  <motion.a
                    href="mailto:omeshkumarfso@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold text-lg">Email</p>
                      <span className="text-emerald-400 hover:text-emerald-300 transition-colors">
                        omeshkumarfso@gmail.com
                      </span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919634409101"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold text-lg">Phone</p>
                      <span className="text-teal-400 hover:text-teal-300 transition-colors">
                        +91 9634409101
                      </span>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold text-lg">Location</p>
                      <p className="text-cyan-400">India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/iamomeshkumarr/"
                    target="_blank"
                    className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/omeshkumarfso"
                    target="_blank"
                    className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl text-white hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
