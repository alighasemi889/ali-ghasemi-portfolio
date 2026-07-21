import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CircleDot } from 'lucide-react';
import { projects, type Project } from '@/data';
import { useInView } from '@/hooks';
import { SectionHeading } from './About';

const accentMap: Record<string, { text: string; ring: string; bg: string; glow: string }> = {
  cyan: {
    text: 'text-cyan-400',
    ring: 'group-hover:border-cyan-400/40',
    bg: 'bg-cyan-400/10',
    glow: 'group-hover:shadow-cyan-400/20',
  },
  emerald: {
    text: 'text-emerald-400',
    ring: 'group-hover:border-emerald-400/40',
    bg: 'bg-emerald-400/10',
    glow: 'group-hover:shadow-emerald-400/20',
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const a = accentMap[project.accent] ?? accentMap.cyan;
  const isCompleted = project.status === 'Completed';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 ${a.ring} hover:shadow-2xl ${a.glow} sm:p-7`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.bg} ${a.text} transition-transform duration-300 group-hover:scale-110`}
        >
          <project.icon size={24} />
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            isCompleted
              ? 'bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20'
              : 'bg-amber-400/10 text-amber-400 ring-1 ring-amber-400/20'
          }`}
        >
          <CircleDot size={11} className={isCompleted ? '' : 'animate-pulse'} />
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
        <a
          href={project.liveUrl}
          target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${a.text} transition-colors hover:opacity-80`}
        >
          <ExternalLink size={15} />
          Live Demo
        </a>
        <span className="text-slate-700">/</span>
        <a
          href={project.githubUrl}
          target={project.githubUrl.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
        >
          <ArrowUpRight size={15} />
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="03" title="Featured Projects" />
        <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
          A selection of products I'm building — from education platforms to my
          own corner of the web.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
