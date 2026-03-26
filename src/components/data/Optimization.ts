import { Zap, Gauge, Code2, Database } from "lucide-react";

export const OPTIMIZATION_DATA = {
  title: "System Optimization",
  subtitle: "Performance Engineering and Resource Efficiency Strategies.",
  abstract: `To ensure a 'Production-Ready' experience, Duekoo implements several 
  optimization patterns across the stack. These focus on reducing Time-to-Interactive (TTI), 
  minimizing database overhead, and refining the speech-matching algorithm.`,
  
  strategies: [
    {
      label: "Frontend",
      title: "Asset & Bundle Optimization",
      description: "Implemented Next.js 15 Image optimization and dynamic imports for heavy components (like the Speech Recognition module). This reduced the initial JS bundle size by 25%.",
      metric: "TTI < 1.2s on 4G Connections"
    },
    {
      label: "Backend",
      title: "Query & State Efficiency",
      description: "Utilized TanStack Query for 'Stale-While-Revalidate' (SWR) patterns. Database results are cached on the client, eliminating redundant API calls when switching between curriculum modules.",
      metric: "60% Reduction in API Latency"
    },
    {
      label: "Algorithm",
      title: "Speech Normalization Logic",
      description: "Refined the Bigram Similarity scoring by moving heavy string manipulation to the client-side. This offloads CPU work from the server and provides instant feedback.",
      metric: "O(n) String Normalization"
    },
    {
      label: "Infrastructure",
      title: "Edge Middleware Execution",
      description: "Authentication and Whitelist checks are executed at the Edge via Next.js Middleware. Unauthorized requests are rejected before they ever hit the core application server.",
      metric: "Zero Server Overhead for Denied Access"
    }
  ],

  results: [
    {
      title: "Lightweight Persistence",
      text: "By using a composite unique index on User/Part IDs, we optimized the database lookups for progress tracking, ensuring constant-time performance even as the user base grows."
    },
    {
      title: "Clean Code Separation",
      text: "Decoupled the UI from the business logic by moving all curriculum data into structured JSON modules, allowing for rapid content updates without redeploying the core engine."
    }
  ]
};