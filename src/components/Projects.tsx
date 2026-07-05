import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work, built with security in mind."
        description="A mix of security tooling and full-stack applications — each one solving a real problem I cared about."
        align="center"
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
            className="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              {project.featured && (
                <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full px-2.5 py-1 backdrop-blur-md">
                  <Star size={11} className="fill-amber-300" />
                  Featured
                </span>
              )}
            </div>

            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="text-[11px] font-medium text-zinc-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 pt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-zinc-100 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition-colors"
                >
                  <Github size={13} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-900 bg-zinc-100 hover:bg-white rounded-lg px-3 py-2 transition-colors"
                >
                  <ExternalLink size={13} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
