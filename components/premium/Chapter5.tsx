import portfolioData from "@/lib/data.json"
import MotionWrapper from "./MotionWrapper"

export default function Chapter5() {
  const { experience } = portfolioData

  return (
    <article id="evidence" className="py-40 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <MotionWrapper>
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-6 block font-serif italic">Chapter 04</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-20 max-w-4xl leading-tight">
            The Evidence
          </h2>
        </MotionWrapper>

        {/* Timeline */}
        <div className="border-t border-zinc-900 pt-16">
          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <MotionWrapper key={idx} delay={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-zinc-900 pt-16">
                <div className="md:col-span-3">
                  <div className="text-zinc-500 text-sm font-medium uppercase tracking-[0.15em] sticky top-32">{exp.duration}</div>
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-2xl font-medium text-white mb-2 tracking-tight">{exp.position}</h4>
                  <div className="text-zinc-400 mb-8 font-light tracking-wide">{exp.company} <span className="mx-3 text-zinc-700">/</span> {exp.location}</div>
                  <ul className="space-y-4">
                    {exp.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="text-zinc-400 font-light text-base leading-relaxed flex items-start">
                        <span className="mr-4 text-zinc-700 mt-1">—</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.projects.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                      {exp.projects.map((project, pIdx) => (
                        <span key={pIdx} className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs tracking-wider rounded-md">
                          {project}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
