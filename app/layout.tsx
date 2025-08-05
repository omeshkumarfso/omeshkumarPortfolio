import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Omesh Kumar - Fullstack Developer & AI Integration Specialist",
  description:
    "Professional portfolio of Omesh Kumar, a fullstack developer with 4.5+ years of experience in React.js, Node.js, MongoDB, and AI integration. Specializing in scalable platforms and innovative solutions.",
  keywords:
    "Omesh Kumar, Fullstack Developer, React.js, Node.js, MongoDB, AI Integration, JavaScript, TypeScript, Next.js",
  authors: [{ name: "Omesh Kumar" }],
  creator: "Omesh Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omeshkumar.dev",
    title: "Omesh Kumar - Fullstack Developer & AI Integration Specialist",
    description:
      "Professional portfolio showcasing 4.5+ years of experience in building scalable web applications and AI-powered solutions.",
    siteName: "Omesh Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omesh Kumar - Fullstack Developer",
    description: "Professional portfolio showcasing expertise in React.js, Node.js, and AI integration.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
