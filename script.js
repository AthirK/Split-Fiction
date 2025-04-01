document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav");
    const links = document.querySelectorAll("nav a");

    function checkScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("nav-scrolled");
        } else {
            navbar.classList.remove("nav-scrolled");
        }
    }

    links.forEach(link => {
        link.addEventListener("click", function() {
            navbar.classList.add("nav-scrolled");
        });
    });

    checkScroll();
    window.addEventListener("scroll", checkScroll);

    //Fake cookie-popup
    const cookiePopup = document.createElement("div");
    cookiePopup.id = "cookie-popup";
    cookiePopup.innerHTML = `
        <div class="cookie-container">
            <p>We use cookies to improve your experience. By continuing to browse, you consent to our use of cookies.</p>
            <button id="accept-cookies">Accept</button>
        </div>
    `;
    document.body.appendChild(cookiePopup);

    document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookiePopup.style.display = "none";
    });
});