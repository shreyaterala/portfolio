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
        <section id="projects" className="py-24 border-t border-slate-200/50">
            <div className="flex items-end justify-between mb-10">
                <h2 className="text-4xl font-bold text-ink tracking-tight">
                    Projects
                </h2>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden md:block">
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
                                ? "bg-ink text-white border-ink shadow-lg shadow-slate-900/10"
                                : "bg-white/50 text-slate-500 border-slate-200 hover:border-ink hover:text-ink"
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
                            <div className="h-px flex-1 bg-slate-200/70" />
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                {categoryProjects.length}{" "}
                                {categoryProjects.length === 1
                                    ? "project"
                                    : "projects"}
                            </span>
                        </div>

                        {/* Project Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryProjects.map((project) => (
                                <Link
                                    href={`/project/${project.id}`}
                                    key={project.id}
                                    className="group relative bg-white/50 border border-slate-200/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
                                >
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 pointer-events-none z-10" />

                                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-[10px] font-mono text-accent uppercase tracking-wider border border-slate-200 px-2 py-1 rounded-full bg-white">
                                                {project.meta
                                                    .split("|")[0]
                                                    .trim()}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.technologies
                                                ?.slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-[10px] md:text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                        </div>

                                        <div className="flex items-center gap-1.5 mt-5 text-xs font-mono text-slate-400 group-hover:text-accent transition-colors duration-300 uppercase tracking-widest">
                                            <span>View Project</span>
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
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
