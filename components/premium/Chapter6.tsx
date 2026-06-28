import portfolioData from "@/lib/data.json"
import MotionWrapper from "./MotionWrapper"
import MagneticButton from "./MagneticButton"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Chapter6() {
  const { personalInfo } = portfolioData

  return (
    <article id="contact" className="py-40 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <MotionWrapper>
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-6 block font-serif italic">Chapter 06</span>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-8">
            <MotionWrapper delay={0.2}>
              <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter mb-12 leading-none">
                Let's build<br />
                <span className="text-zinc-600">together.</span>
              </h2>
            </MotionWrapper>
          </div>
          
          <div className="md:col-span-4 flex flex-col justify-end">
            <MotionWrapper delay={0.4}>
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Contact</h4>
                  <MagneticButton href={`mailto:${personalInfo.email}`} className="text-xl md:text-2xl font-light hover:text-blue-400 transition-colors block">
                    {personalInfo.email}
                  </MagneticButton>
                  <MagneticButton href={`tel:${personalInfo.phone.replace(/\\s/g, '')}`} className="text-xl md:text-2xl font-light hover:text-blue-400 transition-colors mt-2 block">
                    {personalInfo.phone}
                  </MagneticButton>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Location</h4>
                  <p className="text-xl font-light text-zinc-300 ml-4 lg:ml-0 inline-block px-4 lg:px-0">
                    {personalInfo.location}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Social</h4>
                  <div className="flex items-center space-x-6 flex-wrap lg:space-x-4 px-4 lg:px-0">
                    {Object.entries(personalInfo.socials).map(([platform, url], idx) => {
                      if (!url) return null;
                      return (
                        <MagneticButton 
                          key={idx}
                          href={url}
                          className="text-zinc-400 hover:text-white transition-colors capitalize text-lg font-light lg:px-4"
                        >
                          {platform}
                        </MagneticButton>
                      )
                    })}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </article>
  )
}
