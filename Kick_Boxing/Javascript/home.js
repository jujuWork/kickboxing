// hamburger menu

// Selecting DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector(".menu");

// Set the initial state of the menu
let showMenu = false;

// Add event listener for the click event
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    showMenu = !showMenu; // Toggle the state

    if (showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add("show");
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
    }
}