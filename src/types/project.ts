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
}

export enum TechStackEnum {
  Angualar = "Angular",
  TypeScript = "Typescript",
  Sass = "Sass",
  Figma = "Figma",

  Azure = "Azure",
  React = "React",
  Node = "Node",
  PostgreSQL = "PostgreSQL",
}