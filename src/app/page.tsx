import Link from "next/link";
import projectsData from "@/lib/data";

export default function Home() {
    const projects = Object.values(projectsData);

    return (
        <div className="max-w-7xl mx-auto px-6 pb-24">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col justify-center relative">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold tracking-widest uppercase">
                        System: Online
                    </span>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16 mb-12">
                    <div className="relative">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-ink leading-[1.1] mb-2">
                            Shreya Terala
                        </h1>
                        <span className="text-xl md:text-2xl text-slate-400 font-light tracking-wide">Mechanical & Robotics Engineer</span>
                    </div>

                    <div className="relative group shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-sage to-slate-200 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                            <img
                                src="/portfolio/assets/profile.jpg"
                                alt="Shreya Terala"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="absolute -bottom-6 right-0 bg-white border border-slate-200 px-2 py-1 rounded text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                            Node_ID: Shreya
                        </div>
                    </div>
                </div>

                <p className="max-w-2xl text-xl text-slate-600 leading-relaxed">
                    I'm currently a grad student at John’s Hopkins pursuing a masters in robotics. I’m super passionate about combining my interests in human-centric and bio-inspired design with robotics.
                </p>

                <div className="flex gap-4 mt-12">
                    <a href="#projects" className="px-8 py-3 bg-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                        View Projects
                    </a>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 border-t border-slate-200/50">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-4xl font-bold text-ink tracking-tight">Projects</h2>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden md:block">Index 2022 — 2026</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            href={`/project/${project.id}`}
                            key={project.id}
                            className="group relative bg-white/50 border border-slate-200/50 rounded-2xl overflow-hidden hover:border-sage/50 hover:shadow-xl hover:shadow-sage/5 transition-all duration-500"
                        >
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
                                    <span className="text-[10px] font-mono text-sage uppercase tracking-wider border border-slate-200 px-2 py-1 rounded-full bg-white">
                                        {project.meta.split('|')[0].trim()}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-sage transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies?.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-[10px] text-slate-500 font-medium">#{tech}</span>
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
                                <span className="text-xs font-mono text-sage uppercase tracking-widest mb-1 block">Expected Dec 2026</span>
                                <h3 className="text-lg font-bold text-ink">Johns Hopkins University</h3>
                                <p className="text-sm text-slate-600">M.S.E. in Robotics</p>
                            </div>
                            <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-sage rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                            <div className="w-full md:w-[45%] pl-8 order-3 md:order-3 md:opacity-0"></div>
                        </div>

                        {/* Amazon */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            <div className="order-1 md:order-1 w-full md:w-[45%] md:opacity-0"></div>
                            <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 group-hover:border-sage transition-colors rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                            <div className="w-full md:w-[45%] pl-12 md:pl-8 order-3 md:order-3">
                                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">Jan 2025 - June 2025</span>
                                <h3 className="text-lg font-bold text-ink group-hover:text-sage transition-colors">Amazon Robotics</h3>
                                <p className="text-sm text-slate-600">Hardware Engineering Co-op</p>
                            </div>
                        </div>

                        {/* Georgia Tech */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            <div className="w-full md:w-[45%] pl-12 md:pl-0 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1">
                                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">Dec 2024</span>
                                <h3 className="text-lg font-bold text-ink">Georgia Institute of Technology</h3>
                                <p className="text-sm text-slate-600">B.S. Mechanical Engineering</p>
                            </div>
                            <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                            <div className="w-full md:w-[45%] pl-8 order-3 md:order-3 md:opacity-0"></div>
                        </div>

                        {/* Rockwell */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            <div className="order-1 md:order-1 w-full md:w-[45%] md:opacity-0"></div>
                            <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 group-hover:border-sage transition-colors rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                            <div className="w-full md:w-[45%] pl-12 md:pl-8 order-3 md:order-3">
                                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">Apr 2023 - May 2025</span>
                                <h3 className="text-lg font-bold text-ink group-hover:text-sage transition-colors">Rockwell Automation</h3>
                                <p className="text-sm text-slate-600">Mechanical Engineering Intern</p>
                            </div>
                        </div>

                        {/* Siemens */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            <div className="w-full md:w-[45%] pl-12 md:pl-0 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1">
                                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 block">July 2022 - Oct 2022</span>
                                <h3 className="text-lg font-bold text-ink group-hover:text-sage transition-colors">Siemens</h3>
                                <p className="text-sm text-slate-600">Software Development Intern</p>
                            </div>
                            <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-slate-300 group-hover:border-sage transition-colors rounded-full transform md:-translate-x-1/2 z-10 order-1 md:order-2"></div>
                            <div className="w-full md:w-[45%] pl-8 order-3 md:order-3 md:opacity-0"></div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 text-sm font-mono text-slate-400">
                <p className="uppercase tracking-widest">© 2026 Shreya Terala</p>
                <div className="flex gap-8">
                    <a href="https://github.com/shreyaterala" target="_blank" className="hover:text-ink transition-colors uppercase tracking-widest">GitHub</a>
                    <a href="https://www.linkedin.com/in/shreya-terala/" target="_blank" className="hover:text-ink transition-colors uppercase tracking-widest">LinkedIn</a>
                    <a href="mailto:shreyaterala@outlook.com" className="hover:text-ink transition-colors uppercase tracking-widest">Email</a>
                </div>
            </div>
        </div>
    );
}
