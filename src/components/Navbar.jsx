import React, { useState, useEffect } from 'react'
import { portfolioData } from '../data/portfolio'
import { Menu, X, FileText, ExternalLink, Code2 } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { personalInfo, navLinks } = portfolioData

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0f1d]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-sm group-hover:border-emerald-400/60 transition-colors">
              TB
            </span>
            <span className="hidden sm:inline-block font-semibold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {personalInfo.shortName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons: Resumes */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={personalInfo.resumes.en}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/50 rounded-lg transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume (EN)
            </a>
            <a
              href={personalInfo.resumes.es}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              CV (ES)
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumes.en}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
              title="Resume (EN)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>EN</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 top-[57px] bg-[#0a0f1d]/98 backdrop-blur-xl border-t border-slate-800/80 md:hidden transition-all duration-300 flex flex-col justify-between p-6 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4 pt-4">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 px-3">Navigation</p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-lg font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/50 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-800/80 space-y-3 pb-8">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 px-1">Documents</p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={personalInfo.resumes.en}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-xl"
            >
              <FileText className="w-4 h-4" />
              Resume (EN)
            </a>
            <a
              href={personalInfo.resumes.es}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-xl"
            >
              <FileText className="w-4 h-4" />
              CV (ES)
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
