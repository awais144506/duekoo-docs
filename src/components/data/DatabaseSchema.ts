import { Database, Table, Key, Link } from "lucide-react";

export const SCHEMA_DATA = {
  title: "Database Architecture",
  subtitle: "Relational Schema Design and Data Persistence Strategy.",
  abstract: `The Duekoo database is architected using a Normalized Relational 
  Model in PostgreSQL. The schema is designed to support multi-level 
  curriculum structures and granular user progress tracking with strict 
  referential integrity ensured via Prisma ORM.`,
  
  models: [
    {
      name: "User",
      description: "Core identity table managing authentication and authorization levels.",
      fields: ["id", "email", "name", "role", "whitelistStatus"]
    },
    {
      name: "Course / Section / Module",
      description: "The hierarchical curriculum tree. Courses (A1-B1) contain Sections, which house individual Modules.",
      fields: ["id", "title", "slug", "parentId", "order"]
    },
    {
      name: "Part",
      description: "The atomic unit of learning (e.g., a specific German sentence or vocabulary drill).",
      fields: ["id", "moduleId", "content", "translation", "type"]
    },
    {
      name: "PartStatus",
      description: "The many-to-many join table tracking progress. It utilizes a composite unique index for O(1) status lookups.",
      fields: ["userId", "partId", "status", "updatedAt"]
    }
  ],

  constraints: [
    {
      title: "Composite Unique Index",
      logic: "@@unique([userId, partId])",
      reason: "Ensures that a user can only have one status record per learning part, preventing duplicate progress entries."
    },
    {
      title: "Cascade Deletion",
      logic: "onDelete: Cascade",
      reason: "Maintains database cleanliness by automatically removing progress records if a User or Part is deleted."
    }
  ]
};