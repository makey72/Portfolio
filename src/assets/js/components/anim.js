window.addEventListener('DOMContentLoaded', function () {

    if (pageYOffset > 0) {
        showBlock(document.querySelector('#about'));
        showBlock(document.querySelector('#project'));
        showBlock(document.querySelector('#feedback'));
        showBlock(document.querySelector('#reviews'));
    }
    window.addEventListener('scroll', (e) => {
        showBlock(document.querySelector('#about'));
        showBlock(document.querySelector('#project'));
        showBlock(document.querySelector('#feedback'));
        showBlock(document.querySelector('#reviews'));
    })

    function showBlock(block) {
        if (pageYOffset >= block.offsetTop - window.screen.height*0.9) block.classList.add('show');
    }

})

