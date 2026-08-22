import React from 'react'
import { portfolioData } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Gamepad2,
  Award,
  ExternalLink,
  Languages,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

export default function Skills() {
  const { skills, certifications } = portfolioData
  const revealRef = useScrollReveal()

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-indigo-400" />
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div ref={revealRef} className="reveal">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Skills & Verified Credentials
          </h2>
        </div>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-12">
          Comprehensive technical stack, backend architectures, databases, cloud tooling, and official industry certifications.
        </p>

        {/* 1. Categorized Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.categories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/50 hover:bg-slate-800 hover:text-emerald-300 border border-slate-700/70 hover:border-emerald-500/40 rounded-xl transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Official Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Official Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group relative flex flex-col justify-between bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                      {cert.badgeType}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-400 mb-4">{cert.issuer}</p>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 px-3 py-2 rounded-lg transition-colors mt-2"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verify Credential
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Spoken Languages */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <Languages className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Spoken Languages
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {skills.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between bg-slate-900/30 border border-slate-800 rounded-xl p-4"
              >
                <div>
                  <span className="text-sm font-semibold text-white block">
                    {lang.name}
                  </span>
                  <span className="text-xs text-slate-400">{lang.level}</span>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {lang.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
