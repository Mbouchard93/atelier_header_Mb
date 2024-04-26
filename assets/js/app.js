const icone = document.querySelector('.icone');
const overlay = document.querySelector('.modal');
const burger = document.querySelector('.mobile_display');
const navDesktop = document.querySelector('.nav_desktop');

icone.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-label', 'hidden');
} );



burger.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    overlay.removeAttribute('aria-label');
});