import Link from "next/link";
import { ProjectAPI } from "@/lib/data";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default async function Home() {
    const projects = await ProjectAPI.findAll();
    const featured = projects.filter((p) => p.featured);
    const proofStrip = (featured.length >= 3 ? featured : projects).slice(0, 4);

    return (
        <div className="w-full pb-24">
            {/* Landing Hero - Full Screen, Minimal */}
            <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-start md:items-center relative border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
                {/* Demo Video Background - desktop only, very subtle */}
                <video
                    className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-[0.12] dark:opacity-[0.18] pointer-events-none z-0 filter blur-[2px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    preload="metadata"
                >
                    <source src="/portfolio/assets/ur5/ik_demo.mp4" type="video/mp4" />
                </video>

                {/* Abstract Background Blobs */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-20 -right-20 md:top-0 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[50px] md:blur-[100px] opacity-40 animate-blob"></div>
                    <div className="absolute top-40 -left-20 md:top-0 md:right-3/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-200 dark:bg-emerald-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[50px] md:blur-[100px] opacity-40 animate-blob" style={{ animationDelay: "2s" }}></div>
                    <div className="absolute -bottom-20 right-0 md:-bottom-32 md:left-1/2 w-72 h-72 md:w-96 md:h-96 bg-cyan-200 dark:bg-cyan-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[50px] md:blur-[100px] opacity-40 animate-blob" style={{ animationDelay: "4s" }}></div>
                    {/* Soft Vignette to prevent hard edges */}
                    <div className="absolute inset-0 shadow-[inset_0_0_80px_rgb(var(--color-paper))] md:shadow-[inset_0_0_150px_rgb(var(--color-paper))] pointer-events-none"></div>
                </div>

                <div className="flex flex-col md:items-center z-10 px-6 md:px-0 w-full">
                    <div className="flex items-center gap-2 mb-6 md:self-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold tracking-widest uppercase">
                            System: Online — Currently @ JHU Robotics
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-ink leading-[0.9] mb-4 md:text-center">
                        Shreya<br className="md:hidden" /> Terala
                    </h1>

                    <span className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light tracking-wide md:text-center max-w-lg">
                        Building the bridge between <span className="text-accent font-medium">rigid systems</span> and the <span className="text-accent font-medium">human experience</span>.
                    </span>

                    {/* Hero CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-3 md:self-center">
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 bg-ink text-paper rounded-full hover:opacity-80 transition-all shadow-lg shadow-slate-900/10"
                        >
                            View Projects
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="/portfolio/assets/Resume.pdf"
                            target="_blank"
                            className="group inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full hover:border-ink hover:text-ink dark:hover:text-ink hover:bg-white dark:hover:bg-slate-900 transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            Resume
                        </a>
                    </div>

                    {/* Proof strip — featured project thumbnails */}
                    <div className="mt-12 w-full max-w-3xl px-2 md:px-0 md:self-center">
                        <div className="flex items-center gap-3 mb-3 md:justify-center">
                            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">Selected Work</span>
                            <div className="h-px flex-1 md:max-w-[120px] bg-slate-200 dark:bg-slate-700" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {proofStrip.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/project/${project.id}`}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 hover:border-accent transition-all"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-slate-900/0 opacity-90" />
                                    <div className="absolute bottom-0 inset-x-0 p-2">
                                        <p className="text-[10px] font-mono text-white/90 uppercase tracking-wider line-clamp-1">
                                            {project.title}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 animate-bounce">
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
                            <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-slate-200 dark:to-slate-700 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg rotate-3 transition-transform duration-500 group-hover:rotate-0">
                                <img
                                    src="/portfolio/assets/profile.jpg"
                                    alt="Shreya Terala"
                                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 dark:text-slate-400 shadow-sm">
                                SHREYA_TERALA
                            </div>
                        </div>
                    </div>

                    {/* Bio Content Column */}
                    <div className="w-full md:w-2/3 space-y-8">
                        <h2 className="text-4xl font-bold text-ink tracking-tight">About Me</h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            <p>
                                Hello! I'm a Robotics and Mechanical Engineer passionate about designing technology that feels natural to use. I specialize in bridging the gap between complex electromechanical systems and human intuition, creating assistive technologies that are mechanically robust yet seamlessly integrated into everyday life.
                            </p>
                            <p>
                                I'm currently pursuing my Master's in Robotics at Johns Hopkins University, building on my B.S. in Mechanical Engineering with a minor in Robotics from Georgia Institute of Technology. My academic foundation spans mechanical design, mechatronics, and robotics systems, skills I've applied across diverse projects and real-world challenges.
                            </p>
                            <p>
                                Professionally, I've developed hardware solutions at Amazon Robotics and Rockwell Automation, and conducted research on lower-limb exoskeletons at the EPIC Lab. Whether I'm iterating on designs in the lab or exploring new perspectives outside of it, curiosity drives everything I do.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="group flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-8 py-3 bg-ink text-paper rounded-full hover:opacity-80 transition-all shadow-lg shadow-slate-900/10">
                                View My Work
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                            <a href="#contact" className="group flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-full hover:border-ink hover:text-ink dark:hover:text-ink hover:bg-white dark:hover:bg-slate-900 transition-all">
                                Connect with Me!
                            </a>
                        </div>
                    </div>
                </section>

                <SkillsSection projects={projects} />

                <ProjectsSection projects={projects} />

                <ExperienceTimeline />

                <div id="contact" className="pt-16 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row md:items-center justify-between gap-8 text-sm font-mono text-slate-400 dark:text-slate-500">
                    <div className="space-y-2">
                        <p className="uppercase tracking-widest">© 2026 Shreya Terala</p>
                        <a
                            href="/portfolio/assets/Resume.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-ink dark:hover:text-ink transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                    <div className="flex gap-8">
                        <a href="https://github.com/shreyaterala" target="_blank" className="hover:text-ink dark:hover:text-ink transition-colors uppercase tracking-widest">GitHub</a>
                        <a href="https://www.linkedin.com/in/shreya-terala/" target="_blank" className="hover:text-ink dark:hover:text-ink transition-colors uppercase tracking-widest">LinkedIn</a>
                        <a href="mailto:shreyaterala@outlook.com" className="hover:text-ink dark:hover:text-ink transition-colors uppercase tracking-widest">Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
