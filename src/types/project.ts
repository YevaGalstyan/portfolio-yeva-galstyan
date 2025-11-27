import { TechStackEnum } from "./techStack";

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
