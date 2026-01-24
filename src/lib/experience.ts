export interface ExperienceItem {
    id: string;
    institution: string;
    role: string;
    date: string;
    type: 'education' | 'work';
    accomplishments?: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        id: "jhu",
        institution: "Johns Hopkins University",
        role: "M.S.E. in Robotics",
        date: "Expected Dec 2026",
        type: "education"
    },
    {
        id: "amazon",
        institution: "Amazon Robotics",
        role: "Hardware Engineering Co-op",
        date: "Jan 2025 - June 2025",
        type: "work",
        accomplishments: [
            "Designed and benchmarked a servo-pneumatic piston with precise position control for future development.",
            "Implemented dresspack routing for power/signal along the robotic arm to the End-of-Arm-Tooling (EoAT).",
            "Fabricated quick-turn prototypes to validate key design decisions and mechanical direction.",
            "Analyzed robot collision modes to derive impact loading requirements for future EoAT designs."
        ]
    },
    {
        id: "gt",
        institution: "Georgia Institute of Technology",
        role: "B.S. Mechanical Engineering",
        date: "Dec 2024",
        type: "education"
    },
    {
        id: "rockwell",
        institution: "Rockwell Automation",
        role: "Mechanical Engineering Intern",
        date: "Apr 2023 - May 2025",
        type: "work",
        accomplishments: [
            "Led Ansys Icepak thermal simulations to optimize cooling efficiency and component lifetime.",
            "Developed a heatsink optimization method that reduced component cost while maintaining thermal performance.",
            "Conducted thermal and airflow testing to define fan specifications and optimal component layout.",
            "Designed and 3D-printed custom manufacturing fixtures to prevent electrical component damage.",
            "Created assembly instructions with torque specs to streamline handoff between mechanical and industrialization teams.",
            "Generated simplified 3D representations of 3000+ drive configurations, estimated to increase sales by $21M.",
            "Researched UL IP54 standards to design a compliant protective cover using Creo Parametric."
        ]
    },
    {
        id: "siemens",
        institution: "Siemens",
        role: "Software Development Intern",
        date: "July 2022 - Oct 2022",
        type: "work",
        accomplishments: [
            "Collaborated on maintaining and improving the Xcelerator Cloud Platform administration app.",
            "Utilized Git for version control and incremental feature development.",
            "Executed software development tasks within an Agile/Scrum environment."
        ]
    }
];
