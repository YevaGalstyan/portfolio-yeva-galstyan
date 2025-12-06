export interface Education { 
    id: number;
    degree: string;
    school_name: string;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    GPA: string | null;
    school_image: string | null;
    school_link: string | null;
    description?: string;
    relevant_courses: string[];
}