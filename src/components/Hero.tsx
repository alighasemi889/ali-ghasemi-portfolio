import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { personal } from '../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.6)_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </span>
            <span className="hidden sm:flex items-center gap-1 text-xs text-zinc-500">
              <MapPin size={11} />
              {personal.location}
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.05]">
            {personal.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-xl sm:text-2xl font-medium text-zinc-300">
            {personal.title}
          </motion.p>

          <motion.p variants={item} className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            I'm a cybersecurity analyst and web developer who enjoys building secure, scalable,
            and modern web applications. I bridge the gap between offensive security and
            production-grade engineering — continuously learning, always shipping.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-semibold rounded-xl px-5 py-3 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              View Projects
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-100 text-sm font-semibold rounded-xl px-5 py-3 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Contact Me
              <Mail size={15} />
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            {[
              { icon: Github, href: personal.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Send, href: personal.telegram, label: 'Telegram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-5 h-9 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-zinc-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
