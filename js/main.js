const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
});