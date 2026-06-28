import portfolioData from "@/lib/data.json"
import MotionWrapper from "./MotionWrapper"
import ProjectDepthCard from "./ProjectDepthCard"

export default function Chapter4() {
  const { projects } = portfolioData

  return (
    <article id="work" className="py-40 bg-black text-white border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <MotionWrapper>
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-6 block font-serif italic">Chapter 03</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-32 max-w-4xl leading-tight">
            Selected Work
          </h2>
        </MotionWrapper>

        {/* Selected Works - Editorial Layout with 3D Depth */}
        <div className="space-y-40">
          {projects.slice(0, 3).map((project, idx) => (
            <ProjectDepthCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </article>
  )
}

