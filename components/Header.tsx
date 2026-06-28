"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    if (pathname !== "/" && pathname !== "/premium") {
      router.push(`/#${sectionId}`)
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`${pathname}#${sectionId}`)
    }
  }

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value)
  }

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const isDark = pathname === "/premium" || pathname === "/3d"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <div
            className="cursor-pointer flex items-center space-x-2"
            onClick={() => router.push(pathname === "/premium" ? "/premium" : pathname === "/3d" ? "/3d" : "/")}
          >
            <span
              className={`text-xl font-bold tracking-tight ${
                isDark
                  ? "text-white"
                  : "bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
              }`}
            >
              OK.
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-zinc-400 hover:text-white"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Version Switcher & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={pathname === "/premium" ? "/premium" : pathname === "/3d" ? "/3d" : "/"}
                onChange={handleVersionChange}
                className={`appearance-none outline-none cursor-pointer pl-4 pr-10 py-2 rounded-full text-sm font-medium transition-all ${
                  isDark
                    ? "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 focus:border-white"
                    : "bg-slate-800 text-slate-300 border border-slate-700 hover:border-emerald-500/50 focus:border-emerald-500"
                }`}
              >
                <option value="/">Classic Version</option>
                <option value="/premium">Premium Version</option>
                <option value="/3d">3D Version</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className={`w-4 h-4 ${isDark ? "text-zinc-400" : "text-slate-400"}`} />
              </div>
            </div>

            <button
              className="md:hidden p-2 text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden absolute top-20 left-0 right-0 border-b ${
            isDark
              ? "bg-black/95 backdrop-blur-lg border-white/10"
              : "bg-slate-900/95 backdrop-blur-lg border-slate-700/50"
          }`}
        >
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-lg font-medium py-2 ${
                  isDark
                    ? "text-zinc-400 hover:text-white"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
