import { AlertCircle, ZapOff, Ghost, MicOff } from "lucide-react";

export const PROBLEM_DATA = {
  title: "Problem Statement",
  subtitle: "The Disconnect Between Academic Certification and Functional Fluency.",
  abstract: `Despite achieving A1-B1 certifications, over 60% of expats in Germany 
  report significant anxiety and 'paralysis' in real-world verbal interactions. 
  Traditional learning systems optimize for passive recognition rather than active production.`,
  
  challenges: [
    {
      icon: Ghost,
      label: "The 'Paper Tiger' Effect",
      title: "Exam-Centric Learning",
      description: "Students spend months mastering grammar rules for multiple-choice exams but lack the 'muscle memory' required for spontaneous dialogue."
    },
    {
      icon: MicOff,
      label: "Vocal Feedback Vacuum",
      title: "Asynchronous Learning",
      description: "Current digital tools (Duolingo/Babbel) prioritize text-input. Without real-time, objective feedback on spoken output, pronunciation errors become 'fossilized'."
    },
    {
      icon: ZapOff,
      label: "Contextual Disconnect",
      title: "The 'Taxi' Scenario Gap",
      description: "Generic lessons fail to simulate high-stakes environments—like explaining a technical issue to a German colleague or navigating a medical emergency."
    }
  ],

  conclusion: {
    title: "The Opportunity",
    text: `Duekoo identifies this 'Fluency Gap' not as a lack of knowledge, but as a lack of safe, 
    iterative verbal practice. The system is architected to transition the user from 
    'Knowing' to 'Acting' through simulated high-frequency roleplay.`
  }
};