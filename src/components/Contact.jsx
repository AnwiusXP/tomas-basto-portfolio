import React from 'react'
import { portfolioData } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Sparkles,
} from 'lucide-react'

export default function Contact() {
  const { contact } = portfolioData
  const revealRef = useScrollReveal()

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div ref={revealRef} className="reveal text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          Get In Touch
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          {contact.title}
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg mb-12">
          {contact.subtitle}
        </p>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {/* Card 1: Email */}
          <a
            href={contact.emailUrl}
            className="group bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Email Address
            </h3>
            <p className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors break-all mb-3">
              {contact.email}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              Send Email <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          {/* Card 2: WhatsApp / Phone */}
          <div className="group bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                WhatsApp & Phone
              </h3>
              <p className="text-base font-bold text-white mb-3">
                {contact.phone}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-800/60">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Chat
              </a>
              <a
                href={contact.phoneUrl}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5" />
                Call
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="group bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Location
            </h3>
            <p className="text-base font-bold text-white mb-1">
              {contact.location}
            </p>
            <p className="text-xs text-slate-400">{contact.workPreference}</p>
          </div>
        </div>

        {/* Big Quick Action CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Ready to collaborate on your next project?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Let's discuss full-stack applications, scalable APIs, or game mechanics.
              </p>
            </div>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
