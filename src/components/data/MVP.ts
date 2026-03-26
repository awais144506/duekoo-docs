import { Rocket, CheckCircle2, AlertCircle, Zap } from "lucide-react";

export const MVP_DATA = {
  title: "Current MVP Scope",
  subtitle: "Definition of Core Deliverables and Functional Boundaries for v1.0.",
  abstract: `The Duekoo MVP (Minimum Viable Product) focuses on the 'Critical Path' 
  to verbal fluency: Authenticated access, A1-level curriculum delivery, 
  and real-time speech validation. This release prioritizes core logic stability 
  over secondary social or gamification features.`,
  
  deliverables: [
    {
      id: "MVP-01",
      label: "Core Engine",
      title: "Speech Validation Pipeline",
      description: "Full implementation of the Web Speech API bridge, Bigram Similarity scoring, and string normalization for German phonetic inputs."
    },
    {
      id: "MVP-02",
      label: "Curriculum",
      title: "A1 Foundation Course",
      description: "A complete 'Foundation' level featuring 5 core modules: Greetings, Essential Verbs, Numbers, Family, and Basic Navigation."
    },
    {
      id: "MVP-03",
      label: "Persistence",
      title: "Atomic Progress Tracking",
      description: "Secure database persistence of user progress at the 'Part' level, allowing learners to resume their journey across sessions."
    },
    {
      id: "MVP-04",
      label: "Security",
      title: "Whitelist Authentication",
      description: "Magic-link based auth system that restricts access to authorized recruiters and beta testers via a PostgreSQL-backed whitelist."
    }
  ],

  boundaries: {
    title: "Out of Scope (v1.0)",
    items: [
      "Offline Mode: The current system requires an active internet connection for API sync.",
      "Mobile App: Native iOS/Android builds are deferred in favor of a Responsive Web App (PWA).",
      "Peer Review: Real-time peer-to-peer roleplay is currently simulated via audio prompts."
    ]
  }
};