const icone = document.querySelector('.icone');
const overlay = document.querySelector('.modal');
const burger = document.querySelector('.mobile_display');

icone.addEventListener('click', () => {
    overlay.classList.add('hidden');
} );



burger.addEventListener('click', () => {
    overlay.classList.remove('hidden');
})