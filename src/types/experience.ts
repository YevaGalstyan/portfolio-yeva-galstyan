import { TechStackEnum } from "./techStack";

export interface Experience {
    id: number;
    title: string;
    description: string | null;
    companyTitle: string | null;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    companyImage: string | null;
    companyLink: string | null;
    techstack: TechStackEnum[] | null;
    responsibilities: string[];
}