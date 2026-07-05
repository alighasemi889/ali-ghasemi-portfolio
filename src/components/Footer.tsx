import { Shield, Github, Linkedin, Send, Mail } from 'lucide-react';
import { personal, navLinks } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center">
              <Shield size={14} className="text-sky-400" />
            </span>
            <div>
              <div className="text-sm font-semibold text-zinc-100">{personal.name}</div>
              <div className="text-xs text-zinc-500">{personal.title}</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: personal.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Send, href: personal.telegram, label: 'Telegram' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-zinc-100 hover:bg-white/10 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
