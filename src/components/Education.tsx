import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { education, certificates } from '../data/portfolio';

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation."
        align="center"
      />

      <div className="mt-12 max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree + edu.institution}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:bg-white/[0.05] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <GraduationCap size={18} className="text-sky-400" />
              </span>
              <span className="text-xs font-medium text-zinc-500">{edu.period}</span>
            </div>
            <h3 className="text-base font-semibold text-zinc-100">
              {edu.degree} — {edu.field}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{edu.institution}</p>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Certificates() {
  return (
    <Section id="certificates" className="bg-zinc-950">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials that back the work."
        align="center"
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: 'easeOut' }}
            className="group rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Award size={15} className="text-emerald-400" />
              </span>
              <span className="text-xs font-medium text-zinc-500">{cert.year}</span>
            </div>
            <h3 className="text-sm font-semibold text-zinc-100 leading-snug">
              {cert.name}
            </h3>
            <p className="mt-1 text-xs text-zinc-500">{cert.issuer}</p>
            <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
