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
}
