import React, { useState } from 'react'
import { portfolioData } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  FolderGit2,
  ExternalLink,
  Github,
  Gamepad2,
  Smartphone,
  ShoppingBag,
  Play,
  Sparkles,
} from 'lucide-react'

export default function Projects() {
  const { projects } = portfolioData
  const revealRef = useScrollReveal()
  const [imageError, setImageError] = useState({})

  const handleImageError = (id) => {
    setImageError((prev) => ({ ...prev, [id]: true }))
  }

  const getProjectIcon = (iconType) => {
    switch (iconType) {
      case 'ecommerce':
        return <ShoppingBag className="w-8 h-8 text-emerald-400" />
      case 'gamepad':
        return <Gamepad2 className="w-8 h-8 text-emerald-400" />
      case 'mobile':
        return <Smartphone className="w-8 h-8 text-cyan-400" />
      default:
        return <FolderGit2 className="w-8 h-8 text-slate-400" />
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={revealRef} className="reveal">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
        </div>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-12">
          Core technical projects highlighting full-stack architectures, 2D game loops with FSM AI logic, and mobile cloud middleware.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Project Visual / Image Placeholder Banner */}
              <div className="relative h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800/80 border-b border-slate-800/80 flex items-center justify-center overflow-hidden">
                {!imageError[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-3 shadow-inner">
                      {getProjectIcon(project.iconType)}
                    </div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-mono">
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Status or Date Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 font-mono">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Role subtitle */}
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1.5 font-mono">
                    {project.role}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300/90 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-800/80">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                          link.primary
                            ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-md shadow-emerald-500/20'
                            : 'text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        {link.isCode ? (
                          <Github className="w-3.5 h-3.5" />
                        ) : link.isDemo && link.label.includes('Play') ? (
                          <Play className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <ExternalLink className="w-3.5 h-3.5" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
