"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { skillGroups, Skill } from "@/lib/skills";
import { experienceData, ExperienceItem } from "@/lib/experience";

interface SkillsSectionProps {
    projects: Project[];
}

interface SkillWithMatches {
    skill: Skill;
    projects: Project[];
    experiences: ExperienceItem[];
}

function matchProjects(skill: Skill, projects: Project[]): Project[] {
    const lowerAliases = skill.aliases.map((a) => a.toLowerCase());
    return projects.filter((p) =>
        p.technologies?.some((tech) => {
            const t = tech.toLowerCase();
            return lowerAliases.some((alias) => t.includes(alias));
        }),
    );
}

function matchExperiences(skill: Skill): ExperienceItem[] {
    // Experience.skills is curated by exact skill name (not alias), so do
    // direct name match here for fidelity.
    return experienceData.filter(
        (e) => e.type === "work" && e.skills?.includes(skill.name),
    );
}

export default function SkillsSection({ projects }: SkillsSectionProps) {
    const [activeSkill, setActiveSkill] = useState<SkillWithMatches | null>(
        null,
    );

    // Pre-compute matches per group, drop skills with zero matches across
    // both projects AND experiences
    const groups = useMemo(
        () =>
            skillGroups
                .map((g) => ({
                    ...g,
                    skills: g.skills
                        .map((s) => ({
                            skill: s,
                            projects: matchProjects(s, projects),
                            experiences: matchExperiences(s),
                        }))
                        .filter((s) => s.projects.length + s.experiences.length > 0),
                }))
                .filter((g) => g.skills.length > 0),
        [projects],
    );

    return (
        <section
            id="skills"
            className="py-24 border-t border-slate-200/50 dark:border-slate-800/50"
        >
            <div className="flex items-end justify-between mb-10">
                <h2 className="text-4xl font-bold text-ink tracking-tight">
                    Skills
                </h2>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest hidden md:block">
                    Click any skill to see where it was used
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {groups.map((group) => (
                    <div key={group.axis}>
                        <div className="mb-5">
                            <h3 className="text-xl font-bold text-ink tracking-tight">
                                {group.axis}
                            </h3>
                            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                                {group.blurb}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map(({ skill, projects: pMatches, experiences: eMatches }) => {
                                const totalCount = pMatches.length + eMatches.length;
                                return (
                                    <button
                                        key={skill.name}
                                        type="button"
                                        onClick={() =>
                                            setActiveSkill({ skill, projects: pMatches, experiences: eMatches })
                                        }
                                        className="group inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-accent hover:text-accent dark:hover:text-accent transition-all"
                                    >
                                        <span>{skill.name}</span>
                                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-accent transition-colors">
                                            ×{totalCount}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Skill detail popover */}
            {activeSkill && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        onClick={() => setActiveSkill(null)}
                    />
                    <div className="relative bg-paper border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setActiveSkill(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            aria-label="Close"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <span className="text-xs font-mono text-accent uppercase tracking-widest mb-2 block">
                            Skill
                        </span>
                        <h3 className="text-2xl font-bold text-ink mb-2">
                            {activeSkill.skill.name}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            {activeSkill.experiences.length > 0 && (
                                <>
                                    Used in {activeSkill.experiences.length} internship
                                    {activeSkill.experiences.length === 1 ? "" : "s"}
                                </>
                            )}
                            {activeSkill.experiences.length > 0 && activeSkill.projects.length > 0 && " and "}
                            {activeSkill.projects.length > 0 && (
                                <>
                                    {activeSkill.experiences.length === 0 && "Demonstrated in "}
                                    {activeSkill.projects.length} project
                                    {activeSkill.projects.length === 1 ? "" : "s"}
                                </>
                            )}
                            .
                        </p>

                        <div className="max-h-80 overflow-y-auto pr-2 space-y-5">
                            {/* Experiences */}
                            {activeSkill.experiences.length > 0 && (
                                <div>
                                    <h4 className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                                        Industry Experience
                                    </h4>
                                    <ul className="space-y-2">
                                        {activeSkill.experiences.map((exp) => (
                                            <li
                                                key={exp.id}
                                                className="flex items-center gap-3 p-3 rounded-lg border border-accent/30 bg-accent/5"
                                            >
                                                <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                                                    <svg
                                                        className="w-5 h-5 text-accent"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm font-bold text-ink line-clamp-1">
                                                        {exp.institution}
                                                    </div>
                                                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider line-clamp-1">
                                                        {exp.role} · {exp.date}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Projects */}
                            {activeSkill.projects.length > 0 && (
                                <div>
                                    <h4 className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                                        Projects
                                    </h4>
                                    <ul className="space-y-2">
                                        {activeSkill.projects.map((p) => (
                                            <li key={p.id}>
                                                <Link
                                                    href={`/project/${p.id}`}
                                                    onClick={() => setActiveSkill(null)}
                                                    className="group flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-accent transition-all"
                                                >
                                                    <img
                                                        src={p.image}
                                                        alt=""
                                                        className="w-10 h-10 rounded-md object-cover border border-slate-100 dark:border-slate-800 flex-shrink-0"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-bold text-ink group-hover:text-accent transition-colors line-clamp-1">
                                                            {p.title}
                                                        </div>
                                                        <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                                            {p.meta.split("|")[0].trim()} · {p.category}
                                                        </div>
                                                    </div>
                                                    <svg
                                                        className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-accent transform group-hover:translate-x-1 transition-all flex-shrink-0"
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
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
