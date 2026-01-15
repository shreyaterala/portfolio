document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--surface-color)';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.5)';
            }
        });
    }

    // 2. Smooth Scroll (For ID links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only scroll smoothly if we are on the page that has this ID
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                    // Close mobile nav if open
                    if (window.innerWidth <= 768 && navLinks) {
                        navLinks.style.display = 'none';
                    }
                }
            }
        });
    });

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .project-card, .about-text, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // CSS class to handle visibility
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
