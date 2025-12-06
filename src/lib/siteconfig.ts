export type NavItem = {
    href: string
    label: string
    description?: string
    children?: NavItem[]
}

export type SiteConfig = {
    name: string
    links: {
        repoGithub: string
        github: string
        linkedIn: string
        cv: string
    }
    mail: string
    navItems: NavItem[]
}

export const siteConfig: SiteConfig = {
    name: "YG/Portfolio",
    links: {
        repoGithub: "https://github.com/YevaGalstyan/portfolio-yeva-galstyan",
        github: "https://github.com/YevaGalstyan",
        linkedIn: "https://www.linkedin.com/in/yeva-galstyan/",
        cv: "https://jrjiiflokgzzwuboodhp.supabase.co/storage/v1/object/public/cv-file/CV_Yeva_Galstyan.pdf",
    },
    mail: "eva.gal0908@gmail.com",
    navItems: [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/experience",
            label: "Experience"
        },
        {
            href: "/education",
            label: "Education"
        },

        {
            href: "/projects",
            label: "Projects"
        },
        {
            href: "",
            label: "Extra",
            children: [
                 {
                    href: "/trainings",
                    label: "Trainings",
                    description: "Completed programs and certifications"
                },
                {
                    href: "/memberships",
                    label: "Memberships",
                    description: "Professional and academic organizations"
                },
                {
                    href: "/seminars",
                    label: "Seminars",
                    description: "Workshops and seminars I've attended"
                }
            ]
        },
        {
            href: "/contact",
            label: "Contact"
        },
    ],
}