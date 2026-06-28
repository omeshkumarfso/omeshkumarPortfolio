"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ArrowUp } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      // Background and Back to top
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      setShowBackToTop(scrollY > 500)

      // Scroll progress
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    if (pathname !== "/" && pathname !== "/premium" && pathname !== "/3d") {
      router.push(`/#${sectionId}`)
      return
    }
    
    // For Hero or top
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
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

  // Use dark theme defaults as this is now tailored for the 3D/Premium look
  const isDark = true

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-blue-500 z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Name */}
            <div
              className="cursor-pointer flex items-center space-x-2 relative z-50"
              onClick={() => scrollToSection("top")}
            >
              <span className="text-xl font-bold tracking-tight text-white">
                OK.
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium transition-colors text-zinc-400 hover:text-white"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Version Switcher & Mobile Toggle */}
            <div className="flex items-center space-x-4 relative z-50">
              <div className="relative hidden sm:block">
                <select
                  value={pathname === "/premium" ? "/premium" : pathname === "/3d" ? "/3d" : "/"}
                  onChange={handleVersionChange}
                  className="appearance-none outline-none cursor-pointer pl-4 pr-10 py-2 rounded-full text-sm font-medium transition-all bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 focus:border-white"
                >
                  <option value="/">Classic Version</option>
                  <option value="/premium">Premium Version</option>
                  <option value="/3d">3D Version</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                </div>
              </div>

              <button
                className="md:hidden p-2 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen Overlay Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
            >
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-3xl font-bold tracking-tight text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                  className="pt-8 mt-4 border-t border-zinc-800 w-full flex justify-center"
                >
                  <div className="relative">
                    <select
                      value={pathname === "/premium" ? "/premium" : pathname === "/3d" ? "/3d" : "/"}
                      onChange={handleVersionChange}
                      className="appearance-none outline-none cursor-pointer pl-6 pr-12 py-3 rounded-full text-base font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 focus:border-white"
                    >
                      <option value="/">Classic Version</option>
                      <option value="/premium">Premium Version</option>
                      <option value="/3d">3D Version</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-zinc-400" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => scrollToSection("top")}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
