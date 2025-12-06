import { TechStackEnum } from "./techStack";

export interface Experience {
    id: number;
    title: string;
    description: string | null;
    company_title: string | null;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    company_image: string | null;
    company_link: string | null;
    techstack: TechStackEnum[] | null;
    responsibilities: string[];
}