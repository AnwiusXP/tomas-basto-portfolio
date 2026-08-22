import React from 'react'
import { portfolioData } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react'

export default function Education() {
  const { education } = portfolioData
  const revealRef = useScrollReveal()

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div ref={revealRef} className="reveal">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Education & Background
          </h2>
        </div>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-12">
          Academic foundation in software engineering, algorithms, system analysis, and application development.
        </p>

        {/* Education Card */}
        <div className="relative group bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 shadow-md">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-3 font-mono">
                Higher Technical Degree
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {education.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
                <span className="font-medium text-emerald-400">{education.institution}</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {education.location}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60 font-mono">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{education.date}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30 font-mono">
                <Award className="w-3.5 h-3.5" />
                <span>GPA: {education.gpa}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{education.details}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
