import { JSX } from "react";

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string | null;
  endDate: Date | null;
  startDate: Date;
  githubLink: string | null;
  useDays: boolean;
  techStack: TechStack[] | null;
}

export enum TechStack {
  Angualar = "Angular",
  TypeScript = "TypeScript",
  Azure = "Azure",
  React = "React",
  Node = "Node",
  PostgreSQL = "PostgreSQL",
}

export const techIcons: Record<string, JSX.Element> = {
  // Angular: <SiAngular className="w-4 h-4" />,
  // TypeScript: <SiTypescript className="w-4 h-4" />,
  // Azure: <SiMicrosoftazure className="w-4 h-4" />,
  // React: <SiReact className="w-4 h-4" />,
  // Node: <SiNodedotjs className="w-4 h-4" />,
  // PostgreSQL: <SiPostgresql className="w-4 h-4" />,
};