const icone = document.querySelector('.icone');
const overlay = document.querySelector('.modal');
const burger = document.querySelector('.mobile_display');
const navDesktop = document.querySelector('.nav_desktop');

icone.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');

} );

burger.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    navDesktop.setAttribute('aria-hidden', 'true');

});


function aria ()  {
    if (overlay.getAttribute('aria-hidden') === 'true'){
        navDesktop.setAttribute('aria-hidden', 'false'); 
    } else {
        navDesktop.removeAttribute('aria-hidden');
    }
};


function visible() {
    const style = window.getComputedStyle(navDesktop);
    if (style.visibility === 'visible'){
        navDesktop.setAttribute('aria-hidden', 'false'); 
    } else {
        navDesktop.setAttribute('aria-hidden', 'true');
    }
}

window.addEventListener('resize', visible) ;


