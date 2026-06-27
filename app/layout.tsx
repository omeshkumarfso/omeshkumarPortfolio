import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://omeshkumar.dev"),
  title: {
    default: "Omesh Kumar | Fullstack Developer & AI Integration Specialist",
    template: "%s | Omesh Kumar Portfolio",
  },
  description:
    "Portfolio of Omesh Kumar — a Fullstack Developer with 5+ years of experience building scalable web apps with React.js, Next.js, Node.js, MongoDB, and AI integration. Available for new opportunities.",
  keywords: [
    "Omesh Kumar",
    "Fullstack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "AI Integration",
    "Software Engineer",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Omesh Kumar", url: "https://omeshkumar.dev" }],
  creator: "Omesh Kumar",
  publisher: "Omesh Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://omeshkumar.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omeshkumar.dev",
    title: "Omesh Kumar | Fullstack Developer & AI Integration Specialist",
    description:
      "Portfolio showcasing 5+ years of experience building scalable web applications, AI-powered solutions, and leading development teams.",
    siteName: "Omesh Kumar Portfolio",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Omesh Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omesh Kumar | Fullstack Developer & AI Integration Specialist",
    description:
      "Portfolio showcasing expertise in React.js, Next.js, Node.js, and AI integration.",
    images: ["/icon-512x512.png"],
  },
  category: "technology",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omesh Kumar",
  url: "https://omeshkumar.dev",
  jobTitle: "Fullstack Developer & AI Integration Specialist",
  sameAs: [
    "https://www.linkedin.com/in/iamomeshkumarr/",
    "https://github.com/omeshkumarfso",
  ],
  email: "omeshkumarfso@gmail.com",
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "AI Integration",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

