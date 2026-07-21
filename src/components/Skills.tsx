import { motion } from 'framer-motion';
import { skills } from '@/data';
import { useInView } from '@/hooks';
import { SectionHeading } from './About';

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="02" title="Skills & Stack" />

        <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
          The tools and technologies I use to bring ideas to life — from
          structure and styling to interactivity and type-safe logic.
        </p>

        <div
          ref={ref}
          className="mt-14 flex flex-wrap gap-3 sm:gap-4"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-cyan-400 transition-transform group-hover:scale-110">
                <skill.icon size={18} />
              </span>
              <span className="font-semibold text-white">{skill.name}</span>
              {skill.note && (
                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-emerald-400/20">
                  {skill.note}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
