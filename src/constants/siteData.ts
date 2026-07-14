import {
  BookOpen,
  PenTool,
  Trophy,
  Headphones,
  Mic,
  Brain,
  Tv,
  Plane,
  Utensils,
  Home,
} from "lucide-react";
import type {
  NavLink,
  Feature,
  Course,
  CultureTopic,
  Testimonial,
  Stat,
  FooterSection,
} from "@/types/site";

export const NAV_LINKS: NavLink[] = [
  { key: "home", href: "/" },
  { key: "vocabulary", href: "/vocabulary" },
  { key: "flashcards", href: "/flashcard" },
  { key: "grammar", href: "/grammar" },
  { key: "kanji", href: "/kanji" },
  { key: "jlpt", href: "/jlpt" },
  { key: "community", href: "/community" },
];

export const FEATURES: Feature[] = [
  { id: "vocabulary", icon: BookOpen, color: "from-rose-400 to-pink-500" },
  { id: "kanji", icon: PenTool, color: "from-orange-400 to-red-500" },
  { id: "jlptMock", icon: Trophy, color: "from-amber-400 to-orange-500" },
  { id: "listening", icon: Headphones, color: "from-sky-400 to-blue-500" },
  { id: "speaking", icon: Mic, color: "from-violet-400 to-purple-500" },
  { id: "flashcards", icon: Brain, color: "from-teal-400 to-emerald-500" },
];

export const COURSES: Course[] = [
  {
    id: "n5",
    level: "N5",
    students: "24.5k",
    hours: 40,
    color: "bg-emerald-500",
    textColor: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    progress: 85,
  },
  {
    id: "n4",
    level: "N4",
    students: "18.2k",
    hours: 60,
    color: "bg-blue-500",
    textColor: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    progress: 72,
  },
  {
    id: "n3",
    level: "N3",
    students: "12.8k",
    hours: 100,
    color: "bg-violet-500",
    textColor: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    progress: 60,
  },
  {
    id: "bj",
    level: "BJ",
    students: "6.1k",
    hours: 80,
    color: "bg-rose-500",
    textColor: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/40",
    progress: 55,
  },
];

export const CULTURE: CultureTopic[] = [
  { id: "anime", icon: Tv, color: "from-pink-400 to-rose-500", emoji: "🎌" },
  { id: "travel", icon: Plane, color: "from-sky-400 to-cyan-500", emoji: "✈️" },
  { id: "food", icon: Utensils, color: "from-amber-400 to-orange-500", emoji: "🍜" },
  { id: "life", icon: Home, color: "from-teal-400 to-green-500", emoji: "🌸" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah K.",
    country: "🇺🇸 USA",
    avatar: "SK",
    stars: 5,
    color: "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300",
  },
  {
    id: "marco",
    name: "Marco R.",
    country: "🇮🇹 Italy",
    avatar: "MR",
    stars: 5,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",
  },
  {
    id: "aisha",
    name: "Aisha T.",
    country: "🇳🇬 Nigeria",
    avatar: "AT",
    stars: 5,
    color: "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300",
  },
  {
    id: "chen",
    name: "Chen W.",
    country: "🇨🇳 China",
    avatar: "CW",
    stars: 5,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
  },
];

export const STATS: Stat[] = [
  { id: "activeLearners", value: "500K+", icon: "👥" },
  { id: "passRate", value: "97%", icon: "🏆" },
  { id: "vocabulary", value: "10K+", icon: "📚" },
];

export const SOCIAL_PROOF: Stat[] = [
  { id: "activeLearners", value: "500K+", icon: "👥" },
  { id: "appStoreRating", value: "4.9★", icon: "⭐" },
  { id: "jlptPassRate", value: "97%", icon: "🏆" },
  { id: "countries", value: "60+", icon: "🌍" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  { id: "learn" },
  { id: "jlpt" },
  { id: "company" },
];
