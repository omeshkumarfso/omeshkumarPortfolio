"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-linear-to-b from-slate-900 to-slate-800">
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
            Let's Connect
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative bg-linear-to-br from-slate-800/60 to-slate-700/60 p-8 rounded-3xl backdrop-blur-sm border border-emerald-500/20">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl mr-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                </div>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  I'm always interested in new opportunities, challenging projects, and meaningful collaborations.
                  Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-linear-to-r from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Email</p>
                      <a
                        href="mailto:omeshkumarfso@gmail.com"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        omeshkumarfso@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-linear-to-r from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-linear-to-r from-teal-500 to-cyan-500 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Phone</p>
                      <a href="tel:+919634409101" className="text-teal-400 hover:text-teal-300 transition-colors">
                        +91 9634409101
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-linear-to-r from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Location</p>
                      <p className="text-cyan-400">India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="p-4 bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="p-4 bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl text-white hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-linear-to-br from-slate-800/60 to-slate-700/60 p-8 rounded-3xl backdrop-blur-sm border border-emerald-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-3 text-lg">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-2 border-emerald-500/30 text-white placeholder-slate-400 focus:border-emerald-400 rounded-xl h-12 text-lg"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-3 text-lg">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-800/50 border-2 border-emerald-500/30 text-white placeholder-slate-400 focus:border-emerald-400 rounded-xl h-12 text-lg"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-3 text-lg">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-2 border-emerald-500/30 text-white placeholder-slate-400 focus:border-emerald-400 rounded-xl h-12 text-lg"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-3 text-lg">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-slate-800/50 border-2 border-emerald-500/30 text-white placeholder-slate-400 focus:border-emerald-400 resize-none rounded-xl text-lg"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
