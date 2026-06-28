// ==============================
// LOADER
// ==============================
window.onload = function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
};


// ==============================
// SCROLL PROGRESS BAR
// ==============================

window.addEventListener("scroll", () => {

    const progress = document.getElementById("progress");

    if (!progress) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (window.scrollY / totalHeight) * 100;

    progress.style.width = percent + "%";
});

// ==============================
// SCROLL TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}
// ==============================
// LOADER
// ==============================

window.onload = function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
};

// ==============================
// SCROLL PROGRESS BAR
// ==============================

window.addEventListener("scroll", () => {

    const progress = document.getElementById("progress");

    if (!progress) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (window.scrollY / totalHeight) * 100;

    progress.style.width = percent + "%";
});

// ==============================
// SCROLL TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}
// ==============================
// MOUSE GLOW EFFECT
// ==============================

const glow = document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ==============================
// FLOATING PARTICLES
// ==============================

function createParticle() {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =
        (Math.random() * 5 + 4) + "s";

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 9000);

}

setInterval(createParticle, 500);

// ==============================
// BUTTON CLICK ANIMATION
// ==============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.add("pulse");

        setTimeout(() => {

            btn.classList.remove("pulse");

        }, 400);

    });

});

// ==============================
// CONTACT FORM
// ==============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert(
            "✅ Thank you! Your message has been received."
        );

        form.reset();

    });

}

// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ==============================
// CONSOLE MESSAGE
// ==============================

console.log("%cWelcome to Deva Harshini's Portfolio 🚀",
"color:#00d9ff;font-size:18px;font-weight:bold;");

// ==============================
// DARK MODE
// ==============================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("light")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

    });

}