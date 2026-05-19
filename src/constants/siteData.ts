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

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Vocabulary",
    href: "/vocabulary",
  },
  {
    label: "Grammar",
    href: "/grammar",
  },
  {
    label: "Kanji",
    href: "/kanji",
  },
  {
    label: "JLPT",
    href: "/jlpt",
  },
  {
    label: "Community",
    href: "/community",
  },
];

export const FEATURES = [
  {
    icon: BookOpen,
    title: "Vocabulary Practice",
    desc: "10,000+ words with spaced-repetition flashcards",
    color: "from-rose-400 to-pink-500",
    badge: "Most Popular",
  },
  {
    icon: PenTool,
    title: "Kanji Learning",
    desc: "Stroke-order animations for all JLPT levels",
    color: "from-orange-400 to-red-500",
    badge: "N5–N1",
  },
  {
    icon: Trophy,
    title: "JLPT Mock Test",
    desc: "Full timed exams mirroring the real JLPT",
    color: "from-amber-400 to-orange-500",
    badge: "Exam Prep",
  },
  {
    icon: Headphones,
    title: "Listening Practice",
    desc: "Native-speaker audio with speed control",
    color: "from-sky-400 to-blue-500",
    badge: "Audio",
  },
  {
    icon: Mic,
    title: "Speaking AI",
    desc: "Real-time pronunciation feedback from AI",
    color: "from-violet-400 to-purple-500",
    badge: "AI-Powered",
  },
  {
    icon: Brain,
    title: "Flashcards",
    desc: "Smart SRS cards that adapt to your pace",
    color: "from-teal-400 to-emerald-500",
    badge: "Adaptive",
  },
];

export const COURSES = [
  {
    level: "N5",
    title: "Beginner",
    students: "24.5k",
    hours: 40,
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    bg: "bg-emerald-50",
    progress: 85,
    tags: ["Hiragana", "Katakana", "Basic Kanji"],
  },
  {
    level: "N4",
    title: "Elementary",
    students: "18.2k",
    hours: 60,
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bg: "bg-blue-50",
    progress: 72,
    tags: ["Grammar", "Vocabulary", "Kanji 300"],
  },
  {
    level: "N3",
    title: "Intermediate",
    students: "12.8k",
    hours: 100,
    color: "bg-violet-500",
    textColor: "text-violet-600",
    bg: "bg-violet-50",
    progress: 60,
    tags: ["Complex Grammar", "Kanji 650", "Reading"],
  },
  {
    level: "BJ",
    title: "Business Japanese",
    students: "6.1k",
    hours: 80,
    color: "bg-rose-500",
    textColor: "text-rose-600",
    bg: "bg-rose-50",
    progress: 55,
    tags: ["Keigo", "Emails", "Presentations"],
  },
];

export const CULTURE = [
  {
    icon: Tv,
    label: "Anime",
    desc: "Learn Japanese through iconic anime series",
    color: "from-pink-400 to-rose-500",
    emoji: "🎌",
  },
  {
    icon: Plane,
    label: "Travel",
    desc: "Essential phrases for your Japan adventure",
    color: "from-sky-400 to-cyan-500",
    emoji: "✈️",
  },
  {
    icon: Utensils,
    label: "Food & Dining",
    desc: "Order like a local at any restaurant",
    color: "from-amber-400 to-orange-500",
    emoji: "🍜",
  },
  {
    icon: Home,
    label: "Japanese Life",
    desc: "Daily customs, etiquette & seasonal traditions",
    color: "from-teal-400 to-green-500",
    emoji: "🌸",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah K.",
    country: "🇺🇸 USA",
    avatar: "SK",
    level: "Passed N3",
    text: "From zero to N3 in 14 months. The AI speaking coach fixed my pitch-accent issues I never knew I had.",
    stars: 5,
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Marco R.",
    country: "🇮🇹 Italy",
    avatar: "MR",
    level: "N4 Student",
    text: "The mock exams are incredibly accurate. I scored 87 on the real test after averaging 85 on here.",
    stars: 5,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Aisha T.",
    country: "🇳🇬 Nigeria",
    avatar: "AT",
    level: "N5 Graduate",
    text: "The anime culture section made me fall deeper in love with Japanese. Learning feels like entertainment.",
    stars: 5,
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Chen W.",
    country: "🇨🇳 China",
    avatar: "CW",
    level: "Business JP",
    text: "Keigo lessons saved me in my Tokyo job interview. I got the position. Arigatou gozaimasu! 🎉",
    stars: 5,
    color: "bg-amber-100 text-amber-700",
  },
];

export const STATS = [
  { value: "500K+", label: "Active Learners", icon: "👥" },
  { value: "97%", label: "Pass Rate", icon: "🏆" },
  { value: "10K+", label: "Vocabulary", icon: "📚" },
];

export const SOCIAL_PROOF = [
  { value: "500K+", label: "Active Learners", icon: "👥" },
  { value: "4.9★", label: "App Store Rating", icon: "⭐" },
  { value: "97%", label: "JLPT Pass Rate", icon: "🏆" },
  { value: "60+", label: "Countries", icon: "🌍" },
];

export const FOOTER_SECTIONS = [
  { heading: "Learn", links: ["Vocabulary", "Kanji", "Grammar", "Listening", "Speaking"] },
  { heading: "JLPT", links: ["N5 Course", "N4 Course", "N3 Course", "N2 Course", "N1 Course"] },
  {
    heading: "Company",
    links: ["About Us", "Blog", "Careers", "Press", "Contact"],
  },
];

export const FOOTER_POLICIES = ["Privacy Policy", "Terms of Service", "Cookie Policy"];
