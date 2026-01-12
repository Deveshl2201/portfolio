// ===============================
// Portfolio JavaScript
// ===============================

// Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully");

    // -------------------------------
    // Smooth scrolling for internal links
    // -------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // -------------------------------
    // Contact form submit alert
    // -------------------------------
    const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
        alert("Message sent successfully!");
        contactForm.reset();
    } else {
        alert("Error sending message");
    }
});

    // -------------------------------
    // Button click tracking (optional)
    // -------------------------------
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(`Button clicked: ${btn.innerText}`);
        });
    });
});

// -------------------------------
// Optional: Dynamically add section
// -------------------------------
function addSection(title, content) {
    const main = document.querySelector("main");
    if (!main) {
        console.warn("Main tag not found in HTML");
        return;
    }

    const section = document.createElement("section");
    section.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    main.appendChild(section);
}
