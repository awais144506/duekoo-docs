import { CheckCircle2, Target, Zap, Shield } from "lucide-react";

export const OBJECTIVES_DATA = {
  title: "Strategic Objectives",
  subtitle: "Defining the Core Milestones for Technical and Educational Success.",
  abstract: `The primary objective of Duekoo is to create a high-fidelity 'Safe Space' 
  for verbal experimentation, ensuring that every user interaction results in 
  quantifiable linguistic improvement.`,
  
  categories: [
    {
      label: "Educational",
      title: "Functional Fluency",
      goals: [
        "Reduce 'Speaking Anxiety' by providing a low-stakes practice environment.",
        "Transition A1-B1 learners from theoretical grammar to situational roleplay.",
        "Ensure 90%+ comprehension of high-frequency professional German phrases."
      ]
    },
    {
      label: "Technical",
      title: "Engineering Excellence",
      goals: [
        "Implement a sub-200ms feedback loop for speech validation.",
        "Develop a robust normalization engine for handling varied accents and numbers.",
        "Maintain a modular architecture that supports rapid scaling of course content."
      ]
    },
    {
      label: "User Experience",
      title: "Engagement & Retention",
      goals: [
        "Create a 'Zero-Configuration' onboarding experience for new learners.",
        "Utilize gamified progress tracking to encourage daily verbal practice.",
        "Provide clear, actionable 'Next Steps' based on real-time performance data."
      ]
    }
  ]
};