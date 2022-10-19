


function abrir (){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__menu--close');
   

    openButton.addEventListener('click', () => {
         menu.classList.add('nav__link--show');
         menu.classList.add('.nav__menu--close')
    
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });


    
};

abrir();