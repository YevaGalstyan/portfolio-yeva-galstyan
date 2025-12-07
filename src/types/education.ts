export interface Education { 
    id: number;
    degree: string;
    schoolName: string;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    GPA: string | null;
    schoolImage: string | null;
    schoolLink: string | null;
    description?: string;
    relevantCourses: string[];
}