export interface Project {
  id: number;
  title: string;
  image: string;
  description: string | null;
  endDate: Date | null;
  startDate: Date;
  githubLink: string | null;
  useDays: boolean;
  techstack: TechStackEnum[] | null;
  hasOverview: boolean;
}

export enum TechStackEnum {
  Angualar = "Angular",
  TypeScript = "Typescript",
  Sass = "Sass",
  Figma = "Figma",
  Azure = "Azure",
  AntD = "AntD",
  Analytics = "Analytics",
  ViteJs = "ViteJs",
  Tailwind = "Tailwind",
  Redux = "Redux",
  Mapbox = "Mapbox",

  React = "React",
  Node = "Node",
  PostgreSQL = "PostgreSQL",
}