import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
    return (
        <main>
            <Navbar />
            <ScrollAnimations />

            <div className="container">
                {/* Hero / Intro */}
                <header className="hero" id="about">
                    <div className="intro-grid">
                        <div className="intro-content">
                            <h1>Hello, I'm Shreya!</h1>
                            <p>I'm currently a grad student at John’s Hopkins pursuing a masters in robotics. I’m super
                                passionate about combining my interests in human-centric and bio-inspired design with robotics.
                            </p>
                        </div>
                        <div className="intro-image">
                            <img src="/portfolio/assets/profile.jpg" alt="Shreya Terala" className="profile-img" />
                        </div>
                    </div>
                </header>

                {/* Education Section */}
                <section id="education" className="education-section">
                    <h2 className="section-title">Education</h2>
                    <div className="education-grid">
                        <div className="education-card">
                            <div className="edu-content">
                                <div className="card-header">
                                    <img src="/portfolio/assets/logos/jhu.png" alt="JHU Logo" className="card-logo" />
                                    <h3>Johns Hopkins University</h3>
                                </div>
                                <p className="edu-degree">M.S.E. in Robotics</p>
                                <p className="edu-meta">Expected December 2026</p>
                            </div>
                        </div>
                        <div className="education-card">
                            <div className="edu-content">
                                <div className="card-header">
                                    <img src="/portfolio/assets/logos/gt.png" alt="Georgia Tech Logo" className="card-logo" />
                                    <h3>Georgia Institute of Technology</h3>
                                </div>
                                <p className="edu-degree">B.S. in Mechanical Engineering, Minor in Robotics</p>
                                <p className="edu-meta">Graduated December 2024</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Experience Section */}
                <section id="experience" className="experience-section">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="experience-grid">
                        <div className="experience-card">
                            <div className="card-header">
                                <img src="/portfolio/assets/logos/amazon.png" alt="Amazon Robotics Logo" className="card-logo" />
                            </div>
                            <p className="experience-role">Hardware Engineering Co-op</p>
                            <p className="experience-meta">January 2025 - June 2025</p>
                        </div>
                        <div className="experience-card">
                            <div className="card-header">
                                <img src="/portfolio/assets/logos/rockwell.png" alt="Rockwell Automation Logo" className="card-logo" />
                            </div>
                            <p className="experience-role">Mechanical Engineering Intern</p>
                            <p className="experience-meta">April 2023 - May 2025</p>
                        </div>
                        <div className="experience-card">
                            <div className="card-header">
                                <img src="/portfolio/assets/logos/siemens.png" alt="Siemens Logo" className="card-logo" />
                            </div>
                            <p className="experience-role">Software Development Intern</p>
                            <p className="experience-meta">July 2022 - October 2022</p>
                        </div>
                    </div>
                </section>

                {/* Projects List */}
                <section id="projects" className="projects-section">
                    <h2 className="section-title">Projects</h2>

                    {/* 10. CIS */}
                    <Link href="/project/cis" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/cis1/navigation.png" alt="CIS Navigation" /></div>
                        <div className="card-content">
                            <span className="category">Algorithm Design</span>
                            <h3>Computer Integrated Surgery</h3>
                            <p>Stereotactic navigation suite: Calibration, Registration, and Tracking algorithms.</p>
                            <div className="tags"><span>MATLAB</span><span>Medical Imaging</span></div>
                        </div>
                    </Link>

                    {/* 1. Haptic Museum */}
                    <Link href="/project/haptic" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/haptic_museum/haptic_museum_main.jpg" alt="Haptic Museum" />
                        </div>
                        <div className="card-content">
                            <span className="category">Mechanical Design Lead</span>
                            <h3>Haptic Museum Display</h3>
                            <p>A tactile display device ensuring accessibility in museums. Features a 7x5 pin array with
                                pin-wise replication control.</p>
                            <div className="tags"><span>Fusion 360</span><span>Mechatronics</span></div>
                        </div>
                    </Link>

                    {/* 2. breathSense */}
                    <Link href="/project/breath" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/breath_sense/breath_sense.jpg" alt="breathSense" /></div>
                        <div className="card-content">
                            <span className="category">Haptic Device</span>
                            <h3>breathSense</h3>
                            <p>Haptic feedback device to aid in meditation and mindfulness practices.</p>
                            <div className="tags"><span>Haptics</span><span>Psychology</span></div>
                        </div>
                    </Link>

                    {/* 3. EPIC Lab */}
                    <Link href="/project/epic" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/epic_lab/epic_lab_research.jpg" alt="Exoskeleton" /></div>
                        <div className="card-content">
                            <span className="category">Research</span>
                            <h3>Exoskeleton Control</h3>
                            <p>Developing real-time PID motor controllers and state-space controllers for the GRAHAM knee
                                exoskeleton suit.</p>
                            <div className="tags"><span>Control</span><span>Python</span><span>MATLAB</span></div>
                        </div>
                    </Link>

                    {/* 4. RUBI */}
                    <Link href="/project/rubi" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/rubi/rubi_cube.jpg" alt="RUBI" /></div>
                        <div className="card-content">
                            <span className="category">Mechatronics & CV</span>
                            <h3>RUBI - Self Solving Cube</h3>
                            <p>A self-solving Rubik's cube robot acting as a learning tool. Uses Computer Vision algorithms to
                                solve.</p>
                            <div className="tags"><span>Python</span><span>CV</span><span>Robotics</span></div>
                        </div>
                    </Link>

                    {/* 5. Compression Sock */}
                    <Link href="/project/sock" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/compression_sock/compression_sock.jpg" alt="Smart Sock" /></div>
                        <div className="card-content">
                            <span className="category">Medical Device</span>
                            <h3>Smart Compression Sock</h3>
                            <p>"Smart Shrinker" sleeve to monitor residual limb site infection and inflammation in real-time.
                            </p>
                            <div className="tags"><span>IoT</span><span>Sensors</span><span>Python</span></div>
                        </div>
                    </Link>

                    {/* 6. EWB Malawi */}
                    <Link href="/project/malawi" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/ewb/ewb_malawi.jpg" alt="Malawi" /></div>
                        <div className="card-content">
                            <span className="category">Project Lead</span>
                            <h3>EWB Malawi Sanitation</h3>
                            <p>Led design and implementation of sanitation facilities for Mpitilira Primary School in Malawi.
                            </p>
                            <div className="tags"><span>Civil Eng</span><span>Leadership</span></div>
                        </div>
                    </Link>

                    {/* 7. Flight Predictor */}
                    <Link href="/project/flight" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/flight_predictor/flight_price_predictor.png" alt="Flight" />
                        </div>
                        <div className="card-content">
                            <span className="category">Machine Learning</span>
                            <h3>Flight Price Predictor</h3>
                            <p>Predicting flight costs using Random Forest models. Achieved 0.9557 R-squared accuracy.</p>
                            <div className="tags"><span>ML</span><span>Data Science</span></div>
                        </div>
                    </Link>

                    {/* 8. Battlebot */}
                    <Link href="/project/battlebot" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/battlebot/battlebot_insaniti.jpg" alt="Battlebot" /></div>
                        <div className="card-content">
                            <span className="category">Combat Robotics</span>
                            <h3>Battlebot "Insaniti"</h3>
                            <p>Designed a 3lb combat robot focusing on chassis durability and weapon integration.</p>
                            <div className="tags"><span>Solidworks</span><span>Fab</span></div>
                        </div>
                    </Link>

                    {/* 9. ME2110 */}
                    <Link href="/project/me2110" className="project-card">
                        <div className="card-image"><img src="/portfolio/assets/me2110/me2110_robot.jpg" alt="ME2110" /></div>
                        <div className="card-content">
                            <span className="category">Software Lead</span>
                            <h3>Autonomous Competition Robot</h3>
                            <p>Competition robot featuring DC motor control, obstacle detection, and maze solving logic.</p>
                            <div className="tags"><span>Arduino</span><span>C++</span></div>
                        </div>
                    </Link>




                </section>

                <footer id="contact" className="footer">
                    <div className="social-links">
                        <a href="https://github.com/shreyaterala" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/shreya-terala/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:shreyaterala@outlook.com"><i className="fas fa-envelope"></i></a>
                    </div>
                    <p>&copy; 2026 Shreya Terala</p>
                </footer>
            </div>
        </main>
    );
}
