import { MousePointer2, Mic, BarChart, Unlock } from "lucide-react";

export const USER_GUIDE_DATA = {
  title: "User Documentation",
  subtitle: "A Comprehensive Guide to Navigating the Duekoo Learning Ecosystem.",
  abstract: `This guide outlines the end-to-end user journey, from initial 
  authentication via Magic Link to the completion of advanced verbal 
  simulations. It is designed to ensure a zero-friction onboarding experience.`,
  
  steps: [
    {
      label: "Phase 01",
      title: "Authentication & Clearance",
      description: "Users enter their professional email to request access. Upon authorization, a secure Magic Link is dispatched. Clicking this link establishes a stateless JWT session, granting immediate access to the curriculum.",
      action: "Check your inbox for the 'Duekoo Access Key'."
    },
    {
      label: "Phase 02",
      title: "Proficiency Level Selection",
      description: "Upon entry, the user selects their target proficiency level (A1, A2, or B1). The system dynamically updates the modules and vocabulary sets based on this selection.",
      action: "Use the toggle buttons in the top-left corner of the dashboard."
    },
    {
      label: "Phase 03",
      title: "Active Verbal Interaction",
      description: "Within a module, the user encounters a 'Part' (a specific sentence or dialogue). The user must click the microphone icon and speak the German phrase clearly.",
      action: "Grant browser microphone permissions when prompted."
    },
    {
      label: "Phase 04",
      title: "Real-time Feedback & Mastery",
      description: "The system processes the audio and provides an instant similarity score. A score of 80% or higher marks the 'Part' as completed, updating the progress bar and unlocking the next sequence.",
      action: "Aim for the 'Grün' (Green) status indicator."
    }
  ]
};