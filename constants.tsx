import { 
  Mic, 
  Zap, 
  Shield, 
  Globe, 
  Keyboard, 
  Activity, 
  Cpu,
  Check
} from 'lucide-react';
import { Feature, PricingTier, FaqItem } from './types';

export const APP_NAME = "Glaido";

export const BRAND_COLORS = {
  lime: '#BFF549',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#1A1A1A'
};

export const PARTNER_LOGOS = [
  "ChatGPT", "Chrome", "Claude", "ClickUp", "Cursor", "Discord", "Mail", "Slack", "Spark", "Todoist", "VS Code"
];

export const FEATURES: Feature[] = [
  {
    title: "Finish Emails in Seconds, Not Minutes",
    description: "That 15-minute email response? Do it in 3 minutes. Your voice is 5x faster than your fingers.",
    icon: Zap,
    colSpan: 2
  },
  {
    title: "Works Everywhere You Work",
    description: "Gmail, Slack, Cursor, ChatGPT—wherever you type, you can speak. No switching tools.",
    icon: Globe,
    colSpan: 1
  },
  {
    title: "Save 20+ Hours Every Month",
    description: "Average user types 2-4 hours/day. Cut that to 30 minutes. Get your time back.",
    icon: Activity,
    colSpan: 1
  },
  {
    title: "Private by Default",
    description: "Your words stay on your device. Open source. No cloud storage in local mode.",
    icon: Shield,
    colSpan: 1
  },
  {
    title: "Never Retype Again",
    description: "State-of-the-art recognition handles accents, technical terms, and coding syntax perfectly.",
    icon: Check,
    colSpan: 1
  },
  {
    title: "Speak Your Native Language",
    description: "100+ languages supported. Work how you think, not how software dictates.",
    icon: Globe,
    colSpan: 1
  },
  {
    title: "Prevent RSI Before It Starts",
    description: "Writers and developers: stop the pain. Reduce repetitive strain injury risk by 80%.",
    icon: Activity,
    colSpan: 2
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Start Free",
    price: "$0",
    description: "Get 5x faster immediately. No credit card. No trial limits.",
    features: [
      "Work 5x faster in any app",
      "Accurate voice-to-text",
      "Help from 10,000+ users",
      "Privacy-first, local processing"
    ],
    cta: "Start Saving Time",
    highlight: false
  },
  {
    name: "Pro",
    price: "$12.00",
    period: "/month",
    description: "For people who write code, long documents, or technical content all day. Saves 20+ hours/month.",
    features: [
      "Unlimited time savings",
      "Perfect code syntax & formatting",
      "Shortcuts for repetitive tasks",
      "Get unblocked fast",
      "New productivity features first"
    ],
    cta: "Save 20 Hours/Month",
    highlight: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How much time will I actually save?",
    answer: "Most users save 20+ hours per month. If you type 2-4 hours/day for work, Glaido cuts that to 30-60 minutes. That's 1.5-3.5 hours back every day."
  },
  {
    question: "Will this actually work for MY workflow?",
    answer: "If you write emails, Slack messages, docs, code comments, or ChatGPT prompts—yes. Glaido works in every text field, everywhere. One hotkey, universal compatibility."
  },
  {
    question: "How long until I'm faster with voice than typing?",
    answer: "Most people are faster immediately. Within 3 days, you'll be 3-5x faster. Within 2 weeks, you'll forget what typing felt like."
  },
  {
    question: "Will this actually work for writing code?",
    answer: "Yes. Glaido Pro has specific AI tuning for camelCase, snake_case, special characters, and code syntax. Developers report 2-3x faster code comments, PR descriptions, and documentation."
  },
  {
    question: "Does this work on all operating systems?",
    answer: "Yes, Glaido works seamlessly on macOS, Windows, and Linux."
  },
  {
    question: "Is my voice data recorded?",
    answer: "No. In local mode, processing happens on your device. For Pro AI features, data is transiently processed and never stored."
  }
];

export const TESTIMONIALS = [
  {
    quote: "I respond to emails while walking my dog now. Sounds ridiculous but it's genuinely changed how I work.",
    name: "Jack Roberts",
    role: "Founder",
    company: "Teddy AI",
    image: "/jack.jpeg"
  },
  {
    quote: "My wrists were killing me after 8 hours of coding. Now I dictate comments and docs—way faster and zero pain.",
    name: "Jannis Moore",
    role: "Founder",
    company: "Integraticus",
    image: "/jannis.jpeg"
  },
  {
    quote: "I was skeptical about voice typing. Then I realized I could write course content during my commute. Game changer.",
    name: "Dave Ebbelaar",
    role: "Founder",
    company: "Datalumina",
    image: "/dave.jpeg"
  }
];