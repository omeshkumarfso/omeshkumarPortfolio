import portfolioData from "@/lib/data.json"
import HeroParallax from "./HeroParallax"
import { ArrowDown } from "lucide-react"

export default function Chapter1() {
  const { personalInfo } = portfolioData

  return (
    <article id="intro" className="h-[100svh] relative bg-black overflow-hidden flex items-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 h-full">
        <HeroParallax>
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-10">
              <h1 className="text-[14vw] sm:text-[12vw] leading-[0.85] tracking-tighter text-white font-medium mb-12 select-none">
                {personalInfo.name.split(' ')[0]}
                <span className="text-zinc-700 block">{personalInfo.name.split(' ')[1]}</span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-zinc-900 pt-12 mt-12 md:mt-24">
                <div className="max-w-xl mb-8 md:mb-0">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-zinc-400 leading-snug tracking-tight">
                    Engineering <span className="text-white">high-performance systems</span> for modern product teams.
                  </p>
                </div>
                
                <div className="flex items-center space-x-6 animate-pulse">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-medium">Scroll to explore</span>
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center">
                    <ArrowDown className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroParallax>
      </div>
    </article>
  )
}

