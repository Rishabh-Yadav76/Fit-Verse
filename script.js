
//navigation bar
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });
});
//hero section
document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#hero-text", { opacity: 1, y: -20, duration: 1, delay: 0.5 });
    gsap.to("#hero-subtext", { opacity: 1, y: -10, duration: 1, delay: 1 });
    gsap.to(".btn", { opacity: 1, y: 0, duration: 1, delay: 1.5 });
});
//gym search section
document.addEventListener("DOMContentLoaded", function() {
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");

    priceRange.addEventListener("input", function() {
        priceValue.textContent = `₹${priceRange.value}`;
    });

    document.getElementById("gymSearchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let city = document.getElementById("city").value;
        let pincode = document.getElementById("pincode").value;
        let price = priceRange.value;

        if (city === "" || pincode === "") {
            alert("Please fill all fields!");
        } else {
            alert(`Searching gyms in ${city} (Pincode: ${pincode}) under ₹${price}/month`);
        }
    });
});
/* login page*/
// Get elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const showLogin = document.getElementById("show-login");
const showSignup = document.getElementById("show-signup");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");

// Show Login Form
showLogin.addEventListener("click", () => {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
});

// Show Signup Form
showSignup.addEventListener("click", () => {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
});

// Switch to Signup
switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
});

// Switch to Login
switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
});