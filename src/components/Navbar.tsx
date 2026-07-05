import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { personal, navLinks } from '../data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/70 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center group-hover:border-sky-400/40 transition-colors">
            <Shield size={15} className="text-sky-400" />
          </span>
          <span className="font-semibold text-sm tracking-tight text-zinc-100">
            {personal.name}
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm text-zinc-400 hover:text-zinc-100 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center text-sm font-medium text-zinc-100 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-colors"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-zinc-300 hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="px-5 py-3 space-y-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left text-sm text-zinc-300 hover:text-zinc-100 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="block text-sm font-medium text-zinc-100 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 mt-2 text-center"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
