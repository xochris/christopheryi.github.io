// =========================================
// Portfolio interactions
// =========================================

// Fade elements into view as they enter the viewport.

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

document
    .querySelectorAll(".project-card, .about-grid, .contact-section")
    .forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });
