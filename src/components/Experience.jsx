import React from 'react'
import { portfolioData } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const { experience } = portfolioData
  const revealRef = useScrollReveal()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div ref={revealRef} className="reveal">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
        </div>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-12">
          Commercial work and production-grade software engineering for real-world clients.
        </p>

        {/* Experience List */}
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative group bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 shadow-lg shadow-black/20"
            >
              {/* Decorative accent glow */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 font-medium text-sm sm:text-base">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50 self-start sm:self-auto font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                  Technologies & Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/40 rounded-lg transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
