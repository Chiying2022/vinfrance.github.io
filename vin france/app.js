const hamburger = document.querySelector(
    ".hamburger");
const navLinks = document.querySelector(".nav-links");
// const navLinksToggle = navLinks;
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    // navLinks.classList.toggle("open");
    if (navLinks.classList == 'nav-links open') {
        navLinks.classList.remove('open')
    } else {
        navLinks.classList.add('open')
    }
});

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("close");
// });

function closeMenu(){
    navLinks.classList.remove('open')
}
