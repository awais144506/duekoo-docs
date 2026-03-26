import { Mic2, Layers, LineChart, ShieldCheck, Globe2, MessageSquare } from "lucide-react";

export const FEATURES_DATA = {
  title: "Core Features",
  subtitle: "Functional Specifications and Interactive Logic Modules.",
  abstract: `Duekoo's feature set is engineered to solve 'Verbal Paralysis.' 
  The system architecture focuses on low-latency feedback loops, 
  dynamic content delivery, and objective performance metrics.`,
  
  features: [
    {
      label: "Vocal Logic",
      title: "Real-time Speech Validation",
      description: "A proprietary validation engine that captures user speech via the Web Speech API, normalizes the input (handling numbers/punctuation), and compares it against target strings using Bigram Similarity scoring.",
      technical: "Uses a custom normalization layer to ensure 98% accuracy in German word-matching."
    },
    {
      label: "Content Engine",
      title: "Dynamic Level Orchestration",
      description: "A centralized curriculum manager that allows users to toggle between A1, A2, and B1 proficiency levels. Each level dynamically updates the entire UI, including modules, sections, and progress tracking.",
      technical: "State-driven data fetching using TanStack Query for zero-refresh level switching."
    },
    {
      label: "Analytics",
      title: "Granular Progress Persistence",
      description: "A relational tracking system that monitors completion at the 'Part' level. Users see real-time percentage updates as they complete specific verbal drills.",
      technical: "Utilizes Prisma's @@unique constraints to manage User-Part-Status relationships with O(1) lookups."
    },
    {
      label: "Simulation",
      title: "Contextual Roleplay Modules",
      description: "High-stakes situational simulations (e.g., 'At the Ausländerbehörde') that require the user to respond verbally to audio prompts to unlock the next sequence.",
      technical: "Conditional rendering logic based on boolean validation of speech input."
    }
  ]
};