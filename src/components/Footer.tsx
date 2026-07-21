import { Heart, Github, Mail, Linkedin, ArrowUp } from 'lucide-react';
import { personal, socialLinks } from '@/data';

const iconMap = {
  GitHub: Github,
  Email: Mail,
  LinkedIn: Linkedin,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
              AG
            </span>
            <div>
              <div className="font-bold text-white">{personal.name}</div>
              <div className="text-xs text-slate-500">{personal.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? Github;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all group-hover:border-cyan-400/40 group-hover:text-cyan-400">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            Made with
            <Heart size={14} className="fill-rose-500 text-rose-500" />
            by {personal.name}
          </p>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} {personal.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
