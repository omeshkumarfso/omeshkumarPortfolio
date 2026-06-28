import portfolioData from "@/lib/data.json"
import MotionWrapper from "./MotionWrapper"

export default function Chapter3() {
  const { skills } = portfolioData

  return (
    <article id="thinking" className="py-40 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <MotionWrapper>
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-6 block font-serif italic">Chapter 02</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-20 max-w-4xl leading-tight">
            How I Build
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {skills.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <MotionWrapper delay={0.2 + (idx * 0.1)}>
                <h3 className="text-lg font-medium text-white border-b border-zinc-800 pb-4 mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-zinc-400 font-light text-sm flex items-start">
                      <span className="w-1 h-1 rounded-full bg-zinc-700 mt-2 mr-3 shrink-0"></span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
