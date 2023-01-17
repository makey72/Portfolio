let burgerBtn = document.getElementById('burger-menu'),
    burgerMenu = document.querySelector('.burger-menu__nav');

burgerBtn.addEventListener('click', ()=>{
    if (!burgerMenu.classList.contains('open')) {
        burgerBtn.classList.add('open');
        burgerMenu.classList.add('open');
    } else {
        burgerBtn.classList.remove('open');
        burgerMenu.classList.remove('open');
    }

})