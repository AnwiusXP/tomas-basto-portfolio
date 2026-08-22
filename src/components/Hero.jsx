import React from 'react'
import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, MapPin, ArrowRight, Sparkles, Terminal } from 'lucide-react'

export default function Hero() {
  const { personalInfo } = portfolioData

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-transparent rounded-full blur-3xl animate-blob-1" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl animate-blob-2" />
        <div className="absolute -bottom-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-t from-indigo-900/10 via-slate-900/0 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      {/* Floating Social Sidebar (Desktop) */}
      <aside className="hidden lg:flex fixed left-8 bottom-1/2 translate-y-1/2 z-40 flex-col items-center gap-4 py-4 px-2 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-xl shadow-black/40">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-xl transition-all duration-200"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={personalInfo.socials.email}
          className="p-2.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-xl transition-all duration-200"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-8 bg-slate-800 mt-1" />
      </aside>

      {/* Main Hero Container */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-medium text-emerald-300 backdrop-blur-md mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {personalInfo.availability}
        </div>

        {/* Name Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subheadline / Role */}
        <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-semibold mb-4">
          <span className="text-gradient font-mono">
            {personalInfo.title}
          </span>
        </div>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-1.5 text-sm text-slate-400 mb-6">
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span>{personalInfo.location}</span>
        </div>

        {/* Short Pitch */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300/90 leading-relaxed mb-10 font-normal">
          {personalInfo.shortPitch}
        </p>

        {/* CTAs & Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700 hover:border-slate-600 rounded-xl backdrop-blur-md transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile/Tablet Social Links */}
        <div className="flex lg:hidden items-center justify-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 rounded-xl transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-slate-400 hover:text-cyan-400 bg-slate-900/60 border border-slate-800 rounded-xl transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.email}
            className="p-3 text-slate-400 hover:text-emerald-400 bg-slate-900/60 border border-slate-800 rounded-xl transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
