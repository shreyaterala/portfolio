"use client";

import React, { useState } from 'react';
import { experienceData, ExperienceItem } from '@/lib/experience';

export default function ExperienceTimeline() {
    const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

    return (
        <section id="experience" className="py-24 border-t border-slate-200/50 dark:border-slate-800/50">
            {/* Header with click hint */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
                <h2 className="text-4xl font-bold text-ink tracking-tight">Experience</h2>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span>Click any work role for details</span>
                </div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Center Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                    {experienceData.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const isWork = item.type === 'work';

                        return (
                            <div
                                key={item.id}
                                role={isWork ? 'button' : undefined}
                                tabIndex={isWork ? 0 : undefined}
                                aria-label={isWork ? `View details for ${item.role} at ${item.institution}` : undefined}
                                className={`relative flex flex-col md:flex-row items-center justify-between group ${isWork ? 'cursor-pointer' : ''}`}
                                onClick={() => isWork && setSelectedExp(item)}
                                onKeyDown={(e) => {
                                    if (isWork && (e.key === 'Enter' || e.key === ' ')) {
                                        e.preventDefault();
                                        setSelectedExp(item);
                                    }
                                }}
                            >
                                {/* Left Side */}
                                <div className={`w-full md:w-[45%] ${isLeft ? 'pl-12 md:pl-0 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1' : 'order-1 md:order-1 md:opacity-0'}`}>
                                    {isLeft && (
                                        <ItemContent item={item} isWork={isWork} alignRight />
                                    )}
                                </div>

                                {/* Center Dot */}
                                <div
                                    className={`absolute left-[11px] md:left-1/2 rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2 transition-all ${
                                        isWork
                                            ? 'w-3 h-3 bg-paper border-2 border-slate-300 dark:border-slate-600 group-hover:border-accent group-hover:scale-125 group-focus-visible:border-accent group-focus-visible:scale-125 ring-0 group-hover:ring-4 group-hover:ring-accent/15'
                                            : 'w-2.5 h-2.5 bg-paper border-2 border-accent'
                                    }`}
                                ></div>

                                {/* Right Side */}
                                <div className={`w-full md:w-[45%] ${!isLeft ? 'pl-12 md:pl-8 order-3 md:order-3' : 'pl-8 order-3 md:order-3 md:opacity-0'}`}>
                                    {!isLeft && (
                                        <ItemContent item={item} isWork={isWork} alignRight={false} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedExp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedExp(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-paper border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full p-8 overflow-hidden animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setSelectedExp(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            aria-label="Close"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <span className="text-xs font-mono text-accent uppercase tracking-widest mb-2 block">{selectedExp.date}</span>
                        <h3 className="text-2xl font-bold text-ink mb-1">{selectedExp.institution}</h3>
                        <p className="text-md text-slate-600 dark:text-slate-400 font-medium mb-6">{selectedExp.role}</p>

                        {selectedExp.skills && selectedExp.skills.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                                    Skills Used
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedExp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-[10px] font-mono px-2 py-1 rounded-full border border-accent/30 bg-accent/5 text-ink"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {selectedExp.accomplishments && selectedExp.accomplishments.length > 0 ? (
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Accomplishments</h4>
                                <ul className="space-y-2">
                                    {selectedExp.accomplishments.map((acc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                                            {acc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed">
                                Accomplishments will be added once the internship concludes.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

interface ItemContentProps {
    item: ExperienceItem;
    isWork: boolean;
    alignRight: boolean;
}

function ItemContent({ item, isWork, alignRight }: ItemContentProps) {
    return (
        <>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1 block">
                {item.date}
            </span>
            <h3 className={`text-xl font-bold text-ink ${isWork ? 'group-hover:text-accent group-focus-visible:text-accent transition-colors' : ''}`}>
                {item.institution}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{item.role}</p>

            {isWork && (
                <span
                    className={`inline-flex items-center gap-1.5 mt-5 text-[10px] font-mono uppercase tracking-widest text-accent/80 group-hover:text-accent group-focus-visible:text-accent transition-colors border border-accent/30 group-hover:border-accent rounded-full px-2.5 py-1 bg-accent/5 ${alignRight ? 'md:self-end' : ''}`}
                >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Details
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            )}
        </>
    );
}
