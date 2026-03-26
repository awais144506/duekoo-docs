import { GraduationCap, Briefcase, Heart, Globe } from "lucide-react";

export const AUDIENCE_DATA = {
  title: "Target Audience",
  subtitle: "Identifying the Primary User Segments and Their Specific Verbal Requirements.",
  abstract: `Duekoo is designed for non-native German learners who have already 
  attained basic grammatical knowledge but struggle with 'Verbal Integration' 
  within the DACH region (Germany, Austria, Switzerland).`,
  
  segments: [
    {
      label: "Academic",
      title: "International Students",
      description: "Individuals enrolled in German universities (Studienkolleg or Degree programs) who need to navigate academic seminars, administrative offices, and student life.",
      needs: ["University Enrollment", "Studentenwerk Navigation", "Seminar Participation"]
    },
    {
      label: "Professional",
      title: "Skilled Workers & Expats",
      description: "Qualified professionals (Engineers, Healthcare, Tech) moving to Germany on a Blue Card or Work Visa who must communicate effectively in corporate environments.",
      needs: ["Workplace Integration", "Technical Discussions", "Colleague Rapport"]
    },
    {
      label: "Social",
      title: "Family Reunification",
      description: "Spouses and family members joining their partners in Germany, requiring functional language for daily logistics and community belonging.",
      needs: ["Daily Errands", "Medical Appointments", "Social Networking"]
    }
  ]
};