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

    // Cookie-popup
    const cookiePopup = document.createElement("div");
    cookiePopup.id = "cookie-popup";
    cookiePopup.innerHTML = `
        <div class="cookie-container">
            <p>Vi använder cookies för att förbättra din upplevelse. Genom att fortsätta godkänner du vår användning av cookies.</p>
            <button id="accept-cookies">Godkänn</button>
        </div>
    `;
    document.body.appendChild(cookiePopup);

 // Kontrollera om användaren redan har godkänt cookies
 //if (localStorage.getItem("cookiesAccepted")) {
     //cookiePopup.style.display = "none";
 //}

    // Hantera godkännande av cookies
    document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookiePopup.style.display = "none";
    });
});