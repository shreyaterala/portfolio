import Link from "next/link";
import projectsData, { ProjectAPI } from "@/lib/data";

export default async function Home() {
    const projects = await ProjectAPI.findAll();

    return (
        <div className="w-full pb-24">
            {/* Landing Hero - Full Screen, Minimal */}
            <section className="min-h-screen flex flex-col justify-center items-start md:items-center relative border-b border-slate-200/50 overflow-hidden">
                {/* Abstract Background Blobs */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-20 -right-20 md:top-0 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-[50px] md:blur-[100px] opacity-40 animate-blob"></div>
                    <div className="absolute top-40 -left-20 md:top-0 md:right-3/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-[50px] md:blur-[100px] opacity-40 animate-blob" style={{ animationDelay: "2s" }}></div>
                    <div className="absolute -bottom-20 right-0 md:-bottom-32 md:left-1/2 w-72 h-72 md:w-96 md:h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[50px] md:blur-[100px] opacity-40 animate-blob" style={{ animationDelay: "4s" }}></div>
                    {/* Soft Vignette to prevent hard edges */}
                    <div className="absolute inset-0 shadow-[inset_0_0_80px_#fbfaf5] md:shadow-[inset_0_0_150px_#fbfaf5] pointer-events-none"></div>
                </div>

                <div className="flex flex-col md:items-center z-10 px-6 md:px-0">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-slate-600 font-bold tracking-widest uppercase">
                            System: Online
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-ink leading-[0.9] mb-4 md:text-center">
                        Shreya<br className="md:hidden" /> Terala
                    </h1>

                    <span className="text-xl md:text-2xl text-slate-500 font-light tracking-wide md:text-center max-w-lg">
                        Building the bridge between <span className="text-accent font-medium">rigid systems</span> and the <span className="text-accent font-medium">human experience</span>.
                    </span>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
                    <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                {/* About Section - Below the Fold */}
                <section id="about" className="py-32 flex flex-col md:flex-row gap-16 items-center">
                    {/* Profile Image Column */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-slate-200 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg rotate-3 transition-transform duration-500 group-hover:rotate-0">
                                <img
                                    src="/portfolio/assets/profile.jpg"
                                    alt="Shreya Terala"
                                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 shadow-sm">
                                SHREYA_TERALA
                            </div>
                        </div>
                    </div>

                    {/* Bio Content Column */}
                    <div className="w-full md:w-2/3 space-y-8">
                        <h2 className="text-4xl font-bold text-ink tracking-tight">About Me</h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                I am a <strong>Robotics and Mechanical Engineer</strong> driven by a core philosophy of <strong>human-centric design</strong>. My work bridges the gap between rigid electromechanical systems and the organic human experience, creating assistive technologies that are both mechanically robust and intuitively seamless.
                            </p>
                            <p>
                                Currently, I’m a <strong>Robotics Master's student at Johns Hopkins University</strong>. I also hold a <strong>B.S. in Mechanical Engineering with a minor in Robotics from the Georgia Institute of Technology</strong>, where I built a foundation on several mechanical engineering, mechatronics, and robotics projects.
                            </p>
                            <p>
                                My professional journey includes developing hardware solutions at <strong>Amazon Robotics</strong> and <strong>Rockwell Automation</strong>, and researching lower-limb exoskeletons at the <strong>EPIC Lab</strong>. Curiosity guides me in everything I do, from iterating designs in the lab to exploring the world outside of it.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="group flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-8 py-3 bg-ink text-white rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                                View Work
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                            <a href="#contact" className="group flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-8 py-3 border border-slate-300 text-slate-600 rounded-full hover:border-ink hover:text-ink hover:bg-white transition-all">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24 border-t border-slate-200/50">
                    <div className="flex items-end justify-between mb-16">
                        <h2 className="text-4xl font-bold text-ink tracking-tight">Projects</h2>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden md:block">Index 2020 — 2026</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
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
                                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-mono text-accent uppercase tracking-wider border border-slate-200 px-2 py-1 rounded-full bg-white">
                                            {project.meta.split('|')[0].trim()}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies?.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-[10px] md:text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Timeline Section */}
                <section id="experience" className="py-24 border-t border-slate-200/50">
                    <h2 className="text-4xl font-bold text-ink tracking-tight mb-20">Experience</h2>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">

                            {/* JHU */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between group">
                                <div className="w-full md:w-[45%] pl-12 md:pl-0 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1">
                                    <span className="text-xs font-mono text-accent uppercase tracking-widest mb-1 block">Expected Dec 2026</span>
                                    <h3 className="text-xl font-bold text-ink">Johns Hopkins University</h3>
                                    <p className="text-sm text-slate-600">M.S.E. in Robotics</p>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-accent rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                                <div className="w-full md:w-[45%] pl-8 order-3 md:order-3 md:opacity-0"></div>
                            </div>

                            {/* Amazon */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between group">
                                <div className="order-1 md:order-1 w-full md:w-[45%] md:opacity-0"></div>
                                <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 group-hover:border-accent transition-colors rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                                <div className="w-full md:w-[45%] pl-12 md:pl-8 order-3 md:order-3">
                                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">Jan 2025 - June 2025</span>
                                    <h3 className="text-xl font-bold text-ink group-hover:text-accent transition-colors">Amazon Robotics</h3>
                                    <p className="text-sm text-slate-600">Hardware Engineering Co-op</p>
                                </div>
                            </div>

                            {/* Georgia Tech */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between group">
                                <div className="w-full md:w-[45%] pl-12 md:pl-0 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1">
                                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">Dec 2024</span>
                                    <h3 className="text-xl font-bold text-ink">Georgia Institute of Technology</h3>
                                    <p className="text-sm text-slate-600">B.S. Mechanical Engineering</p>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                                <div className="w-full md:w-[45%] pl-8 order-3 md:order-3 md:opacity-0"></div>
                            </div>

                            {/* Rockwell */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between group">
                                <div className="order-1 md:order-1 w-full md:w-[45%] md:opacity-0"></div>
                                <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 group-hover:border-accent transition-colors rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                                <div className="w-full md:w-[45%] pl-12 md:pl-8 order-3 md:order-3">
                                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">Apr 2023 - May 2025</span>
                                    <h3 className="text-xl font-bold text-ink group-hover:text-accent transition-colors">Rockwell Automation</h3>
                                    <p className="text-sm text-slate-600">Mechanical Engineering Intern</p>
                                </div>
                            </div>

                            {/* Siemens */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between group">
                                <div className="w-full md:w-[45%] pl-12 md:pl-0 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1">
                                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">July 2022 - Oct 2022</span>
                                    <h3 className="text-xl font-bold text-ink group-hover:text-accent transition-colors">Siemens</h3>
                                    <p className="text-sm text-slate-600">Software Development Intern</p>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 group-hover:border-accent transition-colors rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                                <div className="w-full md:w-[45%] pl-8 order-3 md:order-3 md:opacity-0"></div>
                            </div>

                        </div>
                    </div>
                </section>

                <div id="contact" className="flex flex-col md:flex-row md:items-center justify-between gap-8 text-sm font-mono text-slate-400">
                    <p className="uppercase tracking-widest">© 2026 Shreya Terala</p>
                    <div className="flex gap-8">
                        <a href="https://github.com/shreyaterala" target="_blank" className="hover:text-ink transition-colors uppercase tracking-widest">GitHub</a>
                        <a href="https://www.linkedin.com/in/shreya-terala/" target="_blank" className="hover:text-ink transition-colors uppercase tracking-widest">LinkedIn</a>
                        <a href="mailto:shreyaterala@outlook.com" className="hover:text-ink transition-colors uppercase tracking-widest">Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}