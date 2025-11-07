// Add this JS after your existing DOMContentLoaded script
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("menuToggle");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("show");
  });

  // Close menu after clicking a link
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("show");
    });
  });
});
