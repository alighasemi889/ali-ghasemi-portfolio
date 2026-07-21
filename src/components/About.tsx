import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, GraduationCap, Languages } from 'lucide-react';
import { aboutStory, languages, personal } from '@/data';
import { useInView } from '@/hooks';

const stats = [
  { label: 'Projects Founded', value: '2' },
  { label: 'Years Coding', value: '2+' },
  { label: 'English Level', value: personal.englishLevel },
];

const ventures = [
  {
    icon: ShieldCheck,
    name: 'NeuronSec',
    desc: 'Cybersecurity education with interactive labs',
  },
  {
    icon: GraduationCap,
    name: 'CodeMaster',
    desc: 'Coding learning platform for developers',
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" title="About Me" />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="group relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-emerald-400/20 opacity-60 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-ink-800 to-emerald-500/10" />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-ink-900/80 font-mono text-4xl font-bold text-cyan-400 shadow-[0_0_60px_-10px] shadow-cyan-400/40 backdrop-blur">
                    AG
                  </div>
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-ink-950/70 px-4 py-1.5 text-xs font-medium text-slate-400 backdrop-blur">
                  {personal.name}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {aboutStory.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-slate-400 sm:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ventures.map((v) => (
                <div
                  key={v.name}
                  className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 transition-transform group-hover:scale-110">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      {v.name}
                      <Rocket size={13} className="text-cyan-400/70" />
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center"
                >
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            <Languages size={16} />
            Languages
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex items-baseline justify-between">
                  <span
                    dir={lang.rtl ? 'rtl' : 'ltr'}
                    className="text-base font-semibold text-white"
                  >
                    {lang.name}
                  </span>
                  <span className="text-sm text-slate-500">{lang.level}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.proficiency}%` } : {}}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  align = 'left',
}: {
  index: string;
  title: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={align === 'center' ? 'mx-auto' : ''}
      >
        <div
          className={`flex items-center gap-3 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="font-mono text-sm font-medium text-cyan-400">
            {index}
          </span>
          <span className="h-px w-8 bg-cyan-400/40" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Section
          </span>
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </motion.div>
    </div>
  );
}
