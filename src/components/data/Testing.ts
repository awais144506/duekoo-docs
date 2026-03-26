import { TestTube, CheckCircle, Bug, Microscope } from "lucide-react";

export const TESTING_DATA = {
  title: "Testing Strategy",
  subtitle: "Quality Assurance, Algorithmic Validation, and Reliability Protocols.",
  abstract: `The Duekoo testing suite is designed to ensure the integrity of the 
  verbal feedback loop. By combining automated unit tests for core logic with 
  end-to-end (E2E) simulation, we maintain a regression-free environment for 
  rapid content deployment.`,
  
  suites: [
    {
      id: "TST-01",
      label: "Unit Testing",
      title: "Similarity Algorithm Validation",
      description: "Rigorous testing of the 'normalizeGermanSpeech' and 'bigramSimilarity' functions. We use mock datasets of common German speech errors to ensure the threshold scoring remains consistent.",
      tool: "Vitest / Jest"
    },
    {
      id: "TST-02",
      label: "Integration",
      title: "API & Persistence Testing",
      description: "Verifying the communication between NestJS controllers and the PostgreSQL database. This ensures that progress updates (PATCH requests) are correctly persisted and unique constraints are enforced.",
      tool: "Supertest / Prisma Mock"
    },
    {
      id: "TST-03",
      label: "E2E Testing",
      title: "User Journey Simulation",
      description: "Simulating the full learner flow: Login -> Level Selection -> Speech Input -> Progress Update. This validates that the frontend state correctly reflects the backend response.",
      tool: "Playwright"
    },
    {
      id: "TST-04",
      label: "Manual / QA",
      title: "Phonetic Edge-Case Review",
      description: "Manual verification of speech-to-text accuracy across different German accents (High German vs. Dialects) to calibrate the global similarity threshold.",
      tool: "Manual Beta Review"
    }
  ],

  coverage: [
    {
      title: "Logic Coverage",
      description: "100% coverage of utility functions responsible for string normalization and similarity calculation."
    },
    {
      title: "Error Handling",
      description: "Validation of system behavior during API timeouts or microphone permission denials."
    }
  ]
};