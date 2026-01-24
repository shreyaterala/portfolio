"use client";

import React, { useState } from 'react';
import { experienceData, ExperienceItem } from '@/lib/experience';

export default function ExperienceTimeline() {
    const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

    return (
        <section id="experience" className="py-24 border-t border-slate-200/50">
            <h2 className="text-4xl font-bold text-ink tracking-tight mb-20">Experience</h2>

            <div className="relative max-w-5xl mx-auto">
                {/* Center Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                    {experienceData.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const isWork = item.type === 'work';

                        return (
                            <div
                                key={item.id}
                                className={`relative flex flex-col md:flex-row items-center justify-between group ${isWork ? 'cursor-pointer' : ''}`}
                                onClick={() => isWork && setSelectedExp(item)}
                            >
                                {/* Left Side */}
                                <div className={`w-full md:w-[45%] ${isLeft ? 'pl-12 md:pl-0 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1' : 'order-1 md:order-1 md:opacity-0'}`}>
                                    {isLeft && (
                                        <>
                                            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">{item.date}</span>
                                            <h3 className={`text-xl font-bold text-ink ${isWork ? 'group-hover:text-accent transition-colors' : ''}`}>{item.institution}</h3>
                                            <p className="text-sm text-slate-600">{item.role}</p>
                                        </>
                                    )}
                                </div>

                                {/* Center Dot */}
                                <div className={`absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2 ${isWork ? 'border-slate-300 group-hover:border-accent transition-colors' : 'border-accent'}`}></div>

                                {/* Right Side */}
                                <div className={`w-full md:w-[45%] ${!isLeft ? 'pl-12 md:pl-8 order-3 md:order-3' : 'pl-8 order-3 md:order-3 md:opacity-0'}`}>
                                    {!isLeft && (
                                        <>
                                            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">{item.date}</span>
                                            <h3 className={`text-xl font-bold text-ink ${isWork ? 'group-hover:text-accent transition-colors' : ''}`}>{item.institution}</h3>
                                            <p className="text-sm text-slate-600">{item.role}</p>
                                        </>
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
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 overflow-hidden animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setSelectedExp(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <span className="text-xs font-mono text-accent uppercase tracking-widest mb-2 block">{selectedExp.date}</span>
                        <h3 className="text-2xl font-bold text-ink mb-1">{selectedExp.institution}</h3>
                        <p className="text-md text-slate-600 font-medium mb-6">{selectedExp.role}</p>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Accomplishments</h4>
                            <ul className="space-y-2">
                                {selectedExp.accomplishments?.map((acc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                                        {acc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
