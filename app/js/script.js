const btnHamburger = document.querySelector('#btnHamburger');


btnHamburger.addEventListener('click', () => {
        console.log('Click Hamburger');
        
        if (btnHamburger.classList.contains('open')){
            btnHamburger.classList.remove('open');
        } else {
            btnHamburger.classList.add('open');
        }
    });