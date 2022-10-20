//scroll navbar

const nav = document.querySelector('.nav');
const logoNegro = document.getElementById('logo');
const logoBlanco = document.getElementById('logo2');
const menu = document.querySelector('.nav__menu');
const img = document.getElementById('imagen');
const links = document.querySelector('.nav__link a');
const close = document.querySelector('.nav__menu--close');
const enlaces = document.querySelector('.nav__link--menu');


window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--on', window.scrollY > 0);

    function cambioImg() {
        if (window.scrollY > 0) {
            img.src = "imagenes/logoBlanco.png";
            menu.style.color = 'white';
            links.style.color = 'white';
        } else {
            img.src = "imagenes/logoNegro.png";
            menu.style.color = 'black';
            links.style.color = 'black';

        }
    };
    cambioImg();
});

menu.addEventListener('click', ( )=>{
    enlaces.style.opacity = 1;
    menu.style.display = 'none';
    close.style.display = 'block';
    close.style.color ='white';

});






// function abrir() {
//     const openButton = document.querySelector('.nav__menu');
//     const menu = document.querySelector('.nav__link');
//     const closeMenu = document.querySelector('.nav__menu--close');

//     openButton.addEventListener('click', () => {
//         // menu.classList.add('nav__link--show');
//         menu.style.display = 'block';
       
       

//     });

//     closeMenu.addEventListener('click', () => {
//         // menu.classList.remove('nav__link--show');
//     });



// };

abrir();