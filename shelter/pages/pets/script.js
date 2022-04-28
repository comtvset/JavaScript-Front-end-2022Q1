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
    introOp.classList.remove('_active');
}

// POPUP

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 500;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function(e){
            const popupName = popupLink.getAttribute('href').replace('#', ''); //убираем # в ссылке
            const currentPopup = document.getElementById(popupName); //получаем сам объект popup
            popupOpen(currentPopup); //вызываем функцию open
            e.preventDefault(); //блокировка дальнейшей работы ссылки
        })
        
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }        
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } 
        else {
            bodyLock();
        }    

    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function(e) {
        if (!e.target.closest('.popup-content')) {
            popupClose(e.target.closest('.popup'));
        }
    });
}
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     if (lockPadding.length>0){
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.getElementsByClassName.paddingRight - lockPaddingValue;
//         }
// }
//     body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    // setTimeout(function () {
    //     if (lockPadding.length>0){
    //         for (let index = 0; index < lockPadding.length; index++) {
    //             const el = lockPadding[index];
    //             el.style.paddingRight = '0px';
    //         }
    // }
    //     body.style.paddingRight = '0px';
        body.classList.remove('lock');
    // }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}