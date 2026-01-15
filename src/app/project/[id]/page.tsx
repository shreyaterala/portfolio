import { Project } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
    params: {
        id: string;
    };
}

// Generate static params if you want static export
export async function generateStaticParams() {
    const projects = await Project.findAll();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = await Project.findById(params.id);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Shreya Terala`,
        description: project.meta,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    // Use simulated DB call
    const project = await Project.findById(params.id);

    if (!project) {
        notFound();
    }

    return (
        <>
            {/* Project Hero Section */}
            {/* Project Hero Section */}
            <section
                className="project-hero-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white"
                }}
            >
                <div className="container">
                    <div className="project-header">
                        <Link
                            href="/#projects"
                            className="back-link"
                            style={{ color: "rgba(255, 255, 255, 0.9)" }}
                        >
                            <i className="fas fa-arrow-left"></i> Back to Projects
                        </Link>
                        <h1 style={{ color: "white", marginTop: "1rem" }}>{project.title}</h1>
                        <p
                            className="project-meta"
                            style={{
                                color: "rgba(255, 255, 255, 0.9)",
                                borderLeftColor: "var(--primary-color)"
                            }}
                        >
                            {project.meta}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container project-page-container">
                <div className="project-content-wrapper">
                    {/* Main Image removed as it is now in the header */}

                    <div
                        className="project-body-content"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                </div>

                <footer id="contact" className="footer">
                    <div className="social-links">
                        <a href="https://github.com/shreyaterala" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/shreya-terala/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:shreyaterala@outlook.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                    <p>&copy; 2026 Shreya Terala</p>
                </footer>
            </div>
        </>
    );
}
