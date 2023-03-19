document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const backToTopButton = document.getElementById("back-to-top");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Fixed header on scroll
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      header.classList.add("scrolled");
      backToTopButton.style.display = "block";
    } else {
      header.classList.remove("scrolled");
      backToTopButton.style.display = "none";
    }
  });

  // Back to top button
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Mobile menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileMenu.classList.remove("active");
    }
  });

  // Popup functionality
  const readMoreLinks = document.querySelectorAll(".read-more");
  const popups = document.querySelectorAll(".popup");
  const closeButton = document.querySelectorAll(".close");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      const popup = document.getElementById(target);
      popup.style.display = "block";
    });
  });

  closeButton.forEach((button) => {
    button.addEventListener("click", () => {
      popups.forEach((popup) => {
        popup.style.display = "none";
      });
    });
  });
});
