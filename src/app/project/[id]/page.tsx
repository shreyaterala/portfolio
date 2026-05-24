import { ProjectAPI } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import parse, { DOMNode, domToReact } from "html-react-parser";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import AutoplayVideo from "@/components/AutoplayVideo";

interface ProjectPageProps {
    params: {
        id: string;
    };
}

// Generate static params if you want static export
export async function generateStaticParams() {
    const projects = await ProjectAPI.findAll();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = await ProjectAPI.findById(params.id);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Shrey.Sys`,
        description: project.meta,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await ProjectAPI.findById(params.id);

    if (!project) {
        notFound();
    }

    // Parse meta string (e.g. "Oct 2025 - Dec 2025 | Algorithm Design")
    const [dateRange, role] = project.meta.split("|").map((s) => s.trim());

    const parseOptions = {
        replace: (domNode: DOMNode) => {
            if (domNode.type === 'tag' && domNode.name === 'video') {
                return (
                    <AutoplayVideo {...domNode.attribs}>
                        {domToReact(domNode.children as DOMNode[], parseOptions)}
                    </AutoplayVideo>
                );
            }
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
                <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-400 uppercase tracking-widest hover:text-ink transition-colors mb-12">
                    <span>← BACK</span>
                </Link>

                {/* Project Header Block */}
                <header className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-ink tracking-tight leading-none">
                            {project.title}
                        </h1>
                        <div className="flex items-center gap-3">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full hover:border-ink hover:text-ink dark:hover:text-ink hover:bg-white dark:hover:bg-slate-900 transition-all"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                    Source
                                </a>
                            )}
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                <span className="text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">Archived</span>
                            </div>
                        </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 border border-stone-200/50 dark:border-stone-700/50 rounded-lg">
                        <div>
                            <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest block mb-2">Timeline</span>
                            <p className="text-sm font-medium text-ink">{dateRange}</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest block mb-2">Role &amp; Context</span>
                            <p className="text-sm font-medium text-ink">{role}</p>
                            {project.myContribution && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                                    <span className="font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest text-[9px]">My Role:</span>{" "}
                                    {project.myContribution}
                                </p>
                            )}
                        </div>
                        <div>
                            <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest block mb-2">Core Tech</span>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech) => (
                                    <span key={tech} className="text-[10px] bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 px-2 py-1 rounded border border-stone-200 dark:border-stone-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Headline Metrics Strip */}
                {project.headlineMetrics && project.headlineMetrics.length > 0 && (
                    <div className="mb-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {project.headlineMetrics.slice(0, 3).map((m, i) => (
                            <div
                                key={m.label}
                                className={`p-5 rounded-xl border ${
                                    i === 0
                                        ? "bg-accent/5 border-accent/30"
                                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                } ${
                                    i === 2 && (project.headlineMetrics?.length ?? 0) === 3
                                        ? "col-span-2 md:col-span-1"
                                        : ""
                                }`}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-ink font-mono leading-none mb-2">
                                    {m.value}
                                </div>
                                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                    {m.label}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Project Highlights */}
                {(project.summary || (project.features && project.features.length > 0) || (project.takeaways && project.takeaways.length > 0)) && (
                    <div className="mb-8 p-8 bg-stone-50 dark:bg-slate-900/50 rounded-xl border border-stone-200/50 dark:border-slate-700/50">
                        {project.summary && (
                            <div className="mb-8">
                                <h3 className="text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-4">Project Summary</h3>
                                <p className="text-lg text-ink/90 leading-relaxed font-light">{project.summary}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {project.features && project.features.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-ink/80 leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.takeaways && project.takeaways.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-4">Impact & Takeaways</h3>
                                    <ul className="space-y-3">
                                        {project.takeaways.map((takeaway, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-ink/80 leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                <span>{takeaway}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <div className="flex flex-col gap-12">
                    <article className="prose-ink">
                        {/* Using html-react-parser to render HTML string while enabling React components (Latex) */}
                        {parse(project.content, parseOptions)}
                    </article>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="max-w-4xl mx-auto px-6 mt-24 pt-12 border-t border-stone-200/50 dark:border-stone-700/50 flex justify-between items-center">
                <Link href="/#projects" className="text-xs font-mono text-stone-600 dark:text-stone-400 uppercase tracking-widest hover:text-ink transition-colors">
                    BACK
                </Link>
                <span className="text-[10px] font-mono text-stone-300 dark:text-stone-600">End of File</span>
            </div>
        </div>
    );
}
