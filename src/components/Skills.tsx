import { motion } from 'framer-motion';
import { Section, SectionHeading } from './Section';
import { skillCategories } from '../data/portfolio';

export function Skills() {
  return (
    <Section id="skills" className="bg-zinc-950">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for, organized by discipline."
        description="No progress bars — proficiency isn't a percentage. These are the technologies I work with confidently across the stack."
        align="center"
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="group rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon size={18} className={cat.accent} />
                </span>
                <h3 className="text-base font-semibold text-zinc-100">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 hover:bg-white/10 hover:text-zinc-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
