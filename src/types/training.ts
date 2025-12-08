import { TechStack } from "./techStack";

export interface Training {
    id: number;
    name: string;
    companyName: string;
    companyLink: string | null;
    companyImage: string | null;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    description: string | null;
    techStack: TechStack[] | null;
    showDates?: boolean;
    certificate?: string | null;
    showInOverview?: boolean;
}