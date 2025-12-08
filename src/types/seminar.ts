export interface Seminar {
    id: number;
    name: string;
    companyName: string;
    companyLink: string | null;
    companyImage: string | null;
    location: string | null;
    startDate: Date;
    endDate: Date | null;
    description: string | null;
    showDates?: boolean;
    certificate?: string | null;
    showInOverview?: boolean;
}