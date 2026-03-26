export const API_DATA = {
  title: "API Specification",
  subtitle: "RESTful Interface Definitions and Data Exchange Protocols.",
  abstract: `The Duekoo API is architected as a stateless REST service. 
  It utilizes standard HTTP verbs and JSON payloads to manage curriculum 
  delivery and user progress synchronization, secured via JWT-based 
  Bearer authentication.`,
  
  config: {
    baseUrl: "https://api.duekoo.com/v1",
    auth: "Bearer <JWT_TOKEN>",
    contentType: "application/json"
  },

  endpoints: [
    {
      method: "GET",
      path: "/curriculum",
      description: "Fetches the full hierarchical tree of levels, sections, and modules.",
      response: `{ "data": [ { "id": "uuid", "title": "A1 Foundation", "slug": "a1-foundation" } ] }`
    },
    {
      method: "GET",
      path: "/progress",
      description: "Retrieves the completion status for all parts associated with the authenticated user.",
      response: `{ "userId": "uuid", "completedParts": ["part_01", "part_05"] }`
    },
    {
      method: "PATCH",
      path: "/progress/:partId",
      description: "Updates the status of a specific verbal drill. Triggered after successful speech validation.",
      payload: `{ "status": "COMPLETED", "score": 0.92 }`,
      response: `{ "success": true, "updatedAt": "2026-03-27T..." }`
    },
    {
      method: "POST",
      path: "/auth/magic-link",
      description: "Initiates the whitelist-checked authentication flow and dispatches the access email.",
      payload: `{ "email": "recruiter@company.com" }`,
      response: `{ "message": "Magic link dispatched." }`
    }
  ]
};