import {
  AudioLines,
  Cloud,
  Code2,
  Database,
  HeartPulse,
  Layers3,
  Leaf,
  Moon,
  ShoppingBag,
} from "lucide-react";
import { Link } from "../types/link";
import { Project } from "../types/project";
import { skill } from "../types/skil";

export const projects: Project[] = [
  {
    name: "DrChronicDisease",
    category: "HEALTHCARE",
    description:
      "A complete healthcare website, independently built from the ground up at ConstantMD.",
    url: "https://www.drchronicdisease.com/",
    icon: HeartPulse,
    color: "sage",
    note: "Independent development",
  },
  {
    name: "MusicDhyan",
    category: "MUSIC & WELLNESS",
    description:
      "A dedicated space for music and mindfulness. Independently developed at ConstantMD.",
    url: "https://musicdhyan.com/",
    icon: AudioLines,
    color: "lavender",
    note: "Independent development",
  },
  {
    name: "Nocturnists",
    category: "HEALTHCARE",
    description:
      "A healthcare web presence, delivered independently with end-to-end responsibility.",
    url: "https://nocturnists.com/",
    icon: Moon,
    color: "blue",
    note: "Independent development",
  },
  {
    name: "HateemTai",
    category: "E-COMMERCE",
    description:
      "Contributed to the development of an e-commerce platform with the ConstantMD team.",
    url: "https://hateemtai.com/",
    icon: ShoppingBag,
    color: "peach",
    note: "Team contribution",
  },
  {
    name: "StitchGreen",
    category: "SHOPIFY",
    description:
      "Keeping a Shopify storefront running smoothly through day-to-day technical operations.",
    url: "https://stitchgreen.com/",
    icon: Leaf,
    color: "olive",
    note: "Storefront management",
  },
];

export const skills: skill[] = [
  {
    icon: Code2,
    name: "Backend",
    detail: "A solid foundation.",
    items: ["C#", "ASP.NET Core", "EF Core", "GraphQL"],
  },
  {
    icon: Layers3,
    name: "Frontend",
    detail: "Thoughtful interfaces.",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Database,
    name: "Data",
    detail: "Built around the business.",
    items: ["SQL Server", "MySQL"],
  },
  {
    icon: Cloud,
    name: "Delivery",
    detail: "All the way to production.",
    items: ["Azure", "Docker", "Kubernetes", "Rancher", "GitHub Actions"],
  },
];

export const links: Link[] = [
  { id: "work", label: "Selected work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
