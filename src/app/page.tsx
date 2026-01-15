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
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-ink leading-[0.9]">
                            Shrey.
                            <br />
                            <span className="text-slate-400">Mechatronics</span>
                        </h1>
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
                            Node_ID: Shrey
                        </div>
                    </div>
                </div>

                <p className="max-w-2xl text-xl text-slate-600 leading-relaxed">
                    Building the physical systems of tomorrow. I design{" "}
                    <span className="font-medium text-ink underline decoration-sage/50 underline-offset-4 decoration-2">
                        high-precision robotics
                    </span>{" "}
                    that bridge the gap between abstract code and tactile motion. Currently driving innovation in hardware engineering.
                </p>

                <div className="flex gap-4 mt-12">
                    <a href="#projects" className="px-8 py-3 bg-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                        View Selection
                    </a>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 border-t border-slate-200/50">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-4xl font-bold text-ink tracking-tight">Selected Works</h2>
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

            {/* History Grid (Education + Experience) */}
            <section id="experience" className="py-24 border-t border-slate-200/50">
                <h2 className="text-4xl font-bold text-ink tracking-tight mb-16">History</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    {/* Education */}
                    <div>
                        <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8">Academic_Log</h3>
                        <div className="space-y-12">
                            <div className="relative pl-8 border-l border-slate-200">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-white border-2 border-sage"></div>
                                <span className="text-xs font-mono text-slate-400 mb-2 block">2026 (Expected)</span>
                                <h4 className="text-lg font-bold text-ink">Johns Hopkins University</h4>
                                <p className="text-sm text-slate-600 mt-1">M.S.E. in Robotics</p>
                            </div>
                            <div className="relative pl-8 border-l border-slate-200">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-300"></div>
                                <span className="text-xs font-mono text-slate-400 mb-2 block">2024</span>
                                <h4 className="text-lg font-bold text-ink">Georgia Tech</h4>
                                <p className="text-sm text-slate-600 mt-1">B.S. Mechanical Engineering</p>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8">Work_Log</h3>
                        <div className="space-y-12">
                            <div className="group">
                                <span className="text-xs font-mono text-slate-400 mb-1 block">Jan 2025 - Present</span>
                                <h4 className="text-lg font-bold text-ink group-hover:text-sage transition-colors">Amazon Robotics</h4>
                                <p className="text-sm text-slate-600">Hardware Engineering Co-op</p>
                            </div>
                            <div className="group">
                                <span className="text-xs font-mono text-slate-400 mb-1 block">2023 - 2025</span>
                                <h4 className="text-lg font-bold text-ink group-hover:text-sage transition-colors">Rockwell Automation</h4>
                                <p className="text-sm text-slate-600">Mechanical Engineering Intern</p>
                            </div>
                            <div className="group">
                                <span className="text-xs font-mono text-slate-400 mb-1 block">2022</span>
                                <h4 className="text-lg font-bold text-ink group-hover:text-sage transition-colors">Siemens</h4>
                                <p className="text-sm text-slate-600">Software Development Intern</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="pt-24 pb-8 border-t border-slate-200/50 flex justify-between items-end">
                <div>
                    <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest block mb-2">Contact</span>
                    <a href="mailto:shreyaterala@outlook.com" className="text-2xl font-bold text-ink hover:text-sage transition-colors underline decoration-slate-200 underline-offset-8">hello@shrey.sys</a>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">© 2026 Shreya Terala</p>
                </div>
            </footer>
        </div>
    );
}
