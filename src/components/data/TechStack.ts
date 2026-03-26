import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export const TECH_STACK_DATA = {
  title: "Technical Stack",
  subtitle: "A Modular, Full-Stack TypeScript Ecosystem Built for Performance and Scale.",
  abstract: `The Duekoo architecture is centered around a unified TypeScript 
  environment to ensure type safety across the entire request-response lifecycle. 
  The stack is chosen to minimize latency in speech validation and maximize 
  developer productivity.`,
  
  categories: [
    {
      label: "Frontend",
      title: "User Interface & Experience",
      items: [
        { name: "Next.js 15", reason: "Utilizing App Router for optimized RSC (React Server Components) and lightning-fast navigation." },
        { name: "Tailwind CSS", reason: "Utility-first styling to maintain a consistent, minimalist design system without CSS bloat." },
        { name: "Shadcn UI", reason: "Accessible, unstyled components that allow for complete brand customization and consistency." }
      ]
    },
    {
      label: "Backend",
      title: "Logic & API Orchestration",
      items: [
        { name: "NestJS", reason: "A progressive Node.js framework providing an out-of-the-box modular architecture for clean code separation." },
        { name: "TypeScript", reason: "Strict typing to catch errors at compile-time and provide clear data contracts for the frontend." },
        { name: "Web Speech API", reason: "Native browser integration for real-time speech-to-text validation without third-party latency." }
      ]
    },
    {
      label: "Persistence",
      title: "Data & State Management",
      items: [
        { name: "PostgreSQL", reason: "Reliable relational database for managing complex User-Part-Status relationships." },
        { name: "Prisma ORM", reason: "Type-safe database access with automated migrations and an intuitive schema-driven workflow." },
        { name: "TanStack Query", reason: "Robust server-state management for seamless data fetching, caching, and synchronization." }
      ]
    },
    {
      label: "Infrastructure",
      title: "Deployment & Security",
      items: [
        { name: "Vercel", reason: "Global edge network deployment for minimal latency and integrated CI/CD pipelines." },
        { name: "NextAuth / JWT", reason: "Secure, stateless authentication with whitelist-based authorization logic." },
        { name: "Resend", reason: "Modern transactional email delivery for secure Magic Link authentication." }
      ]
    }
  ]
};