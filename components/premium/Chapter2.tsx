import portfolioData from "@/lib/data.json"
import MotionWrapper from "./MotionWrapper"

export default function Chapter2() {
  const { about } = portfolioData

  return (
    <article id="identity" className="py-40 bg-black text-white border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <MotionWrapper>
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-6 block font-serif italic">Chapter 01</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-20 max-w-4xl leading-tight">
            How I Think
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-5 lg:col-span-4">
            <MotionWrapper delay={0.2}>
              <div className="space-y-12">
                {about.stats.map((stat, idx) => (
                  <div key={idx} className="border-l border-zinc-800 pl-6">
                    <div className="text-5xl font-light tracking-tighter mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <MotionWrapper delay={0.3}>
              <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-relaxed mb-16">
                {about.journey.description}
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {about.highlights.map((highlight, idx) => (
                <MotionWrapper key={idx} delay={0.4 + (idx * 0.1)}>
                  <h3 className="text-xl font-medium text-white mb-4">{highlight.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    {highlight.description}
                  </p>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
