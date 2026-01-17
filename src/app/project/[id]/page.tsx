import { Project } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import parse, { DOMNode, domToReact } from "html-react-parser";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

interface ProjectPageProps {
    params: {
        id: string;
    };
}

// Generate static params if you want static export
export async function generateStaticParams() {
    const projects = await Project.findAll();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = await Project.findById(params.id);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Shrey.Sys`,
        description: project.meta,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await Project.findById(params.id);

    if (!project) {
        notFound();
    }

    // Parse meta string (e.g. "Oct 2025 - Dec 2025 | Algorithm Design")
    const [dateRange, role] = project.meta.split("|").map((s) => s.trim());

    const parseOptions = {
        replace: (domNode: DOMNode) => {
            if (domNode.type === 'text') {
                // If text contains LaTeX delimiters, render with Latex component
                if (domNode.data && (domNode.data.includes('$') || domNode.data.includes('\\'))) {
                    return <Latex>{domNode.data}</Latex>;
                }
            }
        }
    };

    return (
        <div className="min-h-screen bg-paper pb-24">
            {/* Top spacing for fixed nav */}
            <div className="h-24"></div>

            <div className="max-w-4xl mx-auto px-6">
                {/* Navigation Breadcrumb */}
                <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest hover:text-ink transition-colors mb-12">
                    <span>← BACK</span>
                </Link>

                {/* Project Header Block */}
                <header className="mb-16 border-b border-slate-200/50 pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-ink tracking-tight leading-none">
                            {project.title}
                        </h1>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-sage rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Archived</span>
                        </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 border border-slate-200/50 rounded-lg">
                        <div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">Timeline</span>
                            <p className="text-sm font-medium text-ink">{dateRange}</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">Role & Context</span>
                            <p className="text-sm font-medium text-ink">{role}</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">Core Tech</span>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech) => (
                                    <span key={tech} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="flex flex-col gap-12">
                    <article className="prose-ink">
                        {/* Using html-react-parser to render HTML string while enabling React components (Latex) */}
                        {parse(project.content, parseOptions)}
                    </article>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="max-w-4xl mx-auto px-6 mt-24 pt-12 border-t border-slate-200/50 flex justify-between items-center">
                <Link href="/#projects" className="text-xs font-mono text-slate-400 uppercase tracking-widest hover:text-ink transition-colors">
                    BACK
                </Link>
                <span className="text-[10px] font-mono text-slate-300">End of File</span>
            </div>
        </div>
    );
}
