import { motion } from 'framer-motion';
import { Section, SectionHeading } from './Section';
import { about } from '../data/portfolio';

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A security-minded engineer who ships."
        align="center"
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-2 space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-base sm:text-lg">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-3"
        >
          {about.highlights.map(h => (
            <div
              key={h.label}
              className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                {h.value}
              </div>
              <div className="mt-1 text-xs text-zinc-500 leading-snug">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
