import { CreditCard, Zap, ShieldCheck, Database } from "lucide-react";

export const COST_DATA = {
  title: "Cost Analysis",
  subtitle: "Resource Optimization and Cloud Infrastructure Economics.",
  abstract: `The Duekoo infrastructure is architected for 'Zero-Waste' scaling. 
  By prioritizing native browser capabilities and high-performance free tiers, 
  the system maintains a monthly operational cost of $0.00 for the current MVP 
  while supporting up to 1,000 active monthly users.`,
  
  breakdown: [
    {
      category: "Hosting & Compute",
      provider: "Vercel (Hobby)",
      cost: "$0.00",
      strategy: "Leveraging Next.js Edge Functions to minimize cold starts and eliminate the need for an always-on dedicated server."
    },
    {
      category: "Speech Engine",
      provider: "Web Speech API",
      cost: "$0.00",
      strategy: "Using native browser-side processing instead of paid APIs (like Whisper or Google Cloud STT), saving an estimated $0.06 per minute of audio."
    },
    {
      category: "Database",
      provider: "Neon / Supabase",
      cost: "$0.00",
      strategy: "Utilizing managed PostgreSQL with 'auto-suspend' features that keep costs at zero during periods of inactivity while maintaining ACID compliance."
    },
    {
      category: "Authentication",
      provider: "Resend",
      cost: "$0.00",
      strategy: "3,000 monthly transactional emails allow for secure Magic Link auth without the cost of a dedicated Identity Provider (IdP)."
    }
  ],

  strategicWins: [
    {
      title: "Client-Side Processing",
      description: "By offloading speech recognition to the user's hardware, we eliminated 100% of the server-side CPU overhead and API latency costs."
    },
    {
      title: "Stateless Auth Logic",
      description: "Implementing JWT-based sessions reduced the number of database read-calls by 40% compared to traditional session-based storage."
    }
  ]
};