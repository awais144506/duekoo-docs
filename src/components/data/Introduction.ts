import { Zap, Target, Globe } from "lucide-react";

export const INTRO_DATA = {
  title: "The Duekoo Paradigm",
  subtitle: "Bridging the gap between linguistic theory and verbal confidence.",
  description: `Duekoo is a specialized technical ecosystem designed for non-native speakers 
  targeting the German job market. Unlike traditional platforms that focus on passive 
  vocabulary, Duekoo prioritizes "Active Verbal Roleplay" using advanced speech-to-text 
  validation and bigram similarity scoring.`,
  
  highlights: [
    {
      icon: Target,
      label: "Mission",
      value: "Zero-Friction Verbal Mastery",
      description: "To enable students to speak German in real-world professional scenarios from Day 1."
    },
    {
      icon: Zap,
      label: "Core Innovation",
      value: "Vocal Feedback Loop",
      description: "Proprietary normalization and similarity algorithms for real-time speech assessment."
    },
    {
      icon: Globe,
      label: "Market Focus",
      value: "DACH Region Integration",
      description: "Specifically tailored for the 1.2M+ expats entering Germany annually for study and work."
    }
  ],

  philosophy: {
    title: "Engineering Philosophy",
    content: `We believe that language learning is a technical challenge, not just a memory task. 
    By treating conversation as a series of 'Validated Inputs', we provide the student with 
    the same instant feedback loop a developer gets when compiling code.`
  }
};