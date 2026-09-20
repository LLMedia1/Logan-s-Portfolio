console.log('script loaded');

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

console.log('hamburger:', hamburger);
console.log('navMenu:', navMenu);

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        console.log('hamburger clicked');
        const isOpen = navMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
}