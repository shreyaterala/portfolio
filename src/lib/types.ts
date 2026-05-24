export interface HeadlineMetric {
    value: string;
    label: string;
}

export interface Project {
    id: string;
    title: string;
    meta: string;
    image: string;
    category: string;
    technologies: string[];
    content: string;
    summary?: string;
    features?: string[];
    takeaways?: string[];
    headlineMetrics?: HeadlineMetric[];
    myContribution?: string;
    githubUrl?: string;
    featured?: boolean;
}
