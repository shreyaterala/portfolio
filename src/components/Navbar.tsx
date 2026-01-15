"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="/assets/Resume.pdf" target="_blank" className="resume-logo-btn">
                    RESUME
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer"
                    }}
                >
                    <i className="fas fa-bars"></i>
                </button>

                <ul
                    className="nav-links"
                    style={isOpen ? {
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: "70px",
                        left: "0",
                        width: "100%",
                        background: "var(--surface-color)",
                        padding: "2rem",
                        boxShadow: "0 10px 10px rgba(0,0,0,0.5)"
                    } : {}}
                >
                    <li><Link href="/#about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/#education" onClick={() => setIsOpen(false)}>Education</Link></li>
                    <li><Link href="/#experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
                    <li><Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>

                {/* Helper for mobile styles */}
                <style jsx>{`
          @media (max-width: 768px) {
            .hamburger {
              display: block !important;
            }
            .nav-links {
              display: none;
            }
          }
        `}</style>
            </div>
        </nav>
    );
}
