console.log("JS Loaded Successfully!");

// ---------------- SHOW MORE / LESS ----------------
const showBtn = document.getElementById("showMoreBtn");
const extraText = document.getElementById("extraText");

showBtn.addEventListener("click", () => {
    extraText.classList.toggle("hidden");
    showBtn.textContent = extraText.classList.contains("hidden") ? "Show More" : "Show Less";
});

// ---------------- DARK MODE ----------------
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);

    themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// ---------------- IMAGE SLIDER ----------------
const images = ["images/ServiceNowCSA (2)_page-0001 (1).jpg", "images/ServiceNowCAD (2)_page-0001.jpg", "images/Associate Cloud Engineer Certification(Google Cloud)_page-0001 (2).jpg"];
let index = 0;

const slideImg = document.getElementById("slideImg");

document.getElementById("prevBtn").onclick = () => changeSlide(-1);
document.getElementById("nextBtn").onclick = () => changeSlide(1);

function changeSlide(direction) {
    index += direction;
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    slideImg.style.opacity = 0;

    setTimeout(() => {
        slideImg.src = images[index];
        slideImg.style.opacity = 1;
    }, 300);
}

// ---------------- PROJECT FILTERS ----------------
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.filter;

        projectCards.forEach(card => {
            const match = category === "all" || card.dataset.category === category;
            card.style.display = match ? "block" : "none";
        });
    });
});

// ---------------- FORM VALIDATION ----------------
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("formError");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", validateForm);

function showError(msg) {
    errorMsg.textContent = msg;
    successMsg.textContent = "";
}

function showSuccess(msg) {
    successMsg.textContent = msg;
    errorMsg.textContent = "";
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) return showError("Name must be at least 3 characters");
    if (!email.includes("@")) return showError("Enter a valid email address");
    if (message.length < 10) return showError("Message must be at least 10 characters");

    showSuccess("Message sent successfully!");
}
