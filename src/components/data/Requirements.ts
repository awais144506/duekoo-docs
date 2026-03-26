import { Cpu, Shield, Zap, Globe, HardDrive, Smartphone } from "lucide-react";

export const REQUIREMENTS_DATA = {
  title: "Technical Requirements",
  subtitle: "Functional and Non-Functional Specifications for System Integrity.",
  abstract: `The Duekoo system is governed by a set of strict requirements 
  to ensure high-fidelity speech processing and secure data persistence. 
  These specs prioritize 'Low-Latency Feedback' and 'Stateful Reliability'.`,
  
  functional: [
    {
      id: "FR-01",
      title: "Speech Normalization Engine",
      description: "The system must process raw transcriptions from the Web Speech API, removing punctuation and converting numerals to words (e.g., '1' to 'eins') to ensure accurate string comparison."
    },
    {
      id: "FR-02",
      title: "Dynamic Proficiency Orchestration",
      description: "Users must be able to switch between A1, A2, and B1 levels instantly. The system must update the course manifest and progress tracking without a full page reload."
    },
    {
      id: "FR-03",
      title: "Granular Progress Persistence",
      description: "Every 'Part' completion must be recorded in the PostgreSQL database with a unique constraint on (userId, partId) to prevent data duplication."
    }
  ],

  nonFunctional: [
    {
      id: "NFR-01",
      label: "Performance",
      title: "Latent Feedback Loop",
      description: "The time between user speech input and validation output must be sub-200ms to maintain an immersive learning flow."
    },
    {
      id: "NFR-02",
      label: "Security",
      title: "Whitelist Authorization",
      description: "The documentation and admin dashboard must be protected by a server-side middleware that validates emails against a whitelist prior to granting JWT tokens."
    },
    {
      id: "NFR-03",
      label: "Compatibility",
      title: "Browser-Native Speech",
      description: "The application must support the Web Speech API standards, primarily targeting Chromium-based browsers for initial stability."
    }
  ]
};