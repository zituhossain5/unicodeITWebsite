import type {
  FaqItem,
  NavItem,
  PricingPlan,
  ProcessStep,
  Testimonial,
  Work,
} from "./types";
import { projects } from "../data/projects";

export const navigation: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/works" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const works: Work[] = projects.map((project) => ({
  slug: project.slug,
  title: project.title,
  category: project.category,
  year: project.year,
  image: project.listing,
  accent: "var(--brand)",
  summary: project.summary,
  services: [...project.tags],
}));

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$3,900",
    description: "A sharp visual foundation for a focused launch.",
    features: [
      "Creative direction",
      "Landing page",
      "Responsive design",
      "Two revision rounds",
    ],
  },
  {
    name: "Growth",
    price: "$7,900",
    description:
      "A complete identity and digital experience for growing teams.",
    featured: true,
    features: [
      "Brand strategy",
      "Visual identity",
      "Multi-page website",
      "Motion system",
      "Development handoff",
    ],
  },
  {
    name: "Partner",
    price: "Let’s talk",
    description: "Ongoing senior design support without agency overhead.",
    features: [
      "Priority access",
      "Flexible scope",
      "Weekly delivery",
      "Design and development",
      "Async collaboration",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aexo understood the ambition immediately. They turned a difficult brief into a brand that feels obvious, memorable, and completely ours.",
    name: "Tomas Hall",
    role: "Founder, Notlex",
  },
  {
    quote:
      "The process was unusually clear and the quality never dipped. Every interaction now feels intentional and our conversion rate reflects it.",
    name: "Ana Brooks",
    role: "Marketing Director",
  },
  {
    quote:
      "They combine real strategic thinking with an incredible eye for detail. Aexo became the creative team we wished we had in-house.",
    name: "Marcus Lee",
    role: "CEO, Cognefy",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "We partner with ambitious teams on brand identities, websites, and digital products. Most engagements combine strategy, design, motion, and development.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Focused websites usually take four to eight weeks. Larger brand and product engagements run eight to twelve weeks, depending on scope and feedback cadence.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Our process is remote-first and designed for clear asynchronous collaboration across time zones.",
  },
  {
    question: "Can you develop the website too?",
    answer:
      "Absolutely. We build production-ready responsive websites and can also collaborate closely with your internal engineering team.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send us a short note about your goals, timing, and budget. We will reply with the right next step and a concise project outline.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    body: "We clarify the challenge, audience, goals, and competitive landscape before a single visual decision is made.",
  },
  {
    number: "02",
    title: "Define",
    body: "We turn the findings into a focused creative direction, structure, and system the whole team can align around.",
  },
  {
    number: "03",
    title: "Design",
    body: "We explore, test, and refine the identity and experience with motion and responsive behavior considered from day one.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "We build, polish, document, and launch a durable digital system ready to perform in the real world.",
  },
];
