import { ShieldCheck, Lock, EyeOff, UserCheck } from "lucide-react";

export const SECURITY_DATA = {
  title: "Security & Access",
  subtitle: "Identity Verification, Authorization Logic, and Data Fortification.",
  abstract: `Duekoo employs a 'Zero-Trust' architecture for its administrative and 
  educational documentation. By combining email whitelisting with stateless 
  JWT-based authentication, the system ensures that sensitive curriculum data 
  is only accessible to authorized stakeholders.`,
  
  protocols: [
    {
      id: "SEC-01",
      label: "Authentication",
      title: "Whitelist-Validated Magic Links",
      description: "Access is restricted to a pre-defined list of authorized emails. When a user requests access, the system verifies the email against the PostgreSQL whitelist before dispatching a single-use Magic Link via Resend.",
      logic: "Auth Service -> Whitelist Check -> Token Generation -> Email Dispatch"
    },
    {
      id: "SEC-02",
      label: "Authorization",
      title: "JWT Stateless Sessions",
      description: "Once authenticated, the user receives a JSON Web Token (JWT) stored as a secure, HTTP-only cookie. This ensures that session state is not stored on the server, allowing for horizontal scaling and high performance.",
      logic: "Payload: { userId, role, exp } | Algorithm: HS256"
    },
    {
      id: "SEC-03",
      label: "Middleware",
      title: "Edge-Level Route Protection",
      description: "All requests to the /docs and /dashboard routes are intercepted by Next.js Middleware. The middleware validates the JWT integrity and expiration at the edge before the request reaches the server.",
      logic: "Request -> Middleware Interceptor -> Token Validation -> Proceed/Redirect"
    }
  ],

  fortification: [
    {
      title: "Environment Isolation",
      description: "Critical secrets (API keys, Database URLs, JWT Secrets) are managed via encrypted environment variables, ensuring no sensitive credentials ever touch the version control system (Git)."
    },
    {
      title: "Input Sanitization",
      description: "All user-generated speech transcripts are normalized and sanitized on the client and server to prevent injection attacks and ensure data integrity during similarity scoring."
    }
  ]
};