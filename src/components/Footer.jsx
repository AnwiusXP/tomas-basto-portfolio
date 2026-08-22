import React from 'react'
import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const { personalInfo } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            TB
          </span>
          <div>
            <p className="text-sm font-semibold text-white">
              {personalInfo.name}
            </p>
            <p className="text-xs text-slate-400">
              © {currentYear} • Built with React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Right Socials */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.email}
            className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
