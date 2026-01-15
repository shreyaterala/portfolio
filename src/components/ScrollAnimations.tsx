"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(
            ".section-title, .project-card, .education-card, .experience-card, .intro-content, .intro-image"
        );

        elements.forEach((el) => {
            // Add base styles for animation
            (el as HTMLElement).style.opacity = "0";
            (el as HTMLElement).style.transform = "translateY(20px)";
            (el as HTMLElement).style.transition = "all 0.6s ease-out";
            observer.observe(el);
        });

        // Inject visible class style
        const style = document.createElement('style');
        style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
        document.head.appendChild(style);

        return () => observer.disconnect();
    }, []);

    return null;
}
