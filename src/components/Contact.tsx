import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { personal, socialLinks } from '@/data';
import { useInView } from '@/hooks';
import { SectionHeading } from './About';

const iconMap = {
  GitHub: Github,
  Email: Mail,
  LinkedIn: Linkedin,
};

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="05" title="Get In Touch" align="center" />

        <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate-400 sm:text-lg">
          Have a project in mind, a question, or just want to say hi? My inbox
          is always open.
        </p>

        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </span>
        </div>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-7">
              <div>
                <h3 className="text-xl font-bold text-white">Let's talk</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Whether it's a collaboration, freelance work, or a chat about
                  frontend and education platforms — I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </div>
                    <div className="truncate text-sm font-medium text-white group-hover:text-cyan-400">
                      {personal.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <Github size={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      GitHub
                    </div>
                    <div className="truncate text-sm font-medium text-white group-hover:text-cyan-400">
                      {personal.github.replace('https://', '')}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      Location
                    </div>
                    <div className="text-sm font-medium text-white">
                      {personal.location}
                    </div>
                  </div>
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                  sent
                    ? 'bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/30'
                    : 'bg-cyan-400 text-ink-950 hover:bg-cyan-300 hover:shadow-[0_0_30px_-5px] hover:shadow-cyan-400/50'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message ready — thanks!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-slate-600">
                This form is a visual demo — reach me directly at{' '}
                <a
                  href={`mailto:${personal.email}`}
                  className="text-cyan-400 hover:underline"
                >
                  {personal.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
      />
    </div>
  );
}
