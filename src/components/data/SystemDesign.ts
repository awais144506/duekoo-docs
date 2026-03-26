import { Network, Share2, Shield, Zap } from "lucide-react";

export const DESIGN_DATA = {
  title: "System Architecture",
  subtitle: "High-Level Design, Data Flow, and Algorithmic Validation Logic.",
  abstract: `Duekoo utilizes a decoupled Full-Stack Architecture. The system 
  leverages Next.js for edge-rendered frontend performance and NestJS for 
  structured, modular backend logic, ensuring a scalable and type-safe 
  request-response lifecycle.`,
  
  components: [
    {
      label: "Frontend Layer",
      title: "Next.js 15 & Client Logic",
      description: "Handles the Web Speech API interface, local state management for level switching, and immediate UI feedback. It interacts with the backend via a type-safe REST API."
    },
    {
      label: "Processing Layer",
      title: "Normalization & Similarity Engine",
      description: "A specialized service that cleans user input (removing filler words and casing) and applies a Bigram Similarity algorithm to compare spoken input against the target lesson string."
    },
    {
      label: "Persistence Layer",
      title: "Prisma & PostgreSQL",
      description: "Manages the relational data integrity. It stores user progress using a composite unique key to ensure that a 'Part' is only marked completed once per user session."
    }
  ],

  logic: {
    title: "Validation Workflow",
    steps: [
      "User triggers Microphone (Web Speech API).",
      "Raw Transcript is sent to the Normalization Service.",
      "Numbers and Punctuation are converted to standard German text.",
      "Bigram Similarity Score is calculated (Threshold: >80%).",
      "If Valid, a PATCH request updates the UserProgress table via Prisma."
    ]
  }
};