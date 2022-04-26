const fbMenu = document.querySelector('.fbmenu');
const boxMenu = document.querySelector('.menu__box');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');

if (fbMenu) {
    // const boxMenu = document.querySelector('.menu__box');
    fbMenu.addEventListener('click', activeBurger);
    boxMenu.addEventListener('click', deactiveBurger);
    
}
const about = document.getElementById('menu');
logo.addEventListener('click', deactiveBurger);
main.addEventListener('click', deactiveBurger);

// about.addEventListener('click', function() {
//     boxMenu.classList.remove('_active')
// });

function activeBurger() {
    document.body.classList.toggle('_lock');     
    fbMenu.classList.toggle('_active');
    boxMenu.classList.toggle('_active');
    document.body.classList.toggle('_active');
    logo.classList.toggle('_active');

}

function deactiveBurger() {
    document.body.classList.remove('_lock'); 
    boxMenu.classList.remove('_active');
    fbMenu.classList.remove('_active');
    document.body.classList.remove('_active');
    logo.classList.remove('_active');
}

