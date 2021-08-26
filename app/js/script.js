const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElemens = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
        console.log('Click Hamburger');
        
        if (header.classList.contains('open')){ // Close Hamburger Menu
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElemens.forEach((element) => {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            })
        } else { // Open Hamburger Menu
            body.classList.add('noscroll');
            header.classList.add('open');
            fadeElemens.forEach((element) => {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            })
        } 
    });