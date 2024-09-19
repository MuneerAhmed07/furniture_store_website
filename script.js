const navMenu = document.getElementById("nav_menu");
const menuButton = document.getElementById("humburger_menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})