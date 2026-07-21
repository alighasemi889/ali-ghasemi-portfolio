import {
  Github,
  Mail,
  Linkedin,
  Code2,
  ShieldCheck,
  GraduationCap,
  MonitorSmartphone,
  GitBranch,
  Layers,
  Atom,
  Braces,
  Palette,
  type LucideIcon,
} from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  note?: string;
}

export type ProjectStatus = 'Completed' | 'In Development';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  status: ProjectStatus;
  icon: LucideIcon;
  accent: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  current?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const personal = {
  name: 'Ali Ghasemi',
  role: 'Frontend Developer & Founder',
  bio: 'Passionate about building modern web experiences and educational platforms that make learning accessible and engaging.',
  email: 'alihj4223@gmail.com',
  github: 'https://github.com/alighasemi889',
  linkedin: '#',
  location: 'Iran',
  englishLevel: 'B2',
  typingRoles: [
    'Frontend Developer',
    'Founder of NeuronSec',
    'Founder of CodeMaster',
    'React Enthusiast',
  ],
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/alighasemi889', icon: Github },
  { label: 'Email', href: 'mailto:alihj4223@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
];

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const aboutStory = [
  'My journey into frontend development started in 2022 with a simple curiosity about how websites work. What began as a hobby quickly turned into a deep passion for crafting clean, responsive, and accessible user interfaces.',
  'As a self-taught developer, I dedicated myself to mastering the fundamentals of HTML, CSS, and JavaScript before moving on to modern frameworks like React. Along the way, I discovered a strong interest in education and sharing knowledge.',
  'That passion led me to found NeuronSec, a cybersecurity education platform with interactive labs, and CodeMaster, a coding learning platform designed to help developers grow. Through these projects, I combine my love for building products with my mission to make technical education more accessible.',
];

export const languages = [
  { name: 'Persian', level: 'Native', proficiency: 100, rtl: true },
  { name: 'English', level: 'B2 — Upper Intermediate', proficiency: 75, rtl: false },
];

export const skills: Skill[] = [
  { name: 'HTML5', icon: Code2 },
  { name: 'CSS3 & SCSS', icon: Palette },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'React.js', icon: Atom },
  { name: 'TypeScript', icon: Braces, note: 'Learning' },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'Responsive Design', icon: MonitorSmartphone },
];

export const projects: Project[] = [
  {
    title: 'NeuronSec',
    description:
      'A cybersecurity education platform featuring interactive labs, guided lessons, and hands-on challenges that help learners practice real-world security concepts in a safe environment.',
    tech: ['React', 'Tailwind', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'In Development',
    icon: ShieldCheck,
    accent: 'cyan',
  },
  {
    title: 'CodeMaster',
    description:
      'A modern coding learning platform for developers at every level — with structured tracks, interactive editors, and progress tracking to keep learners motivated.',
    tech: ['React', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'In Development',
    icon: GraduationCap,
    accent: 'emerald',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio built with React, TypeScript, and Tailwind CSS — featuring smooth animations, a dark theme, and a fully responsive layout designed to showcase my work.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    githubUrl: 'https://github.com/alighasemi889',
    status: 'Completed',
    icon: Code2,
    accent: 'cyan',
  },
];

export const timeline: TimelineItem[] = [
  {
    year: '2024 — Present',
    title: 'Founder',
    organization: 'NeuronSec & CodeMaster',
    description:
      'Founded two education-focused platforms — one for cybersecurity training with interactive labs, and one for learning to code. Leading product design, frontend development, and content strategy.',
    current: true,
  },
  {
    year: '2023 — Present',
    title: 'Frontend Developer',
    organization: 'Self-taught & Freelance',
    description:
      'Building responsive, accessible web interfaces with React and Tailwind CSS. Working on personal projects and freelance work while continuously expanding my skill set.',
    current: true,
  },
  {
    year: '2022',
    title: 'Started Learning Web Development',
    organization: 'Self-study',
    description:
      'Began with HTML, CSS, and JavaScript fundamentals. Fell in love with building for the web and committed to a self-taught path into frontend development.',
  },
];
