document.addEventListener("DOMContentLoaded", function() {
    // Scroll to top on load
    window.scrollTo(0, 0);

    // Main nav scroll effect
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("nav-scrolled", window.scrollY > 50);
    });

    // Section navigation with IntersectionObserver
    const navLinks = document.querySelectorAll("#section-nav a");
    const scrollSections = document.querySelectorAll(".scroll-section");

    // IntersectionObserver setup
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionClass = entry.target.classList[0];
                navLinks.forEach(link => {
                    const linkClass = link.getAttribute("href").substring(1);
                    link.classList.toggle("active", linkClass === sectionClass);
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of section is visible

    // Observe "sections"
    scrollSections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetClass = link.getAttribute("href").substring(1);
            const targetSection = document.querySelector(`.${targetClass}`);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Video control (looping)
    const video = document.querySelector('.video-bg');
    if (video) {
        video.addEventListener('ended', function() {
            video.currentTime = 0;
            video.play().catch(e => console.log("Video play error:", e));
        });
    }

    // Simple cookie popup
    const cookiePopup = document.createElement("div");
    cookiePopup.id = "cookie-popup";
    cookiePopup.innerHTML = `
        <div class="cookie-container">
            <p>We use cookies to improve your experience.</p>
            <button id="accept-cookies">Accept</button>
        </div>
    `;
    document.body.appendChild(cookiePopup);

    document.getElementById("accept-cookies").addEventListener("click", function() {
        cookiePopup.style.display = "none";
    });
});