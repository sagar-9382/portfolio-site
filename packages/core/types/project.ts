import { LucideIcon } from "lucide-react";
export interface Project {
  name: string;
  category: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color: string;
  note: string;
}
