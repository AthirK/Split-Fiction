document.addEventListener("DOMContentLoaded", function () {
    // Main navigation scroll effect
    const mainNavbar = document.querySelector("nav");
    function checkMainNavbarScroll() {
        if (window.scrollY > 50) {
            mainNavbar.classList.add("nav-scrolled");
        } else {
            mainNavbar.classList.remove("nav-scrolled");
        }
    }
    window.addEventListener("scroll", checkMainNavbarScroll);
    checkMainNavbarScroll(); // Add event-listener

    // Sektion-navigation (circles)
    const sectionNav = document.querySelector("#section-nav");
    const sectionLinks = document.querySelectorAll("#section-nav a");
    const sections = document.querySelectorAll("section");

    function updateActiveSection() {
        let scrollPosition = window.scrollY;
        let foundActive = false;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - sectionHeight / 3 &&
                scrollPosition < sectionTop + sectionHeight / 3) {
                sectionLinks.forEach(link => link.style.backgroundColor = "transparent");
                sectionLinks[index].style.backgroundColor = "white";
                foundActive = true;
            }
        });

        // Fallback position
        if (!foundActive) {
            sectionLinks.forEach(link => link.style.backgroundColor = "transparent");
            sectionLinks[0].style.backgroundColor = "white";
        }
    }

    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection();

    // Smooth scrolling after click
    sectionLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            sections[index].scrollIntoView({ behavior: "smooth" });
        });
    });

    // Extra control for Video restart
    const video = document.querySelector('.video-bg');
    if (video) {
        video.addEventListener('ended', function () {
            video.currentTime = 0;
            video.play();
        });
    }

    // Fake cookie-popup
    const cookiePopup = document.createElement("div");
    cookiePopup.id = "cookie-popup";
    cookiePopup.innerHTML = `
        <div class="cookie-container">
            <p>We use cookies to improve your experience. By continuing to browse, you consent to our use of cookies.</p>
            <button id="accept-cookies">Accept</button>
        </div>
    `;
    document.body.appendChild(cookiePopup);

    document.getElementById("accept-cookies").addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiePopup.style.display = "none";
    });

    /* Check if cookies have been accepted and hide the popup if so.
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookiePopup.style.display = "none";
    } */
});