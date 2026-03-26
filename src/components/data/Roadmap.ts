import { Milestone, Rocket, Globe, Brain } from "lucide-react";

export const ROADMAP_DATA = {
  title: "Future Roadmap",
  subtitle: "Strategic Evolution and Long-term Architectural Scaling.",
  abstract: `The Duekoo roadmap is designed to transition the platform from a 
  high-fidelity practice tool to a comprehensive AI-driven linguistic 
  ecosystem. Our focus remains on 'Verbal-First' integration for 
  the DACH region.`,
  
  phases: [
    {
      id: "PHASE-01",
      label: "Q3 2026",
      title: "Enhanced Intelligence",
      goals: [
        "Integration of Whisper AI for superior speech-to-text accuracy in noisy environments.",
        "Adaptive Difficulty Algorithms that adjust lesson complexity based on user success rates.",
        "Expansion of the B1 Curriculum to include technical workplace scenarios (IT & Healthcare)."
      ]
    },
    {
      id: "PHASE-02",
      label: "Q4 2026",
      title: "Social & Peer Learning",
      goals: [
        "Peer-to-Peer 'Roleplay Rooms' using WebRTC for real-time synchronized dialogue.",
        "Global Leaderboards and Achievement Systems to increase daily user retention.",
        "Automated Feedback Reports providing phonetic breakdown of common pronunciation errors."
      ]
    },
    {
      id: "PHASE-03",
      label: "2027",
      title: "Ecosystem Expansion",
      goals: [
        "Native Mobile Applications (iOS/Android) using React Native for offline practice.",
        "B2/C1 Professional Certifications modules for high-level corporate leadership.",
        "Enterprise API for language schools to track student verbal progress remotely."
      ]
    }
  ],

  vision: {
    title: "The Ultimate Goal",
    text: `To become the standard technical bridge for global talent entering 
    Germany, ensuring that every professional can communicate with confidence 
    and precision from their first day in the country.`
  }
};