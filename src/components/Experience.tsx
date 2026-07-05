import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <Section id="experience" className="bg-zinc-950">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked and what I've built."
        align="center"
      />

      <div className="mt-14 max-w-3xl mx-auto relative">
        <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/40 via-white/10 to-transparent" />

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="relative pl-12 sm:pl-16"
            >
              <span className="absolute left-0 top-1.5 w-9 sm:w-11 h-9 sm:h-11 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                <Briefcase size={15} className="text-sky-400" />
                {exp.current && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-zinc-950" />
                )}
              </span>

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:bg-white/[0.05] transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-zinc-100">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-medium text-zinc-500">
                    {exp.period}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                  <span className="font-medium text-zinc-300">{exp.company}</span>
                  <span className="text-zinc-600">·</span>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <MapPin size={10} />
                    {exp.location}
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
