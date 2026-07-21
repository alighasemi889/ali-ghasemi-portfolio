import type {
  SocialLink,
  Skill,
  Project,
  TimelineItem,
  NavLink,
} from '@/data';

export type { SocialLink, Skill, Project, TimelineItem, NavLink };

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  englishLevel: string;
  typingRoles: string[];
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
  rtl: boolean;
}
