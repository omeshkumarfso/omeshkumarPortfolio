import { Metadata } from "next"
import Chapter1 from "@/components/premium/Chapter1"
import Chapter2 from "@/components/premium/Chapter2"
import Chapter3 from "@/components/premium/Chapter3"
import Chapter4 from "@/components/premium/Chapter4"
import Chapter5 from "@/components/premium/Chapter5"
import Chapter6 from "@/components/premium/Chapter6"
import ChapterProgress from "@/components/premium/ChapterProgress"
import portfolioData from "@/lib/data.json"

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | Senior Software Engineer`,
  description: "Engineering high-performance systems for modern product teams.",
  openGraph: {
    title: `${portfolioData.personalInfo.name} | Premium Portfolio`,
    description: "Engineering high-performance systems for modern product teams.",
    type: "website",
  }
}

export default function PremiumPortfolio() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white relative">
      <ChapterProgress />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />
    </main>
  )
}
