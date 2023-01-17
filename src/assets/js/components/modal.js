let btn = document.getElementById('modal-btn'),
    modal = document.querySelector('.modal')

btn.addEventListener('click', () => {
    if (!modal.classList.contains('open')) {
        modal.classList.add('open');
    }
})

document.addEventListener('click', (e) => {
    if (e.target.className === 'modal__overlay' || e.target.className === 'modal__close modal-btn') {
        modal.classList.remove('open');
    }
})