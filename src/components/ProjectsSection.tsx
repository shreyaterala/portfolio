"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";

const CATEGORIES = [
    "All",
    "Robotics & Controls",
    "Haptics & Assistive Tech",
    "Mechatronics & Design",
    "Machine Learning",
] as const;

interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const filteredCategories =
        activeCategory === "All"
            ? CATEGORIES.filter((c) => c !== "All")
            : [activeCategory];

    const handleTabClick = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <section id="projects" className="py-24 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-end justify-between mb-10">
                <h2 className="text-4xl font-bold text-ink tracking-tight">
                    Projects
                </h2>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest hidden md:block">
                    Index 2020 — 2026
                </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-14">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleTabClick(category)}
                        className={`
                            px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest
                            border transition-all duration-300 cursor-pointer
                            ${activeCategory === category
                                ? "bg-ink text-paper border-ink shadow-lg shadow-slate-900/10"
                                : "bg-white/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-ink hover:text-ink"
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grouped Project Sections */}
            {filteredCategories.map((category) => {
                const categoryProjects = projects.filter(
                    (p) => p.category === category
                );
                if (categoryProjects.length === 0) return null;

                return (
                    <div
                        key={category}
                        className="mb-16 last:mb-0 animate-in fade-in duration-500"
                    >
                        {/* Category Heading */}
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-2xl font-bold text-ink tracking-tight whitespace-nowrap">
                                {category}
                            </h3>
                            <div className="h-px flex-1 bg-slate-200/70 dark:bg-slate-700/70" />
                            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap">
                                {categoryProjects.length}{" "}
                                {categoryProjects.length === 1
                                    ? "project"
                                    : "projects"}
                            </span>
                        </div>

                        {/* Project Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/project/${project.id}`}
            className="group relative bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 flex flex-col"
        >
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 pointer-events-none z-10" />

            <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-full bg-white dark:bg-slate-900">
                        {project.meta.split("|")[0].trim()}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>

                {project.summary && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                        {project.summary}
                    </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies?.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="text-[10px] md:text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-5 text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-accent transition-colors duration-300 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                        View Project
                        <svg
                            className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-ink transition-colors z-20"
                            aria-label="View on GitHub"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </Link>
    );
}

