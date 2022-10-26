//scroll navbar

const nav = document.querySelector('.nav');
const logoNegro = document.getElementById('logo');
const logoBlanco = document.getElementById('logo2');
const logoDark = document.getElementById('logo3');
const menu = document.querySelector('.nav__menu');
const img = document.getElementById('imagen');
const links = document.querySelector('.nav__link a');
const close = document.querySelector('.nav__menu--close');
const enlaces = document.querySelector('.nav__link--menu');
const subscribe = document.querySelector('.nav__subscribe');
const avatar = document.querySelector('.nav__avatar');
const body = document.querySelector('.body');


window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--on', window.scrollY > 0);

    function cambioImg() {
        if (window.scrollY > 0) {
            img.src = "imagenes/logoBlanco.png";
            menu.style.color = 'white';
            links.style.color = 'white';
            subscribe.style.display = 'flex';
        } else {
            img.src = "imagenes/logoNegro.png";
            menu.style.color = 'black';
            links.style.color = 'white';
            subscribe.style.display = 'none';
       
        }

    };

    cambioImg();



});







// Menu desplegable
menu.addEventListener('click', () => {
    enlaces.style.opacity = 1;
    menu.style.display = 'none';
    close.style.display = 'block';
    close.style.color = 'white';
});

close.addEventListener('click', () => {
    enlaces.style.opacity = 0;
    close.style.display = 'none';
    menu.style.display = 'block';
});


