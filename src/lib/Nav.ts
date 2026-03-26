import {
  LayoutDashboard,
  Zap,
  Target,
  Flag,
  Users,
  Cpu,
  Star,
  BookOpen,
  DollarSign,
  FileCode,
  Network,
  Database,
  ShieldCheck,
  TestTube,
  Rocket,
  Map
} from "lucide-react";

export const DOCS_NAV = [
  {
    group: "Dashboard",
    items: [
      { title: "System Stats", url: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    group: "Overview",
    items: [
      { title: "Introduction", url: "/introduction", icon: Zap },
      { title: "Problem Statement", url: "/problem", icon: Target },
      { title: "Objectives", url: "/objectives", icon: Flag },
      { title: "Target Audience", url: "/audience", icon: Users },
      { title: "Tools & Technologies", url: "/tech-stack", icon: Cpu },
      { title: "Core Features", url: "/features", icon: Star },
      { title: "User Documentation", url: "/user-guide", icon: BookOpen },
      { title: "Cost Analysis", url: "/cost", icon: DollarSign },
    ],
  },
  {
    group: "Technical",
    items: [
      { title: "Requirements", url: "/requirements", icon: FileCode },
      { title: "System Design", url: "/design", icon: Network },
      { title: "Database Schema", url: "/schema", icon: Database },
      { title: "API Specification", url: "/api", icon: FileCode },
      { title: "Optimization", url: "/optimization", icon: FileCode }, // Added
      { title: "Security", url: "/security", icon: ShieldCheck },
      { title: "Testing Strategy", url: "/testing", icon: TestTube },
    ],
  },
  {
    group: "Growth",
    items: [
      { title: "Current MVP", url: "/mvp", icon: Rocket },
      { title: "Future Roadmap", url: "/roadmap", icon: Map },
    ],
  },
];