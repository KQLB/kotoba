import type { LucideIcon } from "lucide-react";

export interface NavLink {
  /** i18n key under `nav.` */
  key: string;
  href: string;
}

export interface Feature {
  /** i18n key under `features.items.` */
  id: string;
  icon: LucideIcon;
  color: string;
}

export interface Course {
  /** i18n key under `courses.items.` */
  id: string;
  level: string;
  students: string;
  hours: number;
  color: string;
  textColor: string;
  bg: string;
  progress: number;
}

export interface CultureTopic {
  /** i18n key under `culture.items.` */
  id: string;
  icon: LucideIcon;
  color: string;
  emoji: string;
}

export interface Testimonial {
  /** i18n key under `testimonials.items.` */
  id: string;
  name: string;
  country: string;
  avatar: string;
  stars: number;
  color: string;
}

export interface Stat {
  /** i18n key under `stats.` */
  id: string;
  value: string;
  icon: string;
}

export interface FooterSection {
  /** i18n key under `footer.sections.` */
  id: string;
}
