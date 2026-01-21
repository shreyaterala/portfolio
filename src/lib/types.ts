export interface Project {
    id: string;
    title: string;
    meta: string;
    image: string;
    technologies: string[];
    content: string;
    summary?: string;
    features?: string[];
    takeaways?: string[];
}
